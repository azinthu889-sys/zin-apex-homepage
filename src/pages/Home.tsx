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
  journey,
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
      <JourneySection />
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

const sakuraPetals = [
  { left: '4%', dur: '11s', delay: '-2s', size: 13 },
  { left: '12%', dur: '14s', delay: '-7s', size: 10 },
  { left: '22%', dur: '12s', delay: '-4s', size: 15 },
  { left: '31%', dur: '16s', delay: '-10s', size: 9 },
  { left: '42%', dur: '13s', delay: '-1s', size: 12 },
  { left: '53%', dur: '15s', delay: '-8s', size: 10 },
  { left: '63%', dur: '11s', delay: '-5s', size: 14 },
  { left: '72%', dur: '14s', delay: '-11s', size: 9 },
  { left: '82%', dur: '12s', delay: '-3s', size: 13 },
  { left: '91%', dur: '16s', delay: '-9s', size: 11 },
  { left: '48%', dur: '18s', delay: '-13s', size: 8 },
  { left: '8%', dur: '17s', delay: '-14s', size: 8 },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#e8f2fc] via-[#f2f7ff] to-card"
    >
      {/* falling sakura petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {sakuraPetals.map((p, i) => (
          <span
            key={i}
            className="sakura-petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
      {/* soft floating accents */}
      <div className="float-slow pointer-events-none absolute left-[8%] top-24 h-3 w-3 rounded-full bg-gold/80" />
      <div className="float-slow pointer-events-none absolute right-[10%] top-32 h-4 w-4 rounded-full bg-secondary/50" style={{ animationDelay: '1.2s' }} />
      <div className="float-slow pointer-events-none absolute right-[20%] top-64 text-xl text-gold" style={{ animationDelay: '0.6s' }}>★</div>

      {/* centered text */}
      <div className="relative mx-auto max-w-3xl px-6 pt-16 text-center md:pt-24">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Now enrolling — 2026 intakes
        </span>
        <h1 className="animate-fade-up delay-1 mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-primary md:text-6xl">
          Your Gateway to{' '}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-[38%] -rotate-1 rounded-md bg-gold/70" />
            <span className="relative">Japan</span>
          </span>
        </h1>
        <p className="animate-fade-up delay-2 mx-auto mt-4 max-w-xl text-base font-medium text-muted-foreground md:text-lg">
          Helping Myanmar students study at top Japanese language schools — full
          guidance and support from application to arrival.
        </p>
        <div className="animate-fade-up delay-3 mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#courses"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/15 bg-white/70 px-7 py-3.5 text-sm font-semibold tracking-wide text-primary backdrop-blur transition-colors hover:bg-accent"
          >
            Explore Courses
          </a>
        </div>
        <div className="animate-fade-up delay-4 mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm font-medium text-muted-foreground">
          <span className="text-gold">★</span>
          <span>Trusted since 2023</span>
          <span className="h-1 w-1 rounded-full bg-primary/20" />
          <span>100+ placed in Japan</span>
          <span className="h-1 w-1 rounded-full bg-primary/20" />
          <span>97% COE success</span>
        </div>
      </div>

      {/* auto-scrolling photo film-strip */}
      <div className="marquee-mask animate-fade-up delay-3 relative mt-12 pb-20 md:mt-14">
        <div className="animate-marquee flex w-max gap-5 pr-5">
          {[...activities, ...activities].map((a, i) => (
            <div
              key={`${a.title}-${i}`}
              className={`h-48 w-72 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:h-60 md:w-[22rem] ${
                i % 2 === 0 ? '-rotate-1' : 'rotate-1'
              }`}
            >
              <SmartImage src={a.image} alt={a.title} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SupportStrip() {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:items-stretch">
        {/* photo */}
        <div data-reveal className="h-full">
          <SmartImage
            src={images.support}
            alt="Zin Apex Education students celebrating their journey to Japan"
            className="aspect-[4/3] w-full rounded-2xl border border-[#e5eaf2] lg:aspect-auto lg:h-full"
          />
        </div>

        {/* text + stats */}
        <div data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Support
          </span>
          <h2 className="heading-black mt-4 text-3xl md:text-4xl">
            Complete Student Support
          </h2>
          <p className="mt-3 font-medium text-muted-foreground">
            From enrollment to achievement — we're with you every step of the way.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-[#e5eaf2] bg-background p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <a.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-2xl font-extrabold tracking-tight text-primary">
                  {a.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{a.label}</div>
              </div>
            ))}
          </div>
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
    <div data-reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading-black mt-5 text-3xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 font-medium text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow="About" title="About Zin Apex Education" />
      <div data-reveal className="mt-12 grid items-center gap-12 lg:grid-cols-2">
        <SmartImage
          src={images.office}
          alt="Zin Apex Education office in Mandalay"
          className="aspect-[4/3] rounded-2xl border border-[#e5eaf2] shadow-sm"
        />
        <div>
          <p className="font-medium text-muted-foreground">{about.intro}</p>
          <p className="mt-4 font-medium text-muted-foreground">{about.detail}</p>

          <div className="mt-8 rounded-2xl border border-[#e5eaf2] bg-white p-7 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-gold">
                {founder.initials}
              </span>
              <div>
                <h3 className="font-bold tracking-tight">{founder.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{founder.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-muted-foreground">{founder.bio}</p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
            >
              <Youtube className="h-4 w-4" />
              Zin Japan Life on YouTube
            </a>
          </div>
        </div>
      </div>

      <div data-reveal className="mt-12 grid gap-6 md:grid-cols-3">
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
    <div className="lift rounded-2xl border border-[#e5eaf2] bg-white p-8 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
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
        <div data-reveal className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="lift rounded-2xl border border-[#e5eaf2] bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{service.title}</h3>
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
              <div key={item.title} className="lift rounded-2xl border border-[#e5eaf2] bg-white p-7 shadow-sm">
                <h3 className="flex items-start gap-2.5 font-bold tracking-tight">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="How it works"
        title="Your journey to Japan"
        subtitle="A clear, guided process — from your first consultation to your first day in Japan."
      />
      <ol data-reveal className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {journey.map((item, i) => (
          <li key={item.step} className="relative">
            {/* connector line (desktop) */}
            {i < journey.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[calc(50%+28px)] top-6 hidden h-px w-[calc(100%-56px)] bg-[#e5eaf2] lg:block"
              />
            )}
            <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-white text-sm font-bold text-secondary">
                {item.step}
              </span>
              <div className="lg:mt-4">
                <h3 className="font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
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
      <div data-reveal className="mt-16 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.title}
            className="lift flex flex-col overflow-hidden rounded-2xl border border-[#e5eaf2] bg-white shadow-sm"
          >
            <div className="relative">
              <SmartImage src={course.image} alt={course.title} className="aspect-[16/9] w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-sm font-bold text-primary">
                {course.code}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur">
                {course.level}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight">{course.title}</h3>
                <span className="text-sm font-semibold text-muted-foreground">{course.duration}</span>
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

      <div className="mt-12 rounded-2xl border border-[#e5eaf2] bg-white p-10 shadow-sm">
        <h3 className="text-center text-xl font-bold tracking-tight">Flexible ways to learn</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {learningFormats.map((f) => (
            <div key={f.title} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <f.icon className="h-7 w-7" />
              </span>
              <h4 className="mt-4 font-bold tracking-tight">{f.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading title="Why our courses are effective" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyCoursesWork.map((item, i) => (
            <div key={item.title} className="lift flex gap-4 rounded-2xl border border-[#e5eaf2] bg-white p-7 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{item.description}</p>
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
          <div className="rounded-2xl border border-[#e5eaf2] bg-white p-9 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <Download className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight">Application form</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Download our application form (PDF), fill it out, and send it back to
              us. All required attachments are in the Google Drive folder.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.formPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex h-12 items-center gap-2 px-6 text-sm"
              >
                Download form
                <Download className="h-4 w-4" />
              </a>
              <a
                href={site.formSampleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#e5eaf2] px-5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                View sample
              </a>
            </div>
            <a
              href={site.applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:underline"
            >
              Open Drive folder &amp; attachments
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="rounded-2xl border border-[#e5eaf2] bg-white p-9 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <ClipboardList className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight">Student orientation</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Register through our Google Form to join the orientation briefing and
              get important information about the application process.
            </p>
            <a
              href={site.orientationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#e5eaf2] px-6 text-sm font-semibold transition-colors hover:bg-accent"
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
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
      <div data-reveal className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <a
            key={i}
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="lift group overflow-hidden rounded-2xl border border-[#e5eaf2] bg-white shadow-sm"
          >
            <div className="relative">
              <SmartImage src={r.image} alt={r.name} className="aspect-video w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/35 transition-colors group-hover:bg-primary/50">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold tracking-tight">{r.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{r.school}</p>
              <p className="text-sm font-medium text-muted-foreground">{r.program}</p>
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
        <div data-reveal className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {activities.map((a, i) => (
            <div
              key={a.title}
              className={`lift group relative overflow-hidden rounded-2xl border border-[#e5eaf2] shadow-sm ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <SmartImage
                src={a.image}
                alt={a.title}
                className={`w-full ${
                  i === 0 ? 'h-full min-h-[280px] md:min-h-[460px]' : 'aspect-[4/3]'
                }`}
                imgClassName="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <span
                className={`absolute bottom-4 left-5 right-5 font-bold tracking-tight text-white drop-shadow ${
                  i === 0 ? 'text-lg' : 'text-sm'
                }`}
              >
                {a.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="font-medium text-muted-foreground">Want to share your success story? We'd love to feature you.</p>
          <Link
            to="/contact"
            className="btn-primary mt-5 inline-flex h-12 items-center gap-2 px-6 text-sm"
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
      <div data-reveal className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.label} className="lift rounded-2xl border border-[#e5eaf2] bg-white p-7 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <a.icon className="h-7 w-7" />
            </span>
            <div className="mt-4 text-4xl font-bold tracking-tight text-primary">
              {a.value}
            </div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">{a.label}</div>
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
              <div key={faq.q} className="overflow-hidden rounded-xl border border-[#e5eaf2] bg-white shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t px-6 py-5 text-sm font-medium leading-relaxed text-muted-foreground">
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
      <div className="relative overflow-hidden rounded-3xl bg-primary shadow-lg">
        <SmartImage src={images.mandalay} alt="Mandalay" className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55" />
        <div className="relative px-8 py-20 text-center text-white">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready to begin your journey to{' '}
            <span className="text-gold">Japan?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-medium text-white/80">
            Get in touch with our team for clear guidance and full support.
          </p>
          <Link
            to="/contact"
            className="btn-gold mt-9 inline-flex h-14 items-center gap-2 px-8 text-sm"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
