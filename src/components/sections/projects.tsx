import { ArrowUpRight } from "lucide-react"

import Reveal from "@/components/reveal"
import Section from "@/components/sections/section"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border p-5 transition-colors hover:bg-foreground/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="text-lg font-semibold">{p.title}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs">
                      {s}
                    </span>
                  ))}
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
