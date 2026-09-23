import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, CheckIcon, PhoneIcon } from '../components/Icons'
import { givingOptions, bankDetails, org, programs } from '../data/site'

const presets = [1500, 3000, 4500, 10000]

export default function Donate() {
  const [amount, setAmount] = useState(4500)
  const [custom, setCustom] = useState('')
  const [copied, setCopied] = useState(null)

  const chosen = custom ? Number(custom) : amount

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      setCopied(null)
    }
  }

  const whatsappHref = `https://wa.me/92${org.phones[0].value.replace(/[^0-9]/g, '').slice(1)}?text=${encodeURIComponent(
    `Assalam-o-alaikum, I would like to donate Rs ${chosen ? chosen.toLocaleString('en-PK') : ''} to YMWF. Please share the account details.`,
  )}`

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Every rupee goes to a named thing."
        lead="We tell you exactly what your donation buys — a ration bag, a blanket, a school kit, a term of fees. Nothing vague."
      />

      {/* Ways to give */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What your gift buys</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Choose something specific
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {givingOptions.map((option, i) => {
              const program = programs.find((p) => p.slug === option.program)
              return (
                <Reveal key={option.title} delay={i * 80}>
                  <div className="card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">{option.title}</h3>
                        <p className="mt-1 text-xs tracking-wide text-slatey-400 uppercase">
                          {option.unit}
                        </p>
                      </div>
                      {option.amount ? (
                        <p className="shrink-0 font-display text-2xl font-extrabold text-navy-700">
                          Rs {option.amount.toLocaleString('en-PK')}
                        </p>
                      ) : (
                        <p className="shrink-0 rounded-full bg-slatey-100 px-3 py-1 font-display text-xs font-semibold text-slatey-500">
                          Cost to confirm
                        </p>
                      )}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slatey-600">
                      {option.body}
                    </p>
                    {program && (
                      <Link
                        to={`/programmes/${program.slug}`}
                        className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-600 transition-all duration-300 hover:gap-3"
                      >
                        {program.title}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Amount picker + payment routes */}
      <section className="bg-slatey-50 py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Make a donation</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pick an amount
            </h2>
            <p className="mt-6 leading-relaxed text-slatey-600">
              We do not yet have an online card gateway — merchant approval takes time in
              Pakistan. For now, transfer directly to our wallet or bank account and message
              us so we can send a receipt and tell you where it went.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setAmount(preset)
                    setCustom('')
                  }}
                  className={`rounded-xl px-6 py-3.5 font-display text-sm font-bold transition-all duration-300 ${
                    !custom && amount === preset
                      ? 'bg-navy-600 text-white shadow-lg shadow-navy-600/25'
                      : 'border border-slatey-200 bg-white text-navy-700 hover:-translate-y-0.5 hover:border-navy-300'
                  }`}
                >
                  Rs {preset.toLocaleString('en-PK')}
                </button>
              ))}
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                Or enter your own amount
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-slatey-200 bg-white px-4 py-3 focus-within:border-sky-brand-400">
                <span className="font-display text-sm font-semibold text-slatey-400">Rs</span>
                <input
                  type="number"
                  min="1"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Any amount"
                  className="w-full bg-transparent text-sm text-navy-800 placeholder:text-slatey-400 focus:outline-none"
                />
              </div>
            </label>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-7 w-full sm:w-auto"
            >
              Message us to donate
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="card p-8">
                <h3 className="font-display text-lg font-bold">Mobile wallets</h3>
                <p className="mt-2 text-sm text-slatey-500">
                  The fastest route. Transfer, then send us the screenshot.
                </p>
                <ul className="mt-6 space-y-3">
                  {bankDetails.wallets.map((wallet) => (
                    <li
                      key={wallet.provider}
                      className="flex items-center justify-between gap-4 rounded-xl border border-slatey-200 bg-slatey-50 p-4"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-navy-800">
                          {wallet.provider}
                        </p>
                        <p className="mt-0.5 font-mono text-sm text-slatey-600">
                          {wallet.number}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-slatey-400">
                          {wallet.title}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copy(wallet.number, wallet.provider)}
                        className="shrink-0 rounded-lg border border-slatey-300 bg-white px-3.5 py-2 font-display text-xs font-semibold text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-400"
                      >
                        {copied === wallet.provider ? 'Copied' : 'Copy'}
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl border border-dashed border-amber-brand-400 bg-amber-brand-400/10 p-4 text-xs leading-relaxed text-slatey-600">
                  These numbers appear on YMWF campaign artwork. Confirm the correct official
                  donation accounts before the site goes live.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="font-display text-lg font-bold">Bank transfer</h3>
                <p className="mt-2 text-sm text-slatey-500">
                  For larger gifts, standing orders and institutional donations.
                </p>
                <dl className="mt-6 space-y-3 text-sm">
                  {[
                    ['Account title', bankDetails.bank.title],
                    ['Account number', bankDetails.bank.accountNumber],
                    ['IBAN', bankDetails.bank.iban],
                    ['Bank', bankDetails.bank.bankName],
                    ['Branch', bankDetails.bank.branch],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-b border-slatey-100 pb-3 last:border-0"
                    >
                      <dt className="text-slatey-500">{label}</dt>
                      <dd
                        className={
                          value
                            ? 'font-mono text-navy-800'
                            : 'rounded-full bg-slatey-100 px-3 py-0.5 text-xs text-slatey-400'
                        }
                      >
                        {value || 'To be added'}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={`tel:+92${org.phones[0].value.replace(/[^0-9]/g, '').slice(1)}`}
                  className="btn-ghost mt-6 w-full"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call for account details
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Where your money goes</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              We would rather be checked than trusted
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Named, not vague',
                b: 'Every donation is assigned to a specific item — a ration bag, a blanket, a school kit — and we tell you which one yours bought.',
              },
              {
                t: 'Volunteer-run overheads',
                b: 'Drives, camps and visits are delivered by unpaid student volunteers, so the overwhelming majority of a donation reaches the work.',
              },
              {
                t: 'Receipts on request',
                b: 'Message us after transferring and we will send confirmation and, where you need one, a formal receipt.',
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 90}>
                <div className="card h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-brand-50 text-sky-brand-600">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey-600">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-10 rounded-2xl border border-dashed border-slatey-300 bg-slatey-50 p-6 text-center text-sm text-slatey-500">
              Registration number, National Tax Number, tax-exemption status and audited
              accounts will be published on this page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-navy-800 p-9 text-white">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">
                  Cannot give money right now?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slatey-300">
                  Blood, time and mentorship are worth just as much to us.
                </p>
              </div>
              <Link to="/get-involved" className="btn-on-dark">
                Other ways to help
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
