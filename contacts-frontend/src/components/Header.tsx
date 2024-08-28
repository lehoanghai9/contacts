'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/common/button'
import { Container } from '@/components/container'
import { H1 } from '@/components/common/typography'
import CreateContactDialog from '@/components/create-contact-dialog'
import Image from 'next/image'
import SettingsIcon from '@/components/common/icons/settings-icon'
import BackIcon from './common/icons/back-icon'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  return (
    <>
      <header className="bg-dark-1000 mt-[96px] w-screen border-b border-t border-background-600">
        <nav>
          <Container className="relative z-50 flex justify-between py-8">
            <H1>Contacts</H1>
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="mr-2 flex items-center gap-3 sm:gap-6">
                <SettingsIcon className="cursor-pointer" />
                <Image
                  src="https://images.unsplash.com/photo-1543965170-4c01a586684e?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={300}
                  height={300}
                  alt="Profile Picture"
                  className="aspect-square w-6 cursor-pointer rounded-full border-2 object-cover"
                />
              </div>
              <CreateContactDialog />
            </div>
          </Container>
        </nav>
      </header>
    </>
  )
}
