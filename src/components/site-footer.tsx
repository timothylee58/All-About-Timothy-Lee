import { cacheLife } from "next/cache"

import { CONTACT_EMAIL, GITHUB_LOGIN } from "@/data/site"

// Cached for a day: reading the current year is request-time data under Cache Components, and a stale year for <24h is harmless.
export default async function SiteFooter() {
  "use cache"
  cacheLife("days")
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {year} Timothy Lee Yung Yau. Built with Next.js, Tailwind CSS and shadcn/ui.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" href={`https://github.com/${GITHUB_LOGIN}`} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" href={`mailto:${CONTACT_EMAIL}`}>
                Email
              </a>
            </li>
            <li>
              <a className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" href="#">
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
