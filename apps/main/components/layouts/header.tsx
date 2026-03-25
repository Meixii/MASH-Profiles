"use client"

import { useEffect, useRef } from "react"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import navlinks from "@/lib/navConfig"
import { cn } from "@/lib/utils"
import { useSectionStore } from "@/store/section"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ResumeBtn from "../ResumeBtn"
import ThemeSwitch from "../ThemeSwitch"
import MobileNav from "./MobileNav"

interface HeaderProps {
  profiles?: CMSProfileCard[] | null
}

export default function Header({ profiles }: HeaderProps) {
  const headerRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 2.2, ease: "Power0.easeNone" }
    )
  }, [])

  const { section } = useSectionStore()
  const currentSlug = pathname.split('/').filter(Boolean).at(-1)
  const activeProfile = currentSlug
    ? profiles?.find((profile) => profile.slug === currentSlug) ?? null
    : null

  return (
    <header
      ref={headerRef}
      className="fixed z-[100] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]"
    >
      <div className="w-full h-auto bg-panelBg shadow-sm min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl">
              <span
                className={cn(
                  "text-pageText hover:text-accentColor cursor-pointer",
                  section === "#project" && "text-panelText"
                )}
              > 
                quadkore
              </span>
              <span className="text-accentColor font-bold">.app</span>
            </Link>
          </div>
          <div className="col-span-4 hidden md:block m-auto">
            <div className="flex gap-[3rem] items-center">
              {navlinks.map((link) => (
                <Link
                  data-active={link.href === section}
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "navlink",
                    section === "#project" && "text-panelText"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-end gap-2 md:gap-10">
            <ResumeBtn profile={activeProfile} />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
