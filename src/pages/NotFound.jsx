import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-navy-900 px-6 pt-20 text-center text-white">
      <div>
        <p className="font-display text-7xl font-extrabold text-sky-brand-400">404</p>
        <h1 className="mt-5 text-3xl font-extrabold text-white">
          That page is not here
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-slatey-300">
          The link may be out of date. Everything we do is still one click away.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn bg-white text-navy-700 hover:-translate-y-0.5">
            Back to home
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link to="/programmes" className="btn-on-dark">
            Our programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
