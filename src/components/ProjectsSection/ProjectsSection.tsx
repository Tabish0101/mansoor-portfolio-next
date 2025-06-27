import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import ProjectsTimeline from './UnrealProjects'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Calendar, ExternalLink, Github } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'


const projects = [
    {
      id: 1,
      category: "unreal",
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
      category: "blender",
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
      category: "houdini",
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
      category: "unreal",
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
      category: "blender",
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
      category: "houdini",
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
  const blenderProjects = projects.filter(project => project.category === "blender");
  const unrealProjects = projects.filter(project => project.category === "unreal");
  const houdiniProjects = projects.filter(project => project.category === "houdini");


const ProjectsSection = () => {
  return (
    <div className='bg-purple-200/0 p-0 space-y-4'>
      {/* <h1 className='text-3xl font-bold'>My Projects</h1> */}
      {/* Header Section */}
      <div className="border-b ">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">My Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of projects I've worked on, showcasing different technologies and problem-solving approaches.
            </p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="all" className="">
        <TabsList className='mx-auto h-10 bg-[#F4F6F8]'>
          <TabsTrigger className='cursor-pointer' value="all">All</TabsTrigger>
          <TabsTrigger className='cursor-pointer' value="unreal">Unreal Engine</TabsTrigger>
          <TabsTrigger className='cursor-pointer' value="houdini">Houdini</TabsTrigger>
          <TabsTrigger className='cursor-pointer' value="blender">Blender</TabsTrigger>
        </TabsList>

        {/* All projects tab */}
        <TabsContent value="all">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project_data) => {
                return(
                  <Project_Card key={project_data.id} data={project_data}/>
                )
              })}
            </div>
          </div>
        </TabsContent>

        {/* Unreal projects tab */}
        <TabsContent value="unreal">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {unrealProjects.map((project_data) => {
                return(
                  <Project_Card key={project_data.id} data={project_data}/>
                )
              })}
            </div>
          </div>
        </TabsContent>

        {/* Houdini projects tab */}
        <TabsContent value="houdini">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {houdiniProjects.map((project_data) => {
                return(
                  <Project_Card key={project_data.id} data={project_data}/>
                )
              })}
            </div>
          </div>
        </TabsContent>

        {/* Blender projects tab */}
        <TabsContent value="blender">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blenderProjects.map((project_data) => {
                return(
                  <Project_Card key={project_data.id} data={project_data}/>
                )
              })}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProjectsSection;

interface propsProject_Card{
  data: {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    date: string;
  }
}
const Project_Card: React.FC<propsProject_Card> = ({data }) => {
  return(
    <Card key={data.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-[#F4F6F8] border-[#7F8C8D]/10">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-[#2C3E50]">{data.title}</CardTitle>
          <div className="flex items-center text-sm text-[#7F8C8D]">
            <Calendar className="w-4 h-4 mr-1" />
            {data.date}
          </div>
        </div>
        <CardDescription className="line-clamp-3 text-[#2C3E50]/80">{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs text-[#2C3E50] rounded-full bg-[#7F8C8D]/15">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild  className="flex-1 bg-[#2C3E50] hover:bg-[#2C3E50]/90">
          <Link href={data.liveUrl}>
            <ExternalLink className="w-4 h-4 mr-2" />
            View on TouTube
          </Link>
        </Button>
        {/* <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={data.githubUrl}>
            <Github className="w-4 h-4 mr-2" />
            Code
          </Link>
        </Button> */}
      </CardFooter>
    </Card>
  )
}