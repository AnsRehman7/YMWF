import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, PinIcon } from '../components/Icons'
import { chapters, org } from '../data/site'

export default function Chapters() {
  const total = chapters.groups.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <>
      <PageHeader
        eyebrow="Our network"
        title="Expanding our horizon."
        lead={chapters.intro}
      >
        <p className="urdu mt-8 border-r-2 border-sky-brand-400 pr-5 text-lg text-navy-700">
          {org.urduMotto}
        </p>
      </PageHeader>

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mb-16 rounded-3xl border border-slatey-200 bg-slatey-50 p-8 text-center sm:p-10">
              <p className="font-display text-5xl font-extrabold text-navy-700">{total}</p>
              <p className="mt-2 text-sm tracking-wide text-slatey-500 uppercase">
                Chapters established
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {chapters.groups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 90}>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-2xl font-extrabold tracking-tight">{group.title}</h2>
                    <span className="font-display text-sm font-semibold text-slatey-400">
                      {group.items.length}{' '}
                      {group.items.length === 1 ? 'chapter' : 'chapters'}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-2xl leading-relaxed text-slatey-600">
                    {group.note}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, i) => (
                      <Reveal key={item.name} delay={i * 50}>
                        <div className="card group flex h-full items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-brand-50 text-sky-brand-600 transition-colors duration-300 group-hover:bg-sky-brand-500 group-hover:text-white">
                            <PinIcon className="h-5 w-5" />
                          </span>
                          <div className="min-w-0">
                            <p className="font-display font-semibold text-navy-800">
                              {item.name}
                            </p>
                            {item.note && (
                              <p className="mt-0.5 text-xs tracking-wide text-sky-brand-600 uppercase">
                                {item.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-sky-brand-600 px-8 py-14 text-white sm:px-14">
              <div
                aria-hidden="true"
                className="animate-float-slow pointer-events-none absolute -top-20 -right-12 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Start a chapter on your campus
                </h2>
                <p className="mt-4 leading-relaxed text-white/85">
                  If your university or city is not on this list, it can be. We will help you
                  build a cabinet, plan your first drive and connect you to the wider network.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/get-involved"
                    className="btn bg-white text-navy-700 hover:-translate-y-0.5 hover:bg-slatey-50"
                  >
                    Get started
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-on-dark">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
