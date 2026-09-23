import { Link, useParams, Navigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { iconMap, ArrowIcon, CheckIcon } from '../components/Icons'
import { programs, events, thumbOf } from '../data/site'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = programs.find((p) => p.slug === slug)

  if (!program) return <Navigate to="/programmes" replace />

  const Icon = iconMap[program.icon]
  const related = events.filter((e) => e.program === program.slug)
  const others = programs.filter((p) => p.slug !== program.slug)

  return (
    <>
      <PageHeader eyebrow={program.kicker} title={program.title} lead={program.summary}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/donate" className="btn-accent">
            Support this programme
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link to="/get-involved" className="btn-ghost">
            Volunteer
          </Link>
        </div>
      </PageHeader>

      {/* What the programme covers */}
      <section className="py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <Reveal>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-50 text-navy-600">
                <Icon className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                What this programme covers
              </h2>
            </Reveal>

            <div className="mt-10 space-y-8">
              {program.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 80}>
                  <div className="border-l-2 border-sky-brand-300 pl-6">
                    <h3 className="text-lg font-bold">{point.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-slatey-600">{point.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {program.urdu && (
              <Reveal delay={120}>
                <div className="mt-12 rounded-2xl bg-navy-800 p-8 text-white">
                  <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-sky-brand-300 uppercase">
                    {program.urdu.heading}
                  </h3>
                  <div className="mt-5 space-y-3">
                    {program.urdu.lines.map((line) => (
                      <p key={line} className="urdu text-lg text-white">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="mt-5 border-t border-white/15 pt-5 text-sm text-slatey-300 italic">
                    {program.urdu.translation}
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Ways to help */}
          <Reveal delay={140}>
            <aside className="sticky top-28 rounded-3xl border border-slatey-200 bg-slatey-50 p-8">
              <h3 className="font-display text-lg font-bold">Ways to help</h3>
              <ul className="mt-5 space-y-3">
                {program.asks.map((ask) => (
                  <li key={ask} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-brand-500" />
                    <span className="text-sm leading-relaxed text-slatey-600">{ask}</span>
                  </li>
                ))}
              </ul>
              <Link to="/donate" className="btn-primary mt-7 w-full">
                Give to this work
              </Link>
              <Link to="/get-involved" className="btn-ghost mt-3 w-full">
                Give your time instead
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Programme gallery */}
      <section className="bg-slatey-50 py-24 lg:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              This programme in the field
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl">
                  <img
                    src={thumbOf(src)}
                    alt=""
                    className="aspect-square w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <Link to="/gallery" className="btn-ghost mt-10">
              See the full gallery
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Related events */}
      {related.length > 0 && (
        <section className="py-24 lg:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Events under this programme
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((event, i) => (
                <Reveal key={event.slug} delay={i * 80}>
                  <Link
                    to={`/events/${event.slug}`}
                    className="card-hover group flex h-full flex-col overflow-hidden"
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={thumbOf(event.cover)}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-sky-brand-600 uppercase">
                        {event.dateLabel}
                      </p>
                      <h3 className="mt-2 text-base leading-snug font-bold group-hover:text-navy-600">
                        {event.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slatey-600">
                        {event.summary}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other programmes */}
      <section className="border-t border-slatey-200 py-16">
        <div className="container-page">
          <p className="eyebrow">Other programmes</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/programmes/${p.slug}`}
                className="card-hover group flex items-center justify-between gap-4 p-5"
              >
                <span className="font-display text-sm font-semibold text-navy-800">
                  {p.title}
                </span>
                <ArrowIcon className="h-4 w-4 shrink-0 text-slatey-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-navy-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
