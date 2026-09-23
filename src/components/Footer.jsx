import { Link } from 'react-router-dom'
import Logo from './Logo'
import { PhoneIcon, PinIcon } from './Icons'
import { org, programs } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-slatey-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slatey-300/80">
            {org.positioning}
          </p>
          <p className="urdu mt-5 text-base text-sky-brand-300">{org.urduMotto}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Programmes
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/programmes/${p.slug}`}
                  className="text-slatey-300/80 transition-colors hover:text-sky-brand-300"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ['/about', 'About us'],
              ['/events', 'Events & campaigns'],
              ['/chapters', 'Our chapters'],
              ['/gallery', 'Gallery'],
              ['/get-involved', 'Get involved'],
              ['/donate', 'Donate'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-slatey-300/80 transition-colors hover:text-sky-brand-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-white uppercase">
            Reach us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-brand-400" />
              <span className="text-slatey-300/80">{org.address}</span>
            </li>
            {org.phones.map((p) => (
              <li key={p.value} className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-brand-400" />
                <span>
                  <a
                    href={`tel:+92${p.value.replace(/[^0-9]/g, '').slice(1)}`}
                    className="text-white transition-colors hover:text-sky-brand-300"
                  >
                    {p.value}
                  </a>
                  <span className="block text-xs text-slatey-400">{p.label}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {org.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-slatey-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-brand-400 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials strip — the registration details belong here. */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-slatey-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}. Established {org.founded}, Lahore.
          </p>
          <p className="text-slatey-500">
            Registration number, NTN and tax-exemption details to be added here.
          </p>
        </div>
      </div>
    </footer>
  )
}
