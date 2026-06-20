'use client'

import { Mail, Linkedin, Briefcase } from 'lucide-react'
import { Logo } from '@/components/logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-14 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Logo size={36} showPulse={false} />
              <span className="font-bold text-foreground">Vega Morada</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Automation Specialist | CRM Specialist | Executive Assistant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-300 transition">Case Studies</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition">Solutions</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:moradavega143@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-300 transition">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/vegamorada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-300 transition">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-300 transition">
                  <Briefcase className="w-4 h-4" /> Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vega Morada. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/vegamorada" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-300 transition" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-300 transition" aria-label="Upwork">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href="mailto:moradavega143@gmail.com" className="text-muted-foreground hover:text-cyan-300 transition" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
