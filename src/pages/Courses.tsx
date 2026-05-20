import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { courses, whyCoursesWork } from '../data'

export default function Courses() {
  return (
    <>
      <section className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Japanese language courses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            JLPT-focused courses and practical training to prepare you for study
            and life in Japan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-xl border bg-card p-6"
            >
              <span className="inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                {course.level}
              </span>
              <h3 className="mt-4 font-medium">{course.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {course.description}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                Enroll
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why our courses are effective
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {whyCoursesWork.map((item, i) => (
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
        <div className="rounded-3xl border bg-card px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Speaking-focused &amp; flexible self-study
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Boost your conversational ability in our speaking classes, or learn at
            your own pace with flexible N5 video lessons.
          </p>
          <ul className="mx-auto mt-6 flex max-w-xl flex-col gap-2 text-left">
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Conversation-centred lessons for real-life fluency
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              On-demand N5 video lessons you can study anytime
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
