"use client"

import { useEffect, useRef } from "react"

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load KaTeX for LaTeX rendering
    const loadKatex = async () => {
      if (typeof window !== "undefined" && containerRef.current) {
        const katex = await import("katex")
        await import("katex/dist/katex.min.css")

        // Find all LaTeX blocks ($$...$$) and render them
        const html = containerRef.current.innerHTML
        const rendered = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
          try {
            return katex.default.renderToString(latex.trim(), {
              displayMode: true,
              throwOnError: false,
            })
          } catch {
            return latex
          }
        })
        containerRef.current.innerHTML = rendered
      }
    }
    loadKatex()
  }, [content])

  // Convert markdown-style content to HTML
  const processContent = (text: string) => {
    return text
      .split("\n\n")
      .map((paragraph, i) => {
        // Headers
        if (paragraph.startsWith("## ")) {
          return `<h2 class="font-serif text-xl text-slate-200 mt-8 mb-4">${paragraph.slice(3)}</h2>`
        }
        if (paragraph.startsWith("### ")) {
          return `<h3 class="font-serif text-lg text-slate-200 mt-6 mb-3">${paragraph.slice(4)}</h3>`
        }
        // Lists
        if (paragraph.includes("\n- ")) {
          const items = paragraph.split("\n- ").filter(Boolean)
          return `<ul class="list-disc list-inside space-y-1 text-slate-400 leading-relaxed my-4">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
        }
        // Code blocks
        if (paragraph.startsWith("```")) {
          const code = paragraph.replace(/```\w*\n?/g, "")
          return `<pre class="bg-slate-900/50 rounded p-4 overflow-x-auto my-4"><code class="text-slate-300 text-sm">${code}</code></pre>`
        }
        // LaTeX blocks - keep as is for KaTeX to process
        if (paragraph.includes("$$")) {
          return `<div class="my-4">${paragraph}</div>`
        }
        // Bold text
        const withBold = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200">$1</strong>')
        // Regular paragraph
        return `<p class="text-slate-400 leading-relaxed my-4">${withBold}</p>`
      })
      .join("")
  }

  return (
    <div ref={containerRef} className="prose-custom" dangerouslySetInnerHTML={{ __html: processContent(content) }} />
  )
}
