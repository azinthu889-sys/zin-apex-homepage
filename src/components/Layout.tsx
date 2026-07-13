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
    <Link to="/" className="flex items-center gap-3">
      <img
        src={images.logo}
        alt="Zin Apex Education logo"
        className="h-11 w-11 rounded-2xl object-contain ring-1 ring-gold/50"
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
  return (
    <Link
      to="/contact"
      aria-label={t.nav.contactUs}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}

function Header() {
  const { t } = useLang()
  const nav = useNav()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5eaf2] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Brand logoOnlyMobile />

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
          <Link
            to="/contact"
            className="btn-primary inline-flex h-10 items-center px-5 text-sm"
          >
            {t.nav.contactUs}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitcher compact />
          <button
            className="text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

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

function useScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (els.length === 0) return
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'))
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
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export default function Layout() {
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
