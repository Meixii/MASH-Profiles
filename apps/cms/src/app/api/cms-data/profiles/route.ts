import { NextResponse } from 'next/server'

import { getProfileLandingData } from '@/lib/cmsProfiles'

export async function GET() {
  const { profiles, settings } = await getProfileLandingData()

  return NextResponse.json({
    profiles,
    settings,
  })
}
