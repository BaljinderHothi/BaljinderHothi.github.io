import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
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

        {/* Animation */}
        <div className="mb-24 min-h-[120px] flex items-center justify-center">
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
        <div className="flex items-center gap-6 mb-24">
          <a
            href="https://linkedin.com/in/baljinder-hothi"
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
        </div>

        {/* About Me */}
        <div className="max-w-2xl text-center space-y-6">
          <p className="text-slate-400 text-lg leading-relaxed">
            Studying Computer Science at CCNY. Currently performing research as an intern at the University of Washington RAIVN Lab.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Interested in Robotic Learning, Generative Models, and Reinforcement Learning.
          </p>
          <p className="text-slate-500 text-base leading-relaxed italic">
            I really like dogs (I have a Doberman mix) and I love learning to be a better person for our future.
          </p>
        </div>

      </div>

      {/* Footer credit */}
      <footer className="fixed bottom-4 left-0 right-0 z-10 text-center">
        <p className="text-slate-600/40 text-xs">background made with ChatGPT</p>
      </footer>
    </main>
  )
}
