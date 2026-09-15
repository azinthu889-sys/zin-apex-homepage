import SmartImage from './SmartImage'
import { cities, cityPhotoCredits } from '../data'
import { useLang } from '../lib/i18n'

type Props = {
  className?: string
  overlayClassName?: string
}

// Partner-city tiles with a real landmark from each city; a swipe rail on phones.
export default function CityGrid({ className = '', overlayClassName = 'from-primary/75' }: Props) {
  const { t } = useLang()
  return (
    <div className={className}>
      <div className="rail rail-sm grid gap-4 md:grid-cols-4 lg:grid-cols-7">
        {cities.map((city, i) => (
          <div
            key={city.name}
            className="group relative overflow-hidden rounded-xl border"
          >
            <SmartImage
              src={city.image}
              alt={t.cities[i]}
              className="aspect-[3/4] w-full"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${overlayClassName} to-transparent`} />
            <span className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
              {t.cities[i]}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        Photos:{' '}
        {cityPhotoCredits.map((c, i) => (
          <span key={c.label}>
            {i > 0 && ' · '}
            <a href={c.url} target="_blank" rel="noreferrer" className="hover:underline">
              {c.label}
            </a>
          </span>
        ))}
      </p>
    </div>
  )
}
