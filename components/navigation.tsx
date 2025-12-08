"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1d24]/90 backdrop-blur-md border-b border-slate-700/30">
      <nav className="max-w-4xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" title="Home">
            <span className="font-serif text-slate-300 text-lg">Baljinder</span>
          </Link>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors hover:bg-slate-700/50",
                    pathname === item.href ? "text-slate-200" : "text-slate-500",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="ml-2 pl-2 border-l border-slate-700/50">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
