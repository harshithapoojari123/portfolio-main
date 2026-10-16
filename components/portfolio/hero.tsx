"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react"

export function Hero() {
  const [activeTab, setActiveTab] = useState<"spring" | "node" | "architecture">("spring")
  const [copiedSnippet, setCopiedSnippet] = useState(false)

  const springSnippet = `// Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/experience")
public class DeveloperController {

    private final ProjectService projectService;

    @Autowired
    public DeveloperController(ProjectService service) {
        this.projectService = service;
    }

    @GetMapping("/profile")
    public ResponseEntity<ProfileResponse> getProfile() {
        return ResponseEntity.ok(ProfileResponse.builder()
            .name("Harshitha Poojari")
            .role("Full Stack & Backend Engineer")
            .cgpa(9.01)
            .status("Open to Full-Time & Freelance")
            .agency("Codexa Founder")
            .build());
    }
}`

  const nodeSnippet = `// Node.js & Express API Gateway
import { Router, Request, Response } from 'express';
import { db } from '../config/database';

export const apiRouter = Router();

apiRouter.post('/v1/solutions', async (req: Request, res: Response) => {
  try {
    const { client, requirements } = req.body;
    const project = await db.projects.initiate({
      lead: 'Harshitha Poojari',
      agency: 'Codexa',
      architecture: ['Next.js', 'Spring Boot', 'MongoDB'],
      status: 'DELIVERED_ON_TIME'
    });
    return res.status(200).json({ success: true, data: project });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});`

  const handleCopyCode = () => {
    const textToCopy = activeTab === "spring" ? springSnippet : nodeSnippet
    navigator.clipboard.writeText(textToCopy)
    setCopiedSnippet(true)
    setTimeout(() => setCopiedSnippet(false), 2000)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft violet spotlight top left */}
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-violet-600/[0.12] blur-[140px]" />
        {/* Electric blue glow center right */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-blue-600/[0.10] blur-[130px]" />
        {/* Subtle grid pattern for technical depth */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small availability label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 shadow-lg shadow-violet-950/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-300">
                OPEN TO FULL-TIME ROLES &amp; FREELANCE PROJECTS
              </span>
            </div>

            {/* Introduction & Subtitle */}
            <div className="mt-6 space-y-1">
              <div className="flex items-center gap-2 text-violet-400 font-medium text-sm sm:text-base">
                <span>Hi, I&apos;m Harshitha Poojari</span>
                <span className="w-8 h-px bg-violet-400/50" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Building digital experiences that{" "}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
                  work beautifully.
                </span>
              </h1>
            </div>

            {/* Professional Subtitle Tag */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-zinc-200 flex items-center gap-2 flex-wrap">
              <span>Full Stack Developer</span>
              <span className="text-violet-400">•</span>
              <span>Backend Engineer</span>
              <span className="text-violet-400">•</span>
              <a
                href="https://codexa-agency.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-violet-300 hover:text-white bg-violet-950/60 px-2.5 py-0.5 rounded-full border border-violet-800/60 transition-colors"
                title="Founder of Codexa Agency"
              >
                <Building2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Founder of Codexa</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            </p>

            {/* Supporting Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              I build modern web applications, reliable backend APIs, and thoughtful digital experiences.
              Through <strong className="text-zinc-200 font-semibold">Codexa</strong>, I also help businesses turn their ideas into functional, polished websites and applications.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-xl shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40 hover:from-violet-500 hover:to-blue-500 transition-all duration-200 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/70 hover:border-zinc-500 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Let&apos;s Connect</span>
              </a>

              {/* Verified Download CV Button */}
              <a
                href="/Harshitha_poojari_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 rounded-xl transition-all duration-200"
                title="Download Harshitha's Resume (PDF)"
              >
                <Download className="w-4 h-4 text-zinc-400 group-hover:text-violet-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick social & verification bar */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center gap-4 text-xs text-zinc-400">
              <span className="font-medium text-zinc-500">Connect:</span>
              <a
                href="https://github.com/harshithapoojari123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="mailto:harshithapoojari123@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>harshithapoojari123@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Custom Developer Engineering Panel Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Visual wrapper with glowing ambient backdrop */}
            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-px shadow-2xl shadow-violet-950/40">
              <div className="rounded-[15px] bg-[#0d0d12] border border-zinc-800/80 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#13131a] border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-violet-400" />
                      harshitha-workspace
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      200 OK
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/[0.06] transition-colors"
                      title="Copy Code"
                      aria-label="Copy snippet"
                    >
                      {copiedSnippet ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center border-b border-zinc-800/80 bg-[#0f0f15] text-xs font-mono overflow-x-auto">
                  <button
                    onClick={() => setActiveTab("spring")}
                    className={`px-4 py-2 border-r border-zinc-800/80 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                      activeTab === "spring"
                        ? "bg-[#0d0d12] text-violet-300 border-t-2 border-t-violet-500 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    DeveloperController.java
                  </button>
                  <button
                    onClick={() => setActiveTab("node")}
                    className={`px-4 py-2 border-r border-zinc-800/80 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                      activeTab === "node"
                        ? "bg-[#0d0d12] text-violet-300 border-t-2 border-t-violet-500 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    apiRouter.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-4 py-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                      activeTab === "architecture"
                        ? "bg-[#0d0d12] text-violet-300 border-t-2 border-t-violet-500 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    telemetry.json
                  </button>
                </div>

                {/* Code / Content Area */}
                <div className="p-4 sm:p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto min-h-[290px] bg-[#0a0a0f]">
                  {activeTab === "spring" && (
                    <pre className="text-zinc-300 whitespace-pre">
                      <code>
                        <span className="text-zinc-500">// Spring Boot REST API Endpoint</span>{"\n"}
                        <span className="text-violet-400">@RestController</span>{"\n"}
                        <span className="text-violet-400">@RequestMapping</span>(<span className="text-emerald-400">&quot;/api/v1/profile&quot;</span>){"\n"}
                        <span className="text-blue-400">public class</span> <span className="text-amber-300">HarshithaController</span> {"{\n\n"}
                        {"  "}<span className="text-violet-400">@GetMapping</span>{"\n"}
                        {"  "}<span className="text-blue-400">public</span> ResponseEntity&lt;Profile&gt; <span className="text-yellow-300">getDetails</span>() {"{\n"}
                        {"    "}<span className="text-blue-400">return</span> ResponseEntity.ok(Profile.builder(){"\n"}
                        {"      "}.name(<span className="text-emerald-400">&quot;Harshitha Poojari&quot;</span>){"\n"}
                        {"      "}.title(<span className="text-emerald-400">&quot;Full Stack &amp; Backend Engineer&quot;</span>){"\n"}
                        {"      "}.education(<span className="text-emerald-400">&quot;B.Tech CSE (Graduated May 2026) - 9.01 CGPA&quot;</span>){"\n"}
                        {"      "}.agency(<span className="text-emerald-400">&quot;Codexa (Founder)&quot;</span>){"\n"}
                        {"      "}.openForHire(<span className="text-purple-400">true</span>){"\n"}
                        {"      "}.build());{"\n"}
                        {"  }"}{"\n"}
                        {"}"}
                      </code>
                    </pre>
                  )}

                  {activeTab === "node" && (
                    <pre className="text-zinc-300 whitespace-pre">
                      <code>
                        <span className="text-zinc-500">// Node.js Express Gateway Service</span>{"\n"}
                        <span className="text-blue-400">import</span> {"{ Router }"} <span className="text-blue-400">from</span> <span className="text-emerald-400">&apos;express&apos;</span>;{"\n"}
                        <span className="text-blue-400">const</span> router = Router();{"\n\n"}
                        router.<span className="text-yellow-300">post</span>(<span className="text-emerald-400">&apos;/projects/hire&apos;</span>, <span className="text-blue-400">async</span> (req, res) =&gt; {"{\n"}
                        {"  "}<span className="text-blue-400">const</span> candidate = {"{\n"}
                        {"    "}engineer: <span className="text-emerald-400">&apos;Harshitha Poojari&apos;</span>,{"\n"}
                        {"    "}strengths: [<span className="text-emerald-400">&apos;Spring Boot&apos;</span>, <span className="text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-400">&apos;Next.js&apos;</span>],{"\n"}
                        {"    "}verifiedCGPA: <span className="text-amber-400">9.01</span>,{"\n"}
                        {"    "}responseRate: <span className="text-emerald-400">&apos;&lt; 24h&apos;</span>{"\n"}
                        {"  }"};{"\n"}
                        {"  "}<span className="text-blue-400">return</span> res.json({"{"} success: <span className="text-purple-400">true</span>, candidate {"}"});{"\n"}
                        {"}"});
                      </code>
                    </pre>
                  )}

                  {activeTab === "architecture" && (
                    <pre className="text-zinc-300 whitespace-pre">
                      <code>
                        {"{\n"}
                        {"  "}<span className="text-sky-400">&quot;environment&quot;</span>: <span className="text-emerald-400">&quot;Production&quot;</span>,{"\n"}
                        {"  "}<span className="text-sky-400">&quot;engineer&quot;</span>: <span className="text-emerald-400">&quot;Harshitha Poojari&quot;</span>,{"\n"}
                        {"  "}<span className="text-sky-400">&quot;institution&quot;</span>: <span className="text-emerald-400">&quot;Centurion Univ of Tech &amp; Mgmt&quot;</span>,{"\n"}
                        {"  "}<span className="text-sky-400">&quot;academicRecord&quot;</span>: <span className="text-emerald-400">&quot;B.Tech CSE (Graduated May 2026) - 9.01 CGPA&quot;</span>,{"\n"}
                        {"  "}<span className="text-sky-400">&quot;databases&quot;</span>: [<span className="text-emerald-400">&quot;MySQL&quot;</span>, <span className="text-emerald-400">&quot;MongoDB&quot;</span>, <span className="text-emerald-400">&quot;PostgreSQL&quot;</span>, <span className="text-emerald-400">&quot;DynamoDB&quot;</span>],{"\n"}
                        {"  "}<span className="text-sky-400">&quot;cloud&quot;</span>: [<span className="text-emerald-400">&quot;AWS&quot;</span>, <span className="text-emerald-400">&quot;Firebase&quot;</span>],{"\n"}
                        {"  "}<span className="text-sky-400">&quot;agency&quot;</span>: <span className="text-emerald-400">&quot;Codexa (Active Freelancing)&quot;</span>,{"\n"}
                        {"  "}<span className="text-sky-400">&quot;apiLatency&quot;</span>: <span className="text-emerald-400">&quot;14ms&quot;</span>{"\n"}
                        {"}"}
                      </code>
                    </pre>
                  )}
                </div>

                {/* Footer Strip of Visual: Live Metrics & Mini Profile */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111118] border-t border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src="/harshitha.jpg"
                      alt="Harshitha Poojari"
                      className="w-8 h-8 rounded-full object-cover object-top border border-violet-500/40"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-zinc-200">Harshitha Poojari</span>
                      <span className="text-[10px] text-zinc-400">Centurion University • Graduated May 2026 • 9.01 CGPA</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>5 Shipped Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
