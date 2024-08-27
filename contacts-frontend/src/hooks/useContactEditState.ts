import { Contact } from '@/types/contact'
import { create } from 'zustand'

interface ContactEditState {
  isModalOpen: boolean
  viewedContact: Contact | null
  setModalIsOpen: (state: boolean) => void
  setViewedContact: (contact: Contact) => void
}

export const useContactEditState = create<ContactEditState>((set) => ({
  isModalOpen: false,
  viewedContact: null,
  setModalIsOpen: (_state) => set(() => ({ isModalOpen: _state })),
  setViewedContact: (_contact) => set({ viewedContact: _contact }),
}))
