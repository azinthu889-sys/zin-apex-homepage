import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { locales, type Lang, type Locale } from '../locales'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Locale
}

const LangContext = createContext<LangContextValue | null>(null)

function initialLang(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get('lang')
    if (param === 'en' || param === 'ja' || param === 'my') {
      localStorage.setItem('zae-lang', param)
      return param
    }
    const stored = localStorage.getItem('zae-lang')
    if (stored === 'en' || stored === 'ja' || stored === 'my') return stored
    // A Japanese-locale visitor gets Japanese; everyone else defaults to
    // Burmese — the primary audience, whose phones are often set to English.
    const preferred = (
      navigator.languages?.length ? navigator.languages : [navigator.language]
    ).map((l) => (l || '').toLowerCase())
    if (preferred.some((l) => l.startsWith('ja'))) return 'ja'
  } catch {
    /* SSR/privacy mode */
  }
  return 'my'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('zae-lang', l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: locales[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

const myanmarDigits = '၀၁၂၃၄၅၆၇၈၉'

/** Render a number in the given language's numerals (Myanmar digits for `my`). */
export function localizeNumber(value: number | string, lang: Lang): string {
  const s = String(value)
  if (lang !== 'my') return s
  return s.replace(/\d/g, (d) => myanmarDigits[Number(d)])
}

const langLabels: Record<Lang, string> = {
  en: 'EN',
  ja: '日本語',
  my: 'မြန်မာ',
}

export function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={`flex shrink-0 items-center rounded-full border border-[#e5eaf2] bg-white p-0.5 ${
        compact ? 'text-[11px]' : 'text-xs'
      }`}
      role="group"
      aria-label="Language"
    >
      {(Object.keys(langLabels) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`whitespace-nowrap rounded-full px-2.5 py-1 font-semibold transition-colors ${
            lang === l
              ? 'bg-primary text-white'
              : 'text-muted-foreground hover:text-primary'
          }`}
          aria-pressed={lang === l}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  )
}
