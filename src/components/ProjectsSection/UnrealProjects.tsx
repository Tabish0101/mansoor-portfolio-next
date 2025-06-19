import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application built with Next.js and Supabase. Real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts using OpenWeather API.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for social media metrics with data visualization, automated reporting, and multi-platform integration.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "Django", "D3.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking app with workout plans, progress tracking, and social features built with React Native.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 6,
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool using OpenAI API with custom templates, batch processing, and content optimization.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["OpenAI", "Next.js", "Prisma", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild size="sm" className="flex-1">
                  <Link href={project.liveUrl}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={project.githubUrl}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
