'use client'

import React from 'react'
import { Container } from '@/components/Container'
import { Contact } from '@/types/contact'
import Image from 'next/image'
import defaultProfilePic from '@/images/default-pic.png'
import { H3, Message } from '@/components/common/typography'
import NotificationsOffIcon from '@/components/common/icons/notifications-off'
import { Button } from '@/components/common/button'
import HeadphoneIcon from '@/components/common/icons/headphone-icon'
import DotsIcon from '@/components/common/icons/dots-icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/dropdown'
import ChangeIcon from '@/components/common/icons/change-icon'
import HeartIcon from '@/components/common/icons/heart-icon'
import TrashIcon from '@/components/common/icons/trash-icon'
import EditContactDialog from '@/components/edit-contact-dialog'
import { useContactEditState } from '@/hooks/useContactEditState'
import { toast } from 'sonner'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteContact, getContacts } from '@/lib/data'
import { Skeleton } from '@/components/common/skeleton'
import { apiImageUrl } from '@/lib/constants'

const ContactList = () => {
  const {
    isLoading,
    isError,
    data: contacts,
    error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  })

  if (!isLoading && contacts?.length === 0) {
    return (
      <Container className="space-y-4 px-6 py-3">
        <H3>There are no contacts.</H3>
      </Container>
    )
  }

  if (isLoading || !contacts) {
    return (
      <>
        <Container className="space-y-4 px-6 py-3">
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[40px] w-full" />
        </Container>
      </>
    )
  }

  return (
    <>
      <EditContactDialog />
      <Container className="px-6 py-3">
        {contacts.map((contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </Container>
    </>
  )
}

const ContactListItem = ({ contact }: { contact: Contact }) => {
  return (
    <div className="group z-50 flex items-center justify-between py-3">
      <div className="flex items-center gap-4">
        <Image
          src={
            contact.picture ? apiImageUrl + contact.picture : defaultProfilePic
          }
          alt={'Picture of ' + contact.name}
          width={300}
          height={300}
          className="aspect-square w-10 rounded-full object-cover"
        />
        <div>
          <H3>{contact.name}</H3>
          <Message className="text-white/[56%]">{contact.phone}</Message>
        </div>
      </div>
      <div className="flex justify-items-end gap-2 opacity-0 group-hover:opacity-100 ">
        <Button variant="ghost" className="w-[40px]">
          <div>
            <NotificationsOffIcon />
          </div>
        </Button>
        <Button variant="ghost" className="w-[40px]">
          <div>
            <HeadphoneIcon />
          </div>
        </Button>
        <ContactLisItemActions contact={contact} />
      </div>
    </div>
  )
}

const ContactLisItemActions = ({ contact }: { contact: Contact }) => {
  const queryClient = useQueryClient()
  const { setViewedContact, setModalIsOpen } = useContactEditState()

  const { mutate: deleteContactMutation } = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      toast.success('Contact successfully deleted.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
    onError: () => {
      toast.success('There was an error, try again later.')
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  const handleEdit = () => {
    setViewedContact(contact)
    setModalIsOpen(true)
  }

  const handleDelete = () => {
    deleteContactMutation(contact.id)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-[40px]">
          <div>
            <DotsIcon />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[219px]">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleEdit}>
            <ChangeIcon className="mr-3" fill="#FFFFFF8F" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HeartIcon className="mr-3" fill="#FFFFFF8F" />
            <span>Favourite</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>
            <TrashIcon className="mr-3" fill="#FFFFFF8F" />
            <span>Remove</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ContactList
