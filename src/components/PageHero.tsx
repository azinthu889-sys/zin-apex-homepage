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
    <section className="relative overflow-hidden border-b">
      <SmartImage
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
