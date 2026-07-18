import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Check,
  Star,
  Play,
  Plane,
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
  Facebook,
} from 'lucide-react'
import SmartImage from '../components/SmartImage'
import LeadForm from '../components/LeadForm'
import {
  founder,
  journey,
  services,
  courses,
  learningFormats,
  intakes,
  cities,
  achievements,
  coeResults,
  coeSuccessRate,
  activities,
  site,
  images,
} from '../data'
import { useLang, localizeNumber } from '../lib/i18n'

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
      <QuickActions />
      <SupportStrip />
      <AboutSection />
      <VideoSection />
      <ServicesSection />
      <JourneySection />
      <CoursesSection />
      <StudySection />
      <MeetInJapanBanner />
      <StoriesSection />
      <TestimonialsSection />
      <ActivitiesSection />
      <ResultsSection />
      <FaqSection />
      <LeadSection />
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
  const { t, lang } = useLang()
  return (
    <section
      id="home"
      className="relative flex min-h-[82vh] items-center overflow-hidden bg-primary md:min-h-[88vh]"
    >
      {/* full-viewport photo with slow zoom */}
      <div className="absolute inset-0">
        <SmartImage
          src={images.heroPhoto}
          alt="ZAE students arriving in Japan"
          className="h-full w-full"
          imgClassName="animate-kenburns"
          priority
        />
      </div>
      {/* readability gradients — photo stays visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/45 to-primary/5" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-primary/85 to-transparent" />

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

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-16 md:pb-36">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.hero.badge}
          </span>
          <h1 className="animate-fade-up delay-1 mt-5 max-w-xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {t.hero.titleLead}
            <span className="text-gold">{t.hero.titleAccent}</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base font-medium text-white/80 md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#consultation"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              {t.hero.cta2}
            </a>
          </div>
          <div className="animate-fade-up delay-4 mt-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm font-medium text-white/75">
            <span className="text-gold">★</span>
            <span>{t.hero.trust1}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{t.hero.trust2}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{t.hero.trust3.replace('{rate}', localizeNumber(coeSuccessRate, lang))}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const quickActionMeta = [
  { icon: MessageCircle, href: '/contact', internal: true },
  { icon: Download, href: '', internal: false },
  { icon: FileCheck, href: '/#study', internal: false },
]

function QuickActions() {
  const { t } = useLang()
  return (
    <section className="relative z-10 mx-auto -mt-24 w-full max-w-6xl px-6 md:-mt-28">
      <div className="grid gap-4 md:grid-cols-3">
        {quickActionMeta.map((item, i) => {
          const Icon = item.icon
          const text = t.quick[i]
          const href = i === 1 ? site.formPdfUrl : item.href
          const inner = (
            <>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-gold">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="flex items-center gap-1.5 font-bold text-primary">
                  {text.title}
                  <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 block text-sm font-medium text-muted-foreground">
                  {text.description}
                </span>
              </span>
            </>
          )
          const cardClass =
            'lift group flex items-start gap-4 rounded-2xl border border-[#e5eaf2] bg-white p-6 shadow-xl'
          return item.internal ? (
            <Link key={text.title} to={href} className={cardClass}>
              {inner}
            </Link>
          ) : (
            <a
              key={text.title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={cardClass}
            >
              {inner}
            </a>
          )
        })}
      </div>
    </section>
  )
}

function SupportStrip() {
  const { t } = useLang()
  return (
    <section className="border-b bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* clean bento photo grid */}
        <div data-reveal className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <SmartImage
              src={images.support}
              alt="ZAE students at the orientation ceremony"
              className="aspect-[16/10] w-full"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              {t.support.photoCaption}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <SmartImage
                src={images.heroPhoto}
                alt="ZAE students arriving in Japan"
                className="aspect-[16/10] w-full"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <SmartImage
                src={images.heroSecondary}
                alt="Students under cherry blossoms in Japan"
                className="aspect-[16/10] w-full"
              />
            </div>
          </div>
        </div>

        {/* text + stats */}
        <div data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {t.support.eyebrow}
          </span>
          <h2 className="heading-black mt-4 text-3xl md:text-4xl">
            {t.support.title}
          </h2>
          <p className="mt-3 font-medium text-muted-foreground">
            {t.support.subtitle}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#e5eaf2] bg-background p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <a.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-2xl font-extrabold tracking-tight text-primary">
                  {a.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {t.achievements[i]}
                </div>
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
  const { t } = useLang()
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow={t.aboutSection.eyebrow} title={t.aboutSection.title} />
      <div data-reveal className="mt-12 grid items-center gap-12 lg:grid-cols-2">
        <SmartImage
          src={images.office}
          alt="Zin Apex Education office in Mandalay"
          className="aspect-[4/3] rounded-2xl border border-[#e5eaf2] shadow-sm"
        />
        <div>
          <p className="font-medium text-muted-foreground">{t.aboutSection.intro}</p>
          <p className="mt-4 font-medium text-muted-foreground">{t.aboutSection.detail}</p>

          <div className="mt-8 rounded-2xl border border-[#e5eaf2] bg-white p-7 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-gold">
                {founder.initials}
              </span>
              <div>
                <h3 className="font-bold tracking-tight">{founder.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {t.aboutSection.founderRole}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {t.aboutSection.founderBio}
            </p>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
            >
              <Youtube className="h-4 w-4" />
              {t.aboutSection.youtubeLink}
            </a>
          </div>
        </div>
      </div>

      <div data-reveal className="mt-12 grid gap-6 md:grid-cols-3">
        <ValueCard icon={<Target className="h-5 w-5" />} title={t.aboutSection.mission}>
          <ul className="space-y-2">
            {t.aboutSection.missionItems.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {m}
              </li>
            ))}
          </ul>
        </ValueCard>
        <ValueCard icon={<Eye className="h-5 w-5" />} title={t.aboutSection.vision}>
          <p className="text-sm text-muted-foreground">{t.aboutSection.visionText}</p>
        </ValueCard>
        <ValueCard icon={<Compass className="h-5 w-5" />} title={t.aboutSection.purpose}>
          <ul className="space-y-2">
            {t.aboutSection.purposeItems.map((p) => (
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

function YouTubeFacade({
  id,
  title,
  large = false,
}: {
  id: string
  title: string
  large?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget
              if (img.dataset.fallback) return
              img.dataset.fallback = '1'
              img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-primary/25 transition-colors group-hover:bg-primary/40" />
          <span
            className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-primary shadow-xl transition-transform duration-300 group-hover:scale-110 ${
              large ? 'h-20 w-20' : 'h-14 w-14'
            }`}
          >
            <Play className={`fill-current ${large ? 'ml-1 h-8 w-8' : 'ml-0.5 h-6 w-6'}`} />
          </span>
        </button>
      )}
    </div>
  )
}

function VideoSection() {
  const { t } = useLang()
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.videoSection.eyebrow}
          </span>
          <h2 className="heading-black mt-5 text-3xl text-white md:text-5xl">
            {t.videoSection.title}
          </h2>
          <p className="mt-4 font-medium text-white/75">{t.videoSection.subtitle}</p>
        </div>

        <div data-reveal className="mt-12">
          <YouTubeFacade id={site.promoVideoId} title={t.videoSection.title} large />
        </div>
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
  const { t } = useLang()
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          subtitle={t.servicesSection.subtitle}
        />
        <div data-reveal className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const text = t.services[i]
            return (
              <div
                key={text.title}
                className="lift rounded-2xl border border-[#e5eaf2] bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{text.title}</h3>
                <ul className="mt-3 space-y-2">
                  {text.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <SectionHeading title={t.servicesSection.whyTitle} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyChooseUs.map((item) => (
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
  const { t } = useLang()
  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.journeySection.eyebrow}
        title={t.journeySection.title}
        subtitle={t.journeySection.subtitle}
      />
      <div data-reveal className="relative mt-16">
        {/* flying plane across the journey (desktop) */}
        <span className="journey-plane -top-12 hidden text-secondary lg:block" aria-hidden>
          <Plane className="h-7 w-7 fill-current" />
        </span>

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {journey.map((item, i) => {
            const text = t.journey[i]
            return (
              <li
                key={item.step}
                className="journey-step relative"
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                {/* connector line (desktop) */}
                {i < journey.length - 1 && (
                  <span
                    aria-hidden
                    className="journey-line absolute left-[calc(50%+28px)] top-6 hidden h-0.5 w-[calc(100%-56px)] rounded-full bg-gradient-to-r from-secondary/50 to-gold/60 lg:block"
                    style={{ transitionDelay: `${i * 160 + 220}ms` }}
                  />
                )}
                <div className="group flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/40 bg-white text-sm font-bold text-secondary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-primary">
                    {item.step}
                  </span>
                  <div className="lg:mt-4">
                    <h3 className="font-bold tracking-tight">{text.title}</h3>
                    <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                      {text.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function CoursesSection() {
  const { t } = useLang()
  return (
    <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.coursesSection.eyebrow}
        title={t.coursesSection.title}
        subtitle={t.coursesSection.subtitle}
      />
      <div data-reveal className="mt-16 grid gap-6 md:grid-cols-2">
        {courses.map((course, ci) => {
          const text = t.courses[ci]
          return (
            <div
              key={text.title}
              className="lift flex flex-col overflow-hidden rounded-2xl border border-[#e5eaf2] bg-white shadow-sm"
            >
              <div className="relative">
                <SmartImage src={course.image} alt={text.title} className="aspect-[16/9] w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-sm font-bold text-primary">
                  {course.code}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur">
                  {text.level}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-tight">{text.title}</h3>
                  <span className="text-sm font-semibold text-muted-foreground">{text.duration}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{text.description}</p>
                <h4 className="mt-5 text-sm font-medium">{t.coursesSection.features}</h4>
                <ul className="mt-2 space-y-2">
                  {text.features.map((f) => (
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
                  {t.coursesSection.enroll}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-[#e5eaf2] bg-white p-10 shadow-sm">
        <h3 className="text-center text-xl font-bold tracking-tight">
          {t.coursesSection.flexibleTitle}
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {learningFormats.map((f, i) => {
            const text = t.learningFormats[i]
            return (
              <div key={text.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                  <f.icon className="h-7 w-7" />
                </span>
                <h4 className="mt-4 font-bold tracking-tight">{text.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{text.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading title={t.coursesSection.whyTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.whyCoursesWork.map((item, i) => (
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
  const { t } = useLang()
  return (
    <section id="study" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={t.studySection.eyebrow}
          title={t.studySection.title}
          subtitle={t.studySection.subtitle}
        />

        <div className="mt-16 flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold tracking-tight">{t.studySection.docsTitle}</h3>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.requiredDocuments.map((doc, i) => (
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
            <h3 className="mt-5 text-lg font-bold tracking-tight">{t.studySection.formTitle}</h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {t.studySection.formBody}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.formPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex h-12 items-center gap-2 px-6 text-sm"
              >
                {t.studySection.download}
                <Download className="h-4 w-4" />
              </a>
              <a
                href={site.formSampleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#e5eaf2] px-5 text-sm font-semibold transition-colors hover:bg-accent"
              >
                {t.studySection.viewSample}
              </a>
            </div>
            <a
              href={site.applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:underline"
            >
              {t.studySection.driveLink}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="rounded-2xl border border-[#e5eaf2] bg-white p-9 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <ClipboardList className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight">
              {t.studySection.orientationTitle}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {t.studySection.orientationBody}
            </p>
            <a
              href={site.orientationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#e5eaf2] px-6 text-sm font-semibold transition-colors hover:bg-accent"
            >
              {t.studySection.register}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <h3 className="mt-12 text-xl font-semibold tracking-tight">{t.studySection.intakeTitle}</h3>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-accent/60">
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
                  <tr key={row.intake} className="border-t bg-background">
                    <td className="px-5 py-3 font-medium">{text.intake}</td>
                    <td className="px-5 py-3 text-muted-foreground">{text.registration}</td>
                    <td className="px-5 py-3 text-muted-foreground">{text.coeSubmission}</td>
                    <td className="px-5 py-3 text-muted-foreground">{text.coeResult}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold tracking-tight">
            {t.studySection.citiesTitle}
          </h3>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city, i) => (
            <div key={city.name} className="group relative overflow-hidden rounded-xl border">
              <SmartImage
                src={city.image}
                alt={t.cities[i]}
                className="aspect-[3/4] w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                {t.cities[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MeetInJapanBanner() {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden scroll-mt-20" id="community">
      <div className="absolute inset-0">
        <SmartImage
          src={images.shibuya}
          alt=""
          className="h-full w-full"
          imgClassName="animate-kenburns"
        />
      </div>
      <div className="absolute inset-0 bg-primary/75" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <span className="mx-auto mb-6 block h-1 w-14 rounded-full bg-gold" aria-hidden />
        <p
          data-reveal
          className="heading-black text-2xl leading-snug text-white md:text-4xl"
        >
          {t.banner.meetInJapan}
        </p>
      </div>
    </section>
  )
}

function StoriesSection() {
  const { t } = useLang()
  return (
    <section id="stories" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.storiesSection.eyebrow}
        title={t.storiesSection.title}
        subtitle={t.storiesSection.subtitle}
      />
      <div data-reveal className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
        {site.reviewVideoIds.map((vid) => (
          <div key={vid}>
            <YouTubeFacade id={vid} title={t.storiesSection.storyName} />
            <p className="mt-4 text-center font-bold tracking-tight text-primary">
              {t.storiesSection.storyName}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { t } = useLang()
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={t.testimonialsSection.eyebrow}
          title={t.testimonialsSection.title}
          subtitle={t.testimonialsSection.subtitle}
        />
        <div data-reveal className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {t.testimonials.map((item) => (
            <figure
              key={item.name}
              className="lift flex flex-col rounded-2xl border border-[#e5eaf2] bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Facebook className="h-4 w-4 text-[#1877F2]" aria-hidden />
              </div>
              <blockquote className="mt-4 flex-1 text-sm font-medium leading-relaxed text-muted-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-gold">
                  {item.name.split(' ').slice(-1)[0][0]}
                </span>
                <span>
                  <span className="block text-sm font-bold text-primary">{item.name}</span>
                  <span className="block text-xs font-medium text-muted-foreground">
                    {item.intake}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActivitiesSection() {
  const { t } = useLang()
  return (
    <section id="activities" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow={t.activitiesSection.eyebrow}
          title={t.activitiesSection.title}
          subtitle={t.activitiesSection.subtitle}
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
                alt={t.activities[i]}
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
                {t.activities[i]}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="font-medium text-muted-foreground">{t.activitiesSection.shareText}</p>
          <Link
            to="/contact"
            className="btn-primary mt-5 inline-flex h-12 items-center gap-2 px-6 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            {t.activitiesSection.shareCta}
          </Link>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  const { t } = useLang()
  return (
    <section id="results" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow={t.resultsSection.eyebrow}
        title={t.resultsSection.title}
        subtitle={t.resultsSection.subtitle}
      />
      <p
        data-reveal
        className="mx-auto mt-8 max-w-3xl rounded-2xl bg-primary px-6 py-5 text-center text-base font-bold leading-snug text-white shadow-sm md:text-lg"
      >
        {t.resultsSection.tagline}
      </p>
      <div data-reveal className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.map((a, i) => (
          <div key={i} className="lift rounded-2xl border border-[#e5eaf2] bg-white p-7 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <a.icon className="h-7 w-7" />
            </span>
            <div className="mt-4 text-4xl font-bold tracking-tight text-primary">
              {a.value}
            </div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">
              {t.achievements[i]}
            </div>
          </div>
        ))}
      </div>

      {/* COE results bar chart */}
      <div
        data-reveal
        className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#e5eaf2] bg-white p-6 shadow-sm md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold tracking-tight">{t.resultsSection.chartTitle}</h3>
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-secondary/30" />
              {t.resultsSection.legendApplicants}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-gold" />
              {t.resultsSection.legendSuccessful}
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-3 md:gap-8">
          {coeResults.map((row, gi) => {
            const successful = parseInt(row.successful, 10) || 0
            const pending = row.successful.includes('pending')
            const max = Math.max(...coeResults.map((r) => r.applicants))
            const yearLabel = row.year.replace(' (Oct intake)', '')
            return (
              <div key={row.year} className="flex flex-1 flex-col items-center">
                <div className="flex h-44 items-end gap-1.5 md:h-56 md:gap-2">
                  <div className="flex h-full flex-col items-center justify-end">
                    <span className="mb-1 text-[11px] font-bold text-secondary">
                      {row.applicants}
                    </span>
                    <div
                      className="chart-bar w-5 rounded-t-md bg-secondary/30 md:w-8"
                      style={{
                        height: `${(row.applicants / max) * 100}%`,
                        transitionDelay: `${gi * 120}ms`,
                      }}
                    />
                  </div>
                  <div className="flex h-full flex-col items-center justify-end">
                    <span className="mb-1 text-[11px] font-bold text-primary">
                      {successful}
                    </span>
                    <div
                      className="chart-bar w-5 rounded-t-md bg-gold md:w-8"
                      style={{
                        height: `${Math.max((successful / max) * 100, 2)}%`,
                        transitionDelay: `${gi * 120 + 60}ms`,
                      }}
                    />
                  </div>
                </div>
                <span className="mt-3 text-xs font-semibold text-muted-foreground md:text-sm">
                  {yearLabel}
                </span>
                {pending && (
                  <span className="mt-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {t.resultsSection.pending}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-20 border-t bg-card">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow={t.faqSection.eyebrow} title={t.faqSection.title} />
        <div className="mt-12 space-y-3">
          {t.faqs.map((faq, i) => {
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

function LeadSection() {
  const { t, lang } = useLang()
  const points = [
    t.hero.trust1,
    t.hero.trust2,
    t.hero.trust3.replace('{rate}', localizeNumber(coeSuccessRate, lang)),
  ]
  return (
    <section id="consultation" className="relative scroll-mt-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-25">
        <SmartImage src={images.mandalay} alt="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
        <div data-reveal className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.leadForm.eyebrow}
          </span>
          <h2 className="heading-black mt-5 text-3xl md:text-4xl">
            {t.leadForm.title}
          </h2>
          <p className="mt-4 max-w-md font-medium text-white/80">
            {t.leadForm.subtitle}
          </p>
          <ul className="mt-7 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
