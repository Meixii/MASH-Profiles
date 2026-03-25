import { useEffect, useRef } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import Link from "next/link"

interface HeroContentProps {
  profile?: CMSProfileCard | null
}

export default function HeroContent({ profile }: HeroContentProps) {
  const sectionRef = useRef(null)
  const q = gsap.utils.selector(sectionRef)
  const heroContent = profile?.content?.hero
  const displayName = heroContent?.title || profile?.displayName || ""
  const role = profile?.role || ""
  const summary = heroContent?.body || profile?.summary || ""
  const bio = heroContent?.headline || ""
  const ctaHref = heroContent?.ctaHref || null
  const ctaLabel = heroContent?.ctaLabel || ""

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const textAnimationTimeline = gsap.timeline({
      defaults: { stagger: 0.2, duration: 0.3 },
    })

    textAnimationTimeline.fromTo(
      q(".text-animation"),
      {
        y: 100,
      },
      {
        y: 0,
        delay: 2.2,
      }
    )
    textAnimationTimeline.fromTo(
      ".bio-animation ",
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "back",
        duration: 0.3,
      }
    )
  }, [q])

  return (
    <div
      ref={sectionRef}
      className="absolute max-w-[55rem] m-auto w-full top-[20%] md:top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/2 flex flex-col gap-4 justify-center items-center"
    >
      <div className="overflow-hidden">
        {displayName ? (
          <div className="text-animation inline-block text-pageText leading-none text-4xl md:text-6xl font-semibold">
            {displayName}
          </div>
        ) : null}
      </div>

      <div className="overflow-hidden">
        {role ? (
          <div className="text-animation text-2xl md:text-4xl font-semibold">
            <span className="inline-block text-pageText bg-clip-text">
              A
            </span>{" "}
            <span className="text-accentColor">{role}</span>
          </div>
        ) : null}
      </div>

      {summary ? (
        <div className="w-[300px] md:w-[370px] relative z-30 text-center text-sm text-pageTextMuted">
          {summary}
        </div>
      ) : null}

      {bio ? (
        <div className="bio-animation text-pageText inline-block text-md md:text-lg">
          {bio}
        </div>
      ) : null}

      {role ? (
        <div className="flex flex-wrap justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-pageTextMuted">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{role}</span>
        </div>
      ) : null}

      {ctaHref ? (
        <Link
          href={ctaHref}
          aria-label={ctaLabel || "Contact Me"}
          className="contact_me_btn px-4 py-[6px] shadow-md mt-10 md:mt-3 group flex items-center gap-2"
        >
          <div className="relative z-[3] text-sm text-themeAccentForeground">{ctaLabel || "Contact Me"}</div>
          <div className="sr-only">{ctaLabel || "Contact Me"}</div>
          <div className="contact_me_btn_overlay group-hover:opacity-100" />
          <div className="relative group overflow-hidden w-4 z-[3]">
            <div className="flex group-hover:animate-animate-frame-contact-me-btn-icon translate-x-[-100%]">
              <ArrowRightIcon className="text-themeAccentForeground flex-none relative z-[3]" />
              <ArrowRightIcon className="text-themeAccentForeground flex-none relative z-[3]" />
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  )
}
