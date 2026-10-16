import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://harshithapoojari-portfolio.netlify.app"),
  title: "Harshitha Poojari | Full Stack Developer & Backend Engineer | Founder of Codexa",
  description:
    "Portfolio of Harshitha Poojari — Full Stack Developer & Backend Engineer. Building modern web applications, high-performance APIs, and scalable backend systems with Node.js, Spring Boot, React, and Next.js.",
  keywords: [
    "Harshitha Poojari",
    "Full Stack Developer",
    "Backend Engineer",
    "Founder of Codexa",
    "Software Engineer",
    "Spring Boot Developer",
    "Node.js Developer",
    "React Developer",
    "Srikakulam",
    "Andhra Pradesh",
    "Portfolio",
  ],
  authors: [{ name: "Harshitha Poojari", url: "https://github.com/harshithapoojari123" }],
  creator: "Harshitha Poojari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshithapoojari-portfolio.netlify.app",
    title: "Harshitha Poojari | Full Stack Developer & Backend Engineer",
    description:
      "Full Stack Developer & Backend Engineer. Building digital experiences that work beautifully with Spring Boot, Node.js, React, and Next.js.",
    siteName: "Harshitha Poojari Portfolio",
    images: [
      {
        url: "/harshitha.jpg",
        width: 800,
        height: 1066,
        alt: "Harshitha Poojari — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshitha Poojari | Full Stack Developer & Backend Engineer",
    description:
      "Full Stack Developer & Backend Engineer. Founder of Codexa. Building digital experiences that work beautifully.",
    images: ["/harshitha.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#09090B] font-sans text-zinc-100 antialiased selection:bg-violet-600/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
