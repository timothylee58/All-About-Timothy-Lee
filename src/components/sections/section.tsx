import Reveal from "@/components/reveal"

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:px-8">
      <Reveal>
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  )
}
