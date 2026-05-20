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
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/85 to-background/97" />
      <div className="absolute inset-0 bg-[radial-gradient(40rem_22rem_at_80%_-10%,rgba(248,209,78,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:py-32">
        <h1 className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
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
