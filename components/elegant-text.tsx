"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface ElegantTextProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export function ElegantText({ children, className, gradient = true }: ElegantTextProps) {
  return <span className={cn(gradient ? "text-gradient animate-gentle-pulse" : "", className)}>{children}</span>
}

