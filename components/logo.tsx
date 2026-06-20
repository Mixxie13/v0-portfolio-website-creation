'use client'

interface LogoProps {
  size?: number
  className?: string
  showPulse?: boolean
}

/**
 * Integration hub mark for Vega Morada — a central core with radiating
 * connector nodes, representing connected systems & automation. Not initials.
 */
export function Logo({ size = 40, className, showPulse = true }: LogoProps) {
  const cx = 24
  const cy = 24
  const r = 15
  const nodes = [0, 60, 120, 180, 240, 300].map((deg, i) => {
    const rad = (deg * Math.PI) / 180
    return {
      x: +(cx + r * Math.cos(rad)).toFixed(2),
      y: +(cy + r * Math.sin(rad)).toFixed(2),
      fill: ['#3B82F6', '#6366F1', '#8B5CF6', '#22D3EE', '#38BDF8', '#A78BFA'][i],
    }
  })

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
        <linearGradient id="vm-spoke" x1="9" y1="9" x2="39" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="vm-hub" cx="0.5" cy="0.45" r="0.6">
          <stop stopColor="#C4B5FD" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#4338CA" />
        </radialGradient>
      </defs>

      {/* Connector spokes */}
      <g stroke="url(#vm-spoke)" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        {nodes.map((n, i) => (
          <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} />
        ))}
      </g>

      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.6" fill={n.fill} />
      ))}

      {/* Central hub */}
      <circle cx={cx} cy={cy} r="6" fill="url(#vm-hub)" />
      <circle cx={cx} cy={cy} r="6" fill="none" stroke="#E9D5FF" strokeOpacity="0.6" strokeWidth="0.8" />

      {showPulse && (
        <circle cx={cx} cy={cy} r="6" fill="none" stroke="#A78BFA" strokeWidth="1">
          <animate attributeName="r" values="6;11;6" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.8s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  )
}
