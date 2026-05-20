import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SmartImage from './SmartImage'

type Props = {
  title: string
  subtitle: string
  buttonLabel: string
  to: string
  image: string
}

export default function CtaBanner({
  title,
  subtitle,
  buttonLabel,
  to,
  image,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border">
        <SmartImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative px-8 py-16 text-center text-primary-foreground">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">{subtitle}</p>
          <Link
            to={to}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-foreground transition-opacity hover:opacity-90"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
