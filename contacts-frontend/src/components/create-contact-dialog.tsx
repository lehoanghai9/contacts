'use client'

import { Button } from '@/components/common/button'
import {
  closeDialog,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { H2 } from '@/components/common/typography'
import PlusIcon from '@/components/common/icons/plus-icon'
import { useForm } from 'react-hook-form'
import { contactSchema } from '@/schemas/contact'
import { z } from 'zod'
import ContactForm from '@/components/contact-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createContact } from '@/lib/data'
import { toast } from 'sonner'

const CreateContactDialog = () => {
  const queryClient = useQueryClient()

  const { mutate: createContactMutation, isPending } = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      toast.success('Contact successfully created.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      closeDialog()
    },
    onError: () => {
      toast.success('There was an error, try again later.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: undefined,
      name: undefined,
      phone: undefined,
      picture: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    createContactMutation(values)
  }

  return (
    <Dialog>
      <DialogOverlay />
      <DialogTrigger asChild>
        <Button variant="priority" className="gap-2">
          <PlusIcon />
          Add new
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <H2>Add contact</H2>
          </DialogTitle>
        </DialogHeader>
        <ContactForm form={form} onSubmit={onSubmit} loading={isPending} />
      </DialogContent>
    </Dialog>
  )
}

export default CreateContactDialog
