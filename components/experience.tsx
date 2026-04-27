export function Experience() {
  const positions = [
    {
      role: "Executive Assistant",
      company: "BlueCloud USA",
      year: "2025",
      description: "Email and calendar management, prospect outreach coordination, document editing and formatting, and CRM account management using Zoho CRM and Zoho Projects."
    },
    {
      role: "Lead Generation Specialist",
      company: "Jay Abbasi Consulting",
      year: "2025",
      description: "Built qualified prospect lists, executed LinkedIn outreach campaigns, maintained lead pipelines in Pipedrive, and ensured CRM accuracy for reporting."
    },
    {
      role: "Virtual Assistant",
      company: "SuperfastCPA (NSH L.L.C.)",
      year: "2021 - 2025",
      description: "Content writing and editing across multiple industries, audio/video transcription and summarization, large-scale data entry management, and detailed performance reporting."
    },
    {
      role: "Virtual Assistant",
      company: "Direct Client (Germany)",
      year: "2020 - 2021",
      description: "E-commerce product listing optimization, customer service via email and chat, order processing and logistics coordination, and market research for product visibility."
    }
  ]

  const skills = [
    "Zapier", "Make (Integromat)", "n8n",
    "HighLevel", "Pipedrive", "HubSpot",
    "Zoho CRM", "API Integration", "Webhooks",
    "AI Prompt Engineering", "Process Mapping",
    "No-Code Automation", "SOP Development",
    "Google Workspace", "Microsoft Office"
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            5+ years of proven expertise in automation, CRM, and business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {positions.map((position, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0 last:border-b-2 last:border-l-0">
                  <div className="absolute -left-3.5 top-0 w-5 h-5 rounded-full bg-accent border-4 border-background"></div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-foreground">{position.role}</h3>
                    <span className="text-sm text-muted-foreground">{position.year}</span>
                  </div>
                  <p className="text-accent font-semibold mb-2">{position.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{position.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-8 border border-border sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:text-accent transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Zapier Certified Expert</li>
                  <li>✓ Make Advanced Scenario Builder</li>
                  <li>✓ Microsoft Power Automate Fundamentals</li>
                  <li>✓ API Integration Professional</li>
                  <li>✓ HighLevel Automation Architect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
