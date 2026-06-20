'use client'

interface LogoProps {
  size?: number
  className?: string
  showPulse?: boolean
}

/**
 * Cyber monogram mark for Vega Morada — a gradient "VM" rendered as a
 * connected-node / data-flow glyph inside a rounded dashboard tile.
 */
export function Logo({ size = 40, className, showPulse = true }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vega Morada"
      role="img"
    >
      <defs>
        <linearGradient id="vm-grad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.55" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="vm-tile" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F1A33" />
          <stop offset="1" stopColor="#0A0F1F" />
        </linearGradient>
      </defs>

      {/* Tile */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="url(#vm-tile)" />
      <rect x="1.5" y="1.5" width="45" height="45" rx="12" stroke="url(#vm-grad)" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* "V" as a downward data-flow path */}
      <path
        d="M12 15 L20 31 L24 23"
        stroke="url(#vm-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "M"-ish ascending node path */}
      <path
        d="M24 33 L29 19 L33 27 L37 15"
        stroke="url(#vm-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.95"
      />

      {/* Connector nodes */}
      <circle cx="12" cy="15" r="2.4" fill="#60A5FA" />
      <circle cx="37" cy="15" r="2.4" fill="#22D3EE" />
      <circle cx="20" cy="31" r="2" fill="#8B5CF6" />
      {showPulse && (
        <circle cx="29" cy="19" r="2" fill="#A78BFA">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  )
}
