"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Mail } from "lucide-react"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", checkScroll, { passive: true })
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5"
        >
          <a
            href="#contact"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-violet-600 text-white shadow-xl shadow-violet-600/30 hover:bg-violet-500 transition-all active:scale-90"
            aria-label="Jump to Contact"
            title="Let's Connect"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-700/80 shadow-xl backdrop-blur-md transition-all active:scale-90"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
