'use client'

import { useState } from 'react'
import { Mail, Linkedin, Briefcase, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Error sending email:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const contactCards = [
    { icon: Mail, label: 'Email', value: 'moradavega143@gmail.com', href: 'mailto:moradavega143@gmail.com', external: false },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/vegamorada', href: 'https://linkedin.com/in/vegamorada', external: true },
    { icon: Briefcase, label: 'Upwork', value: 'View Profile', href: 'https://www.upwork.com/freelancers/~01513b65b8672f7efa', external: true },
  ]

  const inputClass =
    'w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition'

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-cyan-300 mb-5">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Ready to automate your business and scale efficiently? Let&apos;s discuss your automation needs and project goals.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact info */}
          <Reveal className="lg:col-span-1 space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl glass-card gradient-ring active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 ring-1 ring-white/10 group-hover:ring-primary/40 transition">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold text-foreground">{card.label}</span>
                    <span className="block text-xs text-muted-foreground truncate">{card.value}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition shrink-0" />
                </a>
              )
            })}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://linkedin.com/in/vegamorada"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-center text-cyan-200 bg-cyan-500/[0.08] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/[0.12] transition active:scale-95"
              >
                Message on LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01513b65b8672f7efa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-center text-cyan-200 bg-cyan-500/[0.08] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/[0.12] transition active:scale-95"
              >
                Hire on Upwork
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-2" delay={100}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Automation project inquiry" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} placeholder="Tell me about your automation needs and goals..." />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110 transition active:scale-95"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {submitted && (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm animate-fade-in-up">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Thank you for your message! I&apos;ll get back to you within 24 hours.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
