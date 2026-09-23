import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, CheckIcon } from '../components/Icons'
import { org, leadership, programs, partners } from '../data/site'

const objectives = [
  {
    n: '01',
    title: 'Educational support',
    body: 'Full or partial fee assistance for deserving students, free books and stationery, and study circles that promote collaborative, peer-led learning.',
  },
  {
    n: '02',
    title: 'Support for working-class families',
    body: 'Financial and material assistance for gardeners, waiters and other low-income workers — and schooling for their children, including fees, supplies and uniforms.',
  },
  {
    n: '03',
    title: 'Healthcare & blood donation',
    body: 'Blood donation drives and awareness campaigns supporting hospitals and patients, alongside health and hygiene awareness in underserved communities.',
  },
  {
    n: '04',
    title: 'Mental health & counselling',
    body: 'Regular psychological counselling for stress, anxiety, depression and trauma, plus career counselling for students making academic and professional choices.',
  },
  {
    n: '05',
    title: 'Scientific & technological development',
    body: 'Workshops, science fairs and mentorship programmes that encourage research, innovation and critical thinking among young people.',
  },
  {
    n: '06',
    title: 'Community development & awareness',
    body: 'Campaigns on literacy, gender equality and environmental sustainability, run in collaboration with other humanitarian organisations and institutions.',
  },
  {
    n: '07',
    title: 'Youth empowerment',
    body: 'Leadership training, skill-building workshops and volunteering opportunities that instil civic responsibility and ethical values.',
  },
]

export default function About() {
  const [expandedProfiles, setExpandedProfiles] = useState({})

  const toggleProfile = (name) => {
    setExpandedProfiles((profiles) => ({ ...profiles, [name]: !profiles[name] }))
  }

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We serve on the basis of need, and nothing else."
        lead={org.positioning}
      />

      {/* Founder's story */}
      <section className="py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
              <img
                src={leadership[0].photo}
                alt={`${leadership[0].name}, ${leadership[0].role}`}
                className="aspect-3/4 w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Disability is not inability
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slatey-600">
              <p>
                Rana Ahsan was dropped from a school cricket team because of his disability.
                He went back, made the side on ability alone, and ended up captaining it.
              </p>
              <p>
                Years later he was refused admission to intermediate college on the same
                grounds. He applied again for a BS Honours place and won it on open merit.
              </p>
              <p>
                In 2017 he founded Young Merit Welfare Foundation in Shahdara, Lahore, on a
                straightforward premise: that talent is distributed evenly and opportunity is
                not, and that the gap between the two is a thing you can actually work on.
              </p>
              <p>
                He has since been recognised as a &ldquo;Hero of Pakistan&rdquo; for welfare
                service. It explains why disability rights sit at the centre of what YMWF does
                rather than at its edges — and why the foundation is run by young people who
                are given real responsibility rather than errands.
              </p>
            </div>

            <div className="mt-9 rounded-2xl border-l-4 border-sky-brand-500 bg-slatey-50 p-6">
              <p className="urdu text-lg text-navy-800">{org.urduMotto}</p>
              <p className="mt-3 text-sm text-slatey-500 italic">{org.urduMottoEn}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-slatey-50 py-24 lg:py-28">
        <div className="container-page grid gap-8 md:grid-cols-2">
            <Reveal delay={110}>
            <div className="card h-full bg-white-800 p-9">
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-navy-800 uppercase">
                Our vision
              </p>
              <p className="mt-5 text-xl leading-relaxed font-medium text-navy-800">
                A Pakistan where a young person&rsquo;s circumstances — their income, their
                disability, their family&rsquo;s work — do not decide how far they are allowed
                to go.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card h-full p-9 bg-navy-800">
              <p className="eyebrow text-white-300">Our mission</p>
              <p className="mt-5 text-xl leading-relaxed font-medium text-white">
                To uplift individuals and communities through education, health, psychological
                wellbeing and social development — serving humanity without regard to politics,
                faith or background.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* The seven objectives */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our objectives</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Seven commitments we hold ourselves to
            </h2>
            <p className="mt-5 leading-relaxed text-slatey-600">
              These are the objectives YMWF was founded on. Each one maps to a programme you
              can read about and support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj, i) => (
              <Reveal key={obj.n} delay={i * 70}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-xl">
                  <span className="font-display text-3xl font-extrabold text-sky-brand-600">
                    {obj.n}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{obj.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey-600">{obj.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-slatey-200 bg-slatey-50 p-7">
              <p className="flex-1 text-sm leading-relaxed text-slatey-600">
                These seven objectives run through four programme areas.
              </p>
              <Link to="/programmes" className="btn-primary">
                See the programmes
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slatey-50 py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The people accountable for this work
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadership.map((person, i) => {
              const isExpanded = expandedProfiles[person.name] ?? false

              return (
                <Reveal key={person.name} delay={i * 100}>
                  <article className="card h-full overflow-hidden">
                    <div className="bg-navy-50">
                      {person.photo ? (
                        <img
                          src={person.photo}
                          alt={`${person.name}, ${person.role}`}
                          className="aspect-4/3 w-full object-cover"
                          style={{ objectPosition: person.photoPosition ?? 'center top' }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="grid aspect-4/3 w-full place-items-center font-display text-4xl font-bold text-navy-300">
                          {person.name
                            .split(' ')
                            .map((word) => word[0])
                            .join('')}
                        </div>
                      )}
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold">{person.name}</h3>
                      <p className="mt-1 font-display text-sm font-semibold text-sky-brand-600">
                        {person.role}
                      </p>
                      <div
                        id={`profile-${i}`}
                        className={`relative mt-5 space-y-4 text-sm leading-relaxed text-slatey-600 ${
                          isExpanded ? '' : 'max-h-40 overflow-hidden'
                        }`}
                      >
                        {person.bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {!isExpanded && (
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white to-transparent"
                          />
                        )}
                      </div>
                      <button
                        type="button"
                        aria-controls={`profile-${i}`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleProfile(person.name)}
                        className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-sky-brand-600 transition-colors hover:text-navy-700"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                        <ArrowIcon
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isExpanded ? '-rotate-90' : 'rotate-90'
                          }`}
                        />
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Collaboration</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Organisations we work with
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 40}>
                <div className="card flex h-full items-start gap-3 p-5">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-brand-500" />
                  <div>
                    <p className="font-display text-sm font-semibold text-navy-800">
                      {partner.name}
                    </p>
                    <p className="text-xs text-slatey-400">{partner.kind}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programme quick links */}
      <section className="pb-24 lg:pb-28">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to={`/programmes/${p.slug}`}
                className="card-hover group block h-full p-6"
              >
                <h3 className="font-display text-base font-bold transition-colors group-hover:text-navy-600">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey-500">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
