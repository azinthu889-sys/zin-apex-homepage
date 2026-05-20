import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { about, services, whyChooseUs, stats, coeResults } from '../data'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 to-background" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            Now enrolling for April, July & October 2026 intakes
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Your trusted pathway to study in Japan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {about.intro}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/study-in-japan"
              className="inline-flex items-center gap-2 rounded-lg border bg-card px-6 py-3 transition-colors hover:bg-accent"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Our services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Complete support from your first application to your arrival in Japan.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-xl border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-medium">{service.title}</h3>
              <ul className="mt-3 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why choose Zin Apex Education?
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl border bg-background p-6">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Our COE success record
          </h2>
          <p className="mt-4 text-muted-foreground">
            A track record that reflects our commitment to guiding students
            successfully through the Japanese study application process.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium">Year</th>
                <th className="px-5 py-3 font-medium">Applicants</th>
                <th className="px-5 py-3 font-medium">Successful COE</th>
              </tr>
            </thead>
            <tbody>
              {coeResults.map((row) => (
                <tr key={row.year} className="border-t">
                  <td className="px-5 py-3">{row.year}</td>
                  <td className="px-5 py-3">{row.applicants}</td>
                  <td className="px-5 py-3 font-medium text-primary">
                    {row.successful}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to begin your journey to Japan?
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">
            Get in touch with our team for clear guidance and full support.
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
