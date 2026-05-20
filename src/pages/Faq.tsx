import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import { faqs, images } from '../data'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <PageHero
        title="Frequently asked questions"
        image={images.study}
        imageAlt="Studying and preparing questions"
      >
        <p>မေးလေ့ရှိသော မေးခွန်းများ — အဖြေတွေ ဒီမှာ စုစည်းပေးထားပါတယ်။</p>
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-8 text-center">
          <h2 className="text-xl font-medium">Still have questions?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            We're happy to help. Reach out and our team will answer everything you
            need to know.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
