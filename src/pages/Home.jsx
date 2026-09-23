import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { iconMap, ArrowIcon, CheckIcon, CalendarIcon, PinIcon } from '../components/Icons'
import {
  org,
  impact,
  programs,
  events,
  partners,
  chapters,
  getInvolvedOptions,
  thumbOf,
} from '../data/site'

const accentRing = {
  navy: 'from-navy-600 to-navy-500',
  coral: 'from-coral-500 to-coral-400',
  sky: 'from-sky-brand-600 to-sky-brand-400',
  amber: 'from-amber-brand-600 to-amber-brand-400',
}

function Hero() {
  const flagship = events.find((e) => e.status === 'flagship')
  const headline = impact.stats.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Soft brand wash — kept very light so the type stays the loudest thing. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slatey-50 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-sky-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[28rem] w-[28rem] rounded-full bg-navy-50 blur-3xl"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-slatey-200 bg-white px-4 py-1.5 font-display text-xs font-semibold tracking-[0.14em] text-navy-700 uppercase shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
              Lahore · Est. {org.founded}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.06] font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-[3.5rem]">
              Youth serving humanity,
              <span className="block bg-gradient-to-r from-navy-600 via-sky-brand-600 to-sky-brand-500 bg-clip-text text-transparent">
                with dignity at the centre.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slatey-600">
              Young Merit Welfare Foundation is a non-political, non-religious, non-profit
              organisation working across Punjab on education, health, mental wellbeing and
              youth empowerment — run almost entirely by students and volunteers.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-accent">
                Support our work
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link to="/get-involved" className="btn-ghost">
                Volunteer with us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="urdu mt-8 border-l-2 border-sky-brand-400 pl-5 text-base text-navy-700">
              {org.urduMotto}
            </p>
          </Reveal>

          {/* Stats strip — closes the gap under the copy with something useful. */}
          <Reveal delay={360}>
            <dl className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6 border-t border-slatey-200 pt-7 sm:gap-x-6">
              {headline.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-display text-2xl font-extrabold text-navy-700 sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs leading-snug break-words text-slatey-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Flagship campaign card */}
        {flagship && (
          <Reveal delay={200}>
            <article className="group overflow-hidden rounded-3xl border border-slatey-200 bg-white shadow-2xl shadow-navy-900/10 transition-shadow duration-500 hover:shadow-navy-900/20">
              <div className="relative aspect-4/5 overflow-hidden bg-slatey-100 sm:aspect-3/2 lg:aspect-4/5">
                <img
                  src={flagship.cover}
                  alt={flagship.title}
                  className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="eager"
                />
                <span className="absolute top-5 left-5 rounded-full bg-coral-500 px-3.5 py-1.5 font-display text-[11px] font-bold tracking-[0.12em] text-white uppercase shadow-lg">
                  Flagship campaign
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold">{flagship.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slatey-600">
                  {flagship.summary}
                </p>
                <dl className="mt-5 space-y-2 text-sm text-slatey-500">
                  <div className="flex items-center gap-2.5">
                    <CalendarIcon className="h-4 w-4 shrink-0 text-sky-brand-500" />
                    <dd>{flagship.dateLabel}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PinIcon className="h-4 w-4 shrink-0 text-sky-brand-500" />
                    <dd>{flagship.venue}</dd>
                  </div>
                </dl>
                <Link
                  to={`/events/${flagship.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-600 transition-all duration-300 hover:gap-3 hover:text-sky-brand-600"
                >
                  Read about the convention
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function WhoWeAre() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <img
              src="/img/IMG-20260829-WA0102.webp"
              alt="YMWF volunteers gathered in a Lahore park before a clean-up drive"
              className="w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/15"
              loading="lazy"
            />
            <div className="absolute -right-4 -bottom-8 hidden rounded-2xl border border-slatey-200 bg-white p-6 shadow-xl sm:block">
              <p className="font-display text-3xl font-extrabold text-coral-500">
                <Counter value={2017} suffix="" duration={1200} />
              </p>
              <p className="mt-1 text-xs tracking-wide text-slatey-500 uppercase">
                Serving since
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A foundation built by the people it set out to help
          </h2>
          <p className="mt-6 leading-relaxed text-slatey-600">
            YMWF was founded in 2017 in Shahdara, Lahore, and has grown into a network of
            thirteen city and university chapters. We are non-political and non-religious:
            we serve people on the basis of need, and nothing else.
          </p>
          <p className="mt-4 leading-relaxed text-slatey-600">
            Almost everything we do is delivered by students and young volunteers. That is
            deliberate — the work gets done, and a generation learns how to organise while
            doing it.
          </p>

          <ul className="mt-8 space-y-3.5">
            {[
              'Non-political, non-religious, non-profit',
              'Student- and volunteer-led in every chapter',
              'Disability rights and mental health at the core, not the margins',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-brand-100 text-sky-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-slatey-600">{item}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-ghost mt-9">
            Read our story
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function Programmes() {
  return (
    <section className="bg-slatey-50 py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            7 Objectives, 4 Programmes
          </h2>
          <p className="mt-5 leading-relaxed text-slatey-600">
            Everything YMWF runs sits inside one of these four areas — from fee assistance
            and study circles through to blood drives, counselling and the Fellowship.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon]
            return (
              <Reveal key={program.slug} delay={i * 90}>
                <Link
                  to={`/programmes/${program.slug}`}
                  className="card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={thumbOf(program.hero)}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 to-transparent" />
                    <div
                      className={`absolute bottom-5 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accentRing[program.accent]} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-slatey-400 uppercase">
                      {program.kicker}
                    </p>
                    <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-navy-600">
                      {program.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey-600">
                      {program.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-600 transition-all duration-300 group-hover:gap-3">
                      Explore this programme
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Counselling() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-24 text-white lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-sky-brand-500/20 blur-3xl"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-sky-brand-300 uppercase">
            What makes us different
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Free counselling, in a country that rarely offers it
          </h2>
          <p className="mt-6 leading-relaxed text-slatey-200">
            Almost no welfare foundation in Pakistan provides mental health support. We run
            regular, confidential psychological counselling covering stress, anxiety,
            depression and trauma — alongside career counselling that helps young people
            choose a path instead of guessing at one.
          </p>
          <p className="mt-4 leading-relaxed text-slatey-300">
            It is the cheapest thing we do and, we think, the one that changes the most.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/programmes/health-and-wellbeing" className="btn-on-dark">
              About the programme
            </Link>
            <Link to="/contact" className="btn-accent">
              Request a session
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: 'Confidential', v: 'Sessions are private. Nothing is published, ever.' },
              { k: 'Free', v: 'No fee, for students and for the wider community.' },
              { k: 'Career guidance', v: 'Academic and professional choices, thought through.' },
              { k: 'Open to all', v: 'Regardless of faith, background or politics.' },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-brand-400/50 hover:bg-white/10"
              >
                <p className="font-display text-base font-bold text-white">{item.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-slatey-300">{item.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function LatestEvents() {
  const featured = events.filter((e) => e.status !== 'flagship').slice(0, 3)

  return (
    <section className="py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Recent work</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What we have been doing
            </h2>
          </div>
          <Link to="/events" className="btn-ghost">
            All events
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((event, i) => (
            <Reveal key={event.slug} delay={i * 90}>
              <Link
                to={`/events/${event.slug}`}
                className="card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={thumbOf(event.cover)}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-sky-brand-600 uppercase">
                    {event.dateLabel}
                  </p>
                  <h3 className="mt-2.5 text-lg leading-snug font-bold transition-colors group-hover:text-navy-600">
                    {event.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey-600">
                    {event.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChaptersStrip() {
  const all = chapters.groups.flatMap((g) => g.items.map((i) => i.name))

  return (
    <section className="overflow-hidden border-y border-slatey-200 bg-slatey-50 py-16">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow">Our network</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Thirteen chapters, and growing
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 flex overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex shrink-0 gap-3">
          {[...all, ...all].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="rounded-full border border-slatey-200 bg-white px-5 py-2.5 font-display text-sm font-medium whitespace-nowrap text-slatey-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page mt-10 text-center">
        <Link to="/chapters" className="btn-ghost">
          See every chapter
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Working alongside</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Institutions that stand with us
          </h2>
          <p className="mt-5 leading-relaxed text-slatey-600">
            We collaborate with universities, welfare organisations and public institutions
            so that our work reaches further than we could take it alone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 45}>
              <div className="card flex h-full items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 font-display text-sm font-bold text-navy-600">
                  {partner.name
                    .split(' ')
                    .filter((w) => /^[A-Z]/.test(w))
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-navy-800">
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
  )
}

function GetInvolvedCta() {
  return (
    <section className="pb-24 lg:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-600 to-sky-brand-600 px-8 py-16 text-white sm:px-14">
            <div
              aria-hidden="true"
              className="animate-float-slow pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  There is more than one way in
                </h2>
                <p className="mt-5 leading-relaxed text-white/80">
                  Half of what we do does not need money — it needs people. Give your time,
                  your blood group, or a place on your campus.
                </p>
                <Link to="/get-involved" className="btn mt-8 bg-white text-navy-700 hover:-translate-y-0.5 hover:bg-slatey-50">
                  Find your way in
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {getInvolvedOptions.map((option) => {
                  const Icon = iconMap[option.icon]
                  return (
                    <div
                      key={option.title}
                      className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      <Icon className="h-6 w-6 text-white" />
                      <p className="mt-3 font-display text-sm font-bold text-white">
                        {option.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Programmes />
      <Counselling />
      <LatestEvents />
      <ChaptersStrip />
      <Partners />
      <GetInvolvedCta />
    </>
  )
}
