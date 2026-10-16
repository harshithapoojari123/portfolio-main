"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  GraduationCap,
  Server,
  Database,
  Layout,
  Rocket,
  CheckCircle,
  Download,
  Building2,
} from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Server,
      title: "Backend & API Engineering",
      description: "Developing robust REST APIs with Spring Boot and Node.js/Express, focusing on clean endpoints, security, and authentication.",
    },
    {
      icon: Database,
      title: "Database Modeling & Querying",
      description: "Hands-on experience with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, DynamoDB) schemas, migrations, and connectivity.",
    },
    {
      icon: Layout,
      title: "Modern Frontend Interfaces",
      description: "Crafting responsive, component-driven interfaces using React, Next.js, Angular, Tailwind CSS, and TypeScript.",
    },
    {
      icon: Rocket,
      title: "Client & Product Mindset",
      description: "Founder of Codexa — bridging business goals with technical execution from requirement gathering to deployment.",
    },
  ]

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/[0.04] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            A LITTLE ABOUT ME
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer by craft.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Problem-solver by mindset.
            </span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Photo Card & Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-2xl bg-zinc-900 border border-zinc-800 p-2 shadow-2xl overflow-hidden">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src="/harshitha.jpg"
                  alt="Harshitha Poojari - Full Stack Developer"
                  className="w-full h-full object-cover object-top filter grayscale-[5%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                {/* Floating Badges on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 text-white font-medium">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    Srikakulam, AP, India
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 text-emerald-300 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    Graduated May 2026 • 9.01 CGPA
                  </span>
                </div>
              </div>

              {/* Mini details below image */}
              <div className="p-3 pt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-200">Education:</span>
                  <span className="text-right">B.Tech CSE (Graduated May 2026)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-200">Agency:</span>
                  <a
                    href="https://codexa-agency.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 flex items-center gap-1"
                  >
                    <span>Codexa (Founder)</span>
                    <Building2 className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Resume button */}
            <a
              href="/Harshitha_poojari_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-sm font-semibold transition-all hover:border-violet-500/50"
            >
              <Download className="w-4 h-4 text-violet-400" />
              <span>Download Verified Resume</span>
            </a>
          </div>

          {/* Right Column: Exact Story & Technical Focus Panel */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* The narrative */}
            <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
              <p>
                I&apos;m a Computer Science graduate with a strong interest in full-stack development and backend engineering. I enjoy building applications that solve practical problems, designing clean APIs, working with databases, and creating user interfaces that feel intuitive.
              </p>
              <p>
                My experience includes academic projects, backend development, API integrations, authentication, database connectivity, and freelance development work. I also started <strong className="text-white font-semibold">Codexa</strong>, a freelancing agency focused on helping businesses establish and improve their digital presence.
              </p>
              <p className="text-zinc-400">
                I&apos;m looking for opportunities where I can contribute, learn from experienced engineers, and build useful software with a great team.
              </p>
            </div>

            {/* Technical Capability Grid */}
            <div className="pt-4 border-t border-zinc-800/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                What I Bring to Engineering Teams
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-violet-500/30 transition-all hover:bg-zinc-900"
                    >
                      <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
