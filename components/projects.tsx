'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Asana CRM Lead Engagement Workflow",
      description: "Automated lead tracking and follow-up system ensuring consistent engagement and zero missed opportunities.",
      details: "Implemented comprehensive Zapier integration connecting CRM data with Asana, automating task creation, notifications, and follow-up reminders to ensure no lead falls through the cracks.",
      tags: ["Zapier", "Asana", "CRM", "Lead Management"],
      image: null
    },
    {
      title: "Automated Lead Enrichment System",
      description: "Built workflows to enhance lead data using APIs, significantly improving data quality for targeted outreach.",
      details: "Created multi-step API integration workflows that automatically enrich lead profiles with company data, engagement scores, and firmographic information for better targeting.",
      tags: ["API", "Lead Gen", "Data Processing"],
      image: null
    },
    {
      title: "AI Content Repurposing Engine",
      description: "Created intelligent system transforming long-form content into multiple optimized social media formats automatically.",
      details: "Developed AI-powered automation that takes blog posts and long-form content, automatically generating optimized versions for LinkedIn, Instagram, Twitter, and Facebook.",
      tags: ["AI", "Content Creation", "Automation"],
      image: null
    },
    {
      title: "Gmail to Google Drive Auto-Organization",
      description: "Automated intelligent sorting and organization of email attachments into structured folders.",
      details: "Set up Zapier workflow to automatically categorize and organize email attachments into structured Google Drive folders based on file type, sender, and date.",
      tags: ["Google Workspace", "Automation", "Zapier"],
      image: null
    },
    {
      title: "Xero to Asana Financial Workflow",
      description: "Streamlined financial operations by automating transaction exports and task creation.",
      details: "Created integration between Xero and Asana to automatically create project tasks from financial transactions, enabling seamless project accounting and expense tracking.",
      tags: ["Xero", "Asana", "Integration", "Finance"],
      image: null
    },
    {
      title: "AI-Powered Facebook Chatbot",
      description: "Developed intelligent chatbot handling customer inquiries and support requests.",
      details: "Built AI agent integrated with Facebook Messenger using advanced prompt engineering to qualify leads, answer common questions, and route complex inquiries to human agents.",
      tags: ["AI", "Facebook", "Customer Service", "Chatbot"],
      image: null
    },
    {
      title: "Jobs Scraper + Resume Optimizer",
      description: "Built system scraping job listings and automatically tailoring resumes using AI.",
      details: "Created automation that scrapes job postings, extracts key requirements, and uses AI to tailor resumes for improved matching and application success rates.",
      tags: ["AI", "Web Scraping", "Automation"],
      image: null
    },
    {
      title: "YouTube Shorts & Reels Creator",
      description: "Automated generation and formatting of short-form video content for distribution.",
      details: "Set up workflow to automatically convert long-form content into optimized YouTube Shorts and Instagram Reels with captions, transitions, and platform-specific formatting.",
      tags: ["Video Automation", "Social Media", "Content"],
      image: null
    },
    {
      title: "AI Appointment Setter",
      description: "Automated workflow qualifying leads and scheduling appointments efficiently.",
      details: "Built AI agent that qualifies leads through conversation, checks availability, and automatically schedules appointments in calendar systems while sending confirmation emails.",
      tags: ["AI", "Sales Automation", "Lead Management"],
      image: null
    },
    {
      title: "RAG Knowledge Base Agents",
      description: "Developed AI agents leveraging knowledge bases for context-aware responses.",
      details: "Created advanced AI agents using Retrieval-Augmented Generation (RAG) technology to provide accurate, context-aware responses based on company knowledge bases and documentation.",
      tags: ["AI", "RAG", "Knowledge Management"],
      image: null
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Proven expertise in automation, API integration, CRM setup, and AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              className={`overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer ${
                selectedIndex === index 
                  ? 'bg-background border-primary shadow-lg shadow-primary/20 transform scale-105' 
                  : 'bg-background border-border hover:border-primary'
              }`}
            >
              {project.image && (
                <div className="relative w-full h-40 bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-bold transition-colors ${
                    selectedIndex === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`text-xl transition-transform ${selectedIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {selectedIndex === index && (
                  <div className="mb-4 pt-4 border-t border-border animate-fade-in-up">
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition active:scale-95"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
