import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon, PhoneIcon, PinIcon, CheckIcon } from '../components/Icons'
import { org } from '../data/site'

const inputClass =
  'w-full rounded-xl border border-slatey-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors duration-200 placeholder:text-slatey-400 focus:border-sky-brand-400 focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: 'General enquiry', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const whatsappHref = `https://wa.me/92${org.phones[0].value.replace(/[^0-9]/g, '').slice(1)}?text=${encodeURIComponent(
    `Assalam-o-alaikum.\n\nName: ${form.name}\nSubject: ${form.subject}\n\n${form.message}`,
  )}`

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come and find us."
        lead="Our central office is in Shahdara, Lahore. Call, message or write — we answer quickly."
      />

      <section className="py-24 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-brand-50 text-sky-brand-600">
                  <PinIcon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold">Central office</h2>
                <p className="mt-2.5 leading-relaxed text-slatey-600">{org.address}</p>
              </div>

              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-brand-50 text-sky-brand-600">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold">Phone & WhatsApp</h2>
                <ul className="mt-4 space-y-3">
                  {org.phones.map((phone) => (
                    <li key={phone.value}>
                      <a
                        href={`tel:+92${phone.value.replace(/[^0-9]/g, '').slice(1)}`}
                        className="font-display font-semibold text-navy-700 transition-colors hover:text-sky-brand-600"
                      >
                        {phone.value}
                      </a>
                      <span className="block text-xs text-slatey-400">{phone.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-7">
                <h2 className="text-lg font-bold">Follow our work</h2>
                <p className="mt-2 text-sm text-slatey-500">{org.handle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {org.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slatey-200 px-4 py-2 font-display text-xs font-semibold text-slatey-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-300 hover:text-navy-700"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="card border-dashed p-7">
                <h2 className="text-lg font-bold">Email</h2>
                <p className="mt-2 text-sm leading-relaxed text-slatey-500">
                  An official address on the foundation&rsquo;s own domain will be published
                  here once the domain is registered.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-8">
              <h2 className="text-xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-slatey-500">
                Whether it is a partnership, a counselling request or a question — write and
                we will come back to you.
              </p>

              {sent ? (
                <div className="py-8 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sky-brand-100 text-sky-brand-600">
                    <CheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">One more step</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey-600">
                    The form is not connected to our inbox yet. Send it through WhatsApp and
                    it will reach us straight away.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent mt-6"
                  >
                    Send on WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 block w-full text-sm text-slatey-500 underline underline-offset-4 hover:text-navy-700"
                  >
                    Edit my message
                  </button>
                </div>
              ) : (
                <form
                  className="mt-7 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                        Your name
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
                      What is this about?
                    </span>
                    <select value={form.subject} onChange={update('subject')} className={inputClass}>
                      <option>General enquiry</option>
                      <option>Counselling request</option>
                      <option>Blood donation</option>
                      <option>Volunteering</option>
                      <option>Partnership or MOU</option>
                      <option>Donation or receipt</option>
                      <option>Media</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block font-display text-sm font-semibold text-navy-800">
                      Message
                    </span>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      className={`${inputClass} resize-y`}
                      placeholder="How can we help?"
                    />
                  </label>

                  <button type="submit" className="btn-primary w-full">
                    Continue
                    <ArrowIcon className="h-4 w-4" />
                  </button>

                  <p className="text-xs leading-relaxed text-slatey-400">
                    Counselling enquiries are treated as confidential and are never published
                    or shared.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
