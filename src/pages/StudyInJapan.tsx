import { ArrowRight, Download, FileCheck, ClipboardList, MapPin } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { requiredDocuments, intakes, cities, site, images } from '../data'

export default function StudyInJapan() {
  return (
    <>
      <PageHero
        title="Study in Japan"
        image={images.cherryBlossom}
        imageAlt="Cherry blossoms in Japan"
      >
        <p>
          Everything you need to know to apply to a Japanese language school
          with Zin Apex Education.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Required documents (sample)
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Documents typically required when applying to a Japanese language
          school. Exact requirements may vary by school and intake.
        </p>
        <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
          {requiredDocuments.map((doc, i) => (
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
            <h3 className="mt-4 text-lg font-medium">Application form</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download our application form (PDF), fill it out, and send it back
              to us. All required attachments are in the Google Drive folder.
            </p>
            <a
              href={site.applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Download form
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl border bg-background p-8">
            <ClipboardList className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-medium">Student orientation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Register through our Google Form to join the orientation briefing
              and get important information about the application process.
            </p>
            <a
              href={site.orientationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm transition-colors hover:bg-accent"
            >
              Register now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Intake schedules
        </h2>
        <div className="mt-8 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-card">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium">Intake</th>
                <th className="px-5 py-3 font-medium">Registration Deadline</th>
                <th className="px-5 py-3 font-medium">COE Submission</th>
                <th className="px-5 py-3 font-medium">COE Result</th>
              </tr>
            </thead>
            <tbody>
              {intakes.map((row) => (
                <tr key={row.intake} className="border-t">
                  <td className="px-5 py-3 font-medium">{row.intake}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {row.registration}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {row.coeSubmission}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {row.coeResult}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The dates above are approximate and may vary depending on individual
          circumstances and official processing times. We strongly recommend
          confirming all deadlines well in advance to ensure a smooth application.
        </p>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Cities where you can apply with us
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            We help students apply to language schools in major cities across
            Japan. Choose the city that matches your goals, lifestyle, and study
            plan.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-white">
            <img
              src={images.japanMap}
              alt="Map of Japan showing the cities where you can apply with us"
              className="aspect-[21/10] w-full object-cover object-top"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group relative overflow-hidden rounded-xl border"
              >
                <SmartImage
                  src={city.image}
                  alt={city.name}
                  className="aspect-[3/4] w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have questions about applying?"
        subtitle="Our team will guide you through every step of the process."
        buttonLabel="Get in touch"
        to="/contact"
        image={images.shibuya}
      />
    </>
  )
}
