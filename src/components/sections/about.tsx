import Reveal from "@/components/reveal"
import Section from "@/components/sections/section"

const skills = [
  { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "JavaScript"] },
  { group: "Backend & data", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "RESTful APIs", "Webhooks"] },
  { group: "AI & ML", items: ["Agentic workflows", "Production RAG", "Pandas", "NumPy", "Scikit-Learn", "OpenCV"] },
  { group: "Infra & delivery", items: ["GitHub Actions", "Supabase", "Vercel", "Render", "AWS", "GCP", "Azure", "Cloudflare"] },
]

const background = [
  { years: "3+ years", what: "Logistics operations and CRM workflows" },
  { years: "1 year", what: "Restaurant merchant POS onboarding and support" },
  { years: "1 year", what: "Social media marketing" },
]

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I build full-stack, AI-powered applications, and I bring operational context most developers don&apos;t
            have. My background isn&apos;t only in code; it&apos;s in the trenches of MNC startups, which sharpened my
            instinct for what makes software genuinely useful: reliability, speed, and workflows that match how people
            actually work.
          </p>
          <p>
            I&apos;m deeply comfortable with AI-augmented development. Claude Code, Codex and Cursor are force
            multipliers on top of solid fundamentals, not shortcuts. I&apos;m currently upskilling in machine learning
            and data science to deepen how I design systems and extract insight from data.
          </p>
          <ul className="space-y-2 pt-2 text-sm">
            {background.map((b) => (
              <li key={b.what} className="flex gap-3">
                <span className="w-20 shrink-0 font-medium text-foreground">{b.years}</span>
                <span>{b.what}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-5">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="text-sm font-medium">{s.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
