import Reveal from './Reveal'

/**
 * Shared masthead for every inner page. Light, to match the homepage hero —
 * the dark bands are saved for the few sections that use them as accents.
 */
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="relative overflow-hidden border-b border-slatey-200 bg-white pt-32 pb-16 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slatey-50 to-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-sky-brand-100/50 blur-3xl"
      />

      <div className="container-page relative">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slatey-600">{lead}</p>
          )}
          {children}
        </Reveal>
      </div>
    </header>
  )
}
