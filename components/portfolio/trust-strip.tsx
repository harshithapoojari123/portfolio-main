"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, Code2, Globe2 } from "lucide-react"

export function TrustStrip() {
  const achievements = [
    {
      icon: Award,
      value: "9.01 / 10",
      label: "Academic CGPA",
      sublabel: "Centurion University (Graduated May 2026)",
    },
    {
      icon: Code2,
      value: "5 Selected",
      label: "Real-World Projects",
      sublabel: "Full stack, RBAC & web systems",
    },
    {
      icon: Briefcase,
      value: "Full Stack & Backend",
      label: "Core Specialization",
      sublabel: "Spring Boot, Node.js, React & DBs",
    },
    {
      icon: Globe2,
      value: "Codexa Founder",
      label: "Freelance Agency",
      sublabel: "Modern web & backend solutions",
    },
  ]

  return (
    <section className="relative py-8 border-y border-white/[0.06] bg-zinc-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-center gap-3.5 ${
                  index > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
                }`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-violet-400 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-zinc-300">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-normal">
                    {item.sublabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
