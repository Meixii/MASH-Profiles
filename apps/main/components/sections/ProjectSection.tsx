"use client"

import { useEffect, useRef, useState } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import Loopy from "@/public/assets/projects/loopy.png"
import MantineBoards from "@/public/assets/projects/mantine-boards.png"
import MiroClone from "@/public/assets/projects/miro-clone.png"
import MotionScape from "@/public/assets/projects/motion-scape.png"
import PortfolioV2 from "@/public/assets/projects/portfolio-v2.png"
import TheRealHotels from "@/public/assets/projects/therealhotels.png"
import ValentinCarousel from "@/public/assets/projects/valentin-carousel.png"
import VSCode from "@/public/assets/projects/vscode.png"
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
  const projectTitle = projectContent?.title || "Featured Projects"
  const projectBody =
    projectContent?.body ||
    "Good design is obvious. Great design is transparent.\nDesign is not for philosophy, it's for life."

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

  const displayProjects = cmsProjects.length > 0 ? cmsProjects : staticProjects

  const githubProfileUrl =
    profile?.content?.contact?.links?.find((l) =>
      l.label?.toLowerCase().includes('github')
    )?.href ?? 'https://github.com/devshinthant'

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
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit text-accentColor">
              {projectTitle}
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation md:w-full text-center font-medium flex flex-col items-center text-panelText">
              {projectBody.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

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

const staticProjects: ProjectItem[] = [
  {
    id: 1,
    title: "VSCode Portfolio",
    description:
      "My portfolio website in vscode version developed with React and TypeScript.",
    techStacks: ["ReactJS", "TypeScript"],
    imageSrc: VSCode,
    githubUrl: "https://github.com/devshinthant/vscode-portfolio",
    liveUrl: "https://devshinthant-v1.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description:
      "A refined and enhanced showcase of my work, designed to highlight my skills and projects with a sleek and modern interface.",
    techStacks: ["NextJS", "ShadnUI", "GSAP"],
    imageSrc: PortfolioV2,
    githubUrl: "https://github.com/devshinthant/shinthant.dev",
    liveUrl: "https://devshinthant.vercel.app",
  },
  {
    id: 3,
    title: "Mantine Boards",
    description:
      "Responsive Dashboards, perfect for admin dashboards, analytics platforms, or any project that requires a clean, modern interface.",
    techStacks: ["RemixJS", "MantineUI"],
    imageSrc: MantineBoards,
    githubUrl: "https://github.com/devshinthant/mantine-boards",
    liveUrl: "https://mantine-boards.vercel.app",
  },
  {
    id: 4,
    title: "Motion Scape",
    description:
      "Motion Scape is a visually dynamic website dedicated to the art of animations and transitions in web design.",
    techStacks: ["NextJS", "GSAP", "TypeScript"],
    imageSrc: MotionScape,
    githubUrl: "https://github.com/devshinthant/motion-scape",
    liveUrl: "https://motion-gsap.vercel.app",
  },
  {
    id: 5,
    title: "Loopy",
    description:
      "Loopy is a modern video conferencing app designed for seamless virtual meetings with real-time video, audio, and chat features.",
    techStacks: ["ReactJS", "WebRTC", "Socket.io"],
    imageSrc: Loopy,
    githubUrl: "https://github.com/devshinthant/loopy",
    liveUrl: "https://loopy-ashen.vercel.app/",
  },
  {
    id: 6,
    title: "Valentin Carousel",
    description:
      "An animated carousel inspired by Valentin Awwward Winning Website.",
    techStacks: ["ReactJS", "GSAP"],
    imageSrc: ValentinCarousel,
    githubUrl: "https://github.com/devshinthant/valentin-carousel",
    liveUrl: "https://valentin-carousel.vercel.app",
  },
  {
    id: 7,
    title: "TheRealHotels",
    description:
      "A Landing Website Inspired by the awwarded website therealhotels.com.",
    techStacks: ["ReactJS", "GSAP"],
    imageSrc: TheRealHotels,
    githubUrl: "https://github.com/devshinthant/therealhotels",
    liveUrl: "https://therealhotels.vercel.app",
  },
  {
    id: 8,
    title: "Miro Clone",
    description:
      "Enjoy a wide range of brushes, colors, and effects, along with layers, undo/redo functionality, and easy sharing options.",
    techStacks: ["NextJS", "ShadcnUI", "Liveblocks"],
    imageSrc: MiroClone,
    githubUrl: "https://github.com/devshinthant/realtime-miro-clone",
    liveUrl: "https://realtime-miro-clone.vercel.app",
  },
]
