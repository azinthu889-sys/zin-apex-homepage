import { Check, Target, Eye, Compass, Youtube } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { about, founder, mission, vision, purpose, site, images } from '../data'

export default function About() {
  return (
    <>
      <PageHero
        title="About Zin Apex Education"
        image={images.kyotoStreet}
        imageAlt="Traditional street in Japan"
      >
        <p>{about.intro}</p>
        <p className="mt-3">{about.detail}</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div data-reveal className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-2xl border bg-card text-center">
            <SmartImage
              src={images.torii}
              alt="Torii gates in Japan"
              className="aspect-[4/3] w-full"
            />
            <div className="p-8">
              <div className="mx-auto -mt-16 flex h-24 w-24 items-center justify-center rounded-full border-4 border-card bg-primary text-2xl font-semibold text-primary-foreground shadow-lg">
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
        <div data-reveal className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
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

      <CtaBanner
        title="Join the Zin Apex Education community"
        subtitle="Let us guide you towards a successful future in Japan."
        buttonLabel="Contact us"
        to="/contact"
        image={images.cherryBlossom}
      />
    </>
  )
}
