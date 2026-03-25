"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import Circle from "@/public/assets/about/circle.svg"
import Signs from "@/public/assets/about/signs.svg"
import Star from "@/public/assets/about/star.svg"
import Triangle from "@/public/assets/about/triangle.svg"
import ShinThantImage from "@/public/me-5.png"
import type { CMSProfileCard, TechStackKey } from "@/lib/cmsProfiles"
import { resolveRemoteMediaUrl, techStackOptions } from "@/lib/cmsProfiles"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import SplitType from "split-type"

interface AboutSectionProps {
  profile?: CMSProfileCard | null
}

type TechStackItem = {
  label: string
  paths: string[]
}

export default function AboutSection({ profile }: AboutSectionProps) {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])
  const aboutContent = profile?.content?.about
  const showTechStack = aboutContent?.showTechStack ?? true
  const selectedTechStackKeys = showTechStack
    ? aboutContent?.techStackItems?.length
      ? aboutContent.techStackItems
      : defaultTechStackOrder
    : []
  const techStackLabelMap = Object.fromEntries(
    techStackOptions.map((option) => [option.value, option.label])
  ) as Record<TechStackKey, string>
  const techStackItems = selectedTechStackKeys.map((key) => {
    const catalogItem = techStackCatalog[key]
    if (catalogItem) {
      return catalogItem
    }

    const iconPaths = additionalTechStackIconPaths[key]
    if (iconPaths) {
      return {
        label: techStackLabelMap[key] || key,
        paths: iconPaths,
      }
    }

    return createGenericTechStackItem(techStackLabelMap[key] || key)
  })
  const heroImageUrl = resolveRemoteMediaUrl(profile?.content?.hero?.image) || resolveRemoteMediaUrl(profile?.heroImage)
  const aboutImageSrc = heroImageUrl || ShinThantImage
  const aboutTitle = aboutContent?.title || "<title>"
  const aboutBody =
    aboutContent?.body ||
    "<body>"
  const educationLabel = aboutContent?.educationLabel || "Education"
  const educationBody =
    aboutContent?.educationBody || "<education>"
  const stats = aboutContent?.stats?.length
    ? aboutContent.stats
    : [
        { label: "Experiences", value: "3" },
        { label: "Completed Projects", value: "30" },
        { label: "Contributions", value: "30" },
      ]

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    })

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          })

          tl.fromTo(
            q(".image-animation"),
            {
              x: 200,
            },
            {
              x: 0,
            }
          )

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            }
          )

          stats.forEach((stat, index) => {
            const target = statRefs.current[index]
            if (!target) {
              return
            }

            const numericValue = Number.parseFloat(stat.value.replace(/[^\d.-]/g, ""))

            if (Number.isNaN(numericValue)) {
              target.textContent = stat.value
              return
            }

            tl.fromTo(
              target,
              {
                innerText: 0,
              },
              {
                innerText: numericValue,
                duration: 0.5,
                snap: {
                  innerText: 1,
                },
              },
              index === 0 ? 0 : "-=0.3"
            )
          })
        },
      },
    })
  }, [])

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView ? setSection("#about") : setSection("#home")
  }, [aboutSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full bg-panelBg overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        <div className="relative title text-xl md:text-4xl tracking-tight font-medium w-fit text-pageText">
          {aboutTitle}
          <div className="absolute -right-[10px] top-2">
            <Image
              className="w-14 pointer-events-none select-none"
              src={Signs}
              alt="signs"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
          <div className="w-full flex flex-col items-start gap-7 md:gap-9">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="text-animation text-accentColor text-3xl md:text-4xl font-medium">
                  {profile?.displayName || "About me"}
                </div>
              </div>

              <div className="absolute -top-6 -left-8">
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="overflow-hidden">
                <div className="text-pageText text-animation">
                  {aboutBody}
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="text-pageText text-animation">
                  My Educational background.
                </div>
              </div>
              <div className="flex gap-1 flex-col items-start">
                <div className="text-accentColor">{educationLabel}</div>
                <div className="overflow-hidden">
                  <div className="text-pageText text-animation">
                    {educationBody}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
              {stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="flex flex-col items-center font-medium">
                  <div className="text-3xl md:text-4xl text-pageText">
                    <span
                      ref={(node) => {
                        statRefs.current[index] = node
                      }}
                    >
                      {stat.value}
                    </span>{" "}
                    <span className="text-accentColor">+</span>
                  </div>
                  <div className="text-pageText text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center image-animation overflow-visible">
            <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] overflow-visible">
              <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-6 -bottom-6" />
              <Image
                className="absolute z-10 object-contain w-[140%] h-[140%] max-w-none -right-14 -bottom-14 shadow-sm rounded-sm pointer-events-none"
                width={300}
                height={300}
                priority
                alt={profile?.displayName ? `${profile.displayName} profile` : "profile photo"}
                src={aboutImageSrc}
              />

              <div className="absolute hidden lg:block -top-12 -right-12">
                <Image
                  className="pointer-events-auto select-none"
                  width={26}
                  height={26}
                  alt="triangle background"
                  src={Triangle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-14 -right-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={22}
                  height={22}
                  alt="circle background"
                  src={Circle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-16 -left-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={34}
                  height={34}
                  alt="star background"
                  src={Star}
                />
              </div>
            </div>
          </div>
        </div>

        <TechStack items={techStackItems} />
      </div>
    </section>
  )
}

interface TechStackProps {
  items: TechStackItem[]
}

const TechStack = ({ items }: TechStackProps) => {
  if (!items.length) {
    return null
  }

  return (
    <div className="w-full inline-flex gap-20 flex-nowrap lg:overflow-hidden text-pageText">
      <div className="flex items-center gap-20 justify-center animate-infinite-scroll">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="stroke-current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.paths.map((path) => (
                <path key={path} d={path} />
              ))}
            </svg>
            <div className="text-pageText text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-20 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {items.map((item) => (
          <div key={`duplicate-${item.label}`} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="stroke-current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.paths.map((path) => (
                <path key={path} d={path} />
              ))}
            </svg>
            <div className="text-pageText text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const defaultTechStackOrder: TechStackKey[] = [
  'typescript',
  'react',
  'next',
  'javascript',
  'tailwind',
  'graphql',
  'firebase',
]

