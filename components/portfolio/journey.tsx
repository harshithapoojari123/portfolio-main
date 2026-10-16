"use client"

import { motion } from "framer-motion"
import { Calendar, Flag, Sparkles, GraduationCap, Building2, Code2, Server } from "lucide-react"

export function CareerJourney() {
  const milestones = [
    {
      date: "August 2022",
      title: "Started B.Tech in Computer Science and Engineering",
      summary: "Began undergraduate engineering studies at Centurion University of Technology and Management, Vizianagaram.",
      icon: GraduationCap,
      category: "Academic",
    },
    {
      date: "Sep – Dec 2024",
      title: "Developed Placement & Training Portal",
      summary: "Engineered a full-featured campus portal with role-based access, student registration, and recruitment workflows.",
      icon: Code2,
      category: "Project",
    },
    {
      date: "Jul – Sep 2025",
      title: "Backend Freelancer",
      summary: "Delivered scalable backend services with Node.js, real-time communications (Twilio, Agora), and database integrations.",
      icon: Server,
      category: "Industry",
    },
    {
      date: "Oct – Dec 2025",
      title: "Backend Intern at Algo2Offer",
      summary: "Focused on Spring Boot REST APIs, SQL & MongoDB connectivity, secure authentication, and Firebase workflows.",
      icon: Building2,
      category: "Industry",
    },
    {
      date: "2026",
      title: "Founded Codexa",
      summary: "Established a freelancing agency delivering modern web development, UI design, and backend systems for businesses.",
      icon: Sparkles,
      category: "Milestone",
      highlight: true,
    },
    {
      date: "May 2026",
      title: "Graduated with B.Tech in Computer Science",
      summary: "Graduated in Computer Science and Engineering from Centurion University of Technology and Management with a 9.01/10 CGPA.",
      icon: Flag,
      category: "Academic",
      highlight: true,
    },
  ]

  return (
    <section id="journey" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-violet-600/[0.03] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            CHRONOLOGICAL PATHWAY
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career &amp; Academic Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Key milestones marking growth from foundational computer science theory to practical engineering leadership.
          </p>
        </div>

        {/* Compact Vertical Timeline */}
        <div className="mt-16 max-w-3xl mx-auto relative">
          {/* Vertical spine */}
          <div className="absolute left-4 sm:left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/40 via-zinc-800 to-transparent" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  {/* Timeline Node Icon in Center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#09090B] border-2 border-violet-500/80 shadow-md shadow-violet-500/20">
                    <Icon className="w-3.5 h-3.5 text-violet-300" />
                  </div>

                  {/* Content Box */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${isEven ? "sm:pl-10" : "sm:pr-10"}`}>
                    <div
                      className={`p-5 rounded-2xl bg-zinc-900/70 border transition-all ${
                        milestone.highlight
                          ? "border-violet-500/40 bg-zinc-900/90 shadow-lg shadow-violet-950/20"
                          : "border-zinc-800/80 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded-md border border-violet-800/40">
                          <Calendar className="w-3 h-3" />
                          {milestone.date}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                          {milestone.category}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {milestone.title}
                      </h3>

                      <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                        {milestone.summary}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
