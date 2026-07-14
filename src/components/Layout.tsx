import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import {
  Menu,
  X,
  Facebook,
  Youtube,
  Send,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from 'lucide-react'
import { site, images } from '../data'
import { useLang, LangSwitcher } from '../lib/i18n'

function useNav() {
  const { t } = useLang()
  return [
    { label: t.nav.home, href: '/#home' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.courses, href: '/#courses' },
    { label: t.nav.study, href: '/#study' },
    { label: t.nav.stories, href: '/#stories' },
    { label: t.nav.activities, href: '/#activities' },
    { label: t.nav.results, href: '/#results' },
  ]
}

function Brand({ light = false, logoOnlyMobile = false }: { light?: boolean; logoOnlyMobile?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={images.logo}
        alt="Zin Apex Education logo"
        className="h-11 w-11 rounded-2xl object-contain ring-1 ring-gold/50 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:ring-gold"
      />
      <span className={`leading-tight ${logoOnlyMobile ? 'hidden sm:block' : ''}`}>
        <span
          className={`block whitespace-nowrap font-bold tracking-tight ${
            light ? 'text-white' : 'text-primary'
          }`}
        >
          Zin Apex Education
        </span>
        <span
          className={`block text-[0.72rem] font-medium ${
            light ? 'text-white/60' : 'text-muted-foreground'
          }`}
        >
          {site.academy}
        </span>
      </span>
    </Link>
  )
}

function TopBar() {
  const { t } = useLang()
  const phone = site.office.phones[0]
  return (
    <div className="hidden bg-primary text-white md:block">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-6 text-xs font-medium">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {phone}
          </a>
          <a
            href={`mailto:${site.office.email}`}
            className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {site.office.email}
          </a>
        </div>
        <span className="flex items-center gap-1.5 text-white/80">
          <Clock className="h-3.5 w-3.5" />
          {t.topbar.hours}
        </span>
      </div>
    </div>
  )
}

function FloatingContact() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  const actions = [
    {
      label: t.nav.contactUs,
      href: '/contact',
      internal: true,
      color: 'bg-primary text-white',
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      label: 'Facebook',
      href: site.social.facebook,
      color: 'bg-[#1877F2] text-white',
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      label: 'YouTube',
      href: site.social.youtube,
      color: 'bg-[#FF0000] text-white',
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      label: 'Telegram',
      href: site.social.telegram,
      color: 'bg-[#229ED9] text-white',
      icon: <Send className="h-5 w-5" />,
    },
    {
      label: 'TikTok',
      href: site.social.tiktok,
      color: 'bg-black text-white',
      icon: <span className="text-xs font-bold">TT</span>,
    },
  ]

  return (
    <>
      {open && (
        <button
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-primary/10 backdrop-blur-[1px]"
        />
      )}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <div className="flex flex-col items-end gap-3">
          {actions.map((a, i) => {
            const delay = open ? `${(actions.length - 1 - i) * 45}ms` : '0ms'
            const inner = (
              <>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-md">
                  {a.label}
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${a.color}`}
                >
                  {a.icon}
                </span>
              </>
            )
            const cls = `flex items-center gap-2.5 transition-all duration-300 ${
              open
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-3 opacity-0'
            }`
            return a.internal ? (
              <Link
                key={a.label}
                to={a.href}
                onClick={() => setOpen(false)}
                className={cls}
                style={{ transitionDelay: delay }}
              >
                {inner}
              </Link>
            ) : (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={cls}
                style={{ transitionDelay: delay }}
              >
                {inner}
              </a>
            )
          })}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : t.nav.contactUs}
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary shadow-lg transition-transform hover:scale-105"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  )
}

function Header() {
  const { t } = useLang()
  const nav = useNav()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`animate-header sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-[#e5eaf2] bg-white/95 shadow-[0_6px_28px_-16px_rgba(13,27,62,0.35)]'
          : 'border-[#e5eaf2]/60 bg-white/85'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <Brand logoOnlyMobile />

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
          <Link
            to="/contact"
            className="btn-primary btn-shine inline-flex h-10 items-center px-5 text-sm"
          >
            {t.nav.contactUs}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitcher compact />
          <button
            className="text-primary transition-transform active:scale-90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <span className="header-accent" aria-hidden />


      {open && (
        <div className="border-t border-[#e5eaf2] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 inline-flex h-11 items-center justify-center text-sm"
            >
              {t.nav.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Brand light />
          <p className="mt-4 max-w-xs text-sm font-medium text-white/70">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <Social href={site.social.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </Social>
            <Social href={site.social.youtube} label="YouTube">
              <Youtube className="h-4 w-4" />
            </Social>
            <Social href={site.social.telegram} label="Telegram">
              <Send className="h-4 w-4" />
            </Social>
            <Social href={site.social.tiktok} label="TikTok">
              <span className="text-xs font-bold">TT</span>
            </Social>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gold">{t.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li><a href="/#about" className="hover:text-white">{t.footer.linkAbout}</a></li>
            <li><a href="/#courses" className="hover:text-white">{t.footer.linkCourses}</a></li>
            <li><a href="/#study" className="hover:text-white">{t.footer.linkStudy}</a></li>
            <li><a href="/#stories" className="hover:text-white">{t.footer.linkStories}</a></li>
            <li><a href="/#results" className="hover:text-white">{t.footer.linkResults}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold">{t.footer.ourServices}</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            {t.footer.serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold">{t.footer.office}</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li>{site.office.address}</li>
            <li>{site.office.phones.join(' / ')}</li>
            <li>{site.office.email}</li>
            <li>{t.topbar.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm font-medium text-white/60">
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10"
    >
      {children}
    </a>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Per-route, per-language document title + meta description, and SPA
    page_view events for Google Analytics. */
function usePageMeta() {
  const { pathname } = useLocation()
  const { t, lang } = useLang()

  useEffect(() => {
    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: `${site.name} — ${t.hero.titleLead}${t.hero.titleAccent}`,
        description: t.hero.subtitle,
      },
      '/about': { title: `${t.nav.about} | ${site.name}`, description: t.aboutSection.intro },
      '/courses': { title: `${t.nav.courses} | ${site.name}`, description: t.coursesPage.heroSub },
      '/study-in-japan': { title: `${t.nav.study} | ${site.name}`, description: t.studyPage.heroSub },
      '/faq': { title: `${t.faqPage.heroTitle} | ${site.name}`, description: t.faqPage.stillBody },
      '/contact': { title: `${t.nav.contactUs} | ${site.name}`, description: t.contactPage.heroSub },
    }
    const meta = pages[pathname] ?? pages['/']
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description)

    window.gtag?.('event', 'page_view', {
      page_path: pathname,
      page_title: meta.title,
      page_language: lang,
    })
  }, [pathname, t, lang])
}

function useScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('revealed'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    const observeAll = () => {
      document
        .querySelectorAll('[data-reveal]:not(.revealed)')
        .forEach((el) => io.observe(el))
    }
    observeAll()
    // Lazy-loaded routes render after this effect runs — watch for the new
    // [data-reveal] elements so they still animate in.
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [pathname])
}

export default function Layout() {
  usePageMeta()
  useScrollReveal()
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
