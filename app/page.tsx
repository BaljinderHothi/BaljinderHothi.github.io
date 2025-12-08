import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { ShiftingCharacters } from "@/components/shifting-characters"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1a1d24]">
      {/* Tree background */}
      <div
        className="fixed inset-0 z-0 opacity-400"
        style={{
          backgroundImage: "url('/images/tree-bg.png'), radial-gradient(circle at center, #2d3748 0%, #1a1d24 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-[#1a1d24]/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-slate-200 tracking-wide mb-8 text-center">Baljinder S. Hothi</h1>

        {/* Animation */}
        <div className="mb-12 flex items-center justify-center px-4">
          <ShiftingCharacters />
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/experience"
            className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base"
          >
            experience
          </Link>
          <Link href="/projects" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            projects
          </Link>
          <Link href="/blog" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            blog
          </Link>
        </nav>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/baljinder-hothi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/BaljinderHothi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/baljhothi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Footer credit */}
      <footer className="fixed bottom-4 left-0 right-0 z-10 text-center">
        <p className="text-slate-600/40 text-xs">background made with ChatGPT</p>
      </footer>
    </main>
  )
}
