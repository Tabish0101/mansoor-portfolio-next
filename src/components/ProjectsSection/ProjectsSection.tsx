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
      category: "blender",
      title: "Sonic Visions: A Synthesizer Experience",
      description:
        "A visually engaging render of a synthesizer, showcasing realistic lighting and textures. The video experiments with dynamic camera and object movements to highlight intricate details and create a lifelike viewing experience.",
      image: "https://youtu.be/bTfT-k5Uu5U?si=9EbVSQQU-uW23Yp8",
      tags: ["Blender", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://youtu.be/bTfT-k5Uu5U?si=9EbVSQQU-uW23Yp8",
      githubUrl: "#",
      date: "2024",
    },
    {
      id: 2,
      category: "blender",
      title: "Timeless Elegance: A Timex Watch Showcase",
      description:
        "An ultra-realistic render of a Timex watch brought to life with precise lighting and animation techniques. Enhanced through post-processing and refined with video editing in Premiere Pro, this video captures every detail and movement to achieve a lifelike result.",
      image: "https://youtu.be/1QuyzuslyI0?si=Y-94rLthf5ZGBTSf",
      tags: ["Blender", ],
      liveUrl: "https://youtu.be/1QuyzuslyI0?si=PS59rcx3A6gGh8f0",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 3,
      category: "blender",
      title: "Dark Descent: The Rise of the Evil Cyborg",
      description:
        "A captivating animation featuring a menacing cyborg in a dark, immersive environment. This short film explores the cyborg's sinister presence, enhanced by dynamic movements and atmospheric details that emphasize its evil nature.",
      image: "https://youtu.be/CeaOsPNg5Xc?si=wt4EUrIdeKpSFTfs",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://youtu.be/CeaOsPNg5Xc?si=wt4EUrIdeKpSFTfs",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 4,
      category: "blender",
      title: "Precision at Your Fingertips: The Macropad Animation",
      description:
        "A detailed animation of a macropad, featuring realistic simulations, intricate texturing, and carefully crafted lighting to highlight every component and create an immersive, lifelike visual experience.",
      image: "https://youtu.be/PRYaQCzWc-U?si=iqpCgxYPrKHSWwI5",
      tags: ["Python", "Django", "D3.js", "Redis"],
      liveUrl: "https://youtu.be/PRYaQCzWc-U?si=iqpCgxYPrKHSWwI5",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 5,
      category: "blender",
      title: "Gear Up: Sports Shirts Animation",
      description:
        "A promotional animation showcasing sports shirts, created for a client project. This video utilizes dynamic lighting and smooth animation to highlight the features and benefits of the shirts, engaging viewers and promoting the product effectively.",
      image: "https://youtu.be/28Ytqv3wAk4?si=jCkrmRYQ4xHLpPtD",
      tags: ["OpenAI", "Next.js", "Prisma", "Vercel"],
      liveUrl: "https://youtu.be/28Ytqv3wAk4?si=jCkrmRYQ4xHLpPtD",
      githubUrl: "#",
      date: "2024",
    },
    {
      id: 6,
      category: "blender",
      title: "Stick With It: Wig Glue in Action",
      description:
        "A product animation of a wig glue bottle created for an eCommerce client project. This video pairs smooth motion with precise sound sync, capturing attention with polished video editing for a professional and engaging presentation.",
      image: "https://youtu.be/zaro1N6kUj4?si=nMmHLqjcvFFzjqM7",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/zaro1N6kUj4?si=nMmHLqjcvFFzjqM7",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 7,
      category: "blender",
      title: "Stylish Comfort: Hoodies in Motion",
      description:
        "A sleek eCommerce product animation showcasing hoodies with smooth transitions and polished video editing, designed to highlight fabric textures and details for an engaging online shopping experience.",
      image: "https://youtu.be/NuEJG7l2cpk?si=8AnS8cKyIzseiv4Z",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/NuEJG7l2cpk?si=8AnS8cKyIzseiv4Z",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 8,
      category: "houdini",
      title: "Procedural Dent and Defect Generator in Houdini",
      description:
        "This Houdini algorithm procedurally adds realistic dents and defects to car body 3D models. With parameters to control dent size, defect count, and randomization, designers can create customized variations effortlessly. The algorithm also allows separation of dented and non-dented areas while maintaining the original polygon count, ensuring optimal performance. Perfect for generating realistic damage without compromising model integrity.",
      image: "hhttps://youtu.be/BIE_B7IYIAg?si=RetneVPI9cUaom3G",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/BIE_B7IYIAg?si=RetneVPI9cUaom3G",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 9,
      category: "houdini",
      title: "Procedural Plastic Wrap Effect in Houdini",
      description:
        "This Houdini algorithm procedurally generates a realistic plastic wrapping effect for any 3D mesh. By blending procedural nodes with VEX code, the system creates dynamic and customizable wraps, adding an extra layer of realism to models. Ideal for packaging simulations or enhancing product visualizations, the algorithm ensures versatility across various shapes and forms.",
      image: "https://youtu.be/-KPmcNNLlzg?si=VQo6_sBRXO5IoTkI",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/-KPmcNNLlzg?si=VQo6_sBRXO5IoTkI",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 10,
      category: "unreal",
      title: "UE5 PAINTERLY FX | Custom Colors & Patterns for Any Scene!",
      description:
        "Discover a powerful painterly post-process effect in Unreal Engine! This effect lets you easily assign unique colors and patterns to different objects in your scene, giving your environment a hand-crafted, stylized look. Perfect for games, art projects, or stylized cinematics — and it's flexible enough to work across a variety of environments. Works seamlessly with Unreal Engine 5 Customize colors and patterns per-object Adaptable to any scene.",
      image: "https://youtu.be/uyGPPbyJYjc?si=UJhuUg_W7687S75k",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/uyGPPbyJYjc?si=UJhuUg_W7687S75k",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 11,
      category: "unreal",
      title: "Immersive VR Steering in Unreal Engine",
      description:
        "Explore an innovative VR steering interaction built in Unreal Engine for Oculus Quest. This video demonstrates intuitive controls, immersive mechanics, and seamless VR experiences designed to redefine virtual reality interactions.",
      image: "https://youtu.be/-VjJ3m8aCKo?si=cRGSL9h-zYJOkKJE",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/-VjJ3m8aCKo?si=cRGSL9h-zYJOkKJE",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 12,
      category: "unreal",
      title: "Unique RGB Color Assignment for PCG in Unreal Engine",
      description:
        "This system demonstrates a highly optimized method for assigning unique RGB colors to objects spawned via PCG in Unreal Engine. By leveraging static mesh and post-process materials, the system ensures consistent, noise-free colors unaffected by shadows or lighting. Ideal for sensor-based applications and other technical purposes, this approach is scalable for millions of objects and maintains efficiency by rendering colors visible only at runtime. Watch the video to see this precise and innovative technique in action.",
      image: "https://youtu.be/UU_uxAWQcow?si=x82mv7tbpQq3J5JZ",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/UU_uxAWQcow?si=x82mv7tbpQq3J5JZ",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 13,
      category: "unreal",
      title: "Dynamic Spline Tool for Unreal Engine",
      description:
        "This Unreal Engine editor tool streamlines environment art by dynamically adjusting splines to terrain or static meshes. Perfect for roads, paths, rivers, and similar applications, the tool uses construction scripts, custom events, collisions, and line traces for precise adaptation. An adjustable offset variable allows fine-tuned alignment to any surface, making it a versatile and powerful solution for efficient level design.",
      image: "https://youtu.be/IrfV5KuPmPU?si=oB7cBEFSMeRflrrb",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/IrfV5KuPmPU?si=oB7cBEFSMeRflrrb",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 14,
      category: "unreal",
      title: "Optimized Material for Leaf Variation in Unreal Engine",
      description:
        "This optimized material system brings unique colors and textures to individual instanced static meshes of leaves, adding natural variation for increased realism. Designed with efficiency in mind, it ensures minimal performance impact while achieving vibrant, non-uniform foliage. The video demonstrates a parameter that visualizes the randomization process, showcasing how this method enhances both aesthetics and performance in Unreal Engine.",
      image: "https://youtu.be/24h9wwi_omI?si=lJILh2wv-oPlEnCW",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/24h9wwi_omI?si=lJILh2wv-oPlEnCW",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 15,
      category: "unreal",
      title: "Procedural Shelf Generation with PCG in Unreal Engine",
      description:
        "This PCG graph tool enables designers to create shelves procedurally in Unreal Engine with ease. Featuring multiple adjustable parameters, it offers endless variations to suit any design need. The system integrates seamlessly with splines for precise control and uses blueprints to communicate with the PCG graph, enabling automated randomization and parameter assignment. Watch how this tool empowers efficient and flexible environment creation.",
      image: "https://youtu.be/IrfV5KuPmPU?si=oB7cBEFSMeRflrrb",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/IrfV5KuPmPU?si=oB7cBEFSMeRflrrb",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 16,
      category: "misc",
      title: "Car defect/dent detection in Unreal Engine",
      description:
        "I was a part of the team that worked on this project, my tasks included working on the procedural algorithm for adding defects to the mesh of the car and setting up the environment for generated sythetic data. I worked on the automatic assignment of colors to the meshes for different segmentation purposes",
      image: "https://youtu.be/Tk_Ryqdv8sU?si=2y8q3Nr7YwcwxTNE",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/Tk_Ryqdv8sU?si=2y8q3Nr7YwcwxTNE",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 17,
      category: "misc",
      title: "Logistics Automation",
      description:
        "I was a part of the team that worked on this project, I worked on the logic for blueprints that randomizes the positoin and rotation of the boxes so that we could generate unique images. I also worked on the usb packets using physics sytem of the unreal engine to run simulations and generate realistic unique images.",
      image: "https://youtu.be/lpy_kamKVAY?si=xPz3zGYfA5lX0V5Q",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/lpy_kamKVAY?si=xPz3zGYfA5lX0V5Q",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 18,
      category: "misc",
      title: "Agritculture Data, Advanced object detection",
      description:
        "I was a part of the team that worked on this project, my tasks included working on the plant algorithms to generate variations of the same plant and creating their materials in Unreal Engine, I had to make sure to add a layer of randomization in the meshes, their placement and the different materials applies to them. I also worked on the PCG modules to generate the different orchards and environments for the plants. In the project I implemented Instance Segmentation logic for the plants, this logic makes sure that every plant is given a unique color and is accurately segmented in the Intance Segmentation images.",
      image: "https://youtu.be/AVnpIbbrXg4?si=OcA_0zKHCbDKBKup",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/AVnpIbbrXg4?si=OcA_0zKHCbDKBKup",
      githubUrl: "#",
      date: "2023",
    },
    {
      id: 19,
      category: "misc",
      title: "Legend EHR",
      description:
        "This project was a part of a larger project and a team effort as well. I worked on this with my partner Abudrrafay. It included 3D Model viewer in Unity using a spherical coordinate system and mapped user input actions on touch screen to rotate, zoom and pan functions. After that we made an annotation system using raycasts and an outlining system for the body by essentially dividing the mesh into many pieces. I worked on the 3D modelling and texturing part where i created the 3D models for the characters using Blender and MakeHuman, then dividing all the meshes into different body parts",
      image: "https://youtu.be/nJKJdV3Dvoo?si=9PMadwMabps-F04J",
      tags: ["Vue.js", "Chart.js", "API Integration", "PWA"],
      liveUrl: "https://youtu.be/nJKJdV3Dvoo?si=9PMadwMabps-F04J",
      githubUrl: "#",
      date: "2023",
    },
  ]
  const blenderProjects = projects.filter(project => project.category === "blender");
  const unrealProjects = projects.filter(project => project.category === "unreal");
  const houdiniProjects = projects.filter(project => project.category === "houdini");
  const miscProjects = projects.filter(project => project.category === "misc");

  function getYouTubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }


