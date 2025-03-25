"use client"

import { useEffect, useState } from "react"

interface Shape {
  id: number
  type: "circle" | "square" | "triangle"
  x: number
  y: number
  size: number
  rotation: number
  color: string
  animationDelay: number
}

export function AnimatedShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const shapeTypes = ["circle", "square", "triangle"] as const
    const colors = [
      "#8A2BE2", // purple
      "#1E90FF", // blue
      "#00C853", // green
      "#FFD600", // yellow
      "#FF4081", // pink
      "#FF6D00", // orange
      "#00BCD4", // teal
    ]

    const newShapes: Shape[] = []
    for (let i = 0; i < 12; i++) {
      newShapes.push({
        id: i,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: Math.random() * 5,
      })
    }
    setShapes(newShapes)
  }, [])

  const renderShape = (shape: Shape) => {
    switch (shape.type) {
      case "circle":
        return (
          <div
            className="absolute rounded-full animate-float opacity-30"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              animationDelay: `${shape.animationDelay}s`,
            }}
          />
        )
      case "square":
        return (
          <div
            className="absolute animate-spin-slow opacity-30"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              transform: `rotate(${shape.rotation}deg)`,
              animationDelay: `${shape.animationDelay}s`,
            }}
          />
        )
      case "triangle":
        return (
          <div
            className="absolute w-0 h-0 animate-bounce-light opacity-30"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              transform: `rotate(${shape.rotation}deg)`,
              animationDelay: `${shape.animationDelay}s`,
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => renderShape(shape))}
    </div>
  )
}

