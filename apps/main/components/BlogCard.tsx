import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowRight, Edit } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import type { BlogCardItem } from "./sections/BlogSection"

interface Props {
  item: BlogCardItem
}

export default function BlogCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const blogHref = item.link && item.link !== "#" ? item.link : null

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
      {
        y: "100%",
      },
      {
        y: 0,
        ease: "power1.inOut",
      }
    )
  }, [])

  return blogHref ? (
    <Link
      href={blogHref}
      target="_blank"
      aria-label={item.title}
      rel="noopener noreferrer"
      className="w-full overflow-hidden"
    >
      <div
        ref={cardRef}
        className="w-full group flex justify-between items-center hover:bg-panelAltBg rounded-md transition-colors p-1 pr-0 md:pr-4"
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <Image
            priority
            width={140}
            height={120}
            className="h-full md:h-full bg-contain w-full md:w-[200px] transition-all group-hover:contrast-125 rounded-md"
            src={item.image}
            alt={item.title}
          />
          <div className="flex w-full md:w-3/5 flex-col items-start gap-2">
            <div className="text-panelText">{item.title}</div>
            <div className="flex items-center gap-2">
              <Edit size={16} color="currentColor" />
              <div className="text-accentColor text-sm">{item.publishAt}</div>
            </div>
            <div className="text-panelTextMuted text-sm">{item.description}</div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-start gap-2">
          <div className="w-7 group-hover:scale-110 transition-transform -rotate-45 h-7 rounded-full bg-accentColor flex justify-center items-center">
            <ArrowRight color="currentColor" size={14} />
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="w-full overflow-hidden">
      <div
        ref={cardRef}
        className="w-full group flex justify-between items-center rounded-md transition-colors p-1 pr-0 md:pr-4"
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <Image
            priority
            width={140}
            height={120}
            className="h-full md:h-full bg-contain w-full md:w-[200px] transition-all group-hover:contrast-125 rounded-md"
            src={item.image}
            alt={item.title}
          />
          <div className="flex w-full md:w-3/5 flex-col items-start gap-2">
            <div className="text-panelText">{item.title}</div>
            <div className="flex items-center gap-2">
              <Edit size={16} color="currentColor" />
              <div className="text-accentColor text-sm">{item.publishAt}</div>
            </div>
            <div className="text-panelTextMuted text-sm">{item.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
