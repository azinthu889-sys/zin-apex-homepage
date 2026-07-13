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
      <div className="relative overflow-hidden rounded-3xl bg-primary shadow-lg">
        <div className="absolute inset-0 opacity-60">
          <SmartImage src={image} alt="" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55" />
        <div className="relative px-8 py-20 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-medium text-white/85">{subtitle}</p>
          <Link
            to={to}
            className="btn-gold mt-9 inline-flex h-14 items-center gap-2 px-8 text-sm"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
