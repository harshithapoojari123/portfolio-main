"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  const skills = {
    languages: ["Java", "C", "C++"],
    technologies: ["Node.js", "Next.js", "Spring Boot", "Express.js", "Angular", "React", "HTML", "CSS"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "DynamoDB"],
    cloud: ["AWS"],
    tools: ["VS Code", "GitHub", "Postman", "Firebase"],
  }

  const timeline = [
    {
      year: "Aug 2022",
      title: "Started B.Tech (CSE)",
      description: "Centurion University of Technology and Management, Vizianagaram.",
    },
    {
      year: "Sep 2024 - Dec 2024",
      title: "Placement & Training Portal",
      description: "Built role-based placement and training workflows with AngularJS and Node.js.",
    },
    {
      year: "Jul 2025 - Sep 2025",
      title: "Backend Freelancer",
      description: "Delivered real-time features and API integrations for client projects.",
    },
    {
      year: "Oct 2025 - Dec 2025",
      title: "Backend Intern",
      description: "Optimized Spring Boot APIs and integrated authentication and Firebase.",
    },
    {
      year: "May 2026",
      title: "Graduation Target",
      description: "B.Tech in Computer Science and Engineering (CGPA 9.01 till 7th sem).",
    },
  ]

  const experience = [
    {
      CompanyName: "Algo2Offer",
      title: "Backend Intern",
      period: "Oct 2025 - Dec 2025",
      location: "Remote",
      description:
        "Developed and optimized Spring Boot APIs with secure SQL and MongoDB connectivity. Implemented authentication and authorization, integrated Firebase, and improved backend workflows for reliability.",
      tech: ["Spring Boot", "MongoDB", "MySQL", "REST APIs"],
      tools: ["Tools:", "VS Code", "Spring Tool Suite", "Postman"],
    },
    {
      CompanyName: "Freelancer",
      title: "Backend Freelancer",
      period: "Jul 2025 - Sep 2025",
      location: "Remote",
      description:
        "Built scalable services with Node.js and Next.js. Delivered real-time chat, voice, and video with Twilio and Agora, and integrated third-party APIs for richer platform functionality.",
      tech: ["Node.js", "Next.js", "DynamoDB", "MongoDB", "REST APIs"],
      tools: ["Tools:", "VS Code", "Twilio", "Agora", "Postman"],
    },
  ]

  const education = [
    {
      school: "Centurion University of Technology and Management",
      location: "Vizianagaram",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2022 - May 2026",
      detail: "CGPA: 9.01 (till 7th Sem)",
    },
  ]

  const certifications = [{ title: "Data Structures and Algorithms", issuer: "CodeTantra" }]

  const projects = [
    {
      title: "InternNova",
      description:
        "Real-time platform where students connect with verified companies. Admin verifies company profiles, companies post jobs, and students apply through role-based dashboards.",
      image: "/InternNova.png",
      github: "https://github.com/harshithapoojari123/InternNova",
      live: "#",
      tech: ["AngularJS", "Node.js", "MongoDB", "Firebase"],
    },
    {
      title: "Hotel Management System",
      description:
        "Real-time room booking with customer management and admin dashboard. Built with Angular for seamless user experience.",
      image: "/hotel.png",
      github: "https://github.com/harshithapoojari123/LockTrip",
      live: "https://elegant-squirrel-d85f23.netlify.app/",
      tech: ["Angular", "TypeScript", "CSS"],
    },
    {
      title: "Kyara Beverages",
      description:
        "Modern beverage company website with hero section, product showcase, and responsive design across all devices.",
      image: "/kuber.png",
      github: "https://github.com/harshithapoojari123/kyara-website",
      live: "https://harshithapoojari123.github.io/kyara-website/#hero",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Role-Based Access Control",
      description:
        "RBAC system with different permission levels for Admin, Manager, and Employee roles with secure authentication.",
      image: "/rb.png",
      github: "https://github.com/harshithapoojari123/rbac",
      live: "https://cute-pavlova-4f38da.netlify.app/signup-page",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Placement & Training Portal",
      description:
        "Placement and training platform with role-based access, training session registration, campus drive management, and personalized dashboards.",
      image: "/placement.jpg",
      github: "https://github.com/harshithapoojari123/Domainproject",
      live: "#",
      tech: ["AngularJS", "Node.js", "MongoDB", "Bootstrap"],
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {isLoading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0F172A] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.28),_rgba(139,92,246,0.18)_35%,_transparent_70%)] anim-pulse-soft" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-[conic-gradient(from_120deg,rgba(59,130,246,0.9),rgba(139,92,246,0.8),rgba(59,130,246,0.9))] p-[3px] anim-spin-slow">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0F172A] text-xl font-semibold tracking-widest text-white/80 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                  HP
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-white/10" />
            </div>
            <div className="text-sm uppercase tracking-[0.35em] text-slate-200/80">Preparing Portfolio...</div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#14B8A6] via-[#3B82F6] to-[#8B5CF6] anim-gradient" />
            </div>
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-bounce [animation-delay:-0.2s]" />
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-bounce [animation-delay:-0.1s]" />
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-bounce" />
            </div>
          </div>
        </div>
      )}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-[#0b0f1a] dark:to-[#141b2d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)]" />
        <div className="absolute -top-1/3 left-1/4 h-[70vh] w-[70vw] rounded-full bg-[conic-gradient(from_120deg,rgba(99,102,241,0.16),rgba(168,85,247,0.12),rgba(236,72,153,0.08),transparent_60%)] blur-3xl anim-aurora dark:bg-[conic-gradient(from_120deg,rgba(99,102,241,0.22),rgba(139,92,246,0.16),rgba(236,72,153,0.1),transparent_60%)]" />

        <div className="absolute inset-0 opacity-40" style={{ y }}>
          <div className="absolute left-16 top-16 h-72 w-72 rounded-full bg-indigo-400/60 mix-blend-multiply blur-2xl dark:bg-indigo-600/30" />
          <div className="absolute right-16 top-48 h-72 w-72 rounded-full bg-purple-400/60 mix-blend-multiply blur-2xl dark:bg-purple-600/30" />
          <div className="absolute bottom-20 left-40 h-72 w-72 rounded-full bg-fuchsia-300/60 mix-blend-multiply blur-2xl dark:bg-fuchsia-500/25" />
        </div>

        <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl anim-float dark:bg-indigo-500/18" />
        <div className="pointer-events-none absolute right-10 top-32 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl anim-float-slower dark:bg-purple-500/18" />
        <div className="pointer-events-none absolute bottom-16 left-1/3 h-60 w-60 rounded-full bg-fuchsia-400/18 blur-3xl anim-drift dark:bg-fuchsia-500/14" />
        <div className="pointer-events-none absolute bottom-24 right-1/4 h-44 w-44 rounded-full bg-indigo-400/14 blur-3xl anim-pulse-soft dark:bg-indigo-500/10" />

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 anim-star" />
          <div className="absolute left-[28%] top-[36%] h-1 w-1 rounded-full bg-white/60 anim-star" />
          <div className="absolute left-[62%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/80 anim-star" />
          <div className="absolute left-[78%] top-[44%] h-1 w-1 rounded-full bg-white/60 anim-star" />
          <div className="absolute left-[18%] top-[68%] h-1 w-1 rounded-full bg-white/60 anim-star" />
          <div className="absolute left-[70%] top-[72%] h-1.5 w-1.5 rounded-full bg-white/80 anim-star" />
        </div>
      </div>

      <motion.nav
        className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-800/80"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent anim-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Harshitha
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Education", "Certifications", "Experience", "Journey", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            {["Home", "About", "Skills", "Education", "Certifications", "Experience", "Journey", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      <section id="home" className="min-h-screen pt-24">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-2 text-sm text-indigo-700 shadow-sm dark:border-indigo-500/30 dark:bg-slate-800/80 dark:text-indigo-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Open to full-stack roles and product teams
            </motion.div>

            <motion.h1
              className="mt-6 text-5xl font-bold leading-tight md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent anim-gradient">
                Harshitha
              </span>
            </motion.h1>

            <motion.h2
              className="mt-4 text-2xl text-slate-600 dark:text-slate-300 md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full Stack Web Developer and B.Tech Computer Science student at{" "}
              <strong>Centurion University of Technology and Management</strong>, Vizianagaram. I build interactive,
              user-centered applications with strong backend foundations.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-purple-700"
              >
                <a href="#projects">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>

              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-slate-300/80 bg-white/70 text-slate-700 hover:bg-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>

              <Button
                size="lg"
                asChild
                variant="ghost"
                className="border border-dashed border-slate-300/60 bg-white/60 text-slate-700 hover:bg-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200"
              >
                <a href="/Harshitha-poojari-Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-110 hover:bg-indigo-700"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://github.com/harshithapoojari"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 p-3 text-white shadow-lg shadow-slate-900/30 transition-all hover:scale-110 hover:bg-slate-950"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative anim-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative mx-auto h-80 w-80">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="absolute inset-2 overflow-hidden rounded-full bg-white shadow-2xl dark:bg-slate-900">
                <img src="/myimage.jpg?height=300&width=300" alt="Harshitha Poojari" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </motion.div>
      </section>

      <section id="about" className="bg-white/60 py-20 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400">Quick snapshot</p>
          </motion.div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mx-auto h-80 w-80">
                <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute inset-2 overflow-hidden rounded-full bg-white shadow-2xl dark:bg-slate-900">
                  <img src="/about.jpg?height=300&width=300" alt="About Harshitha" className="h-full w-full object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                I&apos;m a Full Stack Web Developer and B.Tech Computer Science student with practical experience building
                interactive, user-centered applications. Skilled in problem solving and collaboration, I enjoy crafting
                clean APIs, durable data models, and smooth UI that feels fast and friendly.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <motion.div className="rounded-2xl border border-indigo-200/60 bg-white/80 p-6 text-center shadow-lg dark:border-indigo-500/30 dark:bg-slate-800/80">
                  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">9.01</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CGPA (till 7th sem)</p>
                </motion.div>

                <motion.div className="rounded-2xl border border-purple-200/60 bg-white/80 p-6 text-center shadow-lg dark:border-purple-500/30 dark:bg-slate-800/80">
                  <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-300">5</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</p>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["API Design", "Databases", "UI/UX", "Team Collaboration"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="mt-8 border-indigo-300/60 bg-white/70 text-indigo-700 hover:bg-white dark:border-indigo-500/30 dark:bg-slate-900/60 dark:text-indigo-200"
              >
                <a href="/Harshitha-poojari-Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Skills</h2>
            <p className="text-slate-600 dark:text-slate-400">Technical toolkit</p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80">
                <CardContent>
                  <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.languages.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-slate-700 dark:from-indigo-900/60 dark:to-purple-900/60 dark:text-slate-100">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80">
                <CardContent>
                  <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.technologies.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <Badge className="bg-gradient-to-r from-fuchsia-100 to-indigo-100 text-slate-700 dark:from-fuchsia-900/60 dark:to-indigo-900/60 dark:text-slate-100">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div className="mt-10" variants={fadeUp}>
            <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-800/80">
              <CardContent>
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Core Stack</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Databases", items: skills.databases },
                    { label: "Cloud", items: skills.cloud },
                    { label: "Developer Tools", items: skills.tools },
                  ].map((group) => (
                    <div
                      key={group.label}
                      className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700/80 dark:bg-slate-800/60"
                    >
                      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">{group.label}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-center dark:border-slate-700/80 dark:bg-slate-800/60">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">9.01</div>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">CGPA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section id="education" className="bg-white/60 py-20 dark:bg-slate-900/50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Education</h2>
            <p className="text-slate-600 dark:text-slate-400">Academic foundation</p>
          </motion.div>

          <motion.div className="mx-auto grid max-w-3xl gap-6" variants={staggerContainer}>
            {education.map((item) => (
              <Card
                key={item.school}
                className="border border-slate-200/70 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-800/80"
              >
                <CardContent>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{item.school}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.location}</p>
                      <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">{item.degree}</p>
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                      {item.period}
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="certifications" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Certifications</h2>
            <p className="text-slate-600 dark:text-slate-400">Credentials and learning</p>
          </motion.div>

          <motion.div className="mx-auto grid max-w-2xl gap-6" variants={staggerContainer}>
            {certifications.map((cert) => (
              <Card
                key={cert.title}
                className="border border-slate-200/70 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-800/80"
              >
                <CardContent>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="experience" className="bg-white/60 py-20 dark:bg-slate-900/50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Experience</h2>
            <p className="text-slate-600 dark:text-slate-400">Recent roles and impact</p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-800/80">
                  <CardContent>
                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                      {item.CompanyName}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {item.period} · {item.location}
                    </p>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{item.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-300 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="journey" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Career Timeline</h2>
            <p className="text-slate-600 dark:text-slate-400">Academic and professional milestones</p>
          </motion.div>

          <motion.div className="relative mx-auto max-w-3xl" variants={staggerContainer}>
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/70 via-purple-500/50 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  className="relative pl-12"
                  variants={fadeUp}
                  viewport={{ once: true }}
                >
                  <span className="absolute left-2 top-2 h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.18)]" />
                  <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80">
                    <CardContent>
                      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Selected work</p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border border-slate-200/70 bg-white/80 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.6)] dark:border-slate-700/80 dark:bg-slate-800/80">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-slate-300/80 bg-white/70 text-slate-700 hover:bg-white dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-200"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>

                      {project.live !== "#" && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="bg-white/60 py-20 dark:bg-slate-900/50">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">Contact Me</h2>
            <p className="text-slate-600 dark:text-slate-400">Let&apos;s build something great</p>
          </motion.div>

          <motion.div className="mx-auto max-w-4xl" variants={staggerContainer}>
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.a
                  href="mailto:harshithapoojari123@gmail.com"
                  className="flex items-center space-x-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-lg transition dark:border-slate-700/80 dark:bg-slate-800/80"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/40">
                    <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">harshithapoojari123@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-lg dark:border-slate-700/80 dark:bg-slate-800/80"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/40">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">Vizianagaram, Andhra Pradesh, India</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <Card className="border border-slate-200/70 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-800/80">
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Connect with me</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Click below to open Gmail compose with my email pre-filled.
                      </p>
                      <Button
                        size="lg"
                        asChild
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                      >
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshithapoojari123@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Click Here to Connect
                        </a>
                      </Button>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        If Gmail is not signed in, you may be asked to log in first.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="bg-slate-950 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Harshitha
              </h3>
              <p className="mt-2 text-slate-400">Full Stack Web Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold">Quick Links</h4>
              <div className="mt-3 space-y-2">
                {["About", "Skills", "Education", "Certifications", "Experience", "Journey", "Projects", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-400 transition-colors hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold">Connect</h4>
              <div className="mt-4 flex space-x-4">
                <motion.a
                  href="https://github.com/harshithapoojari123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 Harshitha Poojari. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      <motion.button
        className="fixed bottom-8 right-8 z-50 rounded-full bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-600/30 transition-colors hover:bg-indigo-700"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </motion.button>
    </div>
  )
}
