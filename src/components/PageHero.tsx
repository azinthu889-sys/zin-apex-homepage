import type { ReactNode } from 'react'
import SmartImage from './SmartImage'

type Props = {
  title: string
  image: string
  imageAlt: string
  children?: ReactNode
}

export default function PageHero({ title, image, imageAlt, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <SmartImage
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/45" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mx-auto mt-5 max-w-3xl font-medium text-white/80">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
