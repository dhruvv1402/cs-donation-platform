"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  color: string
  opacity: number
}

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate random bubbles
    const colors = [
      "rgba(138, 43, 226, 0.2)", // purple
      "rgba(30, 144, 255, 0.2)", // blue
      "rgba(0, 200, 83, 0.2)", // green
      "rgba(255, 214, 0, 0.2)", // yellow
      "rgba(255, 64, 129, 0.2)", // pink
      "rgba(255, 109, 0, 0.2)", // orange
      "rgba(0, 188, 212, 0.2)", // teal
    ]

    const newBubbles: Bubble[] = []
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
      })
    }
    setBubbles(newBubbles)

    // Animate bubbles
    const interval = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => ({
          ...bubble,
          y: bubble.y - bubble.speed,
          // Reset bubble position when it goes off screen
          ...(bubble.y < -10
            ? {
                y: 110,
                x: Math.random() * 100,
                size: Math.random() * 100 + 50,
              }
            : {}),
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            transition: "top 0.5s linear",
          }}
        />
      ))}
    </div>
  )
}

