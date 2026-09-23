/**
 * The YMWF crest, recovered from the foundation's own artwork by
 * `npm run logo` (scripts/extract-logo.mjs) and served from public/brand/.
 *
 * The asset sits on a white ground, so on light surfaces it drops in
 * invisibly, and on dark surfaces we set it in a white rounded tile — the way
 * the foundation presents it on its own material.
 */
export function LogoMark({ className = 'h-11 w-11', light = false }) {
  return (
    <span
      className={`${className} block shrink-0 overflow-hidden ${
        light ? 'rounded-xl bg-white p-1 shadow-sm' : ''
      }`}
    >
      <img
        src="/brand/ymwf-logo-256.png"
        alt=""
        className="h-full w-full object-contain"
        width="256"
        height="256"
      />
    </span>
  )
}

export default function Logo({ light = false, compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark light={light} className={compact ? 'h-11 w-11' : 'h-13 w-13'} />
      <span className="leading-none">
        <span
          className={`block font-display font-extrabold tracking-tight ${
            compact ? 'text-base' : 'text-lg'
          } ${light ? 'text-white' : 'text-navy-800'}`}
        >
          YMWF
        </span>
        <span
          className={`mt-1 block font-display text-[10px] font-semibold tracking-[0.16em] uppercase ${
            light ? 'text-white/70' : 'text-sky-brand-600'
          }`}
        >
          Ehsas
        </span>
      </span>
    </span>
  )
}
