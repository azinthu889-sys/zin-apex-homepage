import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { courses, images } from '../data'
import { useLang } from '../lib/i18n'

export default function Courses() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        title={t.coursesPage.heroTitle}
        image={images.classroom}
        imageAlt="Japanese language classroom"
      >
        <p>{t.coursesPage.heroSub}</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div data-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {
            const text = t.courses[i]
            return (
              <div
                key={text.title}
                className="flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <SmartImage
                    src={course.image}
                    alt={text.title}
                    className="aspect-[16/10] w-full"
                  />
                  <span className="absolute left-3 top-3 inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                    {text.level}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-medium">{text.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {text.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    {t.coursesPage.enroll}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div data-reveal className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={images.n4Textbooks}
            alt="N4 level textbooks and materials used in our courses"
            className="w-full rounded-2xl border shadow-sm"
          />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t.coursesPage.textbooksTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.coursesPage.textbooksBody}</p>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t.coursesSection.whyTitle}
            </h2>
          </div>
          <div data-reveal className="mt-16 grid gap-6 md:grid-cols-2">
            {t.whyCoursesWork.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border bg-background p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t.coursesPage.speakingTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.coursesPage.speakingBody}</p>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t.coursesPage.speakingLi1}
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t.coursesPage.speakingLi2}
              </li>
            </ul>
          </div>
          <SmartImage
            src={images.study}
            alt="Studying Japanese at your own pace"
            className="aspect-[4/3] rounded-2xl border shadow-sm"
          />
        </div>
      </section>

      <CtaBanner
        title={t.coursesPage.ctaTitle}
        subtitle={t.coursesPage.ctaSub}
        buttonLabel={t.coursesPage.ctaBtn}
        to="/contact"
        image={images.graduation}
      />
    </>
  )
}
