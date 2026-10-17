"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ContributionSkyline, { type ContributionDay } from "@/components/ui/contribution-skyline"
import { CONTACT_EMAIL, GITHUB_LOGIN } from "@/data/site"

const roles = ["AI Engineer", "Full-Stack Developer", "Agentic Workflows", "Production RAG"]

export default function Hero({ contributions }: { contributions: ContributionDay[] | null }) {
  const reduce = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-5xl px-4 pt-20 pb-16 sm:px-8 sm:pt-28">
      <motion.p {...rise(0)} className="text-sm font-medium text-muted-foreground">
        Timothy Lee Yung Yau · Malaysia
      </motion.p>

      <motion.h1
        id="hero-title"
        {...rise(0.08)}
        className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
      >
        I build with AI, and for AI.
      </motion.h1>

      <motion.p {...rise(0.16)} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Full-stack engineer with a logistics-operations background. I ship reliable, fast software
        on Next.js, FastAPI and PostgreSQL, with CI/CD and system reliability built in from day one.
      </motion.p>

      <motion.ul {...rise(0.24)} className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
        {roles.map((role) => (
          <li key={role} className="rounded-full border border-border px-3 py-1 text-xs sm:text-sm">
            {role}
          </li>
        ))}
      </motion.ul>

      <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <a href={`https://github.com/${GITHUB_LOGIN}`} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </motion.div>

      <motion.div {...rise(0.44)} className="mt-14">
        {contributions ? (
          <ContributionSkyline data={contributions} />
        ) : (
          <ContributionSkyline title="A year of building, as a skyline (sample data)" endDate="2017-11-08" />
        )}
      </motion.div>
    </section>
  )
}
