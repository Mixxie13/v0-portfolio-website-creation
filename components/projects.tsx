'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Boxes } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Asana CRM Lead Engagement Workflow',
      description: 'Automated lead tracking and follow-up system ensuring consistent engagement and zero missed opportunities.',
      details: 'Implemented comprehensive Zapier integration connecting CRM data with Asana, automating task creation, notifications, and follow-up reminders to ensure no lead falls through the cracks.',
      tags: ['Zapier', 'Asana', 'CRM', 'Lead Management'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-29%20033718-PCVxgeVjifaguZndKewcb8enWwmqSn.png',
    },
    {
      title: 'Automated Lead Enrichment System',
      description: 'Built workflows to enhance lead data using APIs, significantly improving data quality for targeted outreach.',
      details: 'Created multi-step API integration workflows that automatically enrich lead profiles with company data, engagement scores, and firmographic information for better targeting.',
      tags: ['API', 'Lead Gen', 'Data Processing'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-29%20064020-LAwcUvl6J0kPs1TWqQQtwemqEGjeDp.png',
    },
    {
      title: 'AI Content Repurposing Engine',
      description: 'Created intelligent system transforming long-form content into multiple optimized social media formats automatically.',
      details: 'Developed AI-powered automation that takes blog posts and long-form content, automatically generating optimized versions for LinkedIn, Instagram, Twitter, and Facebook.',
      tags: ['AI', 'Content Creation', 'Automation'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-26%20015828-NynJ0OIIOrrJvhU8Q9c6wKThgwvQ4F.png',
    },
    {
      title: 'Gmail to Google Drive Auto-Organization',
      description: 'Automated intelligent sorting and organization of email attachments into structured folders.',
      details: 'Built Make.com workflow to automatically categorize and organize email attachments into structured Google Drive folders based on file type, sender, and date.',
      tags: ['Google Workspace', 'Make.com', 'Workflow Automation'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-12%20213207-4pbZD5iRe32Aeldz8777ff7TE99yRk.png',
    },
    {
      title: 'Xero to Asana Financial Workflow',
      description: 'Streamlined financial operations by automating transaction exports and task creation.',
      details: 'Created integration between Xero and Asana to automatically create project tasks from financial transactions, enabling seamless project accounting and expense tracking.',
      tags: ['Xero', 'Asana', 'Integration', 'Finance'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-12%20213228-tNjVC6P1cQL5ldUPrSNkXaSTZJm9jx.png',
    },
    {
      title: 'AI-Powered Facebook Chatbot',
      description: 'Developed intelligent chatbot handling customer inquiries and support requests.',
      details: 'Built AI agent integrated with Facebook Messenger using advanced prompt engineering to qualify leads, answer common questions, and route complex inquiries to human agents.',
      tags: ['AI', 'Facebook', 'Customer Service', 'Chatbot'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-13%20102343-fLj2Y8eWe5hpgRwxC9mJo9zURvwIc1.png',
    },
    {
      title: 'Jobs Scraper + Resume Optimizer',
      description: 'Built system scraping job listings and automatically tailoring resumes using AI.',
      details: 'Created automation that scrapes job postings, extracts key requirements, and uses AI to tailor resumes for improved matching and application success rates.',
      tags: ['AI', 'Web Scraping', 'Automation'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-14%20140418-yNzN9y3A8HClHhS24SzLBoNBLySEvA.png',
    },
    {
      title: 'YouTube Shorts & Reels Creator',
      description: 'Automated generation and formatting of short-form video content for distribution.',
      details: 'Set up workflow to automatically convert long-form content into optimized YouTube Shorts and Instagram Reels with captions, transitions, and platform-specific formatting.',
      tags: ['Video Automation', 'Social Media', 'Content'],
      image: null,
    },
    {
      title: 'AI Appointment Setter',
      description: 'Automated workflow qualifying leads and scheduling appointments efficiently.',
      details: 'Built AI agent that qualifies leads through conversation, checks availability, and automatically schedules appointments in calendar systems while sending confirmation emails.',
      tags: ['AI', 'Sales Automation', 'Lead Management'],
      image: null,
    },
    {
      title: 'RAG Knowledge Base Agents',
      description: 'Developed AI agents leveraging knowledge bases for context-aware responses.',
      details: 'Created advanced AI agents using Retrieval-Augmented Generation (RAG) technology to provide accurate, context-aware responses based on company knowledge bases and documentation.',
      tags: ['AI', 'RAG', 'Knowledge Management'],
      image: null,
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            <Boxes className="w-3.5 h-3.5" />
            Build Log
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Implementation <span className="text-gradient">Examples</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Real-world examples of automation systems, integrations, and workflow solutions I&apos;ve built
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isOpen = selectedIndex === index
            return (
              <Reveal key={project.title} delay={(index % 2) * 80}>
                <div
                  onClick={() => setSelectedIndex(isOpen ? null : index)}
                  className={`group glass-card spotlight gradient-ring overflow-hidden rounded-2xl cursor-pointer h-full ${
                    isOpen ? 'border-primary/50 shadow-[0_0_30px_-8px_rgba(37,99,235,0.5)]' : ''
                  }`}
                >
                  {project.image && (
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/30 to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-gradient' : 'text-foreground group-hover:text-cyan-300'}`}>
                        {project.title}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                    {isOpen && (
                      <div className="mb-4 pt-4 border-t border-white/[0.06] animate-fade-in-up">
                        <p className="text-sm text-foreground/90 leading-relaxed">{project.details}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium text-cyan-200/80 bg-cyan-500/[0.07] border border-cyan-500/20 group-hover:border-cyan-400/40 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
