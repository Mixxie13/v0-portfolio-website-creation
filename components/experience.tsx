'use client'

import { useState } from 'react'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const caseStudies = [
    {
      company: "BlueCloudUSA",
      role: "Operations Manager & Executive Assistant",
      positioning: "Operations, customer onboarding, CRM management, compliance coordination, billing support, workflow optimization, and automation planning.",
      challenge: "BlueCloudUSA needed to streamline complex operational workflows across customer onboarding, ACH migration support, compliance management, and CRM administration while maintaining service quality and team coordination.",
      solution: "Implemented centralized operational systems using Zoho CRM and Zoho Projects to manage customer workflows, built Make.com automation scenarios for ACH verification processes, coordinated 10DLC compliance submissions, and structured SOPs for repeatable operations.",
      systemsUsed: ["Zoho CRM", "Zoho Projects", "Make.com", "Stripe", "APIs", "Webhooks"],
      automationLogic: "Automated customer verification workflows using APIs, streamlined 10DLC compliance tracking, implemented CRM integrations for real-time visibility, coordinated AI voice agent implementation planning",
      outcome: "Improved operational visibility and accountability across departments, reduced manual follow-up tasks, established scalable onboarding processes, and positioned company for VoIP and AI automation expansion",
      responsibilities: [
        "Managed day-to-day operational support across customer onboarding, billing, CRM administration, and client communications",
        "Coordinated onboarding processes and account activations",
        "Managed customer follow-ups and implementation workflows",
        "Supported ACH migration initiatives and customer verification processes",
        "Oversaw customer communication, escalations, and service coordination",
        "Managed Zoho Projects tasks and operational workflows",
        "Coordinated internal teams and vendor relationships",
        "Managed 10DLC campaign compliance submissions, revisions, and approvals",
        "Investigated billing inquiries and customer account concerns",
        "Created SOPs, documentation, and repeatable operational processes",
        "Supported AI voice automation implementation planning"
      ]
    },
    {
      company: "TLH (The Lighting Hub)",
      role: "Operations Manager | Zoho Consultant | Systems Support",
      positioning: "Business systems optimization, operational process improvement, CRM implementation, product management architecture, and workflow automation.",
      challenge: "TLH needed to synchronize product data between WooCommerce and inventory systems, automate order workflows, and establish scalable operational processes to support growing e-commerce operations.",
      solution: "Designed and implemented Zoho Inventory architecture, created WooCommerce to Zoho synchronization strategy using Make.com automations, developed centralized product management workflows, and structured operational systems for scalability.",
      systemsUsed: ["Zoho CRM", "Zoho Inventory", "Zoho Flow", "Make.com", "WooCommerce", "Simpro"],
      automationLogic: "Automated product data synchronization between WooCommerce and Zoho Inventory, implemented order workflow automations, structured product-to-job mapping in Simpro, created data management and reporting structures",
      outcome: "Reduced manual data entry by 80%, improved inventory accuracy, enabled real-time product visibility across platforms, established scalable operational infrastructure",
      responsibilities: [
        "Designed and implemented Zoho operational workflows",
        "Built product management and inventory processes",
        "Developed WooCommerce to Zoho synchronization strategy",
        "Created automation scenarios using Make.com",
        "Structured operational systems and business workflows",
        "Developed SOPs and process documentation",
        "Created process maps and operational frameworks",
        "Improved data management and reporting structures",
        "Established scalable operational processes",
        "Designed centralized product and information management workflows"
      ]
    },
    {
      company: "WCJ (We Clear Junk)",
      role: "Zoho Systems Implementor & Financial Reporting Analyst",
      positioning: "CRM implementation, systems architecture, operational reporting, process optimization, automation planning, and business intelligence.",
      challenge: "WCJ needed to implement a comprehensive CRM system to manage lead-to-job workflows, establish customer service ticketing, create reporting dashboards, and build financial visibility across operations.",
      solution: "Led Zoho CRM implementation planning, designed customer lifecycle workflows from lead to job completion, structured Zoho Desk for customer service, created financial reporting frameworks, and planned automation strategies using Make.com and Zoho Flow.",
      systemsUsed: ["Zoho CRM", "Zoho Desk", "Zoho Flow", "Make.com", "Freshdesk", "Lucidspark"],
      automationLogic: "Automated lead-to-job workflow processes, implemented customer lifecycle automations, structured ticket management and escalation workflows, created KPI dashboards for management visibility",
      outcome: "Established scalable CRM infrastructure, improved lead tracking and conversion visibility, created comprehensive financial reporting for better decision-making, reduced manual handoff errors",
      responsibilities: [
        "Led Zoho systems implementation planning",
        "Designed CRM architecture and customer workflows",
        "Created business process maps and operational frameworks",
        "Developed lead-to-job lifecycle workflows",
        "Structured customer service and ticket management systems",
        "Planned automation and workflow strategies",
        "Designed reporting structures and KPI dashboards",
        "Built financial reporting frameworks and management visibility tools",
        "Improved operational reporting processes",
        "Developed process documentation and implementation plans"
      ]
    }
  ]

  const skills = [
    "Zoho CRM", "Zoho Inventory", "Zoho Desk", "Zoho Flow", "Zoho Creator",
    "Make.com", "WooCommerce", "Simpro", "Freshdesk",
    "API Integration", "Webhooks", "Process Mapping",
    "Business Systems", "Operational Consulting", "SOP Development",
    "Financial Reporting", "Data Management", "Workflow Automation",
    "Google Workspace", "Microsoft Office"
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Proven expertise in CRM implementation, systems architecture, business process automation, and operational transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Case Study Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3 lg:sticky lg:top-24">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border hover:border-primary hover:bg-card/80'
                  }`}
                >
                  <div className="font-bold text-sm">{study.company}</div>
                  <div className={`text-xs mt-1 ${activeIndex === index ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {study.role}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study Details */}
          <div className="lg:col-span-2">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'hidden'}`}
              >
                <div className="bg-card rounded-lg border border-border p-8 space-y-8">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{study.company}</h3>
                    <p className="text-primary font-semibold mb-3">{study.role}</p>
                    <p className="text-muted-foreground italic">{study.positioning}</p>
                  </div>

                  {/* Problem */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Business Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Solution Designed
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Systems Used */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Systems & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.systemsUsed.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Automation Logic */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Automation & Integration Logic
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.automationLogic}</p>
                  </div>

                  {/* Outcome */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Business Outcomes
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {study.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-primary font-bold mt-1">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">Technology Stack</h3>
            <p className="text-muted-foreground">Core tools and platforms used across implementations</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
