import Image from "next/image"
import Link from "next/link"

const exploreLinks = [
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
]

const serviceLinks = [
  {
    label: "CRM Implementation",
    href: "/services/crm-implementation",
  },
  {
    label: "Business Process Automation",
    href: "/services/business-process-automation",
  },
  {
    label: "Systems Integration",
    href: "/services/systems-integration",
  },
  {
    label: "Workflow & Operations Consulting",
    href: "/services/workflow-operations-consulting",
  },
  {
    label: "Reporting & Analytics",
    href: "/services/reporting-analytics",
  },
  {
    label: "Systems Architecture",
    href: "/services/systems-architecture",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 mb-2"
              aria-label="Vega Morada homepage"
            >
              <div className="w-8 h-8">
                <Image
                  src="/vega-abstract-symbol.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              <span className="font-bold text-foreground">
                Vega Morada
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              CRM Specialist &amp; Business Automation Consultant
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Explore
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-primary transition"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
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
