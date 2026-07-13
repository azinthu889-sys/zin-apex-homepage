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
      <div className="absolute inset-0 opacity-60">
        <SmartImage src={image} alt={imageAlt} className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
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
