"use client"

import { useEffect, useRef, useState } from "react"
import Code from "@/public/assets/hero/code.png"
import HeroSpinner from "@/public/assets/hero/hero-spinner.webp"
import Source from "@/public/assets/hero/source.png"
import heroLottieData from "@/public/assets/lottie/hero-lottie.json"
import { gsap } from "gsap"
import { flatten } from "lottie-colorify"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function HeroTool() {
  const firstSpinnerRef = useRef(null)
  const secondSpinnerRef = useRef(null)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const [lottieData, setLottieData] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create a temporary element to compute the actual RGB value of the CSS variable
      const el = document.createElement("div")
      // First try to use accent color, fallback to primary if not defined
      el.style.color = "var(--theme-accent, var(--primary))"
      el.style.display = "none"

      // We must append to #main because the theme variables are injected as inline styles on <main id="main">
      const root = document.getElementById("main") || document.body
      root.appendChild(el)

      const compColor = getComputedStyle(el).color
      root.removeChild(el)

      let rgb: [number, number, number] = [255, 255, 255] // fallback

      // Use canvas for a foolproof color conversion to RGB array
      try {
        const canvas = document.createElement("canvas")
        canvas.width = 1
        canvas.height = 1
        const ctx = canvas.getContext("2d", { willReadFrequently: true })
        if (ctx) {
          ctx.fillStyle = compColor
          ctx.fillRect(0, 0, 1, 1)
          const data = ctx.getImageData(0, 0, 1, 1).data
          rgb = [data[0], data[1], data[2]]
        }
      } catch (err) {
        console.warn("Canvas color extraction failed", err)
        // Fallback regex if canvas is somehow blocked
        const match = compColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
        if (match) {
          rgb = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10),
          ]
        }
      }

      try {
        // Flatten overwrites all colored paths to the selected RGB theme color
        const colorifiedData = flatten(rgb, heroLottieData)
        setLottieData(colorifiedData)
      } catch (e) {
        console.error("Lottie colorify failed", e)
        setLottieData(heroLottieData)
      }
    }
  }, [resolvedTheme, pathname])

  useEffect(() => {
    if (firstSpinnerRef.current && secondSpinnerRef.current) {
      gsap.to([firstSpinnerRef.current], {
        rotation: 70,
        duration: 30,
        repeat: -1,
      })

      gsap.to([secondSpinnerRef.current], {
        rotation: 70,
        duration: 30,
        repeat: -1,
      })
    }
  }, [])

  return (
    <div className="max-w-[75rem] min-h-[5rem] m-auto w-full absolute top-[55%] md:gap-40 xl:gap-0 md:top-[50%] md:-translate-y-1/2 left-0 right-0 flex items-center justify-between">
      {/* Circle */}
      <div className="relative overflow-hidden xl:overflow-visible w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        <div className="absolute hidden xl:block select-none pointer-events-none left-[-10rem] bottom-[3rem] rotate-270 opacity-80 dark:opacity-100">
          {lottieData && <Lottie animationData={lottieData} loop={true} />}
        </div>
        <Image
          ref={firstSpinnerRef}
          className="w-full h-full object-cover select-none pointer-events-none"
          src={HeroSpinner}
          alt="hero-background"
        />
        <div className="w-14 h-14 md:w-20 md:h-20 select-none pointer-events-none absolute z-[1] bg-gradient-to-tl from-themeHeroFrom to-themeHeroTo shadow-md rounded-full flex justify-center items-center">
          <Image
            className="w-4 md:w-6 invert dark:invert-0"
            src={Source}
            alt="hero-background"
          />
        </div>
      </div>
      {/* Circle */}

      {/* Circle */}
      <div className="relative overflow-hidden xl:overflow-visible w-full h-[16rem] md:w-[27rem] md:h-[27rem] flex justify-center items-center">
        <Image
          ref={secondSpinnerRef}
          className="w-full h-full rotate-180 object-cover select-none pointer-events-none"
          src={HeroSpinner}
          alt="hero-background"
        />
        <div className="w-14 h-14 md:w-20 md:h-20 select-none pointer-events-none absolute z-[1] bg-gradient-to-tl from-themeHeroFrom to-themeHeroTo shadow-md rounded-full flex justify-center items-center">
          <Image
            className="w-4 md:w-6 invert dark:invert-0"
            src={Code}
            alt="hero-background"
          />
        </div>
      </div>
      {/* Circle */}
    </div>
  )
}
