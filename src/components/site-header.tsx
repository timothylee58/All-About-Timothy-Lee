"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const links = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export default function SiteHeader() {
  const [active, setActive] = React.useState<string | null>(null)

  // Highlights the section crossing the middle band of the viewport; clears at the top so the hero has no active link.
  React.useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => el !== null)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
          else setActive((cur) => (cur === e.target.id ? null : cur))
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((s) => io.observe(s))

    // The last section is shorter than the viewport, so it never reaches the band above; at the page bottom it wins.
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) setActive(links[links.length - 1].id)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-8">
        <a
          href="#"
          className="rounded text-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Timothy Lee
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "location" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:px-3",
                    active === l.id && "bg-foreground/5 text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
