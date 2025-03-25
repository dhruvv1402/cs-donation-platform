"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-teal animate-pulse-slow",
        className,
      )}
    >
      {children}
    </span>
  )
}

