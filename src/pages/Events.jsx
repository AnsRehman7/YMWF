import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, CalendarIcon, PinIcon } from '../components/Icons'
import { events, thumbOf } from '../data/site'

const statusStyles = {
  flagship: 'bg-coral-500 text-white',
  annual: 'bg-sky-brand-500 text-white',
  ongoing: 'bg-navy-600 text-white',
  open: 'bg-amber-brand-500 text-navy-900',
  partnership: 'bg-navy-50 text-navy-700',
  recognition: 'bg-amber-brand-400/25 text-amber-brand-600',
  past: 'bg-slatey-100 text-slatey-500',
}

const statusLabels = {
  flagship: 'Flagship',
  annual: 'Annual',
  ongoing: 'Ongoing',
  open: 'Applications open',
  partnership: 'Partnership',
  recognition: 'Recognition',
  past: 'Past event',
}

const filters = [
  { id: 'all', label: 'Everything' },
  { id: 'campaigns', label: 'Campaigns', match: ['flagship', 'annual', 'ongoing', 'open', 'past'] },
  { id: 'partnerships', label: 'Partnerships & MOUs', match: ['partnership'] },
  { id: 'recognition', label: 'Recognition', match: ['recognition'] },
]

export default function Events() {
  const [active, setActive] = useState('all')

  const filter = filters.find((f) => f.id === active)
  const shown =
    active === 'all' ? events : events.filter((e) => filter.match.includes(e.status))

  return (
    <>
      <PageHeader
        eyebrow="Events & campaigns"
        title="What we have actually done."
        lead="Conventions, drives, partnerships and recognitions — the record of our work, newest first."
      />

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all duration-300 ${
                    active === f.id
                      ? 'bg-navy-600 text-white shadow-lg shadow-navy-600/25'
                      : 'border border-slatey-200 bg-white text-slatey-600 hover:border-navy-300 hover:text-navy-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 90}>
                <Link
                  to={`/events/${event.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={thumbOf(event.cover)}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-4 left-4 rounded-full px-3 py-1 font-display text-[10px] font-bold tracking-[0.12em] uppercase ${statusStyles[event.status]}`}
                    >
                      {statusLabels[event.status]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg leading-snug font-bold transition-colors group-hover:text-navy-600">
                      {event.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey-600">
                      {event.summary}
                    </p>
                    <dl className="mt-5 space-y-2 border-t border-slatey-100 pt-4 text-xs text-slatey-500">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 shrink-0 text-sky-brand-500" />
                        <dd>{event.dateLabel}</dd>
                      </div>
                      <div className="flex items-start gap-2">
                        <PinIcon className="mt-px h-4 w-4 shrink-0 text-sky-brand-500" />
                        <dd>{event.venue}</dd>
                      </div>
                    </dl>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="mt-16 text-center text-slatey-500">
              Nothing in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-navy-800 p-9 text-white">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">
                  Want your institution on this list?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slatey-300">
                  We partner with universities, welfare organisations and public bodies.
                </p>
              </div>
              <Link to="/contact" className="btn-accent">
                Talk to us
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
