"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample updates data
const updates = [
  {
    id: 1,
    title: "Project Kickoff",
    date: "March 15, 2023",
    content:
      "We're excited to announce the official kickoff of our project! Thanks to everyone who has supported us so far. We've started working on the initial prototype and will share progress updates soon.",
    projectId: "ai-learning-assistant",
  },
  {
    id: 2,
    title: "First Prototype Completed",
    date: "April 2, 2023",
    content:
      "We've completed our first prototype! The initial version can understand basic questions and provide relevant educational resources. We're now working on improving the natural language processing capabilities and expanding the knowledge base.",
    projectId: "ai-learning-assistant",
  },
  {
    id: 3,
    title: "Partnership with University Library",
    date: "April 18, 2023",
    content:
      "We're thrilled to announce a partnership with our university library. This collaboration will give our AI assistant access to a vast collection of educational resources, significantly enhancing its capabilities. We're grateful for this opportunity and excited about the possibilities it opens up.",
    projectId: "ai-learning-assistant",
  },
  {
    id: 4,
    title: "Initial Testing Phase",
    date: "March 20, 2023",
    content:
      "We've successfully implemented the blockchain architecture and are now entering the initial testing phase. Our focus is on ensuring security and transparency in the voting process.",
    projectId: "blockchain-voting",
  },
  {
    id: 5,
    title: "Sensor Deployment",
    date: "March 25, 2023",
    content:
      "We've deployed the first batch of IoT sensors across three campus buildings. Initial data collection has begun, and we're working on calibrating the sensors for optimal performance.",
    projectId: "eco-smart-campus",
  },
]

export function ProjectUpdates({ projectId, projectColor }: { projectId: string; projectColor: string }) {
  const [expandedUpdates, setExpandedUpdates] = useState<number[]>([])
  const [visibleUpdates, setVisibleUpdates] = useState<number[]>([])
  const updateRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const projectUpdates = updates.filter((update) => update.projectId === projectId)

  const toggleUpdate = (updateId: number) => {
    if (expandedUpdates.includes(updateId)) {
      setExpandedUpdates(expandedUpdates.filter((id) => id !== updateId))
    } else {
      setExpandedUpdates([...expandedUpdates, updateId])
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-update-id"))
            if (id && !visibleUpdates.includes(id)) {
              setVisibleUpdates((prev) => [...prev, id])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    projectUpdates.forEach((update) => {
      const ref = updateRefs.current.get(update.id)
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [projectUpdates, visibleUpdates])

  if (projectUpdates.length === 0) {
    return (
      <div className="mt-4 text-center py-8">
        <p className="text-muted-foreground">No updates yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="mt-4 space-y-4">
      {projectUpdates.map((update, index) => (
        <div
          key={update.id}
          ref={(el) => {
            if (el) updateRefs.current.set(update.id, el)
          }}
          data-update-id={update.id}
          className={`transition-all duration-1000 ${
            visibleUpdates.includes(update.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <Card className="overflow-hidden transition-transform hover:shadow-md">
            <CardHeader className="pb-2" style={{ backgroundColor: `${projectColor}10` }}>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle style={{ color: projectColor }}>{update.title}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Calendar className="mr-1 h-3 w-3" style={{ color: projectColor }} />
                    {update.date}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <div className={expandedUpdates.includes(update.id) ? "" : "line-clamp-3"}>{update.content}</div>
              {update.content.length > 150 && (
                <Button
                  variant="link"
                  size="sm"
                  className="mt-2 h-auto p-0"
                  style={{ color: projectColor }}
                  onClick={() => toggleUpdate(update.id)}
                >
                  {expandedUpdates.includes(update.id) ? "Read less" : "Read more"}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

