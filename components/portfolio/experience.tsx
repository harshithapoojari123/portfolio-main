"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Calendar,
  ExternalLink,
  Linkedin,
  MapPin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Codexa",
      role: "Founder",
      period: "2026 – Present",
      type: "Freelance / Agency",
      location: "Remote",
      featured: true,
      description:
        "Started Codexa, a freelancing agency focused on modern websites, backend systems, APIs, and digital solutions for businesses. Work includes understanding project requirements, developing web experiences, and helping clients establish their online presence.",
      technologies: ["Next.js", "React", "Node.js", "Spring Boot", "MongoDB", "REST APIs"],
      tools: ["VS Code", "GitHub", "Postman", "Firebase"],
      links: [
        {
          label: "Agency Website",
          href: "https://codexa-agency.netlify.app/",
          icon: ExternalLink,
        },
        {
          label: "Company LinkedIn",
          href: "https://www.linkedin.com/company/113494147/",
          icon: Linkedin,
        },
      ],
    },
    {
      company: "Algo2Offer",
      role: "Backend Intern",
      period: "October 2025 – December 2025",
      type: "Remote Internship",
      location: "Remote",
      featured: false,
      description:
        "Worked on Spring Boot APIs, SQL and MongoDB connectivity, authentication and authorization, Firebase integration, and backend workflow improvements.",
      technologies: ["Spring Boot", "MongoDB", "MySQL", "REST APIs", "Firebase"],
      tools: ["VS Code", "Spring Tool Suite", "Postman"],
      links: [],
    },
    {
      company: "Freelance",
      role: "Backend Freelancer",
      period: "July 2025 – September 2025",
      type: "Contract",
      location: "Remote",
      featured: false,
      description:
        "Developed backend services and integrations using Node.js and Next.js. Worked on real-time chat, voice, and video functionality using Twilio and Agora, along with third-party API integrations.",
      technologies: ["Node.js", "Next.js", "DynamoDB", "MongoDB", "REST APIs", "Twilio", "Agora"],
      tools: ["VS Code", "Postman", "Twilio SDK"],
      links: [],
    },
  ]

  return (
    <section id="experience" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violet-600/[0.04] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            EXPERIENCE &amp; TRACK RECORD
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical development &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              engineering impact.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Real industry experience spanning backend internships, freelance software development, and agency leadership.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-zinc-900/70 border p-6 sm:p-8 transition-all duration-300 ${
                exp.featured
                  ? "border-violet-500/40 bg-zinc-900/90 shadow-xl shadow-violet-950/20"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Header: Company, Role, Period, Location */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 border-b border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-950/80 text-violet-300 border border-violet-800/60">
                      {exp.role}
                    </span>
                    {exp.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        Current Initiative
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.type}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/60 self-start">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Verified links if available */}
              {exp.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {exp.links.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white bg-violet-950/60 hover:bg-violet-900/60 border border-violet-800/60 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 ml-0.5" />
                      </a>
                    )
                  })}
                </div>
              )}

              {/* Tech stack pills */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-zinc-500 font-medium mr-1.5">Tech:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.tools && (
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="text-zinc-500">Tools:</span>
                    {exp.tools.map((tool) => (
                      <span key={tool} className="text-zinc-400">
                        {tool}
                        {tool !== exp.tools[exp.tools.length - 1] ? "," : ""}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
