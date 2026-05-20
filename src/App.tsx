import { useState } from 'react'
import {
  ArrowRight,
  Menu,
  X,
  Zap,
  ShieldCheck,
  BarChart3,
  Workflow,
  Globe,
  Sparkles,
  Check,
} from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built on a modern edge stack so your pages load in milliseconds, anywhere in the world.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description:
      'Enterprise-grade security with encryption at rest and in transit, baked into every layer.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    description:
      'Understand your users with real-time dashboards and clear, decision-ready insights.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description:
      'Connect your tools and let repetitive tasks run themselves while you focus on growth.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description:
      'Serve millions of customers across regions without ever rethinking your infrastructure.',
  },
  {
    icon: Sparkles,
    title: 'Delightful by Design',
    description:
      'A polished experience your team and customers will actually love using every day.',
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '12k+', label: 'Active teams' },
  { value: '50ms', label: 'Avg. response' },
  { value: '24/7', label: 'Support' },
]

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'For individuals getting started.',
    features: ['1 project', 'Community support', 'Basic analytics'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For growing teams that need more.',
    features: [
      'Unlimited projects',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations at scale.',
    features: [
      'Dedicated infrastructure',
      'SLA & SSO',
      'Onboarding & training',
      'Dedicated manager',
    ],
    highlighted: false,
  },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg">Zin Apex</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm text-primary-foreground"
            >
              Get started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 to-background" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          Now in public beta
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Build something people love, faster than ever
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Zin Apex gives your team everything it needs to launch, scale, and grow —
          all in one beautifully simple platform.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border bg-card px-6 py-3 transition-colors hover:bg-accent"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need, nothing you don't
        </h2>
        <p className="mt-4 text-muted-foreground">
          Powerful tools that work together so you can ship with confidence.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-medium">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Solutions() {
  return (
    <section id="solutions" className="border-y bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            One platform for your whole team
          </h2>
          <p className="mt-4 text-muted-foreground">
            From design to deployment, Zin Apex keeps everyone aligned with a shared
            source of truth and workflows that adapt to how you work.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'Real-time collaboration across every project',
              'Granular roles and permissions for peace of mind',
              'Integrations with the tools you already use',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-gradient-to-br from-accent to-background p-8">
          <div className="space-y-4">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-xl border bg-card px-5 py-4"
              >
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-xl font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-muted-foreground">
          Start free and upgrade as you grow. No hidden fees.
        </p>
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 ${
              plan.highlighted
                ? 'border-primary bg-card shadow-xl ring-1 ring-primary'
                : 'bg-card'
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="font-medium">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <a
              href="#contact"
              className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm transition-opacity hover:opacity-90 ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground'
                  : 'border bg-background'
              }`}
            >
              Get started
            </a>
            <ul className="mt-8 space-y-3">
              {plan.features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to reach your apex?
        </h2>
        <p className="mx-auto mt-4 max-w-xl opacity-80">
          Join thousands of teams building better products with Zin Apex. Get started
          in minutes — no credit card required.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-foreground transition-opacity hover:opacity-90"
        >
          Start building today
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 font-semibold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          Zin Apex
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zin Apex. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Solutions />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
