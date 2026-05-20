import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { GraduationCap, Menu, X, Facebook, Youtube, Send } from 'lucide-react'
import { site } from '../data'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Study in Japan', to: '/study-in-japan' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <GraduationCap className="h-4 w-4" />
      </span>
      <span className="text-base">Zin Apex Education</span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Brand />

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-foreground ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Apply now
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm text-primary-foreground"
            >
              Apply now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Brand />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Japanese language courses and complete study-in-Japan support for
            Burmese students — from application to arrival.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:bg-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:bg-accent"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:bg-accent"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors hover:bg-accent"
            >
              TT
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-foreground">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/study-in-japan" className="hover:text-foreground">
                Study in Japan
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">{site.office.label}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{site.office.address}</li>
            <li>{site.office.phones.join(' / ')}</li>
            <li>{site.office.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zin Apex Education. All rights reserved.
        </p>
      </div>
    </footer>
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
