import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectSubmissionForm } from "@/components/project-submission-form"

export default function SubmitProjectPage() {
  return (
    <div className="container py-10">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Submit Your Project</h1>
          <p className="mt-2 text-muted-foreground">
            Share your innovative computer science project and get the funding you need
          </p>
        </div>

        <ProjectSubmissionForm />
      </div>
    </div>
  )
}

