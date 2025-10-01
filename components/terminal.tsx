"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react/jsx-runtime"

type CommandOutput = {
  command: string
  output: string | JSX.Element
  timestamp: Date
}

type FileSystemNode = {
  type: "file" | "directory"
  name: string
  description?: string
  imagePath?: string
  children?: Record<string, FileSystemNode>
}

const FILE_SYSTEM: Record<string, FileSystemNode> = {
  hobbies: {
    type: "directory",
    name: "hobbies",
    children: {
      Photography: {
        type: "file",
        name: "Photography",
        description:
          "Seattle skyline view from my visit - Summer 2025. I love photography in my free time and own a Fujifilm camera.",
        imagePath: "/images/DSCF3635.JPEG",
      },
      Museums: {
        type: "file",
        name: "Museums",
        description:
          "Chihuly Garden and Glass museum in Seattle, Washington - Summer 2025. I have a deep appreciation for museums and art installations.",
        imagePath: "/images/DSCF3655.jpg",
      },
      Hiking: {
        type: "file",
        name: "Hiking",
        description: "[Coming soon] Photos from my hiking adventures in the Pacific Northwest.",
      },
      Cooking: {
        type: "file",
        name: "Cooking",
        description: "[Coming soon] Culinary experiments and favorite recipes.",
      },
      Reading: {
        type: "file",
        name: "Reading",
        description: "[Coming soon] Books I'm currently reading and recommendations.",
      },
    },
  },
}

const COMMANDS = {
  help: (
    <div className="space-y-1">
      <div>Available commands:</div>
      <div className="mt-2 space-y-1">
        <div>
          <span className="text-[#DA70D6]">help</span> - Show this help message
        </div>
        <div>
          <span className="text-[#DA70D6]">about</span> - Learn about me
        </div>
        <div>
          <span className="text-[#DA70D6]">experience</span> - View my work experience
        </div>
        <div>
          <span className="text-[#DA70D6]">education</span> - View my education
        </div>
        <div>
          <span className="text-[#DA70D6]">goals</span> - See my research goals
        </div>
        <div>
          <span className="text-[#DA70D6]">contact</span> - Get my contact information
        </div>
        <div>
          <span className="text-[#DA70D6]">gingerlang</span> - Learn about GingerLang
        </div>
        <div>
          <span className="text-[#DA70D6]">skills</span> - View my technical skills
        </div>
        <div>
          <span className="text-[#DA70D6]">ls</span> - List files in current directory
        </div>
        <div>
          <span className="text-[#DA70D6]">cd</span> &lt;dir&gt; - Change directory (cd .. to go back)
        </div>
        <div>
          <span className="text-[#DA70D6]">cat</span> &lt;file&gt; - Display file contents (works with images!)
        </div>
        <div>
          <span className="text-[#DA70D6]">clear</span> - Clear the terminal
        </div>
        <div>
          <span className="text-[#DA70D6]">theme</span> - Toggle light/dark mode
        </div>
      </div>
    </div>
  ),

  about: `Baljinder S. Hothi
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I'm a Software Engineer and Researcher focused on Machine Learning, Robotics, 
and Quantitative Finance. Currently working at Meta as a Production Engineering 
Fellow and conducting research at the RAIVN Lab (University of Washington) on 
multi-task imitation learning and policy learning.

I'm passionate about mathematically rigorous approaches to solving real-world 
problems through code and research.`,

  experience: `Work Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Meta] Production Engineering Fellow                    Aug 2025 - Present
→ Audited motion data pipelines in Habitat Lab
→ Discovered missing hand-pose data affecting 40% of scenarios

[RAIVN Lab, UW] Undergraduate Researcher                Aug 2025 - Present
→ Multi-task imitation learning and policy learning research
→ Designing models to perform across diverse robotic environments

[AWS] Software Development Engineering Intern           Jun 2025 - Aug 2025
→ Built tool chaining framework for LLM-powered infrastructure automation
→ Created ESM MCP server with full CRUD operations
→ Reduced ESM creation time from hours to 10 seconds

[Lohman Laboratory] Software Engineer Intern            Jan 2025 - May 2025
→ Built full-stack specimen management system (Next.js, Python, MySQL)
→ Expanded user access from 200 to 1,300+ researchers
→ Developed domain-specific LLM for butterfly genome research

[IDSL] Machine Learning Intern                          Feb 2024 - May 2024
→ Implemented LMCLUS clustering algorithm in Python and C++
→ Built heart-disease classifier with 87% accuracy

[ICCAE] Software Engineering Intern                     Aug 2023 - Jun 2024
→ Trained NLP model to detect LLM-generated text (80% accuracy)
→ Developed LLM to speech pipeline with Boston Dynamics robot`,

  education: `Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The City College of New York, CUNY                      Graduating Jan 2026
Bachelor of Science in Computer Science
Minors: Mathematics, Business and Administration

Relevant Coursework:
→ Linear Algebra, Probability & Statistics, Calculus III
→ Numerical Analysis, Machine Learning, Artificial Intelligence
→ Graph Theory, Combinatorics, Operating Systems
→ Ethics (AI Focus)`,

  goals: `Research Goals
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

My goal is to conduct research in a mathematically rigorous way, focusing on:

→ Machine Learning
  • Multi-task imitation learning
  • Policy learning and reinforcement learning
  • LLM-powered automation systems

→ Robotics
  • Motion planning and control
  • Humanoid training and simulation
  • Real-world robotic applications

→ Quantitative Finance
  • Mathematical modeling of financial systems
  • Algorithmic trading strategies
  • Risk analysis and optimization`,

  contact: `Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:    baljinderh[dot]@gmail[dot]com
LinkedIn: linkedin.com/in/baljinder-hothi
GitHub:   github.com/BaljinderHothi
Phone:    347-459-3124`,

  skills: `Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Languages:
→ Python, JavaScript, Go, Haskell, SQL, C++, TypeScript, Java

Libraries & Tools:
→ PyTorch, scikit-learn, Spark, Snowflake, Swift
→ Git, Node.js, REST APIs, GraphQL, Docker

Frameworks:
→ Next.js, React, Flask, FastAPI`,

  gingerlang: `GingerLang - A Functional Programming Language
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GingerLang is a functional programming language I'm developing that combines
the elegance of functional programming with practical syntax.

Core Features:
→ Pure functional programming with immutable data
→ Tail-call optimization for efficient recursion
→ Lambda expressions and higher-order functions
→ S-expression function calls (Scheme-style)
→ Pattern matching and type inference

Syntax Example:
  "" Fibonacci function ""
  def fib(n) {
      if (n == 0) {
          return 0
      } else {
          if (n == 1) {
              return 1
          } else {
              return (fib (n - 1)) + (fib (n - 2))
          }
      }
  }

Key Design Principles:
→ No loops - all iteration via recursion
→ Tail-call optimization for constant space complexity
→ Comments using double-double-quotes: "" comment ""
→ Function calls use S-expressions: (functionName arg1 arg2)

Built-in Operations:
→ Arithmetic: +  -  *  /  %
→ Comparison: ==  !=  <  >  <=  >=
→ Types: numbers (int/float), booleans (true/false)

GingerLang emphasizes mathematical rigor and functional purity, making it
ideal for algorithm design and theoretical computer science applications.`,
}

