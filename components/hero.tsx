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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Vega Morada
        </h1>
        <p className="text-xl sm:text-2xl text-primary mb-8 text-balance font-semibold">
          Senior Automation Specialist | Executive Assistant | CRM Expert
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Specializing in no-code automation using Zapier, Make, n8n, and HighLevel. I transform business operations by building intelligent workflows, optimizing CRMs, and automating complex processes to help founders and teams scale efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition active:scale-95">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition active:scale-95">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">11+</p>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div className="cursor-pointer hover:scale-105 transition">
            <p className="text-4xl font-bold text-primary">4+</p>
            <p className="text-muted-foreground mt-2">Companies Supported</p>
          </div>
        </div>
      </div>
    </section>
  )
}
