"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  Clock,
} from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const emailAddress = "harshithapoojari123@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Properly encoded mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    "Full-Stack / Backend Opportunity Inquiry"
  )}&body=${encodeURIComponent(
    "Hi Harshitha,\n\nI came across your portfolio and would like to discuss..."
  )}`

  // Direct web Gmail compose link
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
    "Full-Stack / Backend Opportunity Inquiry"
  )}`

  return (
    <section id="contact" className="py-24 relative scroll-mt-20 border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-violet-600/[0.06] blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative rounded-3xl bg-zinc-900/80 border border-violet-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-violet-950/30 overflow-hidden">
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="relative z-10">
              {/* Availability chip */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800/60 text-violet-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE FOR FULL-TIME ROLES &amp; FREELANCE PROJECTS</span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Have a project or{" "}
                <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                  opportunity in mind?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                I&apos;m open to full-time developer opportunities, collaborations, and freelance projects. Let&apos;s connect and build something useful.
              </p>

              {/* Primary Direct CTAs Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Send Email Mailto */}
                <a
                  href={mailtoLink}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-violet-600/25 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span>Send Me an Email</span>
                      <span className="text-[11px] text-violet-200 font-normal">
                        Default Email Client
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Direct Gmail Link */}
                <a
                  href={gmailComposeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-950/80 hover:bg-zinc-950 border border-zinc-700 hover:border-violet-500/50 text-zinc-100 font-semibold text-sm transition-all duration-200 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-violet-400">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span>Open in Gmail</span>
                      <span className="text-[11px] text-zinc-400 font-normal">
                        Pre-filled web compose
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Copy Email Strip */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <div className="flex items-center gap-2.5 px-2">
                  <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span className="text-sm font-mono text-zinc-300 truncate">
                    {emailAddress}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Social Connections */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location */}
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-200">Location</span>
                    <span>Srikakulam, AP, India</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors p-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-200 flex items-center gap-1">
                      LinkedIn
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </span>
                    <span>harshitha-poojari</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/harshithapoojari123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-colors p-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-200 flex items-center gap-1">
                      GitHub
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </span>
                    <span>harshithapoojari123</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
