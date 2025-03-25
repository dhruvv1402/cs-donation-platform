"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    // Only start animation when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    function startAnimation() {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      const step = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp
        const progress = timestamp - startTimeRef.current

        const percentage = Math.min(progress / duration, 1)
        // Use easeOutQuart for smoother animation
        const easing = 1 - Math.pow(1 - percentage, 4)
        setCount(Math.floor(easing * end))

        if (progress < duration) {
          frameRef.current = requestAnimationFrame(step)
        } else {
          setCount(end)
        }
      }

      frameRef.current = requestAnimationFrame(step)
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      observer.disconnect()
    }
  }, [end, duration])

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

