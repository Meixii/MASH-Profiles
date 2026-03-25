import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'

import { getProfileBySlug, resolveMediaUrl } from '@/lib/cmsProfiles'
import { resolveThemeColors } from '@/lib/themePresets'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { profile, settings } = await getProfileBySlug(params.slug)

  if (!profile) {
    return {
      description: 'Person not found.',
      title: 'Person not found',
    }
  }

  return {
    description: profile.summary || settings.selectorDescription,
    title: `${profile.displayName} | ${settings.siteName}`,
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { slug: string }
}) {
  const { profile, settings } = await getProfileBySlug(params.slug)

  if (!profile) {
    notFound()
  }

  const theme = resolveThemeColors(profile, {
    accentColor: settings.defaultAccentColor,
    backgroundColor: settings.defaultBackgroundColor,
    textColor: settings.defaultTextColor,
  })
  const heroUrl = resolveMediaUrl(profile.heroImage) || resolveMediaUrl(profile.avatar)

  return (
    <main
      className="profile-shell"
      style={
        {
          '--profile-accent': theme.accentColor,
          '--profile-bg': theme.backgroundColor,
          '--profile-text': theme.textColor,
        } as CSSProperties
      }
    >
      <section className="profile-shell__hero">
        <div className="profile-shell__hero-copy">
          <Link className="profile-shell__back-link" href="/">
            Back to all people
          </Link>
          <p className="eyebrow">/{profile.slug}</p>
          <h1>{profile.displayName}</h1>
          <p className="lead">{profile.headline || profile.summary || profile.role}</p>

          <div className="profile-shell__meta">
            <span>{profile.role}</span>
            <span>{theme.themePresetLabel}</span>
            <span>{profile.fontFamily}</span>
            <span>{profile.order.toString().padStart(2, '0')}</span>
          </div>
        </div>

        <div className="profile-shell__hero-media">
          {heroUrl ? (
            <img alt={profile.displayName} src={heroUrl} />
          ) : (
            <div className="profile-shell__hero-placeholder">
              {profile.displayName}
            </div>
          )}
        </div>
      </section>

      <section className="profile-shell__sections" aria-label="Person content">
        <article className="profile-shell__panel">
          <p className="panel-label">About</p>
          <h2>Shared layout</h2>
          <p>
            {profile.summary ||
              'This page uses the same layout structure as the other people in the CMS, while the content and theme tokens stay specific to this person.'}
          </p>
        </article>

        <article className="profile-shell__panel">
          <p className="panel-label">Theme preset</p>
          <h2>Custom styling</h2>
          <p>
            Accent: {theme.accentColor} <br />
            Background: {theme.backgroundColor} <br />
            Text: {theme.textColor}
          </p>
        </article>

        <article className="profile-shell__panel">
          <p className="panel-label">Action</p>
          <h2>{profile.ctaLabel || 'Person link'}</h2>
          <p>{profile.ctaHref || '/profiles'}</p>
          {profile.ctaHref ? (
            <Link className="profile-shell__cta" href={profile.ctaHref}>
              {profile.ctaLabel || 'Open person link'}
            </Link>
          ) : null}
        </article>
      </section>
    </main>
  )
}
