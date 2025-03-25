"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface ElegantCardProps {
  children: React.ReactNode
  className?: string
  accentColor?: string
  hoverEffect?: boolean
}

export function ElegantCard({
  children,
  className,
  accentColor = "rgba(55, 48, 163, 0.3)",
  hoverEffect = true,
}: ElegantCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300 bg-gradient-card subtle-border",
        hoverEffect && "card-hover-effect",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, transparent 100%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}

