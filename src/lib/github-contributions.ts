import { cacheLife } from "next/cache"

import type { ContributionDay } from "@/components/ui/contribution-skyline"

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`

type CalendarResponse = {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: { weeks: { contributionDays: { date: string; contributionCount: number }[] }[] }
      }
    } | null
  }
}

// Cached for an hour (Cache Components, see next.config.ts) so GitHub is hit at most once an hour.
// Returns null instead of throwing so the page still renders (with sample data) when the token is missing or GitHub is down.
export async function getContributions(login: string): Promise<ContributionDay[] | null> {
  "use cache"
  cacheLife("hours")

  const token = process.env.GITHUB_TOKEN
  if (!token) return null

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
    })
    if (!res.ok) return null

    const json = (await res.json()) as CalendarResponse
    const weeks = json.data?.user?.contributionsCollection.contributionCalendar.weeks
    if (!weeks) return null

    return weeks.flatMap((w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount })))
  } catch {
    return null
  }
}
