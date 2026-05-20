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
      <div className="relative overflow-hidden rounded-[2rem] border shadow-2xl">
        <SmartImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(38rem_22rem_at_82%_120%,rgba(245,180,23,0.28),transparent_60%)]" />
        <div className="float-slow pointer-events-none absolute -left-12 -top-12 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative px-8 py-20 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{subtitle}</p>
          <Link
            to={to}
            className="btn-gold mt-9 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
