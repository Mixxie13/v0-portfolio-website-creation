'use client'

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1E293B]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />

      {/* Subtle connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#2563EB" strokeWidth="1" />
        <line x1="60%" y1="10%" x2="80%" y2="35%" stroke="#06B6D4" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="50%" y2="85%" stroke="#7C3AED" strokeWidth="1" />
        <circle cx="10%" cy="20%" r="3" fill="#2563EB" opacity="0.3" />
        <circle cx="30%" cy="40%" r="3" fill="#2563EB" opacity="0.3" />
        <circle cx="60%" cy="10%" r="3" fill="#06B6D4" opacity="0.3" />
        <circle cx="80%" cy="35%" r="3" fill="#06B6D4" opacity="0.3" />
        <circle cx="20%" cy="70%" r="3" fill="#7C3AED" opacity="0.3" />
        <circle cx="50%" cy="85%" r="3" fill="#7C3AED" opacity="0.3" />
      </svg>
    </div>
  )
}
