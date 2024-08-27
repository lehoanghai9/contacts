import { Contact, CreateContact } from '@/types/contact'
import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export const getContacts = async (): Promise<Contact[]> => {
  const contacts = await axios.get<Contact[]>(apiUrl + '/contacts')
  return contacts.data
}

export const createContact = async (
  _contact: CreateContact,
): Promise<Contact> => {
  var bodyFormData = new FormData()
  bodyFormData.append('name', _contact.name)
  if (_contact?.phone || _contact?.phone === '') {
    bodyFormData.append('phone', _contact?.phone)
  }
  if (_contact?.email || _contact?.email === '') {
    bodyFormData.append('email', _contact?.email)
  }
  if (_contact?.picture) {
    bodyFormData.append('picture', _contact?.picture)
  }
  const contact = await axios.post<Contact>(
    apiUrl + '/contacts',
    bodyFormData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )

  return contact.data
}

export const editContact = async ({
  _contact,
  pictureChanged,
}: {
  _contact: Contact
  pictureChanged: boolean
}): Promise<Contact> => {
  var bodyFormData = new FormData()
  bodyFormData.append('name', _contact.name)
  if (_contact?.phone || _contact?.phone === '') {
    bodyFormData.append('phone', _contact?.phone)
  }
  if (_contact?.email || _contact?.email === '') {
    bodyFormData.append('email', _contact?.email)
  }
  if (_contact?.picture) {
    bodyFormData.append('picture', _contact?.picture)
  }
  if (pictureChanged) {
    bodyFormData.append('pictureState', 'changed')
  }

  const contact = await axios.put<Contact>(
    apiUrl + `/contacts/${_contact.id}`,
    bodyFormData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )
  return contact.data
}
export const deleteContact = async (id: string): Promise<boolean> => {
  const contact = await axios.delete<Contact>(apiUrl + `/contacts/${id}`)
  return contact.status === 200
}
