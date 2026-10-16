"use client"

import { motion } from "framer-motion"
import {
  Code,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  CheckCircle2,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: Server,
      accent: "from-violet-500/20 to-indigo-500/10",
      description: "Server-side logic, API development, authentication, and service integrations.",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Spring Boot", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
      ],
    },
    {
      title: "Frontend Development",
      icon: Layout,
      accent: "from-blue-500/20 to-cyan-500/10",
      description: "Component architecture, client-side rendering, responsive UX, and state handling.",
      skills: [
        { name: "React", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Angular", highlight: false },
        { name: "HTML", highlight: false },
        { name: "CSS", highlight: false },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      accent: "from-purple-500/20 to-pink-500/10",
      description: "Core algorithms, object-oriented design, and systems foundations.",
      skills: [
        { name: "Java", highlight: true },
        { name: "C", highlight: false },
        { name: "C++", highlight: false },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      accent: "from-emerald-500/20 to-teal-500/10",
      description: "Relational and document storage, indexing, queries, and connection pools.",
      skills: [
        { name: "MySQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "PostgreSQL", highlight: false },
        { name: "DynamoDB", highlight: false },
      ],
    },
    {
      title: "Cloud & Services",
      icon: Cloud,
      accent: "from-amber-500/20 to-orange-500/10",
      description: "Cloud hosting, realtime infrastructure, and managed backend platforms.",
      skills: [
        { name: "AWS", highlight: false },
        { name: "Firebase", highlight: true },
      ],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      accent: "from-slate-500/20 to-zinc-500/10",
      description: "Version control, API testing, build environments, and developer IDEs.",
      skills: [
        { name: "VS Code", highlight: false },
        { name: "GitHub", highlight: true },
        { name: "Postman", highlight: true },
        { name: "Spring Tool Suite", highlight: false },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-10 top-1/3 w-[500px] h-[400px] bg-blue-600/[0.04] blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            TECHNICAL TOOLKIT
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear, honest &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              well-organized skills.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Technologies I have built with across academic projects, client engagements, and backend internships.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 hover:border-violet-500/40 transition-all duration-300 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-violet-950/20"
              >
                {/* Header of Card */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-violet-400 group-hover:text-violet-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed min-h-[32px]">
                  {category.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-violet-950/70 text-violet-200 border border-violet-700/50 shadow-sm"
                          : "bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-500"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Honest competency callout */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-between flex-wrap gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-zinc-300 font-medium">Highlighted technologies</span>
            <span>reflect practical experience across shipped applications and APIs.</span>
          </div>
          <span className="text-zinc-500">No inflated percentage meters • Real development experience</span>
        </div>
      </div>
    </section>
  )
}
