"use client"

import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8">
                <Image
                  src="/vega-abstract-symbol.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <span className="font-bold text-foreground">
                Vega Morada
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              CRM Specialist &amp; Business Automation Consultant
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Explore
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#case-studies"
                  className="hover:text-primary transition"
                >
                  Case Studies
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-primary transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-primary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Connect
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:moradavega143@gmail.com"
                  className="hover:text-primary transition"
                >
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/vegamorada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.upwork.com/freelancers/~01513b65b8672f7efa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vega Morada. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            CRM · Automation · Systems Integration
          </p>
        </div>
      </div>
    </footer>
  )
}
