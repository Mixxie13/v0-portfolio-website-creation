'use client'

interface LogoProps {
  size?: number
  className?: string
  showPulse?: boolean
}

/**
 * Abstract automation mark for Vega Morada — three connected workflow nodes
 * forming an upward data-flow inside a hex-like systems shell. Not initials.
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
        <linearGradient id="vm-grad" x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="vm-core" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#6D28D9" />
        </radialGradient>
      </defs>

      {/* Systems shell (hexagon) */}
      <path
        d="M24 3.5 L38.7 12 V29 L24 37.5 L9.3 29 V12 Z"
        stroke="url(#vm-grad)"
        strokeWidth="1.6"
        strokeOpacity="0.55"
        fill="rgba(124,58,237,0.05)"
      />

      {/* Connectors (data flow between nodes) */}
      <path
        d="M14 31 L24 20 L34 31"
        stroke="url(#vm-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20 L24 12"
        stroke="url(#vm-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Outer nodes */}
      <circle cx="14" cy="31" r="3" fill="#3B82F6" />
      <circle cx="34" cy="31" r="3" fill="#22D3EE" />
      <circle cx="24" cy="11.5" r="3" fill="#8B5CF6" />

      {/* Central hub */}
      <circle cx="24" cy="20" r="4.4" fill="url(#vm-core)" />
      {showPulse && (
        <circle cx="24" cy="20" r="4.4" fill="none" stroke="#A78BFA" strokeWidth="1">
          <animate attributeName="r" values="4.4;8;4.4" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2.6s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  )
}