export default function Terminal() {
  const [isDark, setIsDark] = useState(true)
  const [history, setHistory] = useState<CommandOutput[]>([])
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentDir, setCurrentDir] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const welcomeMessage = useRef<CommandOutput>({
    command: "",
    output: (
      <div className="space-y-2">
        <div className="text-terminal-cyan font-mono text-lg">Welcome to Baljinder S. Hothi's Portfolio Terminal</div>
        <div className="text-muted-foreground">
          Type <span className="text-terminal-green">'help'</span> to see available commands
        </div>
      </div>
    ),
    timestamp: new Date(),
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    // Show welcome message on mount
    setHistory([welcomeMessage.current])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const getCurrentDirNode = (): FileSystemNode | null => {
    if (currentDir.length === 0) return null

    let node: FileSystemNode | undefined = FILE_SYSTEM[currentDir[0]]
    for (let i = 1; i < currentDir.length; i++) {
      if (node?.type === "directory" && node.children) {
        node = node.children[currentDir[i]]
      } else {
        return null
      }
    }
    return node || null
  }

  const getTabCompletion = (currentInput: string): string => {
    const parts = currentInput.trim().split(" ")
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    // If we're typing a command
    if (parts.length === 1) {
      const commands = Object.keys(COMMANDS).concat(["ls", "cd", "cat", "clear", "theme"])
      const matches = commands.filter((cmd) => cmd.startsWith(command))
      if (matches.length === 1) {
        return matches[0]
      }
    }

    // If we're typing arguments for cd or cat
    if (parts.length === 2 && (command === "cd" || command === "cat")) {
      const partial = args[0] || ""
      const dirNode = getCurrentDirNode()
      let items: string[] = []

      if (currentDir.length === 0) {
        items = Object.keys(FILE_SYSTEM)
      } else if (dirNode?.type === "directory" && dirNode.children) {
        items = Object.keys(dirNode.children)
      }

      // Add ".." as an option for cd
      if (command === "cd" && currentDir.length > 0) {
        items.push("..")
      }

      const matches = items.filter((item) => item.toLowerCase().startsWith(partial.toLowerCase()))
      if (matches.length === 1) {
        return `${command} ${matches[0]}`
      }
    }

    return currentInput
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()

    if (!trimmedCmd) return

    const parts = trimmedCmd.split(" ")
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    let output: string | JSX.Element = ""

    if (command === "clear") {
      setHistory([welcomeMessage.current])
      return
    }

    if (command === "theme") {
      setIsDark(!isDark)
      output = `Theme switched to ${!isDark ? "dark" : "light"} mode`
    } else if (command === "ls") {
      const dirNode = getCurrentDirNode()
      const items: string[] = []

      if (currentDir.length === 0) {
        // Root directory
        items.push(...Object.keys(FILE_SYSTEM))
      } else if (dirNode?.type === "directory" && dirNode.children) {
        items.push(...Object.keys(dirNode.children))
      }

      if (items.length === 0) {
        output = "Empty directory"
      } else {
        output = (
          <div className="space-y-1">
            {items.map((item) => {
              const node =
                currentDir.length === 0
                  ? FILE_SYSTEM[item]
                  : dirNode?.type === "directory" && dirNode.children
                    ? dirNode.children[item]
                    : null
              const isDir = node?.type === "directory"
              return (
                <div key={item} className="flex items-center gap-2">
                  <span className={isDir ? "text-terminal-cyan" : "text-terminal-green"}>{isDir ? "📁" : "📄"}</span>
                  <span className={isDir ? "text-terminal-cyan" : "text-foreground"}>{item}</span>
                </div>
              )
            })}
          </div>
        )
      }
    } else if (command === "cd") {
      if (args.length === 0) {
        // No output for cd alone
        return
      } else if (args[0] === "..") {
        if (currentDir.length > 0) {
          setCurrentDir(currentDir.slice(0, -1))
          output = <div className="text-terminal-cyan">Now in Root</div>
        } else {
          output = "Already at root directory"
        }
      } else {
        const targetDir = args[0]
        const dirNode = getCurrentDirNode()

        let targetNode: FileSystemNode | undefined

        if (currentDir.length === 0) {
          targetNode = FILE_SYSTEM[targetDir]
        } else if (dirNode?.type === "directory" && dirNode.children) {
          targetNode = dirNode.children[targetDir]
        }

        if (targetNode && targetNode.type === "directory") {
          setCurrentDir([...currentDir, targetDir])
          const dirName = targetDir.charAt(0).toUpperCase() + targetDir.slice(1)
          output = <div className="text-terminal-cyan">Now in {dirName}</div>
        } else {
          output = `cd: ${targetDir}: No such directory`
        }
      }
    } else if (command === "cat") {
      if (args.length === 0) {
        output = "cat: missing file operand"
      } else {
        const fileName = args[0]
        const dirNode = getCurrentDirNode()

        let fileNode: FileSystemNode | undefined

        if (currentDir.length === 0) {
          fileNode = FILE_SYSTEM[fileName]
        } else if (dirNode?.type === "directory" && dirNode.children) {
          fileNode = dirNode.children[fileName]
        }

        if (fileNode && fileNode.type === "file") {
          if (fileNode.imagePath) {
            output = (
              <div className="space-y-3">
                {fileNode.description && <div className="text-muted-foreground">{fileNode.description}</div>}
                <img
                  src={fileNode.imagePath || "/placeholder.svg"}
                  alt={fileNode.name}
                  className="max-w-full rounded-lg border border-border"
                />
              </div>
            )
          } else {
            output = <div className="text-muted-foreground">{fileNode.description}</div>
          }
        } else {
          output = `cat: ${fileName}: No such file`
        }
      }
    } else if (command in COMMANDS) {
      output = COMMANDS[command as keyof typeof COMMANDS]
    } else {
      output = `Command not found: ${command}\nType 'help' for available commands.`
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedCmd,
        output,
        timestamp: new Date(),
      },
    ])

    setCommandHistory((prev) => [...prev, trimmedCmd])
    setHistoryIndex(-1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const completed = getTabCompletion(input)
      setInput(completed)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  const getCurrentPath = () => {
    return currentDir.length === 0 ? "~" : `~/${currentDir.join("/")}`
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TerminalIcon className="h-6 w-6 text-terminal-cyan" />
            <h1 className="font-mono text-xl font-bold text-foreground">baljinder@portfolio:{getCurrentPath()}$</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-lg border border-border bg-card shadow-lg">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            <div className="h-3 w-3 rounded-full bg-terminal-green" />
            <span className="ml-2 font-mono text-sm text-muted-foreground">terminal</span>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="h-[600px] overflow-y-auto p-4 font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Command History */}
            {history.map((item, index) => (
              <div key={index} className="mb-4">
                {item.command && (
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-terminal-prompt">❯</span>
                    <span className="text-foreground">{item.command}</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-muted-foreground">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-terminal-prompt">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none"
                autoFocus
                spellCheck={false}
              />
              <span className="terminal-cursor inline-block h-4 w-2 bg-terminal-cyan" />
            </form>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="mt-4 text-center font-mono text-sm text-muted-foreground">
          Tip: Use ↑/↓ arrow keys to navigate command history • Press Tab for autocomplete
        </div>
      </div>
    </div>
  )
}
