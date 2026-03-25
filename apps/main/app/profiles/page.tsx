import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  description: 'Redirects to the main portfolio page.',
  title: 'Redirecting | Mika',
}

export default async function ProfilesPage() {
  redirect('/')
}
