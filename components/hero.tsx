'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const handleScroll = () => {
      const element = contentRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.75

      if (isVisible) {
        element.classList.add('animate-fade-in-up')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center" ref={contentRef}>
        <div className="mb-8 flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Vega Morada"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in-up">
          Vega Morada
        </h1>
        <p className="text-xl sm:text-2xl text-accent mb-8 text-balance font-semibold">
          Executive Assistant | CRM Specialist | Zoho CRM Specialist | Technical Virtual Assistant
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          I help businesses streamline operations, manage CRM systems, optimize workflows, improve reporting visibility, and implement scalable business processes using Zoho and modern business systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#case-studies" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition active:scale-95">
            View Case Studies
          </a>
          <a href="#contact" className="px-8 py-4 border border-primary/50 text-accent rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition active:scale-95">
            Schedule Consultation
          </a>
        </div>

        {/* Floating tech cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16 max-w-3xl mx-auto">
          {['Zoho CRM', 'Make.com', 'Automation', 'Systems', 'Reporting'].map((item, i) => (
            <div key={i} className="glass-effect hover-glow p-3 rounded-lg animate-float text-sm font-medium text-accent" style={{ animationDelay: `${i * 0.2}s` }}>
              {item}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground mt-2">Years EA &amp; Operations</p>
          </div>
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">3+</p>
            <p className="text-muted-foreground mt-2">CRM Implementations</p>
          </div>
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">Hours</p>
            <p className="text-muted-foreground mt-2">Saved for Businesses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
