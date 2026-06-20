'use client'

import {
  Database,
  Workflow,
  Link2,
  Target,
  LineChart,
  Building2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
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
      'Full CRM system design and implementation tailored to your business model. From architecture and workflow design to dashboard creation and team training. I ensure your CRM becomes the operational backbone of your business.',
    icon: Database,
    skills: ['Zoho CRM', 'Workflow Design', 'Dashboards', 'Automation'],
  },
  {
    title: 'Business Process Automation',
    description:
      'Design and build intelligent automation systems using Make.com and Zoho Flow. Eliminate manual repetitive tasks, improve data accuracy, and create scalable operational workflows.',
    icon: Workflow,
    skills: ['Make.com', 'Zoho Flow', 'Workflow Automation', 'Process Design'],
  },
  {
    title: 'Systems Integration & APIs',
    description:
      'Connect your business tools seamlessly. Expert integration of WooCommerce, Freshdesk, Simpro, and custom APIs to ensure data flows reliably across your entire tech stack.',
    icon: Link2,
    skills: ['API Integration', 'Webhooks', 'Data Sync', 'Custom Integrations'],
  },
  {
    title: 'Operational Consulting',
    description:
      'Transform your business operations through process mapping, workflow optimization, and systems design. I help you identify bottlenecks, standardize procedures, and build scalable operational infrastructure.',
    icon: Target,
    skills: ['Process Mapping', 'Operations Strategy', 'SOP Development', 'Systems Design'],
  },
  {
    title: 'Financial Reporting & Analytics',
    description:
      'Build comprehensive reporting dashboards and analytics systems that provide management visibility. Transform raw data into actionable business intelligence for better decision-making.',
    icon: LineChart,
    skills: ['Reporting', 'KPI Dashboards', 'Business Intelligence', 'Data Analysis'],
  },
  {
    title: 'Systems Architecture Planning',
    description:
      'Design scalable, future-proof business systems. Help you plan technology infrastructure, integration strategies, and operational architecture to support growth.',
    icon: Building2,
    skills: ['Systems Design', 'Architecture Planning', 'Scalability', 'Tech Strategy'],
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
            Comprehensive automation solutions to transform your business operations
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 70}>
                <div className="group relative glass-card gradient-ring rounded-2xl p-7 h-full overflow-hidden">
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
