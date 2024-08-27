'use client'

import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components/common/dialog'
import { H2 } from '@/components/common/typography'
import ContactForm from '@/components/contact-form'
import { useForm } from 'react-hook-form'
import { contactSchema } from '@/schemas/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContactEditState } from '@/hooks/useContactEditState'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editContact } from '@/lib/data'
import { toast } from 'sonner'

const EditContactDialog = () => {
  const { isModalOpen, setModalIsOpen, viewedContact } = useContactEditState()

  const queryClient = useQueryClient()

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const { mutate: editContactMutation, isPending } = useMutation({
    mutationFn: editContact,
    onSuccess: () => {
      toast.success('Contact successfully edited.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      closeModal()
    },
    onError: () => {
      toast.success('There was an error, try again later.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: viewedContact?.email,
      name: viewedContact?.name,
      phone: viewedContact?.phone,
      picture: viewedContact?.picture ?? undefined,
    },
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    if (!viewedContact) return
    const editableContact = { ...values, id: viewedContact.id }
    if (editableContact.picture instanceof File || editableContact.picture === undefined) {
      editContactMutation({ _contact: editableContact, pictureChanged: true })
    } else {
      editContactMutation({ _contact: editableContact, pictureChanged: false })
    }
  }

  useEffect(() => {
    if (viewedContact?.id) {
      form.setValue('email', viewedContact.email)
      form.setValue('name', viewedContact.name)
      form.setValue('phone', viewedContact.phone)
      form.setValue('picture', viewedContact.picture)
    }
  }, [viewedContact])

  return (
    <Dialog open={isModalOpen}>
      <DialogOverlay onClick={closeModal} />
      <DialogContent
        className="sm:max-w-md"
        aria-describedby="edit-contact-dialog"
      >
        <DialogHeader>
          <DialogTitle className="sr-only">Edit contact</DialogTitle>
          <H2>Edit contact</H2>
        </DialogHeader>
        <ContactForm
          form={form}
          onSubmit={onSubmit}
          onCancel={closeModal}
          firstImage={viewedContact?.picture}
          loading={isPending}
        />
      </DialogContent>
    </Dialog>
  )
}

export default EditContactDialog
