import { Link, useParams, Navigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, CalendarIcon, PinIcon, PhoneIcon, CheckIcon } from '../components/Icons'
import { events, programs, thumbOf } from '../data/site'

export default function EventDetail() {
  const { slug } = useParams()
  const event = events.find((e) => e.slug === slug)

  if (!event) return <Navigate to="/events" replace />

  const program = programs.find((p) => p.slug === event.program)
  const more = events.filter((e) => e.slug !== event.slug).slice(0, 3)

  return (
    <>
      <PageHeader eyebrow={program ? program.title : 'Event'} title={event.title} lead={event.summary}>
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slatey-500">
          <div className="flex items-center gap-2.5">
            <CalendarIcon className="h-5 w-5 shrink-0 text-sky-brand-500" />
            <dd>{event.dateLabel}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <PinIcon className="h-5 w-5 shrink-0 text-sky-brand-500" />
            <dd>{event.venue}</dd>
          </div>
          {event.contact && (
            <div className="flex items-center gap-2.5">
              <PhoneIcon className="h-5 w-5 shrink-0 text-sky-brand-500" />
              <dd>
                <a
                  href={`tel:+92${event.contact.replace(/[^0-9]/g, '').slice(1)}`}
                  className="transition-colors hover:text-navy-700"
                >
                  {event.contact}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </PageHeader>

      <section className="py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="space-y-5">
              {event.body.map((para, i) => (
                <Reveal key={i} delay={i * 70}>
                  <p className="text-lg leading-relaxed text-slatey-600">{para}</p>
                </Reveal>
              ))}
            </div>

            {event.urdu && (
              <Reveal delay={140}>
                <div className="mt-10 rounded-2xl border-r-4 border-sky-brand-500 bg-slatey-50 p-8">
                  {event.urdu.map((line) => (
                    <p key={line} className="urdu mb-4 text-lg text-navy-800 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            )}

            {event.partners && (
              <Reveal delay={160}>
                <div className="mt-12">
                  <h2 className="text-xl font-bold">Collaborating partners</h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {event.partners.map((partner) => (
                      <li
                        key={partner}
                        className="card flex items-center gap-3 p-4 text-sm font-medium text-navy-800"
                      >
                        <CheckIcon className="h-5 w-5 shrink-0 text-sky-brand-500" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={120}>
            <aside className="sticky top-28 space-y-4">
              {program && (
                <Link
                  to={`/programmes/${program.slug}`}
                  className="card-hover group block p-7"
                >
                  <p className="eyebrow">Part of</p>
                  <p className="mt-2 font-display text-lg font-bold text-navy-800 group-hover:text-navy-600">
                    {program.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-600">
                    {program.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-600 transition-all group-hover:gap-3">
                    Programme details
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </Link>
              )}

              <div className="rounded-2xl bg-navy-800 p-7 text-white">
                <h3 className="font-display text-lg font-bold text-white">Support this work</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slatey-300">
                  Campaigns like this run on donations and volunteer hours.
                </p>
                <Link to="/donate" className="btn-accent mt-5 w-full">
                  Donate
                </Link>
                <Link to="/get-involved" className="btn-on-dark mt-3 w-full">
                  Volunteer
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {event.images.length > 1 && (
        <section className="bg-slatey-50 py-24 lg:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                From the day
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {event.images.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 80}>
                  <div className="group overflow-hidden rounded-2xl bg-white">
                    <img
                      src={thumbOf(src)}
                      alt=""
                      className="aspect-4/3 w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">More from YMWF</h2>
            <Link to="/events" className="btn-ghost">
              All events
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <Link
                  to={`/events/${item.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={thumbOf(item.cover)}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-sky-brand-600 uppercase">
                      {item.dateLabel}
                    </p>
                    <h3 className="mt-2 text-base leading-snug font-bold group-hover:text-navy-600">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
