"use client"

import { useEffect, useRef, useState } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import { RoughNotation } from "react-rough-notation"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import { resolveRemoteMediaUrl } from "@/lib/cmsProfiles"
import BlogCard from "../BlogCard"

interface BlogSectionProps {
  profile?: CMSProfileCard | null
}

export interface BlogCardItem {
  id: number | string
  title: string
  description: string
  image?: StaticImageData | string | null
  publishAt: string
  link?: string
}

export default function BlogSection({ profile }: BlogSectionProps) {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef<HTMLElement>(null)
  const [roughColor, setRoughColor] = useState('oklch(0.596 0.192 147)')

  useEffect(() => {
    if (sectionRef.current) {
      const color = getComputedStyle(sectionRef.current).getPropertyValue('--primary').trim()
      if (color) setRoughColor(color)
    }
  }, [])
  const blogContent = profile?.content?.blog
  const blogTitle = blogContent?.title || ""
  const blogBody1 = blogContent?.body || ""
  const blogBody2 = blogContent?.posts?.length ? `Check out ${blogContent.posts.length} recent entries below.` : ""

  const cmsBlogs: BlogCardItem[] = (blogContent?.posts ?? []).map((post, index) => ({
    id: post.title || index,
    title: post.title,
    description: post.description,
    image: typeof post.image === "string" ? post.image : resolveRemoteMediaUrl(post.image),
    publishAt: post.publishAt || "",
    link: post.link || undefined,
  }))

  const displayBlogs = cmsBlogs

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
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView && setSection("#blog")
  }, [aboutSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color={roughColor}
            order={1}
            show={isOnScreen}
          >
            {blogTitle ? (
              <div className="text-xl md:text-4xl tracking-tight font-medium w-fit text-accentColor">
                {blogTitle}
              </div>
            ) : null}
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
            {blogBody1 ? (
              <div className="qoutes-animation mx-auto text-center text-sm text-pageText flex flex-col items-center font-normal">
                {blogBody1}
              </div>
            ) : null}
            {blogBody2 ? (
              <div className="qoutes-animation mx-auto text-center text-sm text-pageText flex flex-col items-center font-normal">
                <div>{blogBody2}</div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
          {displayBlogs.map((blog) => (
            <BlogCard key={blog.id} item={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
