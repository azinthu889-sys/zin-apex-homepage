import { ArrowRight, Download, FileCheck, ClipboardList, MapPin } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { intakes, cities, site, images } from '../data'
import { useLang } from '../lib/i18n'

export default function StudyInJapan() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        title={t.studyPage.heroTitle}
        image={images.cherryBlossom}
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
        <div className="mt-8 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-card">
              <tr className="text-left">
                {t.studySection.intakeHead.map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {intakes.map((row, i) => {
                const text = t.intakes[i]
                return (
                  <tr key={row.intake} className="border-t">
                    <td className="px-5 py-3 font-medium">{text.intake}</td>
                    <td className="px-5 py-3 text-muted-foreground">
                      {text.registration}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">
                      {text.coeSubmission}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">
                      {text.coeResult}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
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
          <div className="mt-8 overflow-hidden rounded-2xl border bg-white">
            <img
              src={images.japanMap}
              alt="Map of Japan showing the cities where you can apply with us"
              className="aspect-[21/10] w-full object-cover object-top"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {cities.map((city, i) => (
              <div
                key={city.name}
                className="group relative overflow-hidden rounded-xl border"
              >
                <SmartImage
                  src={city.image}
                  alt={t.cities[i]}
                  className="aspect-[3/4] w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {t.cities[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t.studyPage.ctaTitle}
        subtitle={t.studyPage.ctaSub}
        buttonLabel={t.studyPage.ctaBtn}
        to="/contact"
        image={images.shibuya}
      />
    </>
  )
}
