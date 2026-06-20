'use client'

import { Database, Workflow, Bot, ClipboardList, Headset, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Service {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
}

const services: Service[] = [
  {
    title: 'Zoho CRM Implementation',
    description:
      'End-to-end Zoho CRM design — setup, pipelines, custom modules, automation, and reporting built around how your business actually operates.',
    icon: Database,
    skills: ['CRM Setup', 'Pipelines', 'Workflow Automation', 'Reporting', 'Custom Modules'],
  },
  {
    title: 'Business Process Automation',
    description:
      'Connect your tools and eliminate manual work with Make.com automations, API integrations, webhooks, and reliable data synchronization.',
    icon: Workflow,
    skills: ['Make.com Automations', 'API Integrations', 'Webhooks', 'Data Synchronization', 'Workflow Design'],
  },
  {
    title: 'AI Agent Systems',
    description:
      'Deploy AI voice and chat agents that qualify leads, automate customer support, and run intelligent workflows around the clock.',
    icon: Bot,
    skills: ['Voice Agents', 'Lead Qualification', 'Customer Support Automation', 'AI Workflows'],
  },
  {
    title: 'Business Systems Consulting',
    description:
      'Map processes, document SOPs, and run operational audits to optimize workflows and build systems that scale with your growth.',
    icon: ClipboardList,
    skills: ['Process Mapping', 'SOP Development', 'Workflow Optimization', 'Operational Audits'],
  },
  {
    title: 'Technical Virtual Assistance',
    description:
      'Ongoing CRM administration, operations support, system maintenance, and documentation to keep your systems running smoothly.',
    icon: Headset,
    skills: ['CRM Administration', 'Operations Support', 'System Maintenance', 'Documentation'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Comprehensive CRM, automation, and AI solutions to transform your business operations
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 70}>
                <div className="group relative glass-card spotlight gradient-ring rounded-2xl p-7 h-full overflow-hidden">
                  {/* Corner accent glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start justify-between mb-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 ring-1 ring-white/10 group-hover:ring-primary/40 group-hover:scale-105 transition">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary -translate-y-1 group-hover:translate-y-0 transition" />
                  </div>

                  <h3 className="relative text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="relative flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium text-cyan-200/80 bg-cyan-500/[0.07] border border-cyan-500/20 px-2 py-1 rounded-md"
                      >
                        {skill}
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
