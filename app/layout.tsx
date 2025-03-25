import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { SubtleBackground } from "@/components/subtle-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "CS Donation Platform",
  description: "Support innovative computer science student projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gradient-dark">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SubtleBackground />
          <div className="elegant-scrollbar">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'