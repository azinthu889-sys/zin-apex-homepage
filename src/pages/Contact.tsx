import { useState, type FormEvent, type ReactNode } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  CalendarOff,
  CheckCircle2,
  Facebook,
  Youtube,
  Send,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { db } from '../lib/firebase'
import { courses, site, images } from '../data'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await addDoc(collection(db, 'enrollments'), {
        ...form,
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', course: '', message: '' })
    } catch (err) {
      console.error('Failed to submit enrollment:', err)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        title="Contact us"
        image={images.mandalay}
        imageAlt="Mandalay, home of our office"
      >
        <p>
          Ready to apply or have a question? Send us a message and our team will
          get back to you shortly.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div data-reveal className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium">{site.office.label}</h2>
              <div className="mt-5 space-y-5">
                <InfoRow icon={<MapPin className="h-5 w-5" />} title="Address">
                  {site.office.address}
                </InfoRow>
                <InfoRow icon={<Phone className="h-5 w-5" />} title="Phone">
                  {site.office.phones.join(' / ')}
                </InfoRow>
                <InfoRow icon={<Mail className="h-5 w-5" />} title="Email">
                  {site.office.email}
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5" />} title="Office hours">
                  {site.office.hours}
                </InfoRow>
                <InfoRow
                  icon={<CalendarOff className="h-5 w-5" />}
                  title="Holiday"
                >
                  {site.office.holiday}
                </InfoRow>
              </div>
            </div>

            <div>
              <h3 className="font-medium">Follow us</h3>
              <div className="mt-4 flex gap-3">
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
                  <span className="text-sm font-semibold">TT</span>
                </Social>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 md:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-medium">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've received your message and will be in touch soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="input"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="input"
                      placeholder="09 ..."
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="input"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Course of interest">
                  <select
                    value={form.course}
                    onChange={(e) => update('course', e.target.value)}
                    className="input"
                  >
                    <option value="">Select a course</option>
                    {courses.map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    className="input resize-none"
                    placeholder="Tell us how we can help"
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full rounded-xl px-4 py-3 font-medium disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        {icon}
      </span>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-accent"
    >
      {children}
    </a>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
