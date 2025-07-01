import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Mail, Phone, MapPin, Github } from "lucide-react"
import Link from "next/link"

import aboutMeData from '../AboutMe/AboutMeData.json'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-8 md:px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mansoor Khan
            </h3>
            <p className="text-slate-300 mb-6 max-w-md">
              3D Artist & Visual Designer specializing in character modeling, environment design, and architectural
              visualization. Bringing imagination to life through cutting-edge 3D technology.
            </p>
            <div className="flex space-x-4">
              <Link href={aboutMeData.linkedInUrl} className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={aboutMeData.gitHubUrl} className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={aboutMeData.instagramUrl} className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-me" className="text-slate-300 hover:text-white transition-colors">
                  About me
                </Link>
              </li>
              <li>
                <Link href="/my-projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 min-w-4 text-slate-400" />
                <Link href={`mailto:${aboutMeData.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {aboutMeData.email}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{aboutMeData.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300">Get notified about new projects and behind-the-scenes content.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 flex-1 md:w-64"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div> */}

        <Separator className="bg-slate-700 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Mansoor Khan. All rights reserved.</div>
          {/* <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}







// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Camera, Facebook, Twitter, Github } from "lucide-react"

// export default function Footer() {
//   return (
//     <Card className="w-full  mx-auto bg-white shadow-lg">
//         <CardContent className="p-6 space-y-6">
//           {/* Profile Section */}
//           <div className="flex items-center space-x-4">
//             {/* <Avatar className="w-12 h-12 bg-green-500">
//               <AvatarImage src="/placeholder.svg" alt="Mansoor Khan" />
//               <AvatarFallback className="bg-green-500 text-white font-semibold">MK</AvatarFallback>
//             </Avatar> */}
//             <h1 className="text-xl font-semibold text-gray-900">Mansoor Khan</h1>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3">
//             <Button
//               className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full py-2.5 font-medium"
//               size="lg"
//             >
//               Try Mansoor
//             </Button>
//             <Button
//               variant="outline"
//               className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full py-2.5 font-medium bg-transparent"
//               size="lg"
//             >
//               Download CV
//             </Button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex justify-center space-x-4">
//             <Button
//               variant="outline"
//               size="icon"
//               className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
//             >
//               <Camera className="w-4 h-4 text-gray-600" />
//               <span className="sr-only">Camera</span>
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
//             >
//               <Facebook className="w-4 h-4 text-gray-600" />
//               <span className="sr-only">Facebook</span>
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
//             >
//               <Twitter className="w-4 h-4 text-gray-600" />
//               <span className="sr-only">Twitter</span>
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
//             >
//               <Github className="w-4 h-4 text-gray-600" />
//               <span className="sr-only">GitHub</span>
//             </Button>
//           </div>
//         </CardContent>

//         <CardFooter className="px-6 py-4 border-t border-gray-100">
//           <p className="text-xs text-gray-500 text-center w-full">© 2023 Mansoor Khan Inc. All rights reserved.</p>
//         </CardFooter>
//       </Card>
//   )
// }
