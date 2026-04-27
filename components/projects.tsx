export function Projects() {
  const projects = [
    {
      title: "Asana CRM Lead Engagement Workflow",
      description: "Automated lead tracking and follow-up system ensuring consistent engagement and zero missed opportunities.",
      tags: ["Zapier", "Asana", "CRM", "Automation"]
    },
    {
      title: "Automated Lead Enrichment System",
      description: "Built workflows to enhance lead data using APIs, significantly improving data quality for targeted outreach.",
      tags: ["API Integration", "Lead Gen", "Automation", "Data Processing"]
    },
    {
      title: "AI Content Repurposing Engine",
      description: "Created intelligent system transforming long-form content into multiple optimized social media formats automatically.",
      tags: ["AI", "Content", "Automation", "Social Media"]
    },
    {
      title: "Gmail to Google Drive Auto-Organization",
      description: "Automated intelligent sorting and organization of email attachments into structured, searchable Google Drive folders.",
      tags: ["Google Workspace", "Automation", "Zapier"]
    },
    {
      title: "Xero to Asana Financial Workflow",
      description: "Streamlined financial operations by automating transaction exports and task creation across accounting systems.",
      tags: ["Xero", "Asana", "Integration", "Finance"]
    },
    {
      title: "AI-Powered Facebook Assistant",
      description: "Developed intelligent chatbot handling customer inquiries and support requests, improving response times significantly.",
      tags: ["AI", "Facebook", "Customer Service", "Chatbot"]
    },
    {
      title: "Jobs Scraper + Resume Optimizer",
      description: "Built system scraping job listings and automatically tailoring resumes using AI for improved job matching accuracy.",
      tags: ["AI", "Web Scraping", "Automation", "Optimization"]
    },
    {
      title: "YouTube Shorts & Reels Creator",
      description: "Automated generation and formatting of short-form video content for social media distribution and reach.",
      tags: ["Video", "Social Media", "Automation", "Content"]
    },
    {
      title: "AI Appointment Setter",
      description: "Automated workflow qualifying leads and scheduling appointments, reducing manual sales coordination work.",
      tags: ["AI", "Sales", "Automation", "Lead Management"]
    },
    {
      title: "RAG Knowledge Base Agents",
      description: "Developed AI agents leveraging knowledge bases to deliver accurate, context-aware responses at scale.",
      tags: ["AI", "RAG", "Agents", "Knowledge Management"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Recent work demonstrating expertise in automation, integration, and AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-background border border-border hover:border-accent transition group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary text-foreground text-xs rounded font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
