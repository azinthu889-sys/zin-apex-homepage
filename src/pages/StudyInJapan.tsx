import { ArrowRight, Download, FileCheck, ClipboardList, MapPin } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import IntakeSchedule from '../components/IntakeSchedule'
import CityGrid from '../components/CityGrid'
import JapanMap from '../components/JapanMap'
import CtaBanner from '../components/CtaBanner'
import { site, images } from '../data'
import { useLang } from '../lib/i18n'

export default function StudyInJapan() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        title={t.studyPage.heroTitle}
        image={images.schoolGroup}
        imageAlt="Cherry blossoms in Japan"
      >
        <p>{t.studyPage.heroSub}</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">
            {t.studySection.docsTitle}
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          {t.studyPage.docsNote}
        </p>
        <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
          {t.requiredDocuments.map((doc, i) => (
            <li
              key={doc}
              className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {i + 1}
              </span>
              {doc}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y bg-card">
        <div data-reveal className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-2">
          <div className="rounded-2xl border bg-background p-8">
            <Download className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-medium">{t.studySection.formTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.studySection.formBody}
            </p>
            <a
              href={site.applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.studySection.download}
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl border bg-background p-8">
            <ClipboardList className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-medium">{t.studySection.orientationTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.studySection.orientationBody}
            </p>
            <a
              href={site.orientationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm transition-colors hover:bg-accent"
            >
              {t.studySection.register}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t.studySection.intakeTitle}
        </h2>
        <IntakeSchedule className="mt-8" headClassName="bg-card" />
        <p className="mt-4 text-sm text-muted-foreground">
          {t.studyPage.intakeNote}
        </p>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight">
              {t.studySection.citiesTitle}
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            {t.studyPage.citiesSub}
          </p>
          <JapanMap className="mt-8" />
          <CityGrid className="mt-6" overlayClassName="from-black/60" />
        </div>
      </section>

      <CtaBanner
        title={t.studyPage.ctaTitle}
        subtitle={t.studyPage.ctaSub}
        buttonLabel={t.studyPage.ctaBtn}
        to="/contact"
        image={images.japanLife}
      />
    </>
  )
}
