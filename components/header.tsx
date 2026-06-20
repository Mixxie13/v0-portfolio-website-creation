'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const navLinks = [
  { href: '#services', id: 'services', label: 'Services' },
  { href: '#case-studies', id: 'case-studies', label: 'Case Studies' },
  { href: '#projects', id: 'projects', label: 'Solutions' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect border-b border-white/[0.08] shadow-lg shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <span className="transition-transform group-hover:scale-105 group-active:scale-95">
            <Logo size={40} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              Vega <span className="text-gradient">Morada</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 mono-label text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
              Available
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition group ${
                active === link.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            href="#contact"
            className="relative px-5 py-2 rounded-lg text-sm font-semibold text-white btn-gradient active:scale-95"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-white/5 active:scale-95 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/[0.08] animate-slide-in-down">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-foreground hover:bg-white/5 hover:text-primary transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mt-2 px-6 py-2.5 btn-gradient text-white rounded-lg font-semibold text-center active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
