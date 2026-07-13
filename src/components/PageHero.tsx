import type { ReactNode } from 'react'
import SmartImage from './SmartImage'

type Props = {
  title: string
  image: string
  imageAlt: string
  children?: ReactNode
}

const petals = [
  { left: '6%', dur: '12s', delay: '-3s', size: 12 },
  { left: '18%', dur: '15s', delay: '-8s', size: 9 },
  { left: '34%', dur: '13s', delay: '-5s', size: 14 },
  { left: '52%', dur: '16s', delay: '-11s', size: 10 },
  { left: '68%', dur: '12s', delay: '-2s', size: 13 },
  { left: '82%', dur: '14s', delay: '-7s', size: 10 },
  { left: '93%', dur: '17s', delay: '-12s', size: 9 },
]

export default function PageHero({ title, image, imageAlt, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-60">
        <SmartImage src={image} alt={imageAlt} className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55" />

      {/* falling sakura petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {petals.map((p, i) => (
          <span
            key={i}
            className="sakura-petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="animate-fade-up delay-1 mx-auto mt-5 max-w-3xl font-medium text-white/80">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
