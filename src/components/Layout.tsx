import { Link, Outlet } from 'react-router'
import {
  Home as HomeIcon,
  BookOpen,
  Plane,
  Trophy,
  Phone,
  Facebook,
  Youtube,
  Send,
} from 'lucide-react'
import { site, images } from '../data'

const nav = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Study in Japan', href: '/#study' },
  { label: 'Stories', href: '/#stories' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Results', href: '/#results' },
]

const mobileNav = [
  { label: 'Home', href: '/#home', icon: HomeIcon },
  { label: 'Courses', href: '/#courses', icon: BookOpen },
  { label: 'Study', href: '/#study', icon: Plane },
  { label: 'Results', href: '/#results', icon: Trophy },
  { label: 'Contact', href: '/contact', icon: Phone },
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={images.logo}
        alt="Zin Apex Education logo"
        className="h-11 w-11 rounded-2xl object-contain ring-2 ring-gold/60"
      />
      <span className="leading-tight">
        <span
          className={`block font-black uppercase tracking-tight ${
            light ? 'text-white' : 'text-primary'
          }`}
        >
          Zin Apex Education
        </span>
        <span
          className={`block text-[0.7rem] font-bold uppercase tracking-widest ${
            light ? 'text-white/60' : 'text-muted-foreground'
          }`}
        >
          {site.academy}
        </span>
      </span>
    </Link>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-primary hidden h-10 items-center px-5 text-xs lg:inline-flex"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5eaf2] bg-white/95 shadow-[0_-8px_24px_-12px_rgba(0,31,77,0.2)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2">
        {mobileNav.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Brand light />
          <p className="mt-4 max-w-xs text-sm font-medium text-white/70">
            Your trusted partner for Japanese language learning and study-in-Japan
            support — helping students achieve their dreams since {site.since}.
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
          <h4 className="font-black uppercase tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li><a href="/#about" className="hover:text-white">About</a></li>
            <li><a href="/#courses" className="hover:text-white">Japanese Courses</a></li>
            <li><a href="/#study" className="hover:text-white">Study in Japan</a></li>
            <li><a href="/#stories" className="hover:text-white">Student Stories</a></li>
            <li><a href="/#results" className="hover:text-white">Our COE Result</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-wide text-gold">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li>Student Placement &amp; Documentation</li>
            <li>Visa &amp; Travel Arrangements</li>
            <li>Arrival Support in Japan</li>
            <li>Japanese Language &amp; Skills Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-wide text-gold">{site.office.label}</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li>{site.office.address}</li>
            <li>{site.office.phones.join(' / ')}</li>
            <li>{site.office.email}</li>
            <li>{site.office.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm font-medium text-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
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

export default function Layout() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
