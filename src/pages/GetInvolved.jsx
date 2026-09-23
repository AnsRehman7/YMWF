import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { iconMap, ArrowIcon, CheckIcon } from '../components/Icons'
import { getInvolvedOptions, org, chapters } from '../data/site'

const fellowshipPillars = [
  { title: 'Leadership', body: 'Running a team, a drive and a budget — with real responsibility, not shadowing.' },
  { title: 'Communication', body: 'Public speaking, writing and representing the foundation in rooms that matter.' },
  { title: 'Technology', body: 'The practical digital skills that make a small organisation punch above its weight.' },
  { title: 'Innovation', body: 'Designing a project from the problem up, rather than repeating what was done last year.' },
  { title: 'Growth', body: 'Mentorship and reflection, so fellows leave more capable than they arrived.' },
]

const chapterNames = chapters.groups.flatMap((g) => g.items.map((i) => i.name))
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'
const bloodGroups = ['A+', 'A−', 'B+', 'B−', 'AB+', 'AB−', 'O+', 'O−', 'Unknown']

export default function GetInvolved() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    chapter: '',
    interest: 'Volunteer',
    bloodGroup: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setFormError('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/volunteers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) throw new Error(result.error || 'Unable to submit your details right now.')

      setSubmitted(true)
    } catch (error) {
      setFormError(error.message || 'Unable to submit your details right now.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slatey-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors duration-200 placeholder:text-slatey-400 focus:border-sky-brand-400 focus:outline-none'

  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Half of this work does not need money."
        lead="It needs people. Your time, your blood group, your campus, your skills. Here is every way in."
      />

      {/* The four routes */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {getInvolvedOptions.map((option, i) => {
              const Icon = iconMap[option.icon]
              return (
                <Reveal key={option.title} delay={i * 80}>
                  <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-xl">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-brand-50 text-sky-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-lg font-bold">{option.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slatey-600">{option.body}</p>
                    <a
                      href="#join"
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-600 transition-all duration-300 hover:gap-3"
                    >
                      {option.action}
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fellowship */}
      <section className="bg-navy-800 py-24 text-white lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-sky-brand-300 uppercase">
              Our flagship
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The YMWF Fellowship Programme
            </h2>
            <p className="mt-6 leading-relaxed text-slatey-200">
              A structured programme for college and university students who want to do
              serious social-impact work. Fellows run sessions, lead drives and take charge of
              real projects. It is built on five pillars.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fellowshipPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-brand-400/50 hover:bg-white/10">
                  <p className="font-display text-base font-bold text-white">{pillar.title}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slatey-300">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-7">
              <p className="flex-1 text-sm leading-relaxed text-slatey-300">
                Eligibility, cohort dates and the application timeline will be published here
                before the next intake opens.
              </p>
              <a href="#join" className="btn-accent">
                Register your interest
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blood donor */}
      <section className="py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
              <img
                src="/img/IMG-20260829-WA0113.webp"
                alt="YMWF World Blood Donor Day campaign"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Blood donation</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Be a hero. Give blood.
            </h2>
            <p className="mt-6 leading-relaxed text-slatey-600">
              Our Blood Donation department keeps a standing register of donors by blood
              group, so that when a hospital or a family calls, we can reach the right person
              within minutes.
            </p>
            <div className="mt-7 rounded-2xl border-r-4 border-coral-500 bg-slatey-50 p-6">
              <p className="urdu text-lg text-navy-800">
                خون کا عطیہ ایک عظیم انسانی خدمت ہے، جو کسی کی زندگی بچانے کا ذریعہ بنتا ہے۔
              </p>
              <p className="urdu mt-3 text-lg text-navy-800">
                ایک خون کا قطرہ، کئی زندگیوں کی امید۔
              </p>
              <p className="mt-4 border-t border-slatey-200 pt-4 text-sm text-slatey-500 italic">
                Donating blood is a great act of human service — it becomes the means of
                saving a life. One drop of blood, hope for many lives.
              </p>
            </div>
            <p className="mt-6 text-sm text-slatey-600">
              Blood Donation department ·{' '}
              <a
                href={`tel:+92${org.bloodDeskPhone.replace(/[^0-9]/g, '').slice(1)}`}
                className="font-semibold text-navy-700 underline underline-offset-4 transition-colors hover:text-sky-brand-600"
              >
                {org.bloodDeskPhone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Join form */}
      <section id="join" className="scroll-mt-24 bg-slatey-50 py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Join us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tell us how you would like to help
            </h2>
            <p className="mt-6 leading-relaxed text-slatey-600">
              Fill this in and we will put you in touch with the chapter closest to you.
              There is no experience requirement — training is part of joining.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                'Open to students, graduates and professionals',
                'Every chapter runs its own drives and events',
                'Volunteers are trained, not just recruited',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-brand-100 text-sky-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-slatey-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-8">
              {submitted ? (
                <div className="py-6 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sky-brand-100 text-sky-brand-600">
                    <CheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">Thank you for volunteering</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey-600">
                    Your details have been received. Our team will review your preferred area
                    of work and get in touch with you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormError('')
                    }}
                    className="mt-6 block w-full text-sm text-slatey-500 underline underline-offset-4 hover:text-navy-700"
                  >
                    Edit my details
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        Full name
                      </span>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        Phone
                      </span>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        className={inputClass}
                        placeholder="03XX-XXXXXXX"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                      Email <span className="font-normal text-slatey-400">(optional)</span>
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        I would like to
                      </span>
                      <select
                        value={form.interest}
                        onChange={update('interest')}
                        className={inputClass}
                      >
                        <option>Volunteer</option>
                        <option>Apply for the Fellowship</option>
                        <option>Register as a blood donor</option>
                        <option>Start a chapter</option>
                        <option>Partner with YMWF</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        Nearest chapter
                      </span>
                      <select
                        value={form.chapter}
                        onChange={update('chapter')}
                        className={inputClass}
                      >
                        <option value="">Not sure yet</option>
                        {chapterNames.map((name) => (
                          <option key={name}>{name}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        Blood group
                      </span>
                      <select
                        required
                        value={form.bloodGroup}
                        onChange={update('bloodGroup')}
                        className={inputClass}
                      >
                        <option value="">Select your group</option>
                        {bloodGroups.map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                      Anything else{' '}
                      <span className="font-normal text-slatey-400">(optional)</span>
                    </span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      className={`${inputClass} resize-y`}
                      placeholder="Your university, what you'd like to work on, when you're free…"
                    />
                  </label>

                  {formError && (
                    <p role="alert" className="rounded-xl bg-coral-400/10 px-4 py-3 text-sm text-coral-600">
                      {formError}
                    </p>
                  )}

                  <button type="submit" disabled={submitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? 'Submitting…' : 'Submit my details'}
                    <ArrowIcon className="h-4 w-4" />
                  </button>

                  <p className="text-xs leading-relaxed text-slatey-400">
                    We only use these details to contact you about volunteering. Nothing is
                    shared with anyone else.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-slatey-200 bg-white p-9">
              <div className="flex-1">
                <h2 className="text-xl font-bold">Would you rather give than go?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slatey-600">
                  Ration bags, blankets, school kits and fee assistance all run on donations.
                </p>
              </div>
              <Link to="/donate" className="btn-accent">
                See ways to give
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
