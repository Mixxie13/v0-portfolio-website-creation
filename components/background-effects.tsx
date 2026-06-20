'use client'

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient: deep navy / near-black */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#040A1A] to-[#020617]" />

      {/* Radial accent glows anchored to corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgba(37,99,235,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_10%,rgba(124,58,237,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(6,182,212,0.10),transparent_60%)]" />

      {/* Animated cyber grid with radial fade */}
      <div className="absolute inset-0 tech-grid tech-grid-animated opacity-80" />

      {/* Horizontal scan accent lines */}
      <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute inset-x-0 top-[64%] h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* Soft glowing orbs */}
      <div className="absolute top-[12%] left-[8%] w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-[120px] opacity-[0.12] animate-orb-drift" />
      <div
        className="absolute top-[30%] right-[6%] w-[26rem] h-[26rem] bg-cyan-500 rounded-full blur-[120px] opacity-[0.10] animate-orb-drift"
        style={{ animationDelay: '4s', animationDuration: '22s' }}
      />
      <div
        className="absolute -bottom-16 left-[40%] w-[30rem] h-[30rem] bg-violet-600 rounded-full blur-[130px] opacity-[0.11] animate-orb-drift"
        style={{ animationDelay: '8s', animationDuration: '26s' }}
      />

      {/* Abstract connection lines + node network */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.5]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Static faint connection lines */}
        <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" opacity="0.45">
          <line x1="8%" y1="22%" x2="28%" y2="42%" />
          <line x1="28%" y1="42%" x2="46%" y2="30%" />
          <line x1="62%" y1="12%" x2="82%" y2="34%" />
          <line x1="82%" y1="34%" x2="70%" y2="58%" />
          <line x1="18%" y1="72%" x2="44%" y2="84%" />
          <line x1="44%" y1="84%" x2="66%" y2="74%" />
        </g>

        {/* Animated data-flow lines */}
        <g stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="data-flow">
          <path d="M8 110 L 300 110 L 360 200 L 700 200" />
          <path d="M1400 90 L 1100 90 L 1040 260 L 760 260" />
        </g>

        {/* Network nodes */}
        <g fill="#38BDF8">
          {[
            ['8%', '22%'], ['28%', '42%'], ['46%', '30%'], ['62%', '12%'],
            ['82%', '34%'], ['70%', '58%'], ['18%', '72%'], ['44%', '84%'], ['66%', '74%'],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="2.5"
              style={{ animation: `nodePulse ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite` }}
            />
          ))}
        </g>
      </svg>

      {/* Subtle vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(2,6,23,0.55)_100%)]" />
    </div>
  )
}