const ProjectsSection = () => {
  return (
    <div className='bg-purple-200/0 p-0 space-y-4'>
      {/* <h1 className='text-3xl font-bold'>My Projects</h1> */}
      
      <Tabs defaultValue="all" className="">
        {/* Header Section */}
        <div className="border-b place-items-center">
          <div className="container place-items-center mx-auto px-6 py-16 pb-8 space-y-12">
            <div className="max-w-3xl">
              <h1 className="text-[#2C3E50] text-4xl text-center font-bold tracking-tight sm:text-5xl mb-4">My Work</h1>
              <p className="text-lg text-center text-[#2C3E50]/80">
                A collection of projects I've worked on, showcasing different technologies and problem-solving approaches.
              </p>
            </div>
            <TabsList className='mx-auto h-12 bg-[#F4F6F8] p-1.5'>
              <TabsTrigger className='cursor-pointer  text-[#2C3E50]' value="all">All</TabsTrigger>
              <TabsTrigger className='cursor-pointer  text-[#2C3E50]' value="unreal">Unreal Engine</TabsTrigger>
              <TabsTrigger className='cursor-pointer  text-[#2C3E50]' value="houdini">Houdini</TabsTrigger>
              <TabsTrigger className='cursor-pointer  text-[#2C3E50]' value="blender">Blender</TabsTrigger>
              <TabsTrigger className='cursor-pointer  text-[#2C3E50]' value="misc">MISC</TabsTrigger>
            </TabsList>
          </div>

          
        </div>
        

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

        {/* MISC projects tab */}
        <TabsContent value="misc">
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {miscProjects.map((project_data) => {
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
    <Card key={data.id} className="overflow-hidden hover:shadow-lg hover:scale-101 transition-shadow bg-[#F4F6F8] border-[1px] border-[#7F8C8D]/10 pt-0">
      <div className="aspect-video relative overflow-hidden">
        {/* <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        /> */}
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeId(data.image)}`}
            title={data.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl text-[#2C3E50]">{data.title}</CardTitle>
          <div className="flex items-center text-sm text-[#7F8C8D] pt-1">
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
      <CardFooter className="flex gap-2 grow">
        <Button asChild  className="flex-1 bg-[#2C3E50] hover:bg-[#2C3E50]/90 self-end">
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