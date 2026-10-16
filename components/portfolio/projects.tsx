"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ExternalLink,
  Github,
  Globe,
  Layers,
  ShieldCheck,
  Building,
  Sparkles,
} from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend">("all")

  const projects: Project[] = [
    {
      id: "internnova",
      title: "InternNova",
      category: "Full Stack Platform",
      description:
        "A placement and internship platform where verified companies can post opportunities and students can apply through role-based dashboards.",
      image: "/InternNova.png",
      technologies: ["AngularJS", "Node.js", "MongoDB", "Firebase"],
      githubUrl: "https://github.com/harshithapoojari123/InternNova",
      liveUrl: undefined, // No live deployment URL exists; preserve accuracy
      featured: true,
    },
    {
      id: "hotel-management",
      title: "Hotel Management System",
      category: "Web Application",
      description:
        "A hotel management application featuring room booking, customer management, and an administrative dashboard.",
      image: "/hotel.png",
      technologies: ["Angular", "TypeScript", "CSS"],
      githubUrl: "https://github.com/harshithapoojari123/LockTrip",
      liveUrl: "https://elegant-squirrel-d85f23.netlify.app/",
      featured: true,
    },
    {
      id: "kyara-beverages",
      title: "Kyara Beverages",
      category: "Brand Web Experience",
      description:
        "A responsive beverage brand website featuring a polished hero section, product showcase, and mobile-friendly layouts.",
      image: "/kuber.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/harshithapoojari123/kyara-website",
      liveUrl: "https://harshithapoojari123.github.io/kyara-website/#hero",
      featured: false,
    },
    {
      id: "rbac",
      title: "Role-Based Access Control",
      category: "Security & Permissions",
      description:
        "A role-based access control application with different permission levels for Admin, Manager, and Employee roles.",
      image: "/rb.png",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/harshithapoojari123/rbac",
      liveUrl: "https://cute-pavlova-4f38da.netlify.app/signup-page",
      featured: false,
    },
    {
      id: "placement-portal",
      title: "Placement & Training Portal",
      category: "Campus Management System",
      description:
        "A campus placement and training portal featuring role-based access, training registration, campus drive management, and personalized dashboards.",
      image: "/placement.jpg",
      technologies: ["AngularJS", "Node.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/harshithapoojari123/Domainproject",
      liveUrl: undefined, // Verified repo only
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 w-[600px] h-[500px] bg-violet-600/[0.04] blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              SELECTED WORK &amp; CASE STUDIES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real software products,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                built to deliver.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              A curated selection of full-stack platforms, client systems, and responsive applications with verified codebases.
            </p>
          </div>

          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>All projects backed by verified repositories</span>
          </div>
        </div>

        {/* Featured Projects: 2 Columns for Featured, then Grid */}
        <div className="mt-12 space-y-10">
          {/* Top 2 Featured Spotlight Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-violet-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div>
                  {/* Browser Chrome Preview */}
                  <div className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 mb-6">
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#14141d] border-b border-zinc-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        <span className="ml-2 text-[11px] font-mono text-zinc-400 truncate max-w-[200px]">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                        </span>
                      </div>
                      {project.liveUrl ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Demo
                        </span>
                      ) : (
                        <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded-full">
                          Internal System
                        </span>
                      )}
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/90 text-zinc-300 border border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 hover:text-white border border-zinc-700 rounded-lg transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-violet-600/30 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Remaining 3 Projects in a 3-column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(2).map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-violet-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-violet-950/20"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 mb-4">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-400">
                    {project.category}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-zinc-400 font-medium">
                      Internal Dashboard
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
