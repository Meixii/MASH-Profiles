import { NextResponse } from 'next/server'

import { getProfileBySlug } from '@/lib/cmsProfiles'

export async function GET(request: Request) {
  const pathname = new URL(request.url).pathname
  const slug = pathname.split('/').filter(Boolean).at(-1)

  if (!slug) {
    return NextResponse.json({ message: 'Missing profile slug.' }, { status: 400 })
  }

  const { profile, settings } = await getProfileBySlug(slug)

  if (!profile) {
    return NextResponse.json({ message: 'Profile not found.' }, { status: 404 })
  }

  return NextResponse.json({
    profile,
    settings,
  })
}
