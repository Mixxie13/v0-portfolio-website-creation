"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case studies", href: "/#case-studies" },
  { label: "Projects", href: "/#projects" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        {/* Brand */}
        <Link
          href="/#home"
          className="brand"
          aria-label="Vega Morada — CRM Specialist and Business Automation Consultant"
          onClick={closeMenu}
        >
          <Image
            src="/vega-abstract-symbol.svg"
            alt=""
            width={38}
            height={38}
            className="brand-mark"
            priority
            aria-hidden="true"
          />

          <span
            className="brand-copy"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              lineHeight: 1.1,
            }}
          >
            <strong>Vega Morada</strong>

            <small
              style={{
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              CRM &amp; AUTOMATION
            </small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}

          <Link href="/#contact" className="button button-small">
            Let&apos;s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <div className="site-container mobile-nav-inner">
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="button"
              onClick={closeMenu}
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
