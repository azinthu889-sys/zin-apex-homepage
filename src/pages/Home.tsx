import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Check,
  Star,
  Play,
  Download,
  FileCheck,
  ClipboardList,
  MapPin,
  Target,
  Eye,
  Compass,
  Youtube,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import SmartImage from '../components/SmartImage'
import {
  about,
  founder,
  mission,
  vision,
  purpose,
  services,
  whyChooseUs,
  courses,
  learningFormats,
  whyCoursesWork,
  requiredDocuments,
  intakes,
  cities,
  achievements,
  coeResults,
  reviews,
  activities,
  faqs,
  site,
  images,
} from '../data'

function useHashScroll() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])
}

export default function Home() {
  useHashScroll()
  return (
    <>
      <Hero />
      <SupportStrip />
      <AboutSection />
      <ServicesSection />
      <CoursesSection />
      <StudySection />
      <StoriesSection />
      <ActivitiesSection />
      <ResultsSection />
      <FaqSection />
      <ContactCta />
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <SmartImage
        src={images.heroPhoto}
        alt="Zin Apex Education students at the airport, departing for Japan"
        className="absolute inset-0 h-full w-full"
        imgClassName="object-top"
      />
      {/* layered premium overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_20%,rgba(245,180,23,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
      {/* floating accent blobs */}
      <div className="float-slow pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="float-slow pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl" style={{ animationDelay: '1.5s' }} />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <span className="animate-fade-up glass-navy inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gold ring-1 ring-gold/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Now enrolling — April, July &amp; October 2026
          </span>
          <h1 className="animate-fade-up delay-1 mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Your Gateway to{' '}
            <span className="gradient-gold">Japan</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-5 text-xl font-medium text-white/90">
            Helping Myanmar Students Study at Top Japanese Language Schools
          </p>
          <p className="animate-fade-up delay-2 mt-4 max-w-xl text-white/75">
            Join thousands of Myanmar students who achieved their dream of
            studying in Japan through our complete guidance and support programs.
          </p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function SupportStrip() {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Complete Student Support
        </h2>
        <p className="mt-2 text-muted-foreground">
          From enrollment to achievement — we're with you every step.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="lift glass flex flex-col items-center rounded-2xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-navy text-white shadow-lg">
                <a.icon className="h-6 w-6" />
              </span>
              <div className="gradient-text mt-3 text-2xl font-bold tracking-tight md:text-4xl">
                {a.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow="About" title="About Zin Apex Education" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
        <SmartImage
          src={images.office}
          alt="Zin Apex Education office in Mandalay"
          className="aspect-[4/3] rounded-3xl border shadow-lg"
        />
        <div>
          <p className="text-muted-foreground">{about.intro}</p>
          <p className="mt-4 text-muted-foreground">{about.detail}</p>

          <div className="mt-8 rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-semibold text-gold">
                {founder.initials}
              </span>
              <div>
                <h3 className="font-medium">{founder.name}</h3>
                <p className="text-sm text-muted-foreground">{founder.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{founder.bio}</p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Youtube className="h-4 w-4" />
              Zin Japan Life on YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <ValueCard icon={<Target className="h-5 w-5" />} title="Mission">
          <ul className="space-y-2">
            {mission.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {m}
              </li>
            ))}
          </ul>
        </ValueCard>
        <ValueCard icon={<Eye className="h-5 w-5" />} title="Vision">
          <p className="text-sm text-muted-foreground">{vision}</p>
        </ValueCard>
        <ValueCard icon={<Compass className="h-5 w-5" />} title="Purpose">
          <ul className="space-y-2">
            {purpose.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </ValueCard>
      </div>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="lift rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-navy text-white shadow-md">
        {icon}
      </div>
      <h3 className="mt-5 font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function ServicesSection() {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete support, every step"
          subtitle="From your first application to your arrival in Japan."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="lift rounded-2xl border bg-background p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-navy text-primary-foreground shadow-md">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-medium">{service.title}</h3>
              <ul className="mt-3 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading title="Why choose Zin Apex Education?" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="lift rounded-2xl border bg-background p-6 shadow-sm">
                <h3 className="flex items-start gap-2 font-semibold">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Courses"
        title="Japanese Language Courses"
        subtitle="Comprehensive JLPT preparation designed to take you from beginner to advanced proficiency."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.title}
            className="lift flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            <div className="relative">
              <SmartImage src={course.image} alt={course.title} className="aspect-[16/9] w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-sm font-bold text-navy shadow-lg">
                {course.code}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                {course.level}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{course.title}</h3>
                <span className="text-sm text-muted-foreground">{course.duration}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
              <h4 className="mt-5 text-sm font-medium">Course Features</h4>
              <ul className="mt-2 space-y-2">
                {course.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-primary mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-gradient-to-br from-card to-accent/40 p-8 shadow-sm">
        <h3 className="text-center text-lg font-semibold">Flexible ways to learn</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {learningFormats.map((f) => (
            <div key={f.title} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-navy text-white shadow-md">
                <f.icon className="h-6 w-6" />
              </span>
              <h4 className="mt-3 font-medium">{f.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading title="Why our courses are effective" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyCoursesWork.map((item, i) => (
            <div key={item.title} className="lift flex gap-4 rounded-2xl border bg-card p-6 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-navy text-sm font-semibold text-white shadow-md">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StudySection() {
  return (
    <section id="study" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Study in Japan"
          title="Your path to a Japanese language school"
          subtitle="Everything you need to know to apply with Zin Apex Education."
        />

        <div className="mt-16 flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold tracking-tight">Required documents (sample)</h3>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {requiredDocuments.map((doc, i) => (
            <li key={doc} className="flex items-start gap-3 rounded-xl border bg-background p-4 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary">
                {i + 1}
              </span>
              {doc}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-background p-8">
            <Download className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-medium">Application form</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download our application form (PDF), fill it out, and send it back to
              us. All required attachments are in the Google Drive folder.
            </p>
            <a
              href={site.applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
            >
              Download form
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl border bg-background p-8">
            <ClipboardList className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-medium">Student orientation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Register through our Google Form to join the orientation briefing and
              get important information about the application process.
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

        <h3 className="mt-12 text-xl font-semibold tracking-tight">Intake schedules</h3>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-accent/60">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium">Intake</th>
                <th className="px-5 py-3 font-medium">Registration Deadline</th>
                <th className="px-5 py-3 font-medium">COE Submission</th>
                <th className="px-5 py-3 font-medium">COE Result</th>
              </tr>
            </thead>
            <tbody>
              {intakes.map((row) => (
                <tr key={row.intake} className="border-t bg-background">
                  <td className="px-5 py-3 font-medium">{row.intake}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.registration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.coeSubmission}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.coeResult}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold tracking-tight">
            Cities where you can apply with us
          </h3>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => (
            <div key={city.name} className="group relative overflow-hidden rounded-xl border">
              <SmartImage
                src={city.image}
                alt={city.name}
                className="aspect-[3/4] w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoriesSection() {
  return (
    <section id="stories" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Student Stories"
        title="Student Reviews"
        subtitle="See how our students benefited from our support services and achieved their study-abroad goals."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <a
            key={i}
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="lift group overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            <div className="relative">
              <SmartImage src={r.image} alt={r.name} className="aspect-video w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/30 transition-colors group-hover:bg-navy/45">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-medium">{r.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.school}</p>
              <p className="text-sm text-muted-foreground">{r.program}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Activities"
          title="Our Activities"
          subtitle="Discover how we support students at every step of their study-abroad journey through our activities and programs."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {activities.map((a) => (
            <div key={a.title} className="lift group relative overflow-hidden rounded-2xl border shadow-sm">
              <SmartImage
                src={a.image}
                alt={a.title}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <span className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white drop-shadow">
                {a.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">Want to share your success story? We'd love to feature you.</p>
          <Link
            to="/contact"
            className="btn-primary mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
          >
            <MessageCircle className="h-4 w-4" />
            Contact us to share your story
          </Link>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Results"
        title="Our COE Result"
        subtitle="This track record demonstrates Zin Apex Education's commitment and capability in guiding students successfully through the Japanese immigration and study application process."
      />
      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.label} className="lift rounded-2xl border bg-card p-6 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-navy text-white shadow-md">
              <a.icon className="h-6 w-6" />
            </span>
            <div className="gradient-text mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {a.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{a.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-accent/60">
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
                <td className="px-5 py-3 font-medium text-primary">{row.successful}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-20 border-t bg-card">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border bg-background">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] border shadow-2xl">
        <SmartImage src={images.mandalay} alt="Mandalay" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_24rem_at_80%_120%,rgba(245,180,23,0.3),transparent_60%)]" />
        <div className="float-slow pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative px-8 py-20 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Ready to begin your journey to{' '}
            <span className="gradient-gold">Japan?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Get in touch with our team for clear guidance and full support.
          </p>
          <Link
            to="/contact"
            className="btn-gold mt-9 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
