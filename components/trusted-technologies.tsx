'use client'

import { Database, Workflow, ShoppingCart, Users, Cpu } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const technologies = [
  {
    key: 'crm',
    title: 'CRM & Operations',
    icon: Database,
    accent: 'from-blue-500/20 to-blue-500/5',
    ring: 'group-hover:border-blue-400/50',
    dot: 'bg-blue-400',
    tools: ['Zoho CRM', 'Zoho Inventory', 'Zoho Desk', 'Zoho Flow', 'Zoho Projects'],
  },
  {
    key: 'automation',
    title: 'Automation & Integration',
    icon: Workflow,
    accent: 'from-violet-500/20 to-violet-500/5',
    ring: 'group-hover:border-violet-400/50',
    dot: 'bg-violet-400',
    tools: ['Make.com', 'APIs', 'Webhooks', 'Deluge (Zoho Scripting)'],
  },
  {
    key: 'ecommerce',
    title: 'E-Commerce & Platforms',
    icon: ShoppingCart,
    accent: 'from-cyan-500/20 to-cyan-500/5',
    ring: 'group-hover:border-cyan-400/50',
    dot: 'bg-cyan-400',
    tools: ['WooCommerce', 'Stripe', 'Simpro', 'Freshdesk'],
  },
  {
    key: 'productivity',
    title: 'Productivity & Collaboration',
    icon: Users,
    accent: 'from-blue-500/20 to-violet-500/5',
    ring: 'group-hover:border-primary/50',
    dot: 'bg-emerald-400',
    tools: ['Google Workspace', 'Microsoft 365', 'Lucidspark', 'WhatsApp'],
  },
]

export function TrustedTechnologies() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            <Cpu className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            I specialize in modern business systems that scale with your company
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((category, i) => {
            const Icon = category.icon
            return (
              <Reveal key={category.key} delay={i * 80}>
                <div className="group glass-card rounded-2xl p-5 h-full">
                  {/* Dashboard-style header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                    <span
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${category.accent} ring-1 ring-white/10 transition`}
                    >
                      <Icon className="w-5 h-5 text-foreground" />
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.dot} animate-pulse`} />
                      Active
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground bg-white/[0.03] border border-white/[0.06] hover:text-foreground hover:bg-white/[0.06] hover:border-primary/40 transition cursor-default`}
                      >
                        <span className={`w-1 h-1 rounded-full ${category.dot}`} />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
