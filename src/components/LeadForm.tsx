import { useState, type FormEvent, type ReactNode } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { db } from '../lib/firebase'
import { useLang } from '../lib/i18n'
import { locales } from '../locales'
import { site } from '../data'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type OptionField = 'goalOptions' | 'levelOptions' | 'intakeOptions'

export default function LeadForm() {
  const { t, lang } = useLang()
  const f = t.leadForm
  const [status, setStatus] = useState<Status>('idle')
  // Spam guards: bots fill the hidden field / submit instantly.
  const [honeypot, setHoneypot] = useState('')
  const [openedAt] = useState(() => Date.now())
  const [form, setForm] = useState({
    name: '',
    phone: '',
    goal: '',
    level: '',
    intake: '',
  })

  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }))

  // Store the English label for select values so the team always receives
  // consistent data regardless of the visitor's language.
  const canonical = (field: OptionField, label: string) => {
    const idx = (f[field] as string[]).indexOf(label)
    return idx >= 0 ? locales.en.leadForm[field][idx] : label
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (honeypot !== '' || Date.now() - openedAt < 3000) {
      setStatus('success')
      return
    }
    setStatus('submitting')
    try {
      // Writes to the same collection the contact form already uses, so it
      // works under the existing Firestore rules. `source` distinguishes leads.
      await addDoc(collection(db, 'enrollments'), {
        source: 'lead-form',
        name: form.name,
        phone: form.phone,
        goal: canonical('goalOptions', form.goal),
        level: canonical('levelOptions', form.level),
        intake: canonical('intakeOptions', form.intake),
        lang,
        createdAt: serverTimestamp(),
      })
      setStatus('success')
      setForm({ name: '', phone: '', goal: '', level: '', intake: '' })
    } catch (err) {
      console.error('Failed to submit lead:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#e5eaf2] bg-white p-8 text-center shadow-xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-bold text-primary">{f.successTitle}</h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          {f.successBody}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
        >
          {f.again}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#e5eaf2] bg-white p-6 shadow-xl md:p-8"
    >
      <div className="pointer-events-none absolute left-[-9999px] top-[-9999px]" aria-hidden>
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={f.name}>
          <input
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="input"
            placeholder={f.namePlaceholder}
          />
        </Field>
        <Field label={f.phone}>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="input"
            placeholder={f.phonePlaceholder}
          />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Field label={f.goal}>
          <select
            required
            value={form.goal}
            onChange={(e) => update('goal', e.target.value)}
            className="input"
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.goalOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label={f.level}>
          <select
            required
            value={form.level}
            onChange={(e) => update('level', e.target.value)}
            className="input"
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.levelOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label={f.intake}>
          <select
            required
            value={form.intake}
            onChange={(e) => update('intake', e.target.value)}
            className="input"
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.intakeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-destructive">{f.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold mt-6 inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60"
      >
        {status === 'submitting' ? f.sending : f.submit}
        {status !== 'submitting' && <ArrowRight className="h-4 w-4" />}
      </button>

      <a
        href={site.orientationFormUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 block text-center text-xs font-semibold text-secondary hover:underline"
      >
        {f.secondary}
      </a>
    </form>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-primary">
        {label}
      </span>
      {children}
    </label>
  )
}
