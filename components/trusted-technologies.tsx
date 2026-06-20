'use client'

import { Database, Workflow, Boxes, Users, Cpu } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BrandIcon } from '@/components/brand-icon'

const technologies = [
  {
    key: 'crm',
    title: 'CRM & Business Systems',
    icon: Database,
    accent: 'from-blue-500/20 to-blue-500/5',
    dot: 'bg-blue-400',
    tools: [
      'Zoho CRM',
      'Zoho Inventory',
      'Zoho Desk',
      'Zoho Creator',
      'Zoho Flow',
      'Zoho Projects',
      'HubSpot',
      'Pipedrive',
      'Salesforce (Foundational Knowledge)',
    ],
  },
  {
    key: 'automation',
    title: 'Automation & Integration',
    icon: Workflow,
    accent: 'from-violet-500/20 to-violet-500/5',
    dot: 'bg-violet-400',
    tools: ['Make.com', 'n8n', 'Zapier', 'APIs', 'Webhooks', 'Deluge'],
  },
  {
    key: 'platforms',
    title: 'Platforms',
    icon: Boxes,
    accent: 'from-cyan-500/20 to-cyan-500/5',
    dot: 'bg-cyan-400',
    tools: ['WooCommerce', 'WordPress', 'Simpro', 'Stripe', 'GoHighLevel', 'Freshdesk'],
  },
  {
    key: 'productivity',
    title: 'Productivity',
    icon: Users,
    accent: 'from-blue-500/20 to-violet-500/5',
    dot: 'bg-emerald-400',
    tools: ['Google Workspace', 'Microsoft 365', 'Slack', 'Asana', 'Descript'],
  },
]

function ToolBadge({ name, dot }: { name: string; dot: string }) {
  const note = name.match(/\(([^)]+)\)/)?.[1]
  const label = name.replace(/\s*\([^)]*\)/, '')
  return (
    <span className="group/badge inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted-foreground bg-white/[0.03] border border-white/[0.06] hover:text-foreground hover:bg-white/[0.06] hover:border-primary/40 hover:shadow-[0_0_16px_-4px_rgba(59,130,246,0.5)] transition cursor-default">
      <BrandIcon name={name} size={16} className="opacity-90 group-hover/badge:opacity-100 transition" />
      <span>{label}</span>
      {note && <span className={`w-1 h-1 rounded-full ${dot}`} title={note} />}
    </span>
  )
}

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
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            The platforms and tools I use to build CRM systems, automations, and operational workflows
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {technologies.map((category, i) => {
            const Icon = category.icon
            return (
              <Reveal key={category.key} delay={i * 80}>
                <div className="group glass-card spotlight neon-top rounded-2xl p-6 h-full overflow-hidden">
                  {/* Dashboard-style header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${category.accent} ring-1 ring-white/10`}>
                        <Icon className="w-5 h-5 text-foreground" />
                      </span>
                      <h3 className="text-sm font-bold text-foreground">{category.title}</h3>
                    </div>
                    <span className="flex items-center gap-1.5 mono-label text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.dot} animate-pulse`} />
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <ToolBadge key={tool} name={tool} dot={category.dot} />
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
