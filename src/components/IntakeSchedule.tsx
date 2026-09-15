import { intakes } from '../data'
import { useLang } from '../lib/i18n'

type Props = {
  className?: string
  headClassName?: string
  rowClassName?: string
}

// Cards on phones — a 4-column table there needs sideways scrolling, which hides
// the deadlines people came for — and a table from md up.
export default function IntakeSchedule({
  className = '',
  headClassName = '',
  rowClassName = '',
}: Props) {
  const { t } = useLang()
  const head = t.studySection.intakeHead

  return (
    <div className={className}>
      <div className="grid gap-3 md:hidden">
        {intakes.map((row, i) => {
          const text = t.intakes[i]
          return (
            <div key={row.intake} className="rounded-xl border bg-background p-4">
              <p className="font-semibold text-primary">{text.intake}</p>
              <dl className="mt-3 grid gap-2 text-sm">
                {[text.registration, text.coeSubmission, text.coeResult].map((value, j) => (
                  <div key={head[j + 1]} className="flex items-baseline justify-between gap-4">
                    <dt className="text-muted-foreground">{head[j + 1]}</dt>
                    <dd className="text-right font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )
        })}
      </div>

      <div className="hidden overflow-x-auto rounded-xl border md:block">
        <table className="w-full min-w-[640px] text-sm">
          <thead className={headClassName}>
            <tr className="text-left">
              {head.map((h) => (
                <th key={h} className="px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {intakes.map((row, i) => {
              const text = t.intakes[i]
              return (
                <tr key={row.intake} className={`border-t ${rowClassName}`}>
                  <td className="px-5 py-3 font-medium">{text.intake}</td>
                  <td className="px-5 py-3 text-muted-foreground">{text.registration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{text.coeSubmission}</td>
                  <td className="px-5 py-3 text-muted-foreground">{text.coeResult}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
