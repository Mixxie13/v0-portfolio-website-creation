'use client'

import { useState } from 'react'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const positions = [
    {
      role: "Executive Assistant",
      company: "BlueCloud USA",
      year: "2025",
      description: "Handles email and calendar management for the team, ensuring appointments and internal meetings are properly scheduled and aligned. Sends outreach emails to prospects, coordinates communications, and secures both virtual and in-person appointments. Edits and formats documents including internal resources and visual materials while maintaining brand consistency. Works within the company system to create and manage accounts, input client data, and track project progress through Zoho CRM and Zoho Projects."
    },
    {
      role: "CRM Specialist",
      company: "Inhouse Outbound Systems LLC",
      year: "2025",
      description: "Built and managed CRM environments reflecting real-world sales workflows including pipelines, contact records, and reporting dashboards. Created demo-ready CRM setups for marketing, training, and content production. Identified and structured solutions for common CRM issues such as outdated contacts and poor data hygiene. Collaborated with leadership to translate complex CRM challenges into visual systems. Maintained and organized CRM data ensuring accuracy and consistency across teams."
    },
    {
      role: "Lead Generation Specialist",
      company: "Jay Abbasi Consulting",
      year: "2025",
      description: "Researched and built qualified prospect lists aligned with the client's target market and outreach goals. Sent personalized LinkedIn invites and tracked responses using Pipedrive to monitor lead status and pipeline movement. Executed follow-up strategies through email and alternate platforms when initial outreach received no response. Maintained accurate lead records and ensured CRM was consistently up to date for reporting and team collaboration."
    },
    {
      role: "Virtual Assistant",
      company: "SuperfastCPA (NSH L.L.C.)",
      year: "2021 - 2025",
      description: "Wrote, proofread, and edited high-quality articles tailored to various industries ensuring engaging and SEO-friendly content. Transcribed and summarized lengthy audio and video files into well-structured documents. Managed and executed large-scale data entry tasks with high accuracy ensuring consistency and adherence to deadlines. Maintained organized records and prepared detailed daily performance reports to track progress and enhance workflow transparency."
    },
    {
      role: "Virtual Assistant",
      company: "Direct Client (Germany)",
      year: "2020 - 2021",
      description: "Managed and optimized product listings for an e-commerce store ensuring accurate descriptions and high-quality images. Handled customer inquiries professionally via email and chat providing timely and effective solutions. Processed orders, coordinated with shipping providers, and ensured smooth logistics operations. Conducted market research to identify trends and improve product visibility increasing customer engagement."
    }
  ]

  const skills = [
    "Zapier", "Make", "n8n", "HighLevel",
    "Pipedrive", "HubSpot", "Zoho CRM",
    "API Integration", "Webhooks", "JSON",
    "AI Prompt Engineering", "Process Mapping",
    "No-Code Automation", "SOP Development",
    "LinkedIn Automation", "Email Management",
    "Google Workspace", "Microsoft Office",
    "WordPress", "Data Organization"
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            5+ years of proven expertise in automation, CRM setup, and business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {positions.map((position, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 pb-8 border-l-2 cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? 'border-primary' : 'border-border'
                  } last:pb-0`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`absolute -left-3.5 top-0 w-5 h-5 rounded-full border-4 border-background transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary scale-125' : 'bg-muted'
                  }`}></div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">{position.role}</h3>
                    <span className="text-sm text-muted-foreground">{position.year}</span>
                  </div>
                  <p className="text-primary font-semibold mb-2">{position.company}</p>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-8 border border-border sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-background border border-border rounded-full text-xs text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-4 text-primary">Certifications</h4>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ Zapier Certified Expert</li>
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ Make Advanced Scenario Builder</li>
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ Microsoft Power Automate Fundamentals</li>
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ API Integration Professional</li>
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ HighLevel Automation Architect</li>
                  <li className="text-sm text-muted-foreground hover:text-foreground transition">✓ AI Prompt Engineering Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
