"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

const resolve = (): Theme => {
  const set = document.documentElement.dataset.theme
  if (set === "light" || set === "dark") return set
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// The theme lives outside React (the data-theme attribute and the OS setting), so subscribe to both.
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)")
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  mq.addEventListener("change", onChange)
  return () => {
    mo.disconnect()
    mq.removeEventListener("change", onChange)
  }
}

export default function ThemeToggle() {
  // null on the server and during hydration: the OS preference is unknown there, so render a same-size placeholder.
  const theme = React.useSyncExternalStore<Theme | null>(subscribe, resolve, () => null)

  const toggle = () => {
    const next: Theme = resolve() === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem("theme", next)
    } catch {
      /* private mode: the choice just won't persist */
    }
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={theme === null}
      aria-label={theme === null ? "Toggle color theme" : isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {theme === null ? null : isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  )
}
