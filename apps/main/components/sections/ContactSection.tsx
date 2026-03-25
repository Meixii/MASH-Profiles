"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"

interface ContactSectionProps {
  profile?: CMSProfileCard | null
}

const fallbackContactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shinn-thant-b90533231" },
  { label: "Twitter", href: "https://x.com/dev_shinnthant" },
  { label: "GitHub", href: "https://github.com/devshinthant" },
]

export default function ContactSection({ profile }: ContactSectionProps) {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const contactContent = profile?.content?.contact
  const contactTitle = contactContent?.title || "Contact"
  const contactBody =
    contactContent?.body ||
    "I'm always excited to connect with like-minded professionals"
  const contactLinks = contactContent?.links?.length ? contactContent.links : fallbackContactLinks

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".title-animation"),
            {
              y: "200%",
            },
            {
              y: 0,
            }
          )

          gsap.fromTo(
            q(".end-title"),
            { scale: 0 },
            { scale: 1, ease: "back.inOut" }
          )
        },
      },
    })
  }, [])

  // Set Active Session

  const contactSectionOnView = useScrollActive(sectionRef)

  const { setSection } = useSectionStore()

  useEffect(() => {
    contactSectionOnView && setSection("#contact")
  }, [contactSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="max-h-max bg-panelBg py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-40 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation text-pageText text-lg">
              Want to collaborate?
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="title-animation text-5xl navlink text-accentColor">
              {contactTitle === "Contact" ? "Contact me!" : contactTitle}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact me on ${link.label}`}
                className="rounded-full group hover:border-accentColor flex items-center gap-2 border border-themeBorder px-4 py-[5px] transition-colors hover:bg-panelAltBg"
              >
                <div className="text-xs text-pageText group-hover:scale-105">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center text-pageTextMuted">
              {contactBody}
            </div>
          </div>
          <div className="end-title text-pageText text-md">
            Powered by: QuadKore &copy; 2026
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}
