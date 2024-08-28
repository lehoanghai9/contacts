import { Button } from '@/components/common/button'
import { Container } from '@/components/container'
import { Layout } from '@/components/layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <p className="text-sm font-semibold ">404</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight ">
          Page not found
        </h1>
        <p className="mt-2 text-lg ">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/">
          <Button variant="outline" className="mt-8">
            Go back home
          </Button>
        </Link>
      </Container>
    </Layout>
  )
}
