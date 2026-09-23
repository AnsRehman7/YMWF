import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { MenuIcon, CloseIcon } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/events', label: 'Events' },
  { to: '/chapters', label: 'Chapters' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      // Below lg the bar is always solid, so the menu button sits on a real
      // surface instead of floating as a white box over the hero. From lg up it
      // stays transparent until the page is scrolled.
      className={`fixed inset-x-0 top-0 z-50 border-b border-slatey-200 bg-white/95 backdrop-blur-lg transition-all duration-500 ${
        scrolled || open
          ? 'lg:border-slatey-200 lg:bg-white/90'
          : 'lg:border-transparent lg:bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="Young Merit Welfare Foundation, home">
          <Logo compact />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 font-display text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-navy-800'
                      : 'text-slatey-600 hover:text-navy-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-sky-brand-500 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/donate" className="btn-accent hidden !px-5 !py-2.5 sm:inline-flex">
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-navy-700 transition-colors hover:bg-slatey-100 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-slatey-200 bg-white transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col py-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-display text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-navy-50 text-navy-800'
                      : 'text-slatey-600 hover:bg-slatey-50 hover:text-navy-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3 px-4 pb-2">
            <Link to="/donate" className="btn-accent w-full">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
