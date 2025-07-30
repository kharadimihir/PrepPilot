"use client"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
  const imageRef = useRef(null)

  useEffect(() => {
    const imageElement = imageRef.current
    if (!imageElement) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled")
      } else {
        imageElement.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Hero Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-title leading-tight">
              Your AI Career Coach for
              <br />
              Professional Success
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-3 text-base cursor-pointer font-semibold min-w-[140px]">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper mt-12 md:mt-16 w-full max-w-6xl mx-auto">
            <div ref={imageRef} className="hero-image">
              <Image
                src="/banner.jpeg"
                width={1280}
                height={720}
                alt="PrepPilot Dashboard Preview - AI Career Coaching Interface"
                className="rounded-xl shadow-2xl border w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
