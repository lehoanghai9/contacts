export type Contact = {
  id: string
  name: string
  picture?: string
  phone?: string
  email?: string
}

export type CreateContact = {
  name: string
  picture?: string
  phone?: string
  email?: string
}
