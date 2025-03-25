"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function AnimatedCard({ children, className, glowColor = "rgba(138, 43, 226, 0.3)" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-xl opacity-70 transition-opacity"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: "300px",
            height: "300px",
            background: glowColor,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {children}
    </div>
  )
}

