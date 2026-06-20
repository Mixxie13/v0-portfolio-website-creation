'use client'

import { Link2, Database, Zap, RefreshCw, LineChart, Building2, ArrowRight, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Benefit {
  title: string
  description: string
  icon: LucideIcon
}

const benefits: Benefit[] = [
  {
    title: 'Bridge Operations & Technology',
    description:
      'Most businesses understand they need CRM systems, automation, or better workflows—but lack someone who grasps both the business process and technical implementation. I bridge that gap.',
    icon: Link2,
  },
  {
    title: 'CRM Implementation Without Overhead',
    description:
      'Get professional CRM design, setup, and optimization without hiring a full-time systems administrator. I design systems that scale with your growth.',
    icon: Database,
  },
  {
    title: 'Operational Efficiency',
    description:
      'Streamline workflows, reduce manual tasks, improve visibility across teams, and establish repeatable processes that compound efficiency over time.',
    icon: Zap,
  },
  {
    title: 'Systems Integration',
    description:
      'Connect your business tools seamlessly—WooCommerce to Zoho, Stripe workflows, custom API integrations. Your systems work together, not against each other.',
    icon: RefreshCw,
  },
  {
    title: 'Reporting & Business Intelligence',
    description:
      'Transform raw data into actionable dashboards and KPIs. Make decisions based on real-time visibility, not guesswork.',
    icon: LineChart,
  },
  {
    title: 'Scalable Architecture',
    description:
      'Build business systems designed for growth. As you scale, your infrastructure adapts—not breaks. No technical debt, just clean systems.',
    icon: Building2,
  },
]

export function WhyHireMe() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            Why Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Clients <span className="text-gradient">Hire Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            I help businesses organize operations, optimize systems, and build infrastructure that supports growth. Here&apos;s what I bring to the table.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 70}>
                <div className="group glass-card spotlight gradient-ring rounded-2xl p-7 h-full overflow-hidden">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 ring-1 ring-white/10 group-hover:ring-primary/40 mb-5 transition">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <div className="relative glass-card gradient-ring rounded-2xl p-8 sm:p-10 text-center overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/15 rounded-full blur-3xl" />
            <p className="relative text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              I don&apos;t just build systems—I build infrastructure that enables your team to work smarter, not harder. Let&apos;s discuss how I can help your business scale.
            </p>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white btn-gradient active:scale-95"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
