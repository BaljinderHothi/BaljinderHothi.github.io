import { Navigation } from "@/components/navigation"
import Link from "next/link"

const projects = [
  {
    id: "gingerlang",
    name: "GingerLang",
    tech: ["Interpreter Design", "Functional Programming", "Go"],
    description:
      "A functional programming language combining the elegance of functional programming with practical syntax. Features pure functional programming with immutable data, tail-call optimization, lambda expressions, and pattern matching.",
  },
  {
    id: "tinyllama",
    name: "TinyLlama Inference Optimization",
    tech: ["Python", "PyTorch", "TensorRT", "ONNX"],
    description:
      "Achieved 65% faster token generation and 40% memory reduction for TinyLlama-1.1B while maintaining 97% accuracy by implementing KV-cache quantization, grouped query attention optimization, and TensorRT engine optimization.",
  },
  {
    id: "rccar",
    name: "Self-Driving RC Car",
    tech: ["C++", "Raspberry Pi", "Computer Vision"],
    description:
      "Building a self-driving RC car from scratch including the Computer Vision model using C++ and a Raspberry Pi. End-to-end autonomous navigation system.",
  },
  {
    id: "mta",
    name: "MTA Inequality Analysis",
    tech: ["React", "IPFS", "Go"],
    description:
      "Redeveloping analysis platform for MTA transit inequality data. Decentralized storage with IPFS and performant Go backend.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-700">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm mb-8 inline-block">
          ← back
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-12">projects</h1>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-ring/50 transition-colors"
            >
              <h2 className="font-serif text-xl text-card-foreground mb-3">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
