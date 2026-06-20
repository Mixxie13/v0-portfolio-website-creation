'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="#" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition active:scale-95 cursor-pointer flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Vega Morada" 
              width={48} 
              height={48}
              className="object-contain"
              priority
            />
          </Link>
          <Link href="#" className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition">
            Vega Morada
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-foreground hover:text-primary transition font-medium text-sm active:scale-95">
            Services
          </Link>
          <Link href="#case-studies" className="text-foreground hover:text-primary transition font-medium text-sm active:scale-95">
            Case Studies
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition font-medium text-sm active:scale-95">
            Solutions
          </Link>
          <Link href="#contact" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm active:scale-95">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden active:scale-95 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-slide-in-down">
          <div className="px-4 py-4 space-y-4">
            <Link href="#services" className="block text-foreground hover:text-primary transition font-medium active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#case-studies" className="block text-foreground hover:text-primary transition font-medium active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="#projects" className="block text-foreground hover:text-primary transition font-medium active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="#contact" className="block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
