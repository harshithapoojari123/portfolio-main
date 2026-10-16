"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "Centurion University of Technology and Management",
      degree: "B.Tech in Computer Science and Engineering",
      period: "August 2022 – May 2026 (Graduated)",
      location: "Vizianagaram, Andhra Pradesh, India",
      metric: "9.01 / 10 CGPA",
      metricSubtext: "Graduated May 2026",
      highlights: [
        "Graduated in Computer Science and Engineering with distinguished academic standing (9.01/10 CGPA).",
        "Core coursework in Data Structures, Algorithms, Object-Oriented Programming, and Database Systems.",
        "Practical engineering projects in full-stack web applications and role-based portals.",
      ],
    },
  ]

  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "CodeTantra",
      description: "Comprehensive training and evaluation in algorithmic problem solving, trees, graphs, sorting, and algorithmic complexity.",
    },
  ]

  return (
    <section id="education" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight">
              Education &amp; Background
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Rigorous computer science curriculum combined with consistent top-tier academic performance.
            </p>

            <div className="mt-8">
              {education.map((item) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-zinc-800/80">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0 mt-0.5">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {item.institution}
                        </h3>
                        <p className="text-sm font-medium text-violet-300 mt-0.5">
                          {item.degree}
                        </p>
                        <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/60 self-start">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Academic metric pill */}
                  <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold text-white">
                        {item.metric}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {item.metricSubtext}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              CREDENTIALS &amp; LEARNING
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight">
              Certifications
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Verified certifications earned through assessed coursework.
            </p>

            <div className="mt-8 space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 hover:border-violet-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                        Verified Coursework
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-zinc-400 mt-0.5">
                        Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                      </p>
                      <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
