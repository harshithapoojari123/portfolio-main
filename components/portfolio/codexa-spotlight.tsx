"use client"

import { motion } from "framer-motion"
import {
  Building2,
  ExternalLink,
  Linkedin,
  Layers,
  Sparkles,
  ArrowRight,
  MonitorCheck,
  ServerCog,
  Palette,
  ShieldCheck,
} from "lucide-react"

export function CodexaSpotlight() {
  const services = [
    {
      icon: Palette,
      title: "Website Design & Development",
      description: "Tailored, conversion-focused websites engineered with clean UI and modern aesthetics.",
    },
    {
      icon: MonitorCheck,
      title: "Responsive Business Websites",
      description: "Flawlessly optimized across mobile, tablet, and desktop viewports with fast load times.",
    },
    {
      icon: ServerCog,
      title: "Backend Development & REST APIs",
      description: "Secure, reliable, and well-documented server architectures, database connectivity, and endpoints.",
    },
    {
      icon: Layers,
      title: "Web Application Development",
      description: "Interactive full-stack web applications tailored to specific business workflows and user needs.",
    },
  ]

  return (
    <section id="codexa" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-violet-600/[0.06] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-violet-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-violet-950/30">
          {/* Subtle decorative glow inside card */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800/60 text-violet-300 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5 text-violet-400" />
                <span>FREELANCE INITIATIVE</span>
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Building digital experiences through{" "}
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  Codexa.
                </span>
              </h2>

              <p className="mt-5 text-base text-zinc-300 leading-relaxed">
                Codexa is my freelancing initiative focused on modern websites, web development, UI design, and backend solutions that help businesses strengthen their digital presence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://codexa-agency.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 active:scale-95"
                >
                  <span>Explore Codexa</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/113494147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Company LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right: Services Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-violet-500/40 transition-all hover:bg-zinc-950"
                    >
                      <div className="w-9 h-9 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
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
