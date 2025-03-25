import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectList } from "@/components/project-list"
import { ProjectFilters } from "@/components/project-filters"

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Browse Projects</h1>
          <p className="text-muted-foreground">Discover and support innovative computer science student projects</p>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search projects..." className="w-full md:w-[300px]" />
          <Button>Search</Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <div className="hidden md:block">
          <ProjectFilters />
        </div>
        <div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">Newest</TabsTrigger>
              <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ProjectList />
            </TabsContent>
            <TabsContent value="trending">
              <ProjectList />
            </TabsContent>
            <TabsContent value="new">
              <ProjectList />
            </TabsContent>
            <TabsContent value="ending">
              <ProjectList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

