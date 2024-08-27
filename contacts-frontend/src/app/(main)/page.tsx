import { CallToAction } from '@/components/CallToAction'
import ContactList from '@/components/contact-list'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import VerticalLines from '@/components/vertical-lines'

export default function Home() {
  return (
    <>
      <VerticalLines />
      <ContactList />
    </>
  )
}
