import { redirect } from 'next/navigation'

export default async function ProfilesSlugRedirect({
  params,
}: {
  params: { slug: string }
}) {
  redirect(`/${params.slug}`)
}
