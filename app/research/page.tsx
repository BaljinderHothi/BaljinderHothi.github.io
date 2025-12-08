import { Navigation } from "@/components/navigation"
import Link from "next/link"

const research = [
  {
    id: "raivn",
    lab: "RAIVN Lab",
    institution: "University of Washington",
    role: "Undergraduate Researcher",
    period: "Aug 2025 – Present",
    focus: "Robotics & ML",
    description:
      "Multi-task imitation learning and policy learning research. Designing models to perform across diverse robotic environments.",
  },
  {
    id: "idsl",
    lab: "IDSL",
    role: "Machine Learning Intern",
    period: "Feb 2024 – May 2024",
    focus: "Machine Learning",
    description:
      "Implemented LMCLUS clustering algorithm in Python and C++. Built heart-disease classifier with 87% accuracy.",
  },
  {
    id: "iccae",
    lab: "ICCAE",
    institution: "Cyber Threat Intelligence Integration Center",
    role: "Software Engineering Intern",
    period: "Aug 2023 – Jun 2024",
    focus: "NLP & Robotics",
    description:
      "Trained NLP model to detect LLM-generated text (80% accuracy). Developed LLM to speech pipeline with Boston Dynamics robot.",
  },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#1a1d24]">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
        <Link href="/" className="text-slate-500 hover:text-slate-300 transition-colors text-sm mb-8 inline-block">
          ← back
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-slate-200 mb-12">research</h1>

        <div className="space-y-6">
          {research.map((item) => (
            <article
              key={item.id}
              className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h2 className="font-serif text-xl text-slate-200">{item.lab}</h2>
                  {item.institution && <p className="text-slate-500 text-sm">{item.institution}</p>}
                </div>
                <span className="text-xs bg-slate-700/60 text-slate-400 px-3 py-1 rounded-full w-fit">
                  {item.focus}
                </span>
              </div>
              <p className="text-slate-300 text-sm">{item.role}</p>
              <p className="text-slate-500 text-sm mb-4">{item.period}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Research Goals */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <h2 className="font-serif text-2xl text-slate-200 mb-6">research goals</h2>
          <p className="text-slate-400 text-sm mb-6">
            My goal is to conduct research in a mathematically rigorous way, focusing on:
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-slate-300 border-b border-slate-700/50 pb-2">Machine Learning</h3>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Multi-task imitation learning
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Policy learning and reinforcement learning
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  LLM-powered automation systems
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-slate-300 border-b border-slate-700/50 pb-2">Robotics</h3>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Motion planning and control
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Humanoid training and simulation
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Real-world robotic applications
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-slate-300 border-b border-slate-700/50 pb-2">Quantitative Finance</h3>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Mathematical modeling of financial systems
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Algorithmic trading strategies
                </li>
                <li className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-slate-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
                  Risk analysis and optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
