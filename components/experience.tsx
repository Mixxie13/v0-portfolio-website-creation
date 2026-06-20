'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  Lightbulb,
  Layers,
  TrendingUp,
  Building2,
  ArrowRight,
  CheckCircle2,
  GitBranch,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BrandIcon } from '@/components/brand-icon'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const caseStudies = [
    {
      company: 'BlueCloudUSA',
      role: 'Operations Manager & Executive Assistant',
      positioning:
        'Operations, customer onboarding, CRM management, compliance coordination, billing support, workflow optimization, and automation planning.',
      challenge:
        'BlueCloudUSA needed to establish scalable operational systems across customer onboarding, ACH migration support, compliance management, and CRM administration while maintaining quality and team coordination.',
      solution:
        'Established operational framework using the Zoho ecosystem for customer workflow management, coordinated ACH migration initiatives and customer verification processes, structured 10DLC compliance tracking and documentation, developed SOPs for repeatable operational processes, and supported planning for AI voice agent implementation.',
      systemsUsed: ['Zoho One', 'Stripe', 'Google Workspace', 'Microsoft Office'],
      operationalCoordination:
        'Coordinated customer onboarding workflows, managed ACH migration support and verification processes, tracked 10DLC compliance submissions and approvals, liaised with internal teams on vendor relationships, provided executive support and billing administration.',
      outcome:
        'Improved operational visibility and accountability across departments, established repeatable onboarding and compliance processes, coordinated successful ACH migration, provided foundational support for planned VoIP and AI voice agent initiatives.',
      responsibilities: [
        'Managed day-to-day operational support across customer onboarding, billing, CRM administration, and client communications',
        'Coordinated onboarding processes and account activations',
        'Managed customer follow-ups and implementation workflows',
        'Supported ACH migration initiatives and customer verification processes',
        'Oversaw customer communication, escalations, and service coordination',
        'Managed Zoho Projects tasks and operational workflows',
        'Coordinated internal teams and vendor relationships',
        'Supported AI voice automation implementation planning',
        'Assisted with CRM integrations, workflow automation, and process improvements',
        'Managed 10DLC campaign compliance submissions, revisions, and approvals',
        'Investigated billing inquiries and customer account concerns',
        'Created SOPs, documentation, and repeatable operational processes',
        'Supported executive-level administrative and operational functions',
        'Helped improve visibility, accountability, and workflow efficiency across departments',
      ],
    },
    {
      company: 'TLH (The Lucky Harvest)',
      role: 'Operations Manager | Zoho Consultant | Systems Support',
      positioning:
        'Business systems optimization, operational process improvement, CRM implementation, product management architecture, and workflow automation.',
      challenge:
        'The Lucky Harvest needed to synchronize product data between WooCommerce and inventory systems, improve order workflow coordination, and establish scalable operational processes to support growing e-commerce operations.',
      solution:
        'Designed Zoho inventory architecture and operational workflows, developed a WooCommerce to Zoho synchronization strategy, structured product management workflows, created centralized product and order management processes, and established scalable operational systems in Simpro.',
      systemsUsed: ['Zoho One', 'Make.com', 'WooCommerce', 'Simpro', 'Google Workspace'],
      operationalCoordination:
        'Coordinated product data management between WooCommerce and Zoho, structured order workflow processes, designed product-to-job mapping in Simpro, improved data organization and reporting structures, established operational process documentation.',
      outcome:
        'Improved product data accuracy and synchronization, reduced manual data entry, enabled real-time product visibility across platforms, established scalable operational infrastructure and repeatable processes.',
      responsibilities: [
        'Designed and implemented Zoho operational workflows',
        'Built product management and inventory processes',
        'Developed WooCommerce to Zoho synchronization strategy',
        'Created automation scenarios using Make.com',
        'Structured operational systems and business workflows',
        'Developed SOPs and process documentation',
        'Created process maps and operational frameworks',
        'Improved data management and reporting structures',
        'Supported systems administration and platform optimization',
        'Established scalable operational processes',
        'Assisted with business transformation initiatives',
        'Designed centralized product and information management workflows',
      ],
    },
    {
      company: 'WCJ (We Clear Junk)',
      role: 'Zoho Systems Implementor & Financial Reporting Analyst',
      positioning:
        'CRM implementation, systems architecture, operational reporting, process optimization, automation planning, and business intelligence.',
      challenge:
        'WCJ needed to implement a comprehensive CRM system to manage lead-to-job workflows, establish customer service ticketing, create reporting dashboards, and build financial visibility across operations.',
      solution:
        'Led Zoho CRM implementation planning, designed customer lifecycle workflows from lead to job completion, structured Freshdesk for customer service, created financial reporting frameworks, and planned automation strategies using Make.com.',
      systemsUsed: ['Zoho One', 'Make.com', 'Freshdesk', 'Google Workspace'],
      operationalCoordination:
        'Automated lead-to-job workflow processes, implemented customer lifecycle automations, structured ticket management and escalation workflows, created KPI dashboards for management visibility.',
      outcome:
        'Established scalable CRM infrastructure, improved lead tracking and conversion visibility, created comprehensive financial reporting for better decision-making, reduced manual handoff errors.',
      responsibilities: [
        'Led Zoho systems implementation planning',
        'Designed CRM architecture and customer workflows',
        'Created business process maps and operational frameworks',
        'Developed lead-to-job lifecycle workflows',
        'Structured customer service and ticket management systems',
        'Planned automation and workflow strategies',
        'Designed reporting structures and KPI dashboards',
        'Built financial reporting frameworks and management visibility tools',
        'Improved operational reporting processes',
        'Developed process documentation and implementation plans',
        'Supported business intelligence and performance tracking initiatives',
        'Structured scalable CRM and reporting systems',
      ],
    },
  ]

  const study = caseStudies[activeIndex]

  const steps = [
    {
      key: 'problem',
      label: 'Problem',
      icon: AlertTriangle,
      iconColor: 'text-amber-400',
      ring: 'ring-amber-400/30',
      bg: 'from-amber-500/15 to-amber-500/5',
      content: study.challenge,
    },
    {
      key: 'solution',
      label: 'Solution',
      icon: Lightbulb,
      iconColor: 'text-blue-400',
      ring: 'ring-blue-400/30',
      bg: 'from-blue-500/15 to-blue-500/5',
      content: study.solution,
    },
    {
      key: 'systems',
      label: 'Systems',
      icon: Layers,
      iconColor: 'text-violet-400',
      ring: 'ring-violet-400/30',
      bg: 'from-violet-500/15 to-violet-500/5',
      content: study.operationalCoordination,
      badges: study.systemsUsed,
    },
    {
      key: 'outcome',
      label: 'Outcome',
      icon: TrendingUp,
      iconColor: 'text-emerald-400',
      ring: 'ring-emerald-400/30',
      bg: 'from-emerald-500/15 to-emerald-500/5',
      content: study.outcome,
    },
  ]

  return (
    <section id="case-studies" className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            <GitBranch className="w-3.5 h-3.5" />
            Systems Implementation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Proven expertise in CRM implementation, systems architecture, business process automation, and operational transformation
          </p>
        </Reveal>

        {/* Company selector tabs */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudies.map((cs, index) => (
            <button
              key={cs.company}
              onClick={() => setActiveIndex(index)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                activeIndex === index
                  ? 'glass-card border-primary/50 shadow-[0_0_24px_-6px_rgba(37,99,235,0.5)]'
                  : 'glass-effect hover:border-primary/30'
              }`}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-lg ring-1 transition ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-primary/30 to-secondary/20 ring-primary/40'
                    : 'bg-white/[0.04] ring-white/10'
                }`}
              >
                <Building2 className={`w-5 h-5 ${activeIndex === index ? 'text-cyan-300' : 'text-muted-foreground'}`} />
              </span>
              <span>
                <span className={`block text-sm font-bold ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {cs.company}
                </span>
                <span className="block text-[11px] text-muted-foreground/80 max-w-[180px] truncate">
                  {cs.role}
                </span>
              </span>
            </button>
          ))}
        </Reveal>

        {/* Active case study */}
        <div key={activeIndex} className="animate-fade-in-up">
          {/* Header */}
          <div className="glass-card gradient-ring rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{study.company}</h3>
            <p className="text-cyan-300 font-semibold mb-3">{study.role}</p>
            <p className="text-muted-foreground text-sm italic leading-relaxed">{study.positioning}</p>
          </div>

          {/* Process timeline: Problem -> Solution -> Systems -> Outcome */}
          <div className="relative pl-2 sm:pl-0">
            {/* Step flow indicator (desktop horizontal) */}
            <div className="hidden md:flex items-center justify-center gap-2 mb-10">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.key} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.bg} ring-1 ${step.ring}`}>
                        <Icon className={`w-5 h-5 ${step.iconColor}`} />
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">{step.label}</span>
                    </div>
                    {i < steps.length - 1 && <ArrowRight className="w-5 h-5 text-border mx-3 mb-6" />}
                  </div>
                )
              })}
            </div>

            {/* Step cards with connecting vertical line */}
            <div className="relative space-y-5">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-amber-400/40 via-violet-400/40 to-emerald-400/40 hidden sm:block" />
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <Reveal key={step.key} delay={i * 60}>
                    <div className="relative flex gap-4 sm:gap-5">
                      {/* Node */}
                      <div className="relative z-10 shrink-0">
                        <span className={`flex items-center justify-center w-14 h-14 rounded-xl glass-card bg-gradient-to-br ${step.bg} ring-1 ${step.ring}`}>
                          <Icon className={`w-6 h-6 ${step.iconColor}`} />
                        </span>
                      </div>
                      {/* Content */}
                      <div className="flex-1 glass-card spotlight rounded-2xl p-5 sm:p-6 overflow-hidden">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="mono-label text-muted-foreground/70">Step {i + 1}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <h4 className={`text-base font-bold ${step.iconColor}`}>{step.label}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.content}</p>
                        {step.badges && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {step.badges.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-violet-100 bg-violet-500/[0.08] border border-violet-500/25 hover:border-violet-400/60 transition"
                              >
                                <BrandIcon name={tech} size={14} />
                                {tech.replace(/\s*\([^)]*\)/, '')}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Responsibilities */}
          <Reveal className="mt-8 glass-card rounded-2xl p-6 sm:p-8">
            <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              Key Responsibilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {study.responsibilities.map((resp, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
