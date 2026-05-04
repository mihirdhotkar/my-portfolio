"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, ExternalLink, Download, MessageCircle, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Project = {
  title: string
  videoPath: string
  videoPreview: string
  description: string
  tags: string[]
  aspectRatio: "9/16" | "16/9"
}

export default function Portfolio() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // ── Project Card ──────────────────────────────────────────────────
  const ProjectCard = ({ project, index, isShortForm }: { project: Project; index?: number; isShortForm?: boolean }) => (
    <button 
      onClick={() => openModal(project)} 
      className="w-full text-left"
      onMouseEnter={() => isShortForm && setHoveredIndex(index ?? null)}
      onMouseLeave={() => isShortForm && setHoveredIndex(null)}
    >
      <Card className="bg-transparent hover:bg-transparent transition-colors group h-full cursor-pointer border-none shadow-none">
        <CardContent className="p-0">
          <div
            className="relative w-full overflow-hidden bg-black mb-0"
            style={{ borderRadius: "10px", aspectRatio: project.aspectRatio }}
          >
            <video
              src={project.videoPreview}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-xs font-bold text-white backdrop-blur-sm">
              {project.title}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
                  <path d="M2 1.5l10 7-10 7V1.5z" />
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  )

  // ── Data ──────────────────────────────────────────────────────────
  // aspectRatio: "9/16" for vertical (Reels/Shorts), "16/9" for horizontal
  const shortFormProjects: Project[] = [
    {
      title: "Sound Event",
      videoPath: "/videos/kvsound.mp4",
      videoPreview: "/videos/kvsound.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "TBC Promo Video",
      videoPath: "/videos/tbcpromo.mp4",
      videoPreview: "/videos/tbcpromo.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "Burger bar",
      videoPath: "/videos/burger_bar_main.mp4",
      videoPreview: "/videos/burger_bar_main.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
     {
      title: "Ambika Farm",
      videoPath: "/videos/ambika.mp4",
      videoPreview: "/videos/ambika.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
  {
      title: "Saaz Music Video",
      videoPath: "/videos/shubham-bansuriwala.mp4",
      videoPreview: "/videos/shubham-bansuriwala.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
      {
      title: "UAE Anthem (Yalla Cricket)- Vardhaman",
      videoPath: "/videos/yalla-cricket.mp4",
      videoPreview: "/videos/yalla-cricket.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
          {
      title: "Maha Chai - FICO Model",
      videoPath: "/videos/maha_chai_fico_model.mp4",
      videoPreview: "/videos/maha_chai_fico_model.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
              {
      title: "Sunrise Farm",
      videoPath: "/videos/sunrise_farm.mp4",
      videoPreview: "/videos/sunrise_farm.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
  ]

  const influencerProjects: Project[] = [
    {
      title: "Solar Fuel",
      videoPath: "/videos/solar_fuel.mp4",
      videoPreview: "/videos/solar_fuel.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "Heera Sweets",
      videoPath: "/videos/heerasweets.mp4",
      videoPreview: "/videos/heerasweets.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "Alba Mart",
      videoPath: "/videos/alba_mart.mp4",
      videoPreview: "/videos/alba_mart.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
  ]

  const motionGraphicProjects: Project[] = [
    {
      title: "1",
      videoPath: "/videos/motion1.mp4",
      videoPreview: "/videos/motion1.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "2",
      videoPath: "/videos/motion2.mp4",
      videoPreview: "/videos/motion2.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
    {
      title: "3",
      videoPath: "/videos/motion3.mp4",
      videoPreview: "/videos/motion3.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
        {
      title: "4",
      videoPath: "/videos/motion4.mp4",
      videoPreview: "/videos/motion4.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "9/16",
    },
  ]

  const adVideoProjects: Project[] = [
    {
      title: "The Nukkad Boys - Ad",
      videoPath: "/videos/ad_tbc.mp4",
      videoPreview: "/videos/ad_tbc.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
  ]

  const preWeddingProjects: Project[] = [
    {
      title: "Pre Wedding Video",
      videoPath: "/videos/qwerty.mp4",
      videoPreview: "/videos/qwerty.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },

  ]

  const longFormProjects: Project[] = [
    {
      title: "TBC Abhi Mujhme kahi",
      videoPath: "/videos/tbc-amk.mp4",
      videoPreview: "/videos/tbc-amk.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },

    {
      title: "Saaz Music Video",
      videoPath: "/videos/saaz.mp4",
      videoPreview: "/videos/saaz.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
    {
      title: "WAH MERA INDIA - Vardhaman",
      videoPath: "/videos/wahh-mera-india.mp4",
      videoPreview: "/videos/wahh-mera-india.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
  ]

  const collabProjects: Project[] = [
    {
      title: "Mercedes Project",
      videoPath: "/videos/sl55.mp4",
      videoPreview: "/videos/sl55.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
    {
      title: "Ganpati 2025",
      videoPath: "/videos/ganpati_cinematic.mp4",
      videoPreview: "/videos/ganpati_cinematic.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
    {
      title: "Saaz Music Cinematic",
      videoPath: "/videos/saazcinematics.mp4",
      videoPreview: "/videos/saazcinematics.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
        {
      title: "Halloween Party",
      videoPath: "/videos/halloween_party.mp4",
      videoPreview: "/videos/halloween_party.mp4",
      description: "Add your project description here",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      aspectRatio: "16/9",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-6 md:p-8 backdrop-blur-sm bg-black/20 border-b border-gray-800/50">
        <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          MD
        </div>
        <div className="hidden md:flex items-center space-x-1 ml-16">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.slice(1))}
              className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
        </div>
        <a
          href="/Mihir cv.pdf"
          download="Mihir_Dhotkar_CV.pdf"
          className="px-4 py-2 border border-gray-700 text-white hover:bg-gray-800 bg-transparent hover:border-gray-600 transition-all duration-300 rounded-md inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
      </nav>

      {/* Hero Section */}
      <main id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 mb-4">
                  Available for projects
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
                Mihir
                <br />
                <span className="text-gray-400">Dhotkar</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional video editor & motion graphics designer creating compelling visual stories
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  <a
                    href="https://youtube.com/@thebansuriwalacollective?si=csO0LchNLcXYLjpf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View My Work
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800 bg-transparent">
                  <a href="mailto:mihirdhotkar03@gmail.com" className="flex items-center">
                    Get In Touch
                    <Mail className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <Link
                  href="https://www.instagram.com/mihir_dhotkar/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="mailto:mihirdhotkar03@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
                <Link
                  href="https://wa.me/919309852059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Mihir Dhotkar - Professional Video Editor"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Showreel Video */}
      <section className="relative z-10 w-full py-16 md:py-20 flex justify-center items-center px-4 sm:px-6">
        <div className="w-full max-w-5xl">
          <div
            className="relative w-full overflow-hidden bg-gray-950 border border-gray-800"
            style={{ borderRadius: "12px", aspectRatio: "16 / 9" }}
          >
            <video
              ref={videoRef}
              src="/mihir-edit.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() =>
                openModal({
                  title: "Showreel",
                  videoPath: "/videos/mihir-edit.mp4",
                  videoPreview: "/videos/mihir-edit.mp4",
                  description: "",
                  tags: [],
                  aspectRatio: "16/9",
                })
              }
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 mb-4">
              My Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Visual Stories That Move People</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">The Journey Begins</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My journey into video editing didn’t start by chance—it began back in Class 10, when curiosity first sparked 
                  into passion. While others spent their time casually watching videos, I found myself drawn to what happened 
                  behind the scenes—how cuts, transitions, and sound could completely transform a story.
                  What started as simple experimentation soon turned into a deep fascination. I began exploring editing tools, 
                  learning techniques, and understanding how emotions can be shaped through visuals.
                </p>
                
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-white">What Drives Me</h4>
                <p className="text-gray-300 text-sm">
                  Fast forward to today, that early curiosity has evolved into a professional craft. I now channel that 
                  same passion into creating compelling video content that brings stories, brands, and ideas to life..
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">The Process</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I believe great video content is born from the perfect marriage of storytelling and technical
                  execution. From initial concept to final delivery, every frame is crafted with purpose.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">100+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-white">My Approach</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Story-first creative direction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Technical precision & quality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Collaborative workflow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tools & Software I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="w-full lg:col-span-2 bg-gray-900 border border-gray-700/70 shadow-none hover:bg-gray-800 transition-colors group">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4">
                  <Image src="/prlogo.png" alt="Adobe Premiere Pro" width={48} height={48} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold">Adobe Premiere Pro</span>
              </CardContent>
            </Card>
            <Card className="w-full lg:col-span-2 bg-gray-900 border border-gray-700/70 shadow-none hover:bg-gray-800 transition-colors group">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4">
                  <Image src="/Davinci.png" alt="DaVinci Resolve" width={48} height={48} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold">DaVinci Resolve</span>
              </CardContent>
            </Card>
            <Card className="w-full lg:col-span-2 bg-gray-900 border border-gray-700/70 shadow-none hover:bg-gray-800 transition-colors group">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4">
                  <Image src="/pngwing.png" alt="After Effects" width={48} height={48} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold">After Effects</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>

          {/* Short Form — 4-column grid so vertical cards aren't too tall */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Short Form Videos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {shortFormProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Influencer Videos — short form type */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Influencer Videos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {influencerProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Motion Graphic Videos — short form type */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Motion Graphic Videos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {motionGraphicProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Ad Videos — horizontal format */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Ad Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adVideoProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Pre Wedding Videos — horizontal format */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Pre Wedding Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preWeddingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Long Form — standard 3-column */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Music Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {longFormProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Cinematic Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Cinematic Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collabProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>  
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-8">Ready to bring your vision to life through compelling video content.</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            <a href="mailto:mihirdhotkar03@gmail.com" className="flex items-center">
              Start a Conversation
              <Mail className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">© 2024 Mihir Dhotkar. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link href="https://www.instagram.com/mihir_dhotkar/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="mailto:mihirdhotkar03@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/919309852059" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>

      {/* ── Video Modal ───────────────────────────────────────────── */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full"
            style={{
              // Vertical videos: cap width to phone-width. Horizontal: wide modal.
              maxWidth: selectedProject.aspectRatio === "9/16" ? "380px" : "900px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal video — same aspect ratio as preview card */}
            <div
              className="relative w-full overflow-hidden bg-black border border-gray-800"
              style={{ borderRadius: "12px", aspectRatio: selectedProject.aspectRatio }}
            >
              <video
                src={selectedProject.videoPath}
                autoPlay
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            {selectedProject.title && selectedProject.title !== "Showreel" && (
              <p className="text-center text-sm text-gray-400 mt-3">{selectedProject.title}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}