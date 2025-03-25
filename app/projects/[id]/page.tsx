import Link from "next/link"
import { ArrowLeft, Calendar, GraduationCap, Share2, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationForm } from "@/components/donation-form"
import { ProjectUpdates } from "@/components/project-updates"
import { ProjectComments } from "@/components/project-comments"
import { AnimatedGradientText } from "@/components/animated-gradient-text"

// This would normally come from a database
const getProjectData = (id: string) => {
  // Sample project data
  const projects = {
    "ai-learning-assistant": {
      id: "ai-learning-assistant",
      title: "AI-Powered Learning Assistant",
      description: "A personalized learning assistant that adapts to student needs using machine learning.",
      longDescription:
        "Our AI-powered learning assistant uses natural language processing and machine learning to provide personalized educational support to students. The system adapts to individual learning styles, identifies knowledge gaps, and suggests customized learning resources. It can answer questions, provide explanations, and track progress over time. The goal is to make quality education more accessible and personalized for all students.",
      student: "Alex Johnson",
      university: "Stanford University",
      department: "Computer Science",
      raised: 7500,
      goal: 10000,
      backers: 124,
      daysLeft: 15,
      category: "Artificial Intelligence",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Education", "Machine Learning", "NLP", "Student Support"],
      color: "#8A2BE2", // purple
    },
    "blockchain-voting": {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology for student elections.",
      longDescription:
        "Our blockchain-based voting system aims to revolutionize student elections by providing a secure, transparent, and tamper-proof platform. Using distributed ledger technology, we ensure that votes cannot be altered once cast, while maintaining voter anonymity. The system includes identity verification, real-time results, and a complete audit trail. This project addresses concerns about election integrity and aims to increase student participation in campus governance.",
      student: "Maria Garcia",
      university: "MIT",
      department: "Electrical Engineering and Computer Science",
      raised: 4200,
      goal: 8000,
      backers: 87,
      daysLeft: 21,
      category: "Blockchain",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Blockchain", "Security", "Voting Systems", "Campus Governance"],
      color: "#1E90FF", // blue
    },
    "eco-smart-campus": {
      id: "eco-smart-campus",
      title: "Eco-Smart Campus",
      description: "IoT sensors and dashboard to monitor and reduce energy consumption across campus buildings.",
      longDescription:
        "The Eco-Smart Campus project uses a network of IoT sensors to monitor energy usage, water consumption, and waste management across university buildings. Our custom dashboard provides real-time analytics and recommendations for reducing environmental impact. The system identifies inefficiencies, suggests optimizations, and gamifies sustainability efforts to engage the campus community. This project aims to reduce the university's carbon footprint while creating a replicable model for other institutions.",
      student: "David Kim",
      university: "UC Berkeley",
      department: "Environmental Engineering",
      raised: 6800,
      goal: 12000,
      backers: 103,
      daysLeft: 18,
      category: "IoT",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Sustainability", "IoT", "Energy Efficiency", "Smart Campus"],
      color: "#00C853", // green
    },
  }

  return projects[id as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  if (!project) {
    return <div className="container py-10">Project not found</div>
  }

  return (
    <div className="container py-10">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-lg relative group">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="mt-6 animate-fade-in">
            <h1 className="text-3xl font-bold" style={{ color: project.color }}>
              <AnimatedGradientText>{project.title}</AnimatedGradientText>
            </h1>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </div>

          <Tabs defaultValue="about" className="mt-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-4 space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: project.color }}>
                  Project Overview
                </h2>
                <p className="mt-2">{project.longDescription}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold" style={{ color: project.color }}>
                  Project Creator
                </h2>
                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center animate-pulse-slow"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <GraduationCap className="h-8 w-8" style={{ color: project.color }} />
                  </div>
                  <div>
                    <h3 className="font-medium">{project.student}</h3>
                    <p className="text-sm text-muted-foreground">{project.university}</p>
                    <p className="text-sm text-muted-foreground">{project.department}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold" style={{ color: project.color }}>
                  Tags
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full px-3 py-1 text-sm transition-transform hover:scale-105"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="updates">
              <ProjectUpdates projectId={project.id} projectColor={project.color} />
            </TabsContent>
            <TabsContent value="comments">
              <ProjectComments projectId={project.id} projectColor={project.color} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm animate-scale-up">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">${project.raised.toLocaleString()}</span>
                  <span className="text-muted-foreground">of ${project.goal.toLocaleString()}</span>
                </div>
                <Progress
                  value={(project.raised / project.goal) * 100}
                  className="h-2"
                  indicatorClassName="transition-all duration-1000 ease-in-out"
                  style={{ backgroundColor: `${project.color}20` }}
                  indicatorStyle={{ backgroundColor: project.color }}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div
                  className="rounded-lg p-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <div className="text-2xl font-bold" style={{ color: project.color }}>
                    {project.backers}
                  </div>
                  <div className="text-xs text-muted-foreground">Backers</div>
                </div>
                <div
                  className="rounded-lg p-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <div className="text-2xl font-bold" style={{ color: project.color }}>
                    {project.daysLeft}
                  </div>
                  <div className="text-xs text-muted-foreground">Days Left</div>
                </div>
                <div
                  className="rounded-lg p-2 transition-transform hover:scale-105"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <div className="text-2xl font-bold" style={{ color: project.color }}>
                    {Math.round((project.raised / project.goal) * 100)}%
                  </div>
                  <div className="text-xs text-muted-foreground">Funded</div>
                </div>
              </div>

              <DonationForm projectId={project.id} projectColor={project.color} />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-colors"
                  style={{ borderColor: project.color, color: project.color }}
                >
                  <Star className="mr-2 h-4 w-4 animate-pulse-slow" />
                  Follow
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-colors"
                  style={{ borderColor: project.color, color: project.color }}
                >
                  <Share2 className="mr-2 h-4 w-4 animate-pulse-slow" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm animate-scale-up [animation-delay:200ms]">
            <h3 className="font-medium" style={{ color: project.color }}>
              Project Timeline
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 animate-pulse-slow" style={{ color: project.color }} />
                <div>
                  <p className="text-sm font-medium">Project Started</p>
                  <p className="text-xs text-muted-foreground">March 15, 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 animate-pulse-slow" style={{ color: project.color }} />
                <div>
                  <p className="text-sm font-medium">Funding Deadline</p>
                  <p className="text-xs text-muted-foreground">April 30, 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 animate-pulse-slow" style={{ color: project.color }} />
                <div>
                  <p className="text-sm font-medium">Estimated Completion</p>
                  <p className="text-xs text-muted-foreground">December 15, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm animate-scale-up [animation-delay:400ms]">
            <h3 className="font-medium" style={{ color: project.color }}>
              Project Supporters
            </h3>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full ring-2 ring-background animate-pulse-slow"
                    style={{
                      backgroundColor: `${project.color}${20 + i * 10}`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">{project.backers - 5}+ others</span> have donated
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full transition-colors"
              style={{ borderColor: project.color, color: project.color }}
            >
              <Users className="mr-2 h-4 w-4 animate-pulse-slow" />
              View all supporters
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