const techStackCatalog: Partial<Record<TechStackKey, TechStackItem>> = {
  typescript: {
    label: 'TypeScript',
    paths: [
      'M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5',
      'M9 12h4',
      'M11 12v6',
      'M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z',
    ],
  },
  react: {
    label: 'React',
    paths: [
      'M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102',
      'M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102',
      'M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2',
      'M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2',
      'M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896',
      'M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897',
      'M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z',
    ],
  },
  next: {
    label: 'Next',
    paths: ['M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993', 'M15 12v-3'],
  },
  javascript: {
    label: 'JavaScript',
    paths: [
      'M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z',
      'M7.5 8h3v8l-2 -1',
      'M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5',
    ],
  },
  tailwind: {
    label: 'Tailwind',
    paths: [
      'M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z',
    ],
  },
  graphql: {
    label: 'GraphQL',
    paths: [
      'M5.308 7.265l5.385 -3.029',
      'M13.308 4.235l5.384 3.03',
      'M20 9.5v5',
      'M18.693 16.736l-5.385 3.029',
      'M10.692 19.765l-5.384 -3.03',
      'M4 14.5v-5',
      'M12.772 4.786l6.121 10.202',
      'M18.5 16h-13',
      'M5.107 14.988l6.122 -10.201',
      'M12 3.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
      'M12 20.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
      'M4 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
      'M4 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
      'M20 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
      'M20 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
    ],
  },
  firebase: {
    label: 'Firebase',
    paths: [
      'M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01',
      'M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76',
      'M4.57 17.18l10.93 -10.68',
    ],
  },
  nodejs: {
    label: 'Node.js',
    paths: [
      'M9 12h6',
      'M12 9v6',
      'M12 3l8.5 5v10l-8.5 5l-8.5 -5v-10z',
    ],
  },
  mongodb: {
    label: 'MongoDB',
    paths: [
      'M12 3c0 0 -5 5 -5 10.5a5 5 0 0 0 10 0c0 -5.5 -5 -10.5 -5 -10.5z',
      'M12 21v-12',
    ],
  },
  postgresql: {
    label: 'PostgreSQL',
    paths: [
      'M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0',
      'M4 6v12a8 3 0 0 0 16 0v-12',
    ],
  },
  prisma: {
    label: 'Prisma',
    paths: [
      'M5 20l4.5 -16l11.5 11z',
      'M5 20h11.5',
    ],
  },
  trpc: {
    label: 'tRPC',
    paths: [
      'M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
      'M3 14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
      'M7 8v0.01',
      'M7 15v0.01',
    ],
  },
  vue: {
    label: 'Vue',
    paths: [
      'M3 3h4l5 9l5 -9h4l-9 18z',
      'M7 3l5 9l5 -9',
    ],
  },
  svelte: {
    label: 'Svelte',
    paths: [
      'M5 8m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z',
      'M9 8v-2a2 2 0 0 1 4 0v2',
      'M9 16v2a2 2 0 0 0 4 0v-2',
      'M9 12h6',
    ],
  },
  python: {
    label: 'Python',
    paths: [
      'M12 9h-3.5a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 1 0 5h-4.5',
      'M8.5 9v-3.5a3.5 3.5 0 1 1 7 0v3.5',
      'M15.5 15v3.5a3.5 3.5 0 1 1 -7 0v-3.5',
    ],
  },
  docker: {
    label: 'Docker',
    paths: [
      'M5 10h14a1 1 0 0 1 1 1v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4v-2a1 1 0 0 1 1 -1z',
      'M8 10v-3h2v3',
      'M11 10v-3h2v3',
      'M14 10v-3h2v3',
      'M20 8c-.667 -3 -2.5 -4 -3 -4',
    ],
  },
  figma: {
    label: 'Figma',
    paths: [
      'M9 3h6a3 3 0 0 1 0 6h-6a3 3 0 0 1 0 -6z',
      'M9 9h3a3 3 0 0 1 0 6h-3a3 3 0 0 1 0 -6z',
      'M9 15a3 3 0 1 1 6 0a3 3 0 1 1 -6 0z',
      'M15 6a3 3 0 1 1 0 6',
    ],
  },
  framer: {
    label: 'Framer',
    paths: [
      'M6 3h12l-6 9z',
      'M6 12h6l-6 9z',
      'M12 12v9',
    ],
  },
  redux: {
    label: 'Redux',
    paths: [
      'M16.5 5.5a4.5 4.5 0 0 1 2 8',
      'M14.5 19.5a4.5 4.5 0 0 1 -6.5 -4',
      'M7 9.5a4.5 4.5 0 0 1 8.5 -1.5',
      'M16.5 5.5l-2 4.5l4 -1',
      'M9 16l-1.5 4l-3.5 -2.5',
      'M20.5 13.5l-3.5 -2.5l1 4',
    ],
  },
  zustand: {
    label: 'Zustand',
    paths: [
      'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z',
      'M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
      'M12 9v0.01',
    ],
  },
  sass: {
    label: 'Sass',
    paths: [
      'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0',
      'M8 11.5c.667 -1 3.333 -1 4 0s.333 3 0 4c-.667 1 -3 1.5 -4 1',
      'M14 9c1 0 2 1 2 3',
    ],
  },
  threejs: {
    label: 'Three.js',
    paths: [
      'M8 8l4 -5l4 5z',
      'M4 15l4 -7h8l4 7z',
      'M4 15h16',
    ],
  },
  gsap: {
    label: 'GSAP',
    paths: [
      'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z',
      'M12 7v5l3 3',
      'M16 12h-1',
    ],
  },
}

