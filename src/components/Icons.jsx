const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wrap = (children) =>
  function Icon({ className = 'h-6 w-6' }) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
        {children}
      </svg>
    )
  }

export const BookIcon = wrap(
  <>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5Z" />
    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5Z" />
  </>,
)

export const HeartIcon = wrap(
  <path d="M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7C19 15.6 12 20 12 20Z" />,
)

export const SparkIcon = wrap(
  <>
    <path d="M12 3v3M12 18v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M3 12h3M18 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    <circle cx="12" cy="12" r="3.2" />
  </>,
)

export const HandsIcon = wrap(
  <>
    <path d="M8 21v-5.5L4.8 12A1.7 1.7 0 0 1 7.2 9.6L9 11.3V4.8a1.5 1.5 0 0 1 3 0" />
    <path d="M12 4.8a1.5 1.5 0 0 1 3 0v6.5l1.8-1.7a1.7 1.7 0 0 1 2.4 2.4L16 15.5V21" />
  </>,
)

export const UsersIcon = wrap(
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14.2A6.5 6.5 0 0 1 21.5 20" />
  </>,
)

export const DropIcon = wrap(
  <path d="M12 3.5s5.5 5.6 5.5 9.4a5.5 5.5 0 0 1-11 0C6.5 9.1 12 3.5 12 3.5Z" />,
)

export const FlagIcon = wrap(
  <>
    <path d="M5 21V4" />
    <path d="M5 5h11l-1.6 3.4L16 12H5" />
  </>,
)

export const PhoneIcon = wrap(
  <path d="M5 4h3.2l1.4 3.6-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2L18 13.8V17a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />,
)

export const PinIcon = wrap(
  <>
    <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </>,
)

export const CalendarIcon = wrap(
  <>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
  </>,
)

export const ArrowIcon = wrap(<path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />)

export const CheckIcon = wrap(<path d="M5 12.5 10 17.5 19 7" />)

export const CloseIcon = wrap(<path d="M6 6l12 12M18 6 6 18" />)

export const MenuIcon = wrap(<path d="M4 7h16M4 12h16M4 17h16" />)

export const iconMap = {
  book: BookIcon,
  heart: HeartIcon,
  spark: SparkIcon,
  hands: HandsIcon,
  users: UsersIcon,
  drop: DropIcon,
  flag: FlagIcon,
}
