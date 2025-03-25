"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectSubmissionForm() {
  const [activeTab, setActiveTab] = useState("basic")
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    category: "",
    university: "",
    department: "",
    fundingGoal: "",
    timeline: "",
    image: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Project submitted successfully! It will be reviewed by our team.")
  }

  const nextTab = () => {
    if (activeTab === "basic") setActiveTab("details")
    else if (activeTab === "details") setActiveTab("funding")
    else if (activeTab === "funding") setActiveTab("media")
  }

  const prevTab = () => {
    if (activeTab === "media") setActiveTab("funding")
    else if (activeTab === "funding") setActiveTab("details")
    else if (activeTab === "details") setActiveTab("basic")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter a clear, descriptive title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your project (100-150 characters)"
                  required
                />
                <p className="text-xs text-muted-foreground">This will appear in project cards and search results</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artificial-intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                    <SelectItem value="iot">IoT</SelectItem>
                    <SelectItem value="augmented-reality">Augmented Reality</SelectItem>
                    <SelectItem value="health-tech">Health Tech</SelectItem>
                    <SelectItem value="developer-tools">Developer Tools</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="button" onClick={nextTab}>
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleInputChange}
                  placeholder="Provide a comprehensive description of your project, its goals, and potential impact"
                  className="min-h-[200px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Select value={formData.university} onValueChange={(value) => handleSelectChange("university", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your university" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stanford">Stanford University</SelectItem>
                    <SelectItem value="mit">MIT</SelectItem>
                    <SelectItem value="berkeley">UC Berkeley</SelectItem>
                    <SelectItem value="cmu">Carnegie Mellon</SelectItem>
                    <SelectItem value="washington">University of Washington</SelectItem>
                    <SelectItem value="gatech">Georgia Tech</SelectItem>
                    <SelectItem value="harvard">Harvard University</SelectItem>
                    <SelectItem value="caltech">Caltech</SelectItem>
                    <SelectItem value="princeton">Princeton University</SelectItem>
                    <SelectItem value="cornell">Cornell University</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Electrical Engineering"
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevTab}>
                  Previous
                </Button>
                <Button type="button" variant="outline" onClick={prevTab}>
                  Previous
                </Button>
                <Button type="button" onClick={nextTab}>
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="funding" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="fundingGoal">Funding Goal ($)</Label>
                <Input
                  id="fundingGoal"
                  name="fundingGoal"
                  type="number"
                  value={formData.fundingGoal}
                  onChange={handleInputChange}
                  placeholder="Enter amount in USD"
                  required
                />
                <p className="text-xs text-muted-foreground">Set a realistic goal based on your project needs</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Textarea
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="Describe your project timeline, including major milestones and expected completion date"
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevTab}>
                  Previous
                </Button>
                <Button type="button" onClick={nextTab}>
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="media" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="projectImage">Project Image</Label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-muted-foreground/25 px-6 py-10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                      <label
                        htmlFor="projectImage"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
                      >
                        <span>Upload a file</span>
                        <Input
                          id="projectImage"
                          name="projectImage"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevTab}>
                  Previous
                </Button>
                <Button type="submit">Submit Project</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </form>
  )
}

