import { Navigation } from "@/components/navigation"
import Link from "next/link"

const experiences = [
  {
    id: "meta",
    company: "Meta",
    role: "Production Engineering Fellow",
    team: "Habitat Lab",
    period: "Aug 2025 – Present",
    location: "Remote",
    highlights: [
      "Audited motion data pipelines in Habitat Lab",
      "Discovered missing hand-pose data affecting 40% of scenarios",
    ],
  },
  {
    id: "aws",
    company: "Amazon Web Services",
    role: "Software Development Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Seattle, WA",
    highlights: [
      "Built tool chaining framework for LLM-powered infrastructure automation",
      "Created ESM MCP server with full CRUD operations",
      "Reduced ESM creation time from hours to 10 seconds",
    ],
  },
  {
    id: "lohman",
    company: "Lohman Laboratory",
    role: "Software Engineer Intern",
    period: "Jan 2025 – May 2025",
    location: "New York, NY",
    highlights: [
      "Built full-stack specimen management system (Next.js, Python, MySQL)",
      "Expanded user access from 200 to 1,300+ researchers",
      "Developed domain-specific LLM for butterfly genome research",
    ],
  },
]

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

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-700">
      <Navigation />
      <div className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm mb-8 inline-block">
          ← back
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-12">experience</h1>

        {/* Technical Experience */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-6 border-b border-border pb-2">technical experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-ring/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-card-foreground">{exp.company}</h3>
                    <p className="text-secondary-foreground text-sm">{exp.role}</p>
                    {exp.team && <p className="text-muted-foreground text-sm">{exp.team}</p>}
                  </div>
                  <p className="text-muted-foreground text-sm whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-foreground"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Research Experience */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-6 border-b border-border pb-2">research experience</h2>
          <div className="space-y-6">
            {research.map((item) => (
              <article
                key={item.id}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-ring/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-xl text-card-foreground">{item.lab}</h3>
                    {item.institution && <p className="text-muted-foreground text-sm">{item.institution}</p>}
                  </div>
                  <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full w-fit">
                    {item.focus}
                  </span>
                </div>
                <p className="text-secondary-foreground text-sm">{item.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{item.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-4 border-b border-border pb-2">publications</h2>
          <p className="text-muted-foreground text-sm">coming soon</p>
        </div>

      </div>
    </main>
  )
}
