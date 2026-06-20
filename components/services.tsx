'use client'

import { useState } from 'react'

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Zoho CRM Implementation",
      description: "Full CRM system design and implementation tailored to your business model. From architecture and workflow design to dashboard creation and team training. I ensure your CRM becomes the operational backbone of your business.",
      icon: "📊",
      skills: ["Zoho CRM", "Workflow Design", "Dashboards", "Automation"]
    },
    {
      title: "Business Process Automation",
      description: "Design and build intelligent automation systems using Make.com and Zoho Flow. Eliminate manual repetitive tasks, improve data accuracy, and create scalable operational workflows.",
      icon: "⚙️",
      skills: ["Make.com", "Zoho Flow", "Workflow Automation", "Process Design"]
    },
    {
      title: "Systems Integration & APIs",
      description: "Connect your business tools seamlessly. Expert integration of WooCommerce, Freshdesk, Simpro, and custom APIs to ensure data flows reliably across your entire tech stack.",
      icon: "🔗",
      skills: ["API Integration", "Webhooks", "Data Sync", "Custom Integrations"]
    },
    {
      title: "Operational Consulting",
      description: "Transform your business operations through process mapping, workflow optimization, and systems design. I help you identify bottlenecks, standardize procedures, and build scalable operational infrastructure.",
      icon: "🎯",
      skills: ["Process Mapping", "Operations Strategy", "SOP Development", "Systems Design"]
    },
    {
      title: "Financial Reporting & Analytics",
      description: "Build comprehensive reporting dashboards and analytics systems that provide management visibility. Transform raw data into actionable business intelligence for better decision-making.",
      icon: "📈",
      skills: ["Reporting", "KPI Dashboards", "Business Intelligence", "Data Analysis"]
    },
    {
      title: "Systems Architecture Planning",
      description: "Design scalable, future-proof business systems. Help you plan technology infrastructure, integration strategies, and operational architecture to support growth.",
      icon: "🏗️",
      skills: ["Systems Design", "Architecture Planning", "Scalability", "Tech Strategy"]
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
