'use client'

import { useState } from 'react'

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Workflow Automation",
      description: "Design and implement automated workflows using Zapier, Make, n8n, and HighLevel to eliminate repetitive tasks and improve efficiency. Expert in complex scenario building and multi-step automation.",
      icon: "⚙️",
      skills: ["Zapier", "Make", "n8n", "HighLevel"]
    },
    {
      title: "CRM Setup & Optimization",
      description: "Configure and optimize CRM systems including Pipedrive, HubSpot, Zoho, and HighLevel. Build custom pipelines, dashboards, and workflows tailored to your sales process.",
      icon: "📊",
      skills: ["Pipedrive", "HubSpot", "Zoho", "HighLevel"]
    },
    {
      title: "Lead Generation & Outreach",
      description: "Build and execute lead generation strategies using LinkedIn automation, email outreach systems, and AI-powered qualification. Manage and nurture prospects at scale.",
      icon: "🎯",
      skills: ["LinkedIn", "Email", "AI", "CRM"]
    },
    {
      title: "API & Data Integration",
      description: "Connect disparate systems through custom API integrations, webhooks, and JSON handling. Ensure seamless data flow between your business tools.",
      icon: "🔗",
      skills: ["APIs", "Webhooks", "JSON", "Data Sync"]
    },
    {
      title: "AI-Powered Automation",
      description: "Leverage AI for content repurposing, appointment setting, customer inquiry handling, and intelligent data processing using prompt engineering.",
      icon: "🤖",
      skills: ["AI Agents", "Prompt Engineering", "Content AI", "RAG"]
    },
    {
      title: "Executive Operations",
      description: "Complete support for email management, calendar coordination, document editing, data organization, and strategic process improvement.",
      icon: "📋",
      skills: ["Email", "Calendar", "Documents", "Operations"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Comprehensive automation solutions to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 active:scale-95"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              {hoveredIndex === index && (
                <div className="flex flex-wrap gap-2 animate-fade-in-up">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
