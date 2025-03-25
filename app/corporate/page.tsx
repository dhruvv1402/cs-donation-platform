import Link from "next/link"
import { ArrowLeft, ArrowRight, Building2, HandshakeIcon, LightbulbIcon, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CorporateContactForm } from "@/components/corporate-contact-form"

export default function CorporatePage() {
  return (
    <div className="container py-10">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </Button>

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Corporate Partnerships</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Connect with talented computer science students and support the next generation of tech innovators
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <LightbulbIcon className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Innovation Access</CardTitle>
            <CardDescription>Get early access to innovative projects and emerging technologies</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Partner with us to discover cutting-edge projects and connect with the brightest minds in computer
              science.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Talent Pipeline</CardTitle>
            <CardDescription>Build relationships with skilled students for future recruitment</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Identify and connect with promising talent early in their careers through project sponsorships and
              mentorship.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Brand Visibility</CardTitle>
            <CardDescription>Showcase your company's commitment to education and innovation</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Gain visibility among tech-savvy students and demonstrate your company's support for educational
              initiatives.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Partnership Opportunities</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium">Project Sponsorship</h3>
                <p className="text-muted-foreground">
                  Directly fund specific student projects aligned with your company's interests or industry focus.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium">Mentorship Program</h3>
                <p className="text-muted-foreground">
                  Connect your engineers and experts with students to provide guidance and industry insights.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium">Technology Access</h3>
                <p className="text-muted-foreground">
                  Provide students with access to your company's tools, APIs, or platforms for their projects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium">Recruitment Events</h3>
                <p className="text-muted-foreground">
                  Host exclusive events to connect with talented students and showcase your company culture.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button asChild>
              <Link href="/corporate/partnerships">
                View Partnership Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Interested in partnering with us? Fill out the form below and our corporate partnerships team will contact
            you.
          </p>

          <CorporateContactForm />
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <HandshakeIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-medium">Ready to make an impact?</h3>
            <p className="text-muted-foreground">
              Join our growing network of corporate partners and help shape the future of technology education.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/corporate/join">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

