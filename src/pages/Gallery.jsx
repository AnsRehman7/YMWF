import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CloseIcon, ArrowIcon } from '../components/Icons'
import { gallery, galleryCategories } from '../data/site'

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const shown =
    active === 'all' ? gallery : gallery.filter((item) => item.category === active)

  // Keyboard control for the lightbox.
  useEffect(() => {
    if (lightbox === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % shown.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + shown.length) % shown.length)
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, shown.length])

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The work, as it happened."
        lead="Photographs from our drives, conventions, chapter events and visits across Lahore and Punjab."
      />

      <section className="py-24 lg:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? gallery.length
                    : gallery.filter((g) => g.category === cat.id).length
                if (count === 0) return null

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActive(cat.id)
                      setLightbox(null)
                    }}
                    className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all duration-300 ${
                      active === cat.id
                        ? 'bg-navy-600 text-white shadow-lg shadow-navy-600/25'
                        : 'border border-slatey-200 bg-white text-slatey-600 hover:border-navy-300 hover:text-navy-700'
                    }`}
                  >
                    {cat.label}
                    <span
                      className={`ml-2 text-xs ${
                        active === cat.id ? 'text-white/60' : 'text-slatey-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((item, i) => (
              <Reveal key={item.src} delay={(i % 4) * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-slatey-100"
                >
                  <img
                    src={item.thumb}
                    alt={item.caption}
                    className="aspect-square w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-xs leading-snug font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && shown[lightbox] && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={shown[lightbox].caption}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + shown.length) % shown.length)
            }}
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-8"
            aria-label="Previous image"
          >
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % shown.length)
            }}
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-8"
            aria-label="Next image"
          >
            <ArrowIcon className="h-5 w-5" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shown[lightbox].src}
              alt={shown[lightbox].caption}
              className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-5 text-center text-sm text-slatey-300">
              {shown[lightbox].caption}
              <span className="mt-1 block text-xs text-slatey-500">
                {lightbox + 1} of {shown.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
