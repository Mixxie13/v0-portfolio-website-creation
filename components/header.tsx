'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
            <span className="text-sm font-bold text-accent-foreground">VM</span>
          </div>
          <Link href="#" className="text-xl font-bold text-foreground hover:text-accent transition">
            Vega Morada
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-foreground hover:text-accent transition font-medium text-sm">
            Services
          </Link>
          <Link href="#experience" className="text-foreground hover:text-accent transition font-medium text-sm">
            Experience
          </Link>
          <Link href="#projects" className="text-foreground hover:text-accent transition font-medium text-sm">
            Projects
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-accent transition font-medium text-sm">
            Testimonials
          </Link>
          <Link href="#contact" className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#services" className="block text-foreground hover:text-accent transition font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#experience" className="block text-foreground hover:text-accent transition font-medium" onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#projects" className="block text-foreground hover:text-accent transition font-medium" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#testimonials" className="block text-foreground hover:text-accent transition font-medium" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#contact" className="block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium text-center" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
