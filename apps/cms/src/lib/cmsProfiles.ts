import config from '@/payload.config'
import { getPayload } from 'payload'

import type { ThemePresetKey } from './themePresets'
import type { TechStackKey } from './techStack'

export type MediaAsset = {
  alt?: string | null
  thumbnailURL?: string | null
  url?: string | null
}

export type SectionStat = {
  label: string
  value: string
}

export type ProjectItem = {
  description: string
  githubUrl?: string | null
  image?: MediaAsset | string | null
  liveUrl?: string | null
  techStack?: string | null
  title: string
}

export type BlogItem = {
  description: string
  image?: MediaAsset | string | null
  link?: string | null
  publishAt?: string | null
  title: string
}

export type ContactLink = {
  href: string
  label: string
}

export type HeroContent = {
  body?: string | null
  ctaHref?: string | null
  ctaLabel?: string | null
  headline?: string | null
  image?: MediaAsset | string | null
  title?: string | null
}

export type AboutContent = {
  body?: string | null
  educationBody?: string | null
  educationLabel?: string | null
  showTechStack?: boolean | null
  techStackItems?: TechStackKey[] | null
  stats?: SectionStat[]
  title?: string | null
}

export type ProjectsContent = {
  body?: string | null
  items?: ProjectItem[]
  title?: string | null
}

export type BlogContent = {
  body?: string | null
  posts?: BlogItem[]
  title?: string | null
}

export type ContactContent = {
  body?: string | null
  links?: ContactLink[]
  title?: string | null
}

export type ProfileContent = {
  about?: AboutContent | null
  blog?: BlogContent | null
  contact?: ContactContent | null
  hero?: HeroContent | null
  projects?: ProjectsContent | null
}

export type SiteSettings = {
  defaultAccentColor: string
  defaultBackgroundColor: string
  defaultTextColor: string
  selectorDescription: string
  selectorTitle: string
  siteName: string
}

export type CMSProfile = {
  accentColor: string
  avatar?: MediaAsset | string | null
  backgroundColor: string
  ctaHref?: string | null
  ctaLabel?: string | null
  displayName: string
  fontFamily: string
  headline?: string | null
  heroImage?: MediaAsset | string | null
  id?: number | string
  isActive?: boolean | null
  order: number
  resumeHref?: string | null
  resumeLabel?: string | null
  role: string
  slug: string
  summary?: string | null
  content?: ProfileContent | null
  themePreset?: ThemePresetKey | null
  textColor: string
}

const DEFAULT_SITE_SETTINGS: SiteSettings = {
  defaultAccentColor: '#05cd77',
  defaultBackgroundColor: '#0f172a',
  defaultTextColor: '#f8fafc',
  selectorDescription:
    'Pick a person to view their custom page, layout details, and theme tokens.',
  selectorTitle: 'Choose a person',
  siteName: 'MASH Profiles',
}

export async function getPayloadClient() {
  const payloadConfig = await config

  return getPayload({ config: payloadConfig })
}

const PAYLOAD_PUBLIC_SERVER_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL?.trim() || ''

function normalizeMediaUrl(url: string) {
  if (!url) {
    return null
  }

  try {
    const parsedUrl = new URL(url)

    if (
      (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') &&
      PAYLOAD_PUBLIC_SERVER_URL
    ) {
      const baseUrl = new URL(PAYLOAD_PUBLIC_SERVER_URL)
      parsedUrl.protocol = baseUrl.protocol
      parsedUrl.hostname = baseUrl.hostname
      parsedUrl.port = baseUrl.port

      return parsedUrl.toString()
    }

    return parsedUrl.toString()
  } catch {
    if (!PAYLOAD_PUBLIC_SERVER_URL) {
      return null
    }

    try {
      return new URL(url, PAYLOAD_PUBLIC_SERVER_URL).toString()
    } catch {
      return null
    }
  }
}

export function resolveMediaUrl(value: unknown) {
  if (typeof value === 'string') {
    return normalizeMediaUrl(value)
  }

  if (!value || typeof value !== 'object') {
    return null
  }

  const asset = value as MediaAsset

  return normalizeMediaUrl(asset.url || asset.thumbnailURL || '')
}

export async function getProfileLandingData() {
  const payload = await getPayloadClient()
  const payloadApi = payload as any

  try {
    const [siteSettings, profilesResult] = await Promise.all([
      payloadApi.findGlobal({ slug: 'site-settings' }).catch(() => null),
      payloadApi.find({
        collection: 'profiles',
        depth: 1,
        limit: 50,
        sort: 'order',
        where: {
          isActive: {
            equals: true,
          },
        },
      }),
    ])

    return {
      profiles: profilesResult.docs as CMSProfile[],
      settings: (siteSettings ?? DEFAULT_SITE_SETTINGS) as SiteSettings,
    }
  } catch {
    return {
      profiles: [],
      settings: DEFAULT_SITE_SETTINGS,
    }
  }
}

export async function getProfileBySlug(slug: string) {
  const payload = await getPayloadClient()
  const payloadApi = payload as any

  try {
    const [siteSettings, profileResult] = await Promise.all([
      payloadApi.findGlobal({ slug: 'site-settings' }).catch(() => null),
      payloadApi.find({
        collection: 'profiles',
        depth: 1,
        limit: 1,
        where: {
          and: [
            {
              slug: {
                equals: slug,
              },
            },
            {
              isActive: {
                equals: true,
              },
            },
          ],
        },
      }),
    ])

    return {
      profile: (profileResult.docs[0] ?? null) as CMSProfile | null,
      settings: (siteSettings ?? DEFAULT_SITE_SETTINGS) as SiteSettings,
    }
  } catch {
    return {
      profile: null,
      settings: DEFAULT_SITE_SETTINGS,
    }
  }
}
