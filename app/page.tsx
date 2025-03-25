import Link from "next/link"
import { ArrowRight, Code, Coins, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProjects from "@/components/featured-projects"
import { HeroSection } from "@/components/hero-section"
import { ElegantText } from "@/components/elegant-text"
import { ElegantCard } from "@/components/elegant-card"
import { ElegantCounter } from "@/components/elegant-counter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-fade-in">
            Empowering the next generation of <ElegantText>tech innovators</ElegantText>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-in [animation-delay:200ms]">
            Our platform connects talented computer science students with donors who want to support innovation and
            education.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
          <div className="animate-slide-up [animation-delay:100ms]">
            <ElegantCard accentColor="rgba(55, 48, 163, 0.3)">
              <Card className="flex flex-col items-center justify-between p-2 h-full border-t border-elegant-indigo/30 bg-transparent">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-elegant-indigo/10 mb-2">
                    <Lightbulb className="h-6 w-6 text-elegant-indigo animate-gentle-pulse" />
                  </div>
                  <CardTitle>Project Submissions</CardTitle>
                  <CardDescription>
                    Students can submit project proposals with descriptions, goals, and funding needs
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-elegant-indigo hover:text-elegant-indigo/80 hover:bg-elegant-indigo/10"
                    asChild
                  >
                    <Link href="/projects/submit">
                      Submit a project <ArrowRight className="h-4 w-4 animate-subtle-float" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ElegantCard>
          </div>

          <div className="animate-slide-up [animation-delay:200ms]">
            <ElegantCard accentColor="rgba(13, 148, 136, 0.3)">
              <Card className="flex flex-col items-center justify-between p-2 h-full border-t border-elegant-teal/30 bg-transparent">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-elegant-teal/10 mb-2">
                    <Coins className="h-6 w-6 text-elegant-teal animate-gentle-pulse" />
                  </div>
                  <CardTitle>Donor Contributions</CardTitle>
                  <CardDescription>
                    Individuals and companies can browse and donate to projects with one-time or recurring donations
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-elegant-teal hover:text-elegant-teal/80 hover:bg-elegant-teal/10"
                    asChild
                  >
                    <Link href="/projects">
                      Browse projects <ArrowRight className="h-4 w-4 animate-subtle-float" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ElegantCard>
          </div>

          <div className="animate-slide-up [animation-delay:300ms]">
            <ElegantCard accentColor="rgba(4, 120, 87, 0.3)">
              <Card className="flex flex-col items-center justify-between p-2 h-full border-t border-elegant-emerald/30 bg-transparent">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-elegant-emerald/10 mb-2">
                    <Code className="h-6 w-6 text-elegant-emerald animate-gentle-pulse" />
                  </div>
                  <CardTitle>Corporate Sponsorships</CardTitle>
                  <CardDescription>
                    Companies can sponsor projects in exchange for branding or hiring opportunities
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-elegant-emerald hover:text-elegant-emerald/80 hover:bg-elegant-emerald/10"
                    asChild
                  >
                    <Link href="/corporate">
                      Partner with us <ArrowRight className="h-4 w-4 animate-subtle-float" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ElegantCard>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 bg-gradient-accent">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-fade-in">
            Featured Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 animate-fade-in [animation-delay:200ms]">
            Discover innovative projects from talented computer science students
          </p>
        </div>

        <FeaturedProjects />

        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-elegant-indigo hover:bg-elegant-indigo/90 animate-fade-in">
            <Link href="/projects">View all projects</Link>
          </Button>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <div className="mx-auto grid gap-6 md:max-w-[64rem] md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 animate-slide-up">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
              Join our <ElegantText>growing community</ElegantText>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Connect with students, donors, and tech enthusiasts who are passionate about innovation and education.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-elegant-indigo hover:bg-elegant-indigo/90">
                <Link href="/register">Sign up now</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-elegant-teal text-elegant-teal hover:bg-elegant-teal/10"
              >
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-slide-up [animation-delay:200ms]">
            <div className="grid grid-cols-2 gap-4 text-center">
              <ElegantCard accentColor="rgba(55, 48, 163, 0.3)" className="p-6">
                <ElegantCounter end={250} className="text-4xl font-bold text-elegant-indigo" />
                <p className="mt-2 text-elegant-highlight">Projects Funded</p>
              </ElegantCard>
              <ElegantCard accentColor="rgba(13, 148, 136, 0.3)" className="p-6">
                <ElegantCounter end={1500} className="text-4xl font-bold text-elegant-teal" />
                <p className="mt-2 text-elegant-highlight">Students Supported</p>
              </ElegantCard>
              <ElegantCard accentColor="rgba(4, 120, 87, 0.3)" className="p-6">
                <ElegantCounter end={75} prefix="$" suffix="K" className="text-4xl font-bold text-elegant-emerald" />
                <p className="mt-2 text-elegant-highlight">Funds Raised</p>
              </ElegantCard>
              <ElegantCard accentColor="rgba(180, 83, 9, 0.3)" className="p-6">
                <ElegantCounter end={45} className="text-4xl font-bold text-elegant-amber" />
                <p className="mt-2 text-elegant-highlight">Partner Universities</p>
              </ElegantCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

