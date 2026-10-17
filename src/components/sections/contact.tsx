import { ArrowUpRight, Mail } from "lucide-react"

import Reveal from "@/components/reveal"
import Section from "@/components/sections/section"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/data/site"

export default function Contact() {
  return (
    <Section id="contact" title="Let's connect">
      <Reveal className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m actively looking for AI engineer, automation and software engineering roles, internships or permanent.
          If you&apos;re building something meaningful and impactful, I&apos;d love to hear about it.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/timothylee58" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://jomqr.my/yungyaulee" target="_blank" rel="noreferrer">
              More links <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
