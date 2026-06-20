'use client'

import Image from 'next/image'
import { Database, Workflow, Zap, LifeBuoy, BarChart3, ArrowRight, Sparkles } from 'lucide-react'

const techCards = [
  { label: 'Zoho CRM', icon: Database, color: 'text-blue-400', glow: 'group-hover:shadow-blue-500/30' },
  { label: 'Make.com', icon: Workflow, color: 'text-violet-400', glow: 'group-hover:shadow-violet-500/30' },
  { label: 'Workflow Automation', icon: Zap, color: 'text-cyan-400', glow: 'group-hover:shadow-cyan-500/30' },
  { label: 'Systems Support', icon: LifeBuoy, color: 'text-blue-400', glow: 'group-hover:shadow-blue-500/30' },
  { label: 'Reporting', icon: BarChart3, color: 'text-violet-400', glow: 'group-hover:shadow-violet-500/30' },
]

const stats = [
  { value: '5+', label: 'Years Technical Operations' },
  { value: '3+', label: 'CRM Implementations' },
  { value: '100+', label: 'Business Automations' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-xs sm:text-sm font-medium text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            CRM Systems &amp; Automation Consultant
            <span className="mx-1 w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
              Open to work
            </span>
          </div>
        </div>

        {/* Avatar with glowing ring */}
        <div className="mb-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-50 blur-lg animate-pulse-glow" />
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
              <Image src="/profile.jpg" alt="Vega Morada" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 text-balance animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-gradient">Vega Morada</span>
        </h1>

        <p
          className="text-base sm:text-xl text-foreground/90 mb-6 text-balance font-semibold animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          Executive Assistant <span className="text-border">/</span> CRM Specialist{' '}
          <span className="text-border">/</span> Zoho CRM Specialist{' '}
          <span className="text-border">/</span> Technical Virtual Assistant
        </p>

        <p
          className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          I help businesses streamline operations, manage CRM systems, optimize workflows, improve
          reporting visibility, and implement scalable business processes using Zoho and modern
          business systems.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <a
            href="#case-studies"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110 transition active:scale-95"
          >
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground glass-effect hover:border-primary/50 hover:text-cyan-300 transition active:scale-95"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Floating tech cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-16 max-w-3xl mx-auto">
          {techCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className={`group glass-card rounded-xl p-4 flex flex-col items-center gap-2 text-center animate-float ${card.glow}`}
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '6s' }}
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] ring-1 ring-white/10 group-hover:ring-primary/40 transition">
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </span>
                <span className="text-xs font-medium text-foreground/90 leading-tight">{card.label}</span>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 sm:p-6 hover-glow"
            >
              <p className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</p>
              <p className="text-[11px] sm:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
