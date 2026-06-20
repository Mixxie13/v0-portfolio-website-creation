'use client'

import Image from 'next/image'
import {
  Database,
  Workflow,
  Zap,
  LifeBuoy,
  BarChart3,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Activity,
} from 'lucide-react'
import { CountUp } from '@/components/count-up'

const pipeline = [
  { label: 'Zoho CRM', icon: Database, color: 'text-blue-400', ring: 'ring-blue-500/30' },
  { label: 'Make.com', icon: Workflow, color: 'text-violet-400', ring: 'ring-violet-500/30' },
  { label: 'Workflow', icon: Zap, color: 'text-cyan-400', ring: 'ring-cyan-500/30' },
  { label: 'Systems', icon: LifeBuoy, color: 'text-blue-400', ring: 'ring-blue-500/30' },
  { label: 'Reporting', icon: BarChart3, color: 'text-violet-400', ring: 'ring-violet-500/30' },
]

const stats = [
  { end: 6, suffix: '+', label: 'Years of Experience' },
  { end: 3, suffix: '+', label: 'CRM Implementations' },
  { end: 100, suffix: '+', label: 'Business Automations' },
]

const bars = [38, 64, 52, 80, 46, 72, 58, 90, 66, 78, 50, 84]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Status badge */}
        <div className="flex justify-center mb-7 animate-fade-in-up">
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

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 text-balance tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="text-gradient">Vega Morada</span>
        </h1>

        <p
          className="text-sm sm:text-lg text-foreground/90 mb-5 text-balance font-semibold animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Executive Assistant <span className="text-border">/</span> CRM Specialist{' '}
          <span className="text-border">/</span> Zoho CRM Specialist{' '}
          <span className="text-border">/</span> Technical Virtual Assistant
        </p>

        <p
          className="text-base sm:text-lg text-muted-foreground mb-9 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          I help businesses streamline operations, manage CRM systems, optimize workflows, improve
          reporting visibility, and implement scalable business processes using Zoho and modern
          business systems.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="#case-studies"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white btn-gradient active:scale-95"
          >
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:text-cyan-300 hover:bg-white/[0.05] transition active:scale-95"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Premium SaaS dashboard console */}
        <div
          className="relative glass-card spotlight neon-top rounded-2xl text-left max-w-4xl mx-auto animate-fade-in-up overflow-hidden"
          style={{ animationDelay: '0.25s' }}
        >
          {/* Console header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <span className="mono-label text-muted-foreground hidden sm:inline">operations-console</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 mono-label text-emerald-300">
                <Activity className="w-3.5 h-3.5" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Systems online
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-6">
            {/* Operator row */}
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-white/15 shrink-0">
                <Image src="/profile.jpg" alt="Vega Morada" fill className="object-cover" priority />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">Vega Morada</p>
                <p className="mono-label text-muted-foreground">Systems Operator · Zoho Consultant</p>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
                Active
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-3 sm:p-4"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-gradient">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Automation pipeline */}
            <div>
              <p className="mono-label text-muted-foreground mb-3">Automation pipeline</p>
              <div className="flex items-stretch gap-1.5 sm:gap-2 overflow-x-auto pb-1">
                {pipeline.map((node, i) => {
                  const Icon = node.icon
                  return (
                    <div key={node.label} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <div className="group flex flex-col items-center gap-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-primary/40 px-3 sm:px-4 py-3 transition min-w-[78px] sm:min-w-[92px]">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] ring-1 ${node.ring}`}>
                          <Icon className={`w-4 h-4 ${node.color}`} />
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-foreground/90 text-center leading-tight">
                          {node.label}
                        </span>
                      </div>
                      {i < pipeline.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-blue-400/50 shrink-0" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Throughput strip */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="mono-label text-muted-foreground">Workflow throughput</p>
                <p className="mono-label text-cyan-300">+24% efficiency</p>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
