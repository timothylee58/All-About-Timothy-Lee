import type { ContributionDay } from "@/components/ui/contribution-skyline"

export const CALENDAR_QUERY = `
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
  errors?: { message?: string }[]
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: { weeks: { contributionDays: { date: string; contributionCount: number }[] }[] }
      }
    } | null
  }
}

export type CalendarResult = { ok: true; days: ContributionDay[] } | { ok: false; reason: string }

// GitHub answers many failures (bad query, missing scope, unknown user) with HTTP 200 and an `errors` array, so the body has to be checked, not just the status.
export function parseCalendar(json: unknown): CalendarResult {
  const body = (json ?? {}) as CalendarResponse
  if (body.errors?.length) return { ok: false, reason: body.errors.map((e) => e.message ?? "unknown error").join("; ") }

  const weeks = body.data?.user?.contributionsCollection.contributionCalendar.weeks
  if (!weeks) return { ok: false, reason: "user not found or no contribution calendar in response" }

  return { ok: true, days: weeks.flatMap((w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))) }
}
