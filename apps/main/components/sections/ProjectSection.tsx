"use client"

import { useEffect, useRef, useState } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import type { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import { resolveRemoteMediaUrl } from "@/lib/cmsProfiles"
import ProjectCard from "../ProjectCard"

interface ProjectSectionProps {
  profile?: CMSProfileCard | null
}

export default function ProjectSection({ profile }: ProjectSectionProps) {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef<HTMLElement>(null)
  const [roughColor, setRoughColor] = useState('oklch(0.596 0.192 147)')

  useEffect(() => {
    if (sectionRef.current) {
      const color = getComputedStyle(sectionRef.current).getPropertyValue('--primary').trim()
      if (color) setRoughColor(color)
    }
  }, [])
  const projectContent = profile?.content?.projects
  const projectTitle = projectContent?.title || ""
  const projectBody = projectContent?.body || ""

  const cmsProjects: ProjectItem[] = (projectContent?.items ?? []).map((item, i) => ({
    id: i,
    title: item.title,
    description: item.description,
    techStacks: item.techStack
      ? item.techStack.split(',').map((s) => s.trim()).filter(Boolean)
      : [],
    imageSrc: typeof item.image === 'string'
      ? item.image
      : resolveRemoteMediaUrl(item.image),
    githubUrl: item.githubUrl ?? null,
    liveUrl: item.liveUrl ?? null,
  }))

  const githubProfileUrl =
    profile?.content?.contact?.links?.find((l) =>
      l.label?.toLowerCase().includes('github')
    )?.href ?? null

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-panelAltBg overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color={roughColor}
            order={1}
            show={isOnScreen}
          >
            {projectTitle ? (
              <div className="text-xl md:text-4xl tracking-tight font-medium w-fit text-accentColor">
                {projectTitle}
              </div>
            ) : null}
          </RoughNotation>
          {projectBody ? (
            <div ref={elementRef} className="overflow-hidden ">
              <div className="qoutes-animation md:w-full text-center font-medium flex flex-col items-center text-panelText">
                {projectBody.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cmsProjects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        {githubProfileUrl ? (
          <div className="font-medium text-panelText">
            Explore more projects in{" "}
            <Link
              href={githubProfileUrl}
              target="_blank"
              aria-label="Explore more in my github profile"
              rel="noopener noreferrer"
              className="text-accentColor navlink"
            >
              my github profile
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export interface ProjectItem {
  id: number | string
  title: string
  description: string
  techStacks: string[]
  imageSrc?: StaticImageData | string | null
  githubUrl?: string | null
  liveUrl?: string | null
}
