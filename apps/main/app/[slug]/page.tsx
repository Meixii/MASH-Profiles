import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AboutSection from '@/components/sections/AboutSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import MouseSection from '@/components/sections/MouseSection'
import ProjectSection from '@/components/sections/ProjectSection'
import { getCMSProfileBySlug } from '@/lib/cmsProfiles'
import { buildProfileThemeVars } from '@/lib/themeUtils'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { profile, settings } = await getCMSProfileBySlug(params.slug)

  if (!profile) {
    return {
      description: 'Person not available.',
      title: 'Person not available',
    }
  }

  return {
    description: profile.summary || settings?.selectorDescription || 'CMS-driven person page.',
    title: `${profile.displayName} | QuadKore Profile`,
  }
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string }
}) {
  const { profile } = await getCMSProfileBySlug(params.slug)

  if (!profile) {
    notFound()
  }

  const themeVars = buildProfileThemeVars(profile.themePreset)
  const themeVarsCss = Object.entries(themeVars)
    .map(([key, value]) => `${key}: ${String(value)};`)
    .join(" ")

  return (
    <>
      <style>{`:root { ${themeVarsCss} }`}</style>
      <main id="main" style={themeVars}>
        <MouseSection />
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ProjectSection profile={profile} />
        <BlogSection profile={profile} />
        <ContactSection profile={profile} />
      </main>
    </>
  )
}