const databaseStackPaths = [
  'M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3',
  'M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6',
  'M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6',
]

const serverStackPaths = [
  'M5 5h14a1 1 0 0 1 1 1v5H4V6a1 1 0 0 1 1 -1z',
  'M4 13h16v5a1 1 0 0 1 -1 1H5a1 1 0 0 1 -1 -1z',
  'M8 8h.01',
  'M8 16h.01',
]

const layersStackPaths = [
  'M12 4l8 4l-8 4l-8-4z',
  'M4 12l8 4l8-4',
  'M4 16l8 4l8-4',
]

const codeStackPaths = [
  'M10 8l-4 4l4 4',
  'M14 8l4 4l-4 4',
  'M11 18l2-12',
]

const deviceStackPaths = [
  'M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2z',
  'M9 18h6',
  'M10 7h4',
]

const cloudStackPaths = [
  'M7 17h9a4 4 0 0 0 .5 -7.97a5 5 0 0 0 -9.5 1.97a3.5 3.5 0 0 0 0 6z',
  'M7 17h9',
  'M11 13h.01',
]

const appStackPaths = [
  'M4 6h16v12H4z',
  'M4 10h16',
  'M8 6v12',
]

const enterpriseStackPaths = [
  'M5 6h14v12H5z',
  'M8 18v-4h3v4',
  'M13 18v-6h3v6',
  'M8 6V4h8v2',
]

