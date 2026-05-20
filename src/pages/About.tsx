import { Link } from 'react-router'
import { ArrowRight, Check, Target, Eye, Compass, Youtube } from 'lucide-react'
import { about, founder, mission, vision, purpose, site } from '../data'

export default function About() {
  return (
    <>
      <section className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            About Zin Apex Education
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            {about.intro}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            {about.detail}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          <div className="rounded-2xl border bg-card p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
              {founder.initials}
            </div>
            <h3 className="mt-5 text-lg font-medium">{founder.name}</h3>
            <p className="text-sm text-muted-foreground">{founder.role}</p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-accent"
            >
              <Youtube className="h-4 w-4" />
              Zin Japan Life
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Founder profile
            </h2>
            <p className="mt-4 text-muted-foreground">{founder.bio}</p>
            <p className="mt-4 text-muted-foreground">{founder.youtube}</p>
            <h3 className="mt-8 font-medium">Qualifications</h3>
            <ul className="mt-3 space-y-2">
              {founder.qualifications.map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
          <div className="rounded-xl border bg-background p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-medium">Mission</h3>
            <ul className="mt-3 space-y-2">
              {mission.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-background p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-medium">Vision</h3>
            <p className="mt-3 text-sm text-muted-foreground">{vision}</p>
          </div>
          <div className="rounded-xl border bg-background p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-medium">Purpose</h3>
            <ul className="mt-3 space-y-2">
              {purpose.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Join the Zin Apex Education community
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">
            Let us guide you towards a successful future in Japan.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-foreground transition-opacity hover:opacity-90"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
