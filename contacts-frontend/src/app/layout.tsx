import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { lexendDeca } from '@/styles/fonts'
import Providers from '@/app/providers'

export const metadata: Metadata = {
  title: {
    template: '%s - Contacts',
    default: 'Contacts - Your Favourite Contact Manager.',
  },
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-background-1000 text-text-primary antialiased',
        lexendDeca.className,
      )}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
