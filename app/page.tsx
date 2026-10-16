import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { TrustStrip } from "@/components/portfolio/trust-strip"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { CodexaSpotlight } from "@/components/portfolio/codexa-spotlight"
import { Education } from "@/components/portfolio/education"
import { CareerJourney } from "@/components/portfolio/journey"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { FloatingActions } from "@/components/portfolio/floating-actions"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100 flex flex-col selection:bg-violet-600/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust and Credibility Strip */}
        <TrustStrip />

        {/* 3. About Me */}
        <About />

        {/* 4. Skills Toolkit */}
        <Skills />

        {/* 5. Experience Timeline */}
        <Experience />

        {/* 6. Projects Gallery */}
        <Projects />

        {/* 7. Dedicated Codexa Agency Spotlight */}
        <CodexaSpotlight />

        {/* 8. Education & Certifications */}
        <Education />

        {/* 9. Career Journey Milestones */}
        <CareerJourney />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <FloatingActions />
    </div>
  )
}
