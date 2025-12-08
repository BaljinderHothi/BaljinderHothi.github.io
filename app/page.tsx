import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1a1d24]">
      {/* Tree background */}
      {/* Tree background - removed as image is missing */}
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-[#1a1d24]/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-slate-200 tracking-wide mb-4 text-center">Baljinder S. Hothi</h1>
        <p className="text-slate-400 text-center max-w-2xl text-lg mb-8 leading-relaxed">
          I'm a Software Engineer and Researcher focused on Machine Learning, Robotics, and Quantitative Finance. Currently working at Meta as a Production Engineering Fellow and conducting research at the RAIVN Lab (University of Washington).
        </p>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <Link href="/research" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            research
          </Link>
          <Link
            href="/experience"
            className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base"
          >
            experience
          </Link>
          <Link href="/projects" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            projects
          </Link>
          <Link href="/hobbies" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            hobbies
          </Link>
          <Link href="/blog" className="text-slate-400 hover:text-slate-200 transition-colors text-sm sm:text-base">
            blog
          </Link>
        </nav>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full max-w-4xl text-center">
          <div className="space-y-2">
            <h3 className="text-slate-300 font-medium font-serif">Languages</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Python, JavaScript, Go, Haskell, SQL, C++, TypeScript, Java</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-slate-300 font-medium font-serif">Libraries & Tools</h3>
            <p className="text-slate-500 text-sm leading-relaxed">PyTorch, scikit-learn, Spark, Snowflake, Git, Docker, GraphQL</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-slate-300 font-medium font-serif">Frameworks</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Next.js, React, Flask, FastAPI</p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
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
      </div>

      {/* Footer credit */}
      <footer className="fixed bottom-4 left-0 right-0 z-10 text-center">
        <p className="text-slate-600/40 text-xs">background made with ChatGPT</p>
      </footer>
    </main>
  )
}
