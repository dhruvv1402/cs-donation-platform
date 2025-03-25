"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

const categories = [
  "Artificial Intelligence",
  "Blockchain",
  "IoT",
  "Augmented Reality",
  "Health Tech",
  "Developer Tools",
  "Cybersecurity",
  "Data Science",
  "Mobile Apps",
  "Web Development",
]

const universities = [
  "Stanford University",
  "MIT",
  "UC Berkeley",
  "Carnegie Mellon",
  "University of Washington",
  "Georgia Tech",
  "Harvard University",
  "Caltech",
  "Princeton University",
  "Cornell University",
]

export function ProjectFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [fundingRange, setFundingRange] = useState([0, 20000])

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const toggleUniversity = (university: string) => {
    if (selectedUniversities.includes(university)) {
      setSelectedUniversities(selectedUniversities.filter((u) => u !== university))
    } else {
      setSelectedUniversities([...selectedUniversities, university])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-medium">Filters</h3>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Clear all filters
        </Button>
      </div>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Categories</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2" onClick={() => toggleCategory(category)}>
                <div
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded border border-primary",
                    selectedCategories.includes(category) ? "bg-primary text-primary-foreground" : "bg-background",
                  )}
                >
                  {selectedCategories.includes(category) && <Check className="h-3 w-3" />}
                </div>
                <span className="text-sm">{category}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Universities</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {universities.map((university) => (
              <div key={university} className="flex items-center gap-2" onClick={() => toggleUniversity(university)}>
                <div
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded border border-primary",
                    selectedUniversities.includes(university) ? "bg-primary text-primary-foreground" : "bg-background",
                  )}
                >
                  {selectedUniversities.includes(university) && <Check className="h-3 w-3" />}
                </div>
                <span className="text-sm">{university}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Funding Goal</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-4">
            <Slider
              defaultValue={[0, 20000]}
              max={20000}
              step={1000}
              value={fundingRange}
              onValueChange={setFundingRange}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">${fundingRange[0].toLocaleString()}</span>
              <span className="text-sm">${fundingRange[1].toLocaleString()}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}

