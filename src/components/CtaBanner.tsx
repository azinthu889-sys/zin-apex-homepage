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
      <div className="relative overflow-hidden rounded-[3rem] bg-primary shadow-2xl">
        <SmartImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/45" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="float-slow pointer-events-none absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative px-8 py-20 text-center text-white">
          <h2 className="mx-auto max-w-2xl text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
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
