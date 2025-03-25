"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ElegantCard } from "@/components/elegant-card"

// Sample project data with elegant colors
const projects = [
  {
    id: "ai-learning-assistant",
    title: "AI-Powered Learning Assistant",
    description: "A personalized learning assistant that adapts to student needs using machine learning.",
    student: "Alex Johnson",
    university: "Stanford University",
    raised: 7500,
    goal: 10000,
    category: "Artificial Intelligence",
    image: "/placeholder.svg?height=200&width=400",
    color: "#3730a3", // indigo
  },
  {
    id: "blockchain-voting",
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology for student elections.",
    student: "Maria Garcia",
    university: "MIT",
    raised: 4200,
    goal: 8000,
    category: "Blockchain",
    image: "/placeholder.svg?height=200&width=400",
    color: "#0d9488", // teal
  },
  {
    id: "eco-smart-campus",
    title: "Eco-Smart Campus",
    description: "IoT sensors and dashboard to monitor and reduce energy consumption across campus buildings.",
    student: "David Kim",
    university: "UC Berkeley",
    raised: 6800,
    goal: 12000,
    category: "IoT",
    image: "/placeholder.svg?height=200&width=400",
    color: "#047857", // emerald
  },
]

export default function FeaturedProjects() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [visibleProjects, setVisibleProjects] = useState<string[]>([])
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-project-id")
            if (id && !visibleProjects.includes(id)) {
              setVisibleProjects((prev) => [...prev, id])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    projects.forEach((project) => {
      const ref = projectRefs.current.get(project.id)
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleProjects])

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            if (el) projectRefs.current.set(project.id, el)
          }}
          data-project-id={project.id}
          className={`transition-all duration-1000 ${
            visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <ElegantCard accentColor={`${project.color}4D`}>
            <Card className="overflow-hidden border-t border-t-elegant-highlight/20 bg-transparent">
              <div className="aspect-video w-full overflow-hidden relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="line-clamp-1" style={{ color: project.color }}>
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.student} • {project.university}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 transition-transform hover:scale-110"
                    onClick={() => toggleFavorite(project.id)}
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors ${favorites.includes(project.id) ? "fill-elegant-rose text-elegant-rose" : ""}`}
                    />
                    <span className="sr-only">Favorite</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">${project.raised.toLocaleString()} raised</span>
                    <span className="text-muted-foreground">${project.goal.toLocaleString()} goal</span>
                  </div>
                  <Progress
                    value={(project.raised / project.goal) * 100}
                    className="h-2"
                    indicatorClassName="transition-all duration-1000 ease-in-out"
                    style={{ backgroundColor: `${project.color}20` }}
                    indicatorStyle={{ backgroundColor: project.color }}
                  />
                </div>
                <div
                  className="inline-block rounded-full px-3 py-1 text-xs"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                >
                  {project.category}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1" style={{ backgroundColor: project.color, color: "white" }}>
                  <Link href={`/projects/${project.id}`}>
                    Support this project <ArrowRight className="h-4 w-4 animate-subtle-float" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </ElegantCard>
        </div>
      ))}
    </div>
  )
}