const additionalTechStackIconPaths: Partial<Record<TechStackKey, string[]>> = {
  mern: databaseStackPaths,
  mean: databaseStackPaths,
  mevn: databaseStackPaths,
  pern: databaseStackPaths,
  pean: databaseStackPaths,
  pevn: databaseStackPaths,
  lamp: serverStackPaths,
  lemp: serverStackPaths,
  lapp: serverStackPaths,
  wamp: serverStackPaths,
  mamp: serverStackPaths,
  t3stack: layersStackPaths,
  tallstack: layersStackPaths,
  petalstack: layersStackPaths,
  grandstack: layersStackPaths,
  djangoreact: codeStackPaths,
  djangovue: codeStackPaths,
  djangohtmx: codeStackPaths,
  flaskreact: codeStackPaths,
  fastapinext: codeStackPaths,
  laravelvue: codeStackPaths,
  laravelreact: codeStackPaths,
  railshotwire: codeStackPaths,
  railsreact: codeStackPaths,
  springbootangular: codeStackPaths,
  springbootreact: codeStackPaths,
  aspnetcoreblazor: codeStackPaths,
  aspnetcorereact: codeStackPaths,
  aspnetcoreangular: codeStackPaths,
  sveltekitprisma: codeStackPaths,
  nuxtnitro: codeStackPaths,
  solidstartdrizzle: codeStackPaths,
  remixprisma: codeStackPaths,
  astrotailwind: codeStackPaths,
  gatsbygraphql: codeStackPaths,
  redwoodjs: codeStackPaths,
  blitzjs: codeStackPaths,
  meteorjs: codeStackPaths,
  flutterfirebase: deviceStackPaths,
  reactnativeexpo: deviceStackPaths,
  ionicangular: deviceStackPaths,
  nativeios: deviceStackPaths,
  nativeandroid: deviceStackPaths,
  rustleptos: codeStackPaths,
  rustaxyew: codeStackPaths,
  goginreact: codeStackPaths,
  goechohtmx: codeStackPaths,
  clojureluminus: codeStackPaths,
  serverlessstack: cloudStackPaths,
  firebasefullstack: cloudStackPaths,
  supabasefullstack: cloudStackPaths,
  appwritefullstack: cloudStackPaths,
  pocketbasefullstack: cloudStackPaths,
  strapiNext: appStackPaths,
  sanitygatsby: appStackPaths,
  shopifyhydrogenoxygen: appStackPaths,
  wordpressheadless: appStackPaths,
  odoo: enterpriseStackPaths,
  sapfiori: enterpriseStackPaths,
  mainframe: enterpriseStackPaths,
}

const genericTechStackPaths = [
  'M4 5h16v14H4z',
  'M8 9h8v6H8z',
]

function createGenericTechStackItem(label: string): TechStackItem {
  return {
    label,
    paths: genericTechStackPaths,
  }
}
