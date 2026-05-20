import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

// Renders a brand-tinted gradient that an image fades in over. If the remote
// image fails to load, the gradient stays as a graceful, intentional fallback.
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent to-secondary ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}
