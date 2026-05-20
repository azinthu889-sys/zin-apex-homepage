import { useState } from 'react'
import { Link, Outlet } from 'react-router'
import { Menu, X, Facebook, Youtube, Send } from 'lucide-react'
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

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={images.logo}
        alt="Zin Apex Education logo"
        className="h-11 w-11 rounded-2xl object-contain ring-1 ring-gold/50"
      />
      <span className="leading-tight">
        <span
          className={`block font-bold tracking-tight ${
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

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5eaf2] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex">
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

        <Link
          to="/contact"
          className="btn-primary hidden h-10 items-center px-5 text-sm lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          className="text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
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
          <h4 className="font-semibold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li><a href="/#about" className="hover:text-white">About</a></li>
            <li><a href="/#courses" className="hover:text-white">Japanese Courses</a></li>
            <li><a href="/#study" className="hover:text-white">Study in Japan</a></li>
            <li><a href="/#stories" className="hover:text-white">Student Stories</a></li>
            <li><a href="/#results" className="hover:text-white">Our COE Result</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm font-medium text-white/70">
            <li>Student Placement &amp; Documentation</li>
            <li>Visa &amp; Travel Arrangements</li>
            <li>Arrival Support in Japan</li>
            <li>Japanese Language &amp; Skills Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold">{site.office.label}</h4>
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
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
