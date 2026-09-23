import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { iconMap, ArrowIcon } from '../components/Icons'
import { programs } from '../data/site'

const accentRing = {
  navy: 'from-navy-600 to-navy-500',
  coral: 'from-coral-500 to-coral-400',
  sky: 'from-sky-brand-600 to-sky-brand-400',
  amber: 'from-amber-brand-600 to-amber-brand-400',
}

export default function Programmes() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title=" 7 Objectives, 4 Programmes"
        lead="Half of what we run takes money. The other half takes people — blood, time, mentorship, an afternoon of company. Both matter equally."
      />

      <section className="py-24 lg:py-28">
        <div className="container-page space-y-20 lg:space-y-28">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon]
            const flipped = index % 2 === 1

            return (
              <Reveal key={program.slug}>
                <article
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    flipped ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/10">
                    <img
                      src={program.hero}
                      alt=""
                      className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accentRing[program.accent]} text-white shadow-lg`}
                      >
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-slatey-400 uppercase">
                          {program.kicker}
                        </p>
                        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                          {program.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-slatey-600">{program.summary}</p>

                    <ul className="mt-7 space-y-4">
                      {program.points.map((point) => (
                        <li key={point.title} className="border-l-2 border-slatey-200 pl-5">
                          <p className="font-display text-sm font-bold text-navy-800">
                            {point.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slatey-600">
                            {point.body}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <Link to={`/programmes/${program.slug}`} className="btn-primary mt-8">
                      Full programme
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
