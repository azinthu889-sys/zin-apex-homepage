import { Check, Target, Eye, Compass, Youtube } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { founder, site, images } from '../data'
import { useLang } from '../lib/i18n'

export default function About() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        title={t.aboutPage.heroTitle}
        image={images.kyotoStreet}
        imageAlt="Traditional street in Japan"
      >
        <p>{t.aboutSection.intro}</p>
        <p className="mt-3">{t.aboutSection.detail}</p>
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
              <p className="text-sm text-muted-foreground">{t.aboutSection.founderRole}</p>
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
              {t.aboutPage.founderTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.aboutSection.founderBio}</p>
            <p className="mt-4 text-muted-foreground">{t.aboutPage.founderYoutube}</p>
            <h3 className="mt-8 font-medium">{t.aboutPage.qualifications}</h3>
            <ul className="mt-3 space-y-2">
              {t.aboutPage.qualificationItems.map((q) => (
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
            <h3 className="mt-5 font-medium">{t.aboutSection.mission}</h3>
            <ul className="mt-3 space-y-2">
              {t.aboutSection.missionItems.map((m) => (
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
            <h3 className="mt-5 font-medium">{t.aboutSection.vision}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t.aboutSection.visionText}</p>
          </div>
          <div className="rounded-xl border bg-background p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-medium">{t.aboutSection.purpose}</h3>
            <ul className="mt-3 space-y-2">
              {t.aboutSection.purposeItems.map((p) => (
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
        title={t.aboutPage.ctaTitle}
        subtitle={t.aboutPage.ctaSub}
        buttonLabel={t.aboutPage.ctaBtn}
        to="/contact"
        image={images.cherryBlossom}
      />
    </>
  )
}
