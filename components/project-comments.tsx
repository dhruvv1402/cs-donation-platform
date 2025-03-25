"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Send, ThumbsUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

// Sample comments data
const comments = [
  {
    id: 1,
    user: "Sarah Chen",
    date: "April 10, 2023",
    content:
      "This project has amazing potential! I'm excited to see how it develops and the impact it will have on student learning.",
    likes: 12,
    projectId: "ai-learning-assistant",
  },
  {
    id: 2,
    user: "Michael Rodriguez",
    date: "April 8, 2023",
    content:
      "As an educator, I can see numerous applications for this technology in the classroom. Have you considered partnerships with K-12 schools?",
    likes: 8,
    projectId: "ai-learning-assistant",
  },
  {
    id: 3,
    user: "Jamie Wilson",
    date: "April 5, 2023",
    content:
      "I'm curious about how you're handling data privacy, especially when working with student information. Could you share more details about your approach?",
    likes: 5,
    projectId: "ai-learning-assistant",
  },
  {
    id: 4,
    user: "Taylor Kim",
    date: "March 22, 2023",
    content: "This is exactly what our campus elections need! Looking forward to seeing it implemented.",
    likes: 7,
    projectId: "blockchain-voting",
  },
  {
    id: 5,
    user: "Alex Johnson",
    date: "March 28, 2023",
    content: "Great initiative for sustainability! Have you considered expanding to monitor water usage as well?",
    likes: 9,
    projectId: "eco-smart-campus",
  },
]

export function ProjectComments({ projectId, projectColor }: { projectId: string; projectColor: string }) {
  const [newComment, setNewComment] = useState("")
  const [likedComments, setLikedComments] = useState<number[]>([])
  const [visibleComments, setVisibleComments] = useState<number[]>([])
  const commentRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const projectComments = comments.filter((comment) => comment.projectId === projectId)

  const handleLike = (commentId: number) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId))
    } else {
      setLikedComments([...likedComments, commentId])
    }
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      alert(`Comment submitted: ${newComment}`)
      setNewComment("")
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-comment-id"))
            if (id && !visibleComments.includes(id)) {
              setVisibleComments((prev) => [...prev, id])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    projectComments.forEach((comment) => {
      const ref = commentRefs.current.get(comment.id)
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [projectComments, visibleComments])

  return (
    <div className="mt-4 space-y-6">
      <form onSubmit={handleSubmitComment} className="space-y-4 animate-fade-in">
        <Textarea
          placeholder="Leave a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px] focus-visible:ring-2 transition-shadow"
          style={{ focusVisible: { ringColor: projectColor } }}
        />
        <Button type="submit" className="gap-2 transition-colors" style={{ backgroundColor: projectColor }}>
          <Send className="h-4 w-4 animate-bounce-light" />
          Post Comment
        </Button>
      </form>

      <Separator />

      {projectComments.length > 0 ? (
        <div className="space-y-6">
          {projectComments.map((comment, index) => (
            <div
              key={comment.id}
              ref={(el) => {
                if (el) commentRefs.current.set(comment.id, el)
              }}
              data-comment-id={comment.id}
              className={`space-y-2 transition-all duration-1000 ${
                visibleComments.includes(comment.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center animate-pulse-slow"
                  style={{ backgroundColor: `${projectColor}20`, animationDelay: `${index * 0.5}s` }}
                >
                  <User className="h-5 w-5" style={{ color: projectColor }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-xs text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 px-2 transition-transform hover:scale-105"
                      onClick={() => handleLike(comment.id)}
                    >
                      <ThumbsUp
                        className={`h-4 w-4 transition-colors ${likedComments.includes(comment.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      <span>{comment.likes + (likedComments.includes(comment.id) ? 1 : 0)}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 transition-colors"
                      style={{ color: projectColor }}
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
        </div>
      )}
    </div>
  )
}

