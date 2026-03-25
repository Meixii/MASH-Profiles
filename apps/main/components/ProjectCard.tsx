"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import type { ProjectItem } from "./sections/ProjectSection"

interface Props {
  item: ProjectItem
}

export default function ProjectCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [starCount, setStarCount] = useState<number>(0)

  const githubApiUrl = item.githubUrl
    ? item.githubUrl
        .replace('https://github.com/', 'https://api.github.com/repos/')
        .split('?')[0]
    : null

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      cardRef.current,
      { scale: 0 },
      { scale: 1, ease: "power1.inOut" }
    )
  }, [])

  useEffect(() => {
    let ignore = false
    if (!githubApiUrl) return
    async function fetchData() {
      const response = await fetch(githubApiUrl!)
      const data = await response.json()
      const stargazersCount = data.stargazers_count
      const stargazersUrl = data.stargazers_url

      if (stargazersCount && stargazersUrl && !ignore) {
        setStarCount(stargazersCount)
      }
    }

    fetchData()
    return () => {
      ignore = true
    }
  }, [githubApiUrl])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden col-span-1 w-full flex flex-col shadow-sm border border-themeBorder bg-panelBg rounded-[0.75rem] h-[380px]"
    >
      <div className="relative w-full h-[170px] flex-shrink-0 overflow-hidden">
        {item.imageSrc ? (
          <Image
            priority
            alt={item.title}
            src={item.imageSrc as string}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-panelAltBg flex items-center justify-center">
            <span className="text-6xl font-black text-accentColor opacity-10 select-none uppercase">
              {item.title.slice(0, 2)}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 group relative after:content-[''] after:rounded-full after:absolute after:z-[10] after:w-[32px] after:h-[32px] after:bg-accentColor after:scale-[1] after:bottom-[-24px] after:right-[-24px] after:origin-center after:transition-transform after:duration-500 after:ease-out hover:after:scale-[25] overflow-hidden p-4 flex flex-col items-start justify-between">
        <div className="w-full px-4 absolute left-[50%] -translate-x-1/2 z-20 flex flex-col gap-2 items-start">
          <div className="w-full flex justify-between items-center">
            <div className="text-accentColor group-hover:text-themeAccentForeground font-medium truncate pr-2">
              {item.title}
            </div>
            <div className="flex items-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="scale-[0.7] text-panelText transition-transform group-hover:text-themeAccentForeground group-hover:-rotate-12"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <div className="font-medium text-sm">{starCount}</div>
            </div>
          </div>
          <div className="text-panelText text-sm group-hover:text-themeAccentForeground line-clamp-2">
            {item.description}
          </div>
        </div>

        <div className="w-full px-4 left-[50%] -translate-x-1/2 bottom-[10%] absolute z-20 flex items-center justify-between">
          <div className="flex w-3/4 overflow-x-auto items-center gap-2 scrollbar-none">
            {item.techStacks.map((tech, index) =>
              index % 2 === 0 ? (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm border border-accentColor bg-panelBg rounded-xl text-sm text-panelText flex justify-center items-center whitespace-nowrap"
                >
                  {tech}
                </div>
              ) : (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm bg-accentColor rounded-xl text-sm text-themeAccentForeground flex justify-center items-center whitespace-nowrap"
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                title={`Visit ${item.title}`}
                target="_blank"
                rel="noreferrer"
                className="group-hover:text-themeAccentForeground text-panelText text-sm"
              >
                Visit
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                title={`${item.title} on GitHub`}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="opacity-75 text-panelText group-hover:text-themeAccentForeground"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
