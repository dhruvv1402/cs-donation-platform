"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ElegantText } from "@/components/elegant-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate percentage of mouse position
      const moveX = clientX / innerWidth - 0.5
      const moveY = clientY / innerHeight - 0.5

      // Apply parallax effect to elements with data-depth attribute
      const elements = heroRef.current.querySelectorAll("[data-depth]")
      elements.forEach((el) => {
        const depth = Number.parseFloat((el as HTMLElement).dataset.depth || "0")
        const translateX = moveX * depth * 30
        const translateY = moveY * depth * 30
        ;(el as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={heroRef} className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Fund the Future of <ElegantText>Tech Innovation</ElegantText>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Support computer science students in bringing their innovative project ideas to life through donations
                and sponsorships.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-elegant-indigo hover:bg-elegant-indigo/90 transition-colors">
                <Link href="/projects">
                  Browse Projects <ArrowRight className="ml-2 h-4 w-4 animate-subtle-float" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-elegant-teal text-elegant-teal hover:bg-elegant-teal/10"
              >
                <Link href="/projects/submit">Submit Your Project</Link>
              </Button>
            </div>
          </div>
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-gradient-card subtle-border">
              {/* Subtle animated elements */}
              <div
                data-depth="0.2"
                className="absolute top-20 left-20 w-16 h-16 rounded-full bg-elegant-indigo/10 animate-subtle-float"
              ></div>
              <div
                data-depth="0.4"
                className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-elegant-teal/10 animate-subtle-float [animation-delay:1s]"
              ></div>
              <div
                data-depth="0.3"
                className="absolute top-40 right-40 w-12 h-12 bg-elegant-emerald/10 rounded-lg animate-subtle-rotate"
              ></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="space-y-2 bg-elegant-navy/70 p-6 rounded-lg backdrop-blur-sm">
                  <div className="inline-block rounded-lg bg-elegant-indigo/90 px-3 py-1 text-sm text-white font-medium">
                    Featured Project
                  </div>
                  <h2 className="text-2xl font-bold text-white">AI-Powered Learning Assistant</h2>
                  <p className="text-elegant-highlight">
                    A personalized learning assistant that adapts to student needs using machine learning.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                      className="bg-elegant-teal text-white hover:bg-elegant-teal/90"
                    >
                      <Link href="/projects/ai-learning-assistant">
                        View Project <ArrowRight className="ml-2 h-3 w-3 animate-subtle-float" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-elegant-indigo/5 animate-gentle-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-elegant-teal/5 animate-gentle-pulse [animation-delay:2s]"></div>
      </div>
    </section>
  )
}

