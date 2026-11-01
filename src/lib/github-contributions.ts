import { cacheLife } from "next/cache"

import type { ContributionDay } from "@/components/ui/contribution-skyline"
import { CALENDAR_QUERY, parseCalendar } from "@/lib/github-calendar"

// Cached for an hour (Cache Components, see next.config.ts) so GitHub is hit at most once an hour.
// Returns null instead of throwing so the page still renders (with sample data) when the token is missing or GitHub is down.
// The reason for a fallback is logged, because a silent sample-data skyline is otherwise indistinguishable from a working one.
export async function getContributions(login: string): Promise<ContributionDay[] | null> {
  "use cache"
  cacheLife("hours")

  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.warn("[contributions] GITHUB_TOKEN is not set; showing sample data")
    return null
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: CALENDAR_QUERY, variables: { login } }),
    })
    if (!res.ok) {
      console.warn(`[contributions] GitHub responded ${res.status}; showing sample data`)
      return null
    }

    const result = parseCalendar(await res.json())
    if (!result.ok) {
      console.warn(`[contributions] ${result.reason}; showing sample data`)
      return null
    }
    return result.days
  } catch (err) {
    console.warn("[contributions] request failed; showing sample data", err instanceof Error ? err.message : err)
    return null
  }
}
