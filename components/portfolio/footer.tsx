"use client"

import { Github, Linkedin, Mail, ExternalLink, ArrowUp, Building2, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Codexa", href: "#codexa" },
    { name: "Education", href: "#education" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-violet-600/[0.03] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-md">
                H.
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Harshitha Poojari
              </span>
            </div>

            <p className="mt-3 text-sm text-zinc-400 font-medium">
              Full Stack Developer &amp; Backend Engineer • Founder of Codexa
            </p>

            <p className="mt-2 text-xs text-zinc-500 leading-relaxed max-w-sm">
              Building modern web applications, robust backend architectures, and production-grade digital solutions. Centurion University B.Tech CSE (9.01 CGPA).
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/harshithapoojari123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-sky-400 hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshithapoojari123@gmail.com"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-violet-400 hover:border-zinc-700 transition-colors"
                aria-label="Email Harshitha"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://codexa-agency.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-violet-400 hover:border-zinc-700 transition-colors"
                aria-label="Codexa Agency"
                title="Codexa Agency"
              >
                <Building2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right column: Back to top & Status */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-left md:text-right w-full sm:w-auto">
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 md:justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Hire
              </span>
              <p className="text-xs text-zinc-400 mt-1">
                Full-Time &amp; Freelance (Codexa)
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} Harshitha Poojari. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-zinc-400">
            <span>Designed &amp; Engineered with precision</span>
            <span className="text-zinc-500">•</span>
            <span>Next.js 14, Tailwind CSS &amp; TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
