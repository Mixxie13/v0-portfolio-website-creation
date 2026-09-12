'use client'

import { useState } from 'react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  details: string
  tags: string[]
  image: string | null
}

type Category = {
  label: string
  blurb: string
  projects: Project[]
}

const categories: Category[] = [
  {
    label: 'AI & LLM Agents',
    blurb: 'Autonomous agents, chatbots, and RAG pipelines built on the Gemini/OpenRouter stack',
    projects: [
      { title: 'AI-Powered Facebook Chatbot', description: 'Developed intelligent chatbot handling customer inquiries and support requests.', details: 'Built AI agent integrated with Facebook Messenger using advanced prompt engineering to qualify leads, answer common questions, and route complex inquiries to human agents.', tags: ['AI', 'Facebook', 'Customer Service', 'Chatbot'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-13%20102343-fLj2Y8eWe5hpgRwxC9mJo9zURvwIc1.png' },
      { title: 'Jobs Scraper + Resume Optimizer', description: 'Built system scraping job listings and automatically tailoring resumes using AI.', details: 'Created automation that scrapes job postings, extracts key requirements, and uses AI to tailor resumes for improved matching and application success rates.', tags: ['AI', 'Web Scraping', 'Automation'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-14%20140418-yNzN9y3A8HClHhS24SzLBoNBLySEvA.png' },
      { title: 'AI Appointment Setter', description: 'Automated workflow qualifying leads and scheduling appointments efficiently.', details: 'Built AI agent that qualifies leads through conversation, checks availability, and automatically schedules appointments in calendar systems while sending confirmation emails.', tags: ['AI', 'Sales Automation', 'Lead Management'], image: null },
      { title: 'RAG Knowledge Base Agents', description: 'Developed AI agents leveraging knowledge bases for context-aware responses.', details: 'Created advanced AI agents using Retrieval-Augmented Generation (RAG) technology to provide accurate, context-aware responses based on company knowledge bases and documentation.', tags: ['AI', 'RAG', 'Knowledge Management'], image: null },
    ],
  },
  {
    label: 'Zoho',
    blurb: 'All Zoho CRM, Desk, Flow, and Sheet implementations in one place, from lead intake to customer resolution',
    projects: [
      { title: 'Zoho Flow Website Forms', description: 'Connected website forms to Zoho CRM, Zoho Desk, and Zoho Sheet for a coordinated intake process.', details: 'Designed Zoho Flow automations for contact, quote, moving, and quick-booking forms. The flows route submissions into the right CRM and Desk records, create supporting sheet entries, and keep the customer journey moving without manual re-entry.', tags: ['Zoho Flow', 'Zoho CRM', 'Zoho Desk', 'Zoho Sheet'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.48.00%E2%80%AFAM%20%282%29-uqNLjC0z47uPSHd73uHlIi9L27ocG1.png' },
      { title: 'Zoho CRM Leads Workspace', description: 'Configured a structured lead workspace for managing booking enquiries, owners, services, urgency, and contact details.', details: 'Organized Zoho CRM lead records with custom views, booking fields, contact information, service details, tags, and ownership data so teams can qualify and act on enquiries consistently.', tags: ['Zoho CRM', 'Leads', 'CRM Operations', 'Data Management'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.41.00%E2%80%AFAM%20%282%29-4IvX1SpjNmlobp12oL8x22yBykJu56.png' },
      { title: 'Zoho CRM Analytics Dashboard', description: 'Built an analytics dashboard tracking enquiries, bookings, revenue, sources, team performance, and conversion outcomes.', details: 'Created a management dashboard with KPI cards and visual reports for monthly enquiry trends, source performance, team performance, booking outcomes, pipeline, and booking value.', tags: ['Zoho CRM', 'Analytics', 'Dashboards', 'Reporting'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.42.13%E2%80%AFAM%20%282%29-zNJRrLDxnNp7VkA7yXeQOhryEmvkwx.png' },
      { title: 'Zoho CRM Reports Library', description: 'Created a reusable reporting library for revenue, lead volume, enquiry channels, pipeline, and booking performance.', details: 'Structured CRM reports that turn operational records into clear performance views, including revenue by sector, monthly booking value, lead volume, source performance, and booking conversion.', tags: ['Zoho CRM', 'Reports', 'Business Intelligence', 'Performance'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.41.43%E2%80%AFAM%20%282%29-UO5iaLMdG5avdidB2UTrGwDksgY3WD.png' },
      { title: 'Webform Initial Desk Acknowledgement', description: 'Automatically acknowledged new enquiries after they were created as Zoho Desk tickets and linked to CRM.', details: 'Built a live Zoho Flow with CRM triggers, decision logic, delays, lead lookups, and a Desk email reply. The workflow gives customers a timely acknowledgement while keeping the ticket and lead context connected for the team.', tags: ['Zoho Flow', 'Zoho Desk', 'Zoho CRM', 'Customer Support'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.45.37%E2%80%AFAM%20%282%29-6HP5tsIbJQI7eo43w6n8t7J64cgygt.png' },
      { title: 'Inbound Bookings Ticket Workflow', description: 'Structured inbound booking requests in Zoho Desk with purpose-built booking and ticket fields.', details: 'Configured booking and ticket information layouts for the Inbound Bookings Team, including journey type, service type, postcode, contact details, CRM IDs, subject, and description fields.', tags: ['Zoho Desk', 'Ticketing', 'CRM Operations', 'Bookings'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.43.59%E2%80%AFAM%20%282%29-M812KDzzEQPR0WPKOWiIDcXIvaDEHZ.png' },
      { title: 'Zoho Flow Execution Monitoring', description: 'Monitored automation health with execution summaries, success rates, and daily flow activity.', details: 'Used Zoho Flow summary reporting to track execution volume and success across the last seven days, making it easier to spot failures, validate automations, and maintain reliable operations.', tags: ['Zoho Flow', 'Reporting', 'Monitoring', 'Automation'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-12%20at%203.45.44%E2%80%AFAM%20%282%29-B7Vz8SJPOeT2rjNBR6CKfHrbA2R2jH.png' },
    ],
  },
  {
    label: 'n8n',
    blurb: 'n8n implementations in one place, from API orchestration and data processing to AI-powered content workflows',
    projects: [
      { title: 'API Orchestration Workflows', description: 'Connected services through reusable n8n nodes, webhooks, branching logic, and data transformations.', details: 'Built modular workflows that receive events, validate and reshape payloads, call external APIs, and route results to the right operational systems.', tags: ['n8n', 'APIs', 'Webhooks', 'Data Processing'], image: null },
      { title: 'AI Operations Automation', description: 'Combined AI steps with deterministic business logic for practical, repeatable automations.', details: 'Created n8n workflows that use AI for classification and content handling while preserving clear approval, routing, and notification steps.', tags: ['n8n', 'AI', 'Automation', 'Integrations'], image: null },
      { title: 'AI Content Repurposing Engine', description: 'Created an intelligent system transforming long-form content into optimized social media formats automatically.', details: 'Developed AI-powered automation that takes blog posts and long-form content, automatically generating optimized versions for LinkedIn, Instagram, Twitter, and Facebook.', tags: ['n8n', 'AI', 'Content Creation', 'Automation'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-26%20015828-NynJ0OIIOrrJvhU8Q9c6wKThgwvQ4F.png' },
      { title: 'YouTube Shorts & Reels Creator', description: 'Automated generation and formatting of short-form video content for distribution.', details: 'Set up an n8n workflow to automatically convert long-form content into optimized YouTube Shorts and Instagram Reels with captions, transitions, and platform-specific formatting.', tags: ['n8n', 'Video Automation', 'Social Media', 'Content'], image: null },
    ],
  },
  {
    label: 'Make.com',
    blurb: 'All Make.com scenarios in one place, covering data, files, finance, notifications, and business processes',
    projects: [
      { title: 'Gmail to Google Drive Auto-Organization', description: 'Automated intelligent sorting and organization of email attachments into structured folders.', details: 'Built a Make.com scenario to categorize and organize email attachments into Google Drive folders based on file type, sender, and date.', tags: ['Make.com', 'Gmail', 'Google Drive', 'Workflow Automation'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-12%20213207-4pbZD5iRe32Aeldz8777ff7TE99yRk.png' },
      { title: 'Xero to Asana Financial Workflow', description: 'Streamlined financial operations by automating transaction exports and task creation.', details: 'Created a Make.com integration between Xero and Asana to automatically create project tasks from financial transactions, enabling seamless project accounting and expense tracking.', tags: ['Make.com', 'Xero', 'Asana', 'Finance'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-12%20213228-tNjVC6P1cQL5ldUPrSNkXaSTZJm9jx.png' },
    ],
  },
  {
    label: 'Zapier',
    blurb: 'All Zapier implementations in one place, covering lead management, task creation, notifications, and follow-up',
    projects: [
      { title: 'Asana CRM Lead Engagement Workflow', description: 'Automated lead tracking and follow-up system ensuring consistent engagement and zero missed opportunities.', details: 'Implemented a Zapier integration connecting CRM data with Asana, automating task creation, notifications, and follow-up reminders to ensure no lead falls through the cracks.', tags: ['Zapier', 'Asana', 'CRM', 'Lead Management'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-29%20033718-PCVxgeVjifaguZndKewcb8enWwmqSn.png' },
      { title: 'Automated Lead Enrichment System', description: 'Enhanced lead records with company data, engagement scores, and firmographic information for better targeting.', details: 'Created a Zapier API workflow that enriches lead profiles automatically, improving data quality and supporting more targeted outreach.', tags: ['Zapier', 'API', 'Lead Gen', 'Data Processing'], image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-29%20064020-LAwcUvl6J0kPs1TWqQQtwemqEGjeDp.png' },
    ],
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const activeProjects = categories[activeCategory].projects

  return (
    <section id="projects" className="bg-card/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Implementation Examples</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">Real-world examples of automation systems, integrations, and workflow solutions I&apos;ve built</p>
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Project categories">
          {categories.map((category, index) => (
            <button key={category.label} type="button" role="tab" aria-selected={activeCategory === index} onClick={() => { setActiveCategory(index); setSelectedIndex(null) }} className={`rounded-lg px-5 py-2.5 font-mono text-sm font-medium transition-all duration-300 ${activeCategory === index ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' : 'border border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground'}`}>
              {category.label}<span className={`ml-2 text-xs ${activeCategory === index ? 'opacity-80' : 'opacity-50'}`}>{category.projects.length}</span>
            </button>
          ))}
        </div>
        <p className="mb-12 text-center font-mono text-sm text-muted-foreground">{categories[activeCategory].blurb}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activeProjects.map((project, index) => {
            const isSelected = selectedIndex === index
            return (
              <article key={project.title} className={`overflow-hidden rounded-lg border transition-all duration-300 ${isSelected ? 'scale-105 border-primary bg-background shadow-lg shadow-primary/20' : 'border-border bg-background hover:border-primary'}`}>
                {project.image && <div className="relative h-40 w-full overflow-hidden bg-muted"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 hover:scale-110" /></div>}
                <button type="button" aria-expanded={isSelected} onClick={() => setSelectedIndex(isSelected ? null : index)} className="w-full p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                  <div className="mb-3 flex items-start justify-between gap-4"><h3 className={`text-lg font-bold transition-colors ${isSelected ? 'text-primary' : 'text-foreground'}`}>{project.title}</h3><span aria-hidden="true" className={`text-xl transition-transform ${isSelected ? 'rotate-180' : ''}`}>▼</span></div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  {isSelected && <div className="mb-4 border-t border-border pt-4"><p className="text-sm leading-relaxed text-foreground">{project.details}</p></div>}
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">{tag}</span>)}</div>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
