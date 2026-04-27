export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                <span className="text-xs font-bold text-accent-foreground">VM</span>
              </div>
              <span className="font-bold text-foreground">Vega Morada</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automation specialist & executive assistant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#experience" className="hover:text-accent transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:moradavega143@gmail.com" className="hover:text-accent transition">
                  moradavega143@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+639167474425" className="hover:text-accent transition">
                  +63 916 747 4425
                </a>
              </li>
              <li className="text-muted-foreground">
                Bacolod City, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vega Morada. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/vegamorada" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
