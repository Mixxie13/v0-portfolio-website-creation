import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  Database,
  GitBranch,
  Network,
  Route,
  Settings2,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/systems-architecture`

export const metadata: Metadata = {
  title: "Business Systems Architecture | Vega Morada",
  description:
    "Business systems architecture for CRM, automation, integrations, applications, and data. Design connected systems with clear roles and reliable information flows.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Business Systems Architecture | Vega Morada",
    description:
      "Design connected CRM, automation, integration, application, and data architectures around practical business operations.",
    siteName: "Vega Morada",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Systems Architecture | Vega Morada",
    description:
      "Design connected business systems around CRM, automation, integrations, applications, workflows, and data.",
  },

  robots: {
    index: true,
    follow: true,
  },
}

const architectureAreas = [
  {
    title: "System design",
    description:
      "Define how CRM platforms, automation tools, business applications, databases, and other systems should work together as part of a connected operating environment.",
    icon: Boxes,
  },
  {
    title: "Application architecture",
    description:
      "Clarify the role of each application so teams understand where information belongs, which system owns each process, and how applications should interact.",
    icon: Settings2,
  },
  {
    title: "Data flow design",
    description:
      "Map how customer, sales, operational, and workflow information should move between systems while reducing unnecessary duplication and manual transfer.",
    icon: Route,
  },
  {
    title: "Integration architecture",
    description:
      "Plan connections between applications using APIs, webhooks, native integrations, automation platforms, and other appropriate integration methods.",
    icon: Network,
  },
  {
    title: "Automation architecture",
    description:
      "Design how automated workflows, triggers, conditions, actions, notifications, and system interactions fit into the wider business technology environment.",
    icon: Workflow,
  },
  {
    title: "Architecture optimization",
    description:
      "Review existing systems to identify overlapping tools, unclear ownership, disconnected processes, fragile integrations, and opportunities to simplify the architecture.",
    icon: GitBranch,
  },
]

const architectureProcess = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "Start with the processes, teams, customer journeys, operational requirements, and business outcomes the technology environment needs to support.",
  },
  {
    number: "02",
    title: "Map the current systems",
    description:
      "Document the CRM, applications, databases, automation tools, integrations, information flows, and manual work that make up the existing environment.",
  },
  {
    number: "03",
    title: "Define system responsibilities",
    description:
      "Clarify which system should own specific records, workflows, actions, and operational responsibilities to reduce ambiguity and unnecessary duplication.",
  },
  {
    number: "04",
    title: "Design the information flow",
    description:
      "Determine how information should move between systems, where updates should originate, and which applications need access to each type of data.",
  },
  {
    number: "05",
    title: "Plan integrations and automation",
    description:
      "Identify the APIs, webhooks, native connections, automation platforms, and workflow logic needed to support the architecture.",
  },
  {
    number: "06",
    title: "Document the architecture",
    description:
      "Create a clearer representation of the system landscape so the architecture is easier to understand, implement, maintain, and evolve.",
  },
]

const helpWith = [
  "CRM-centered systems architecture",
  "Business application architecture",
  "Application and system mapping",
  "Data flow architecture",
  "System-of-record planning",
  "CRM and application relationships",
  "Integration architecture",
  "API and webhook planning",
  "Automation architecture",
  "Cross-system workflow design",
  "Technology stack simplification",
  "Architecture documentation and handover",
]

const caseStudies = [
  {
    company: "The Lucky Harvest",
    description:
      "Connected operational systems involving Zoho CRM, Zoho Inventory, Zoho Flow, WooCommerce, Simpro, and Make.com across product, inventory, order, and workflow processes.",
    href: "/case-studies/the-lucky-harvest",
  },
  {
    company: "BlueCloudUSA",
    description:
      "Operational systems work spanning Zoho CRM, Zoho Projects, customer onboarding, compliance processes, documentation, and broader business operations.",
    href: "/case-studies/bluecloudusa",
  },
]

const faqs = [
  {
    question: "What is business systems architecture?",
    answer:
      "Business systems architecture defines how CRM platforms, applications, databases, automation tools, integrations, data, and workflows fit together to support business operations. It helps clarify the role of each system and how information should move between them.",
  },
  {
    question: "Why is systems architecture important?",
    answer:
      "As businesses add more applications, it can become unclear which system should manage specific information or processes. Systems architecture helps create clearer responsibilities, connections, and data flows across the technology environment.",
  },
  {
    question: "Can a CRM be the center of a business systems architecture?",
    answer:
      "Yes, depending on the business and technology stack. A CRM can act as a central system for customer, lead, sales, and relationship information while other applications handle functions such as operations, communication, finance, automation, or reporting.",
  },
  {
    question: "What is a system of record?",
    answer:
      "A system of record is the primary system responsible for maintaining a particular type of business information. Defining systems of record can help reduce conflicting data and clarify where important information should be created and maintained.",
  },
  {
    question: "Does systems architecture include integrations and automation?",
    answer:
      "Yes. Integrations and automation are often important parts of systems architecture because they determine how applications exchange information and coordinate actions. The architecture provides the wider structure in which those connections operate.",
  },
  {
    question: "How does a systems architecture project usually start?",
    answer:
      "A systems architecture project usually starts by understanding the business processes, current applications, information flows, integrations, automation, manual work, and operational requirements. The existing environment can then be mapped before an improved architecture is designed.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Business Systems Architecture",
  url: pageUrl,
  description:
    "Business systems architecture services for CRM platforms, automation tools, integrations, applications, workflows, and data flows.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  serviceType: [
    "Business Systems Architecture",
    "CRM Architecture",
    "Application Architecture",
    "Integration Architecture",
    "Automation Architecture",
    "Data Flow Design",
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Systems Architecture",
      item: pageUrl,
    },
  ],
}

export default function SystemsArchitecturePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema,
            breadcrumbSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="section">
        <div className="site-container">
          <Link href="/#services" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="section-heading">
            <div>
              <p className="eyebrow">
                SYSTEM DESIGN · DATA FLOW · AUTOMATION ARCHITECTURE
              </p>

              <h1>
                Business systems
                <br />
                <span className="gradient-text">architecture.</span>
              </h1>
            </div>

            <div>
              <p className="section-description">
                Design a clearer technology environment around the way your
                business operates. I help structure CRM platforms, automation,
                integrations, applications, workflows, and data so each system
                has a defined role.
              </p>

              <div className="service-skills">
                <span>System Design</span>
                <span>Data Flow</span>
                <span>Integrations</span>
                <span>Automation Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE APPROACH</p>

              <h2>
                Design the ecosystem,
                <br />
                <span className="gradient-text">
                  not just the individual tool.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Business systems work better when each application has a clear
              purpose. Architecture looks at the wider environment: which
              systems own information, how data moves, where workflows run,
              and how applications interact.
            </p>
          </div>

          <div className="services-grid">
            {architectureAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <article key={area.title} className="service-card">
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>

                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE PROCESS */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / ARCHITECTURE PROCESS</p>

              <h2>
                From disconnected tools
                <br />
                <span className="gradient-text">
                  to a connected system.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Architecture starts with the business rather than the software.
              The technology environment can then be structured around the
              processes, information, and operational requirements it needs to
              support.
            </p>
          </div>

          <div className="services-grid">
            {architectureProcess.map((step) => (
              <article key={step.number} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <Boxes size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number">{step.number}</span>
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                Give every system
                <br />
                <span className="gradient-text">a clear role.</span>
              </h2>
            </div>

            <p className="section-description">
              Architecture projects vary by technology stack and business
              process, but the work can cover the following areas.
            </p>
          </div>

          <div className="service-card">
            <div className="services-grid">
              {helpWith.map((item) => (
                <div key={item} className="service-link">
                  <Check size={17} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / RELATED CASE STUDIES</p>

              <h2>
                Connected systems
                <br />
                <span className="gradient-text">
                  applied to real operations.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Explore work involving multiple applications, CRM platforms,
              operational workflows, automation tools, and connected business
              processes.
            </p>
          </div>

          <div className="services-grid">
            {caseStudies.map((study) => (
              <article key={study.company} className="service-card">
                <div>
                  <h3>{study.company}</h3>
                  <p>{study.description}</p>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <Link href={study.href} className="service-link">
                    View case study
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / CONNECTED SERVICES</p>

              <h2>
                Architecture creates
                <br />
                <span className="gradient-text">
                  the bigger picture.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Systems architecture connects naturally with CRM implementation,
              business process automation, systems integration, workflow
              consulting, and reporting.
            </p>
          </div>

          <div className="services-grid">
            <Link
              href="/services/crm-implementation"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Database size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>CRM implementation &amp; optimization</h3>
                <p>
                  Build the CRM layer around customer data, pipelines,
                  workflows, reporting, automation, and integrations.
                </p>
              </div>

              <div className="service-link">
                Explore CRM services
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </Link>

            <Link
              href="/services/business-process-automation"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Workflow size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>Business process automation</h3>
                <p>
                  Build automated workflows across the systems and processes
                  defined by the wider architecture.
                </p>
              </div>

              <div className="service-link">
                Explore automation services
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </Link>

            <Link
              href="/services/systems-integration"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Network size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>Systems integration &amp; APIs</h3>
                <p>
                  Implement the connections that allow applications,
                  workflows, and data to move through the architecture.
                </p>
              </div>

              <div className="service-link">
                Explore integration services
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </Link>

            <Link
              href="/services/workflow-operations-consulting"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <GitBranch size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>Workflow &amp; operations consulting</h3>
                <p>
                  Map business processes and operational requirements before
                  deciding how technology should support them.
                </p>
              </div>

              <div className="service-link">
                Explore workflow consulting
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </Link>

            <Link
              href="/services/reporting-analytics"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <BarChart3 size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>Reporting &amp; analytics</h3>
                <p>
                  Turn information generated across the system architecture
                  into dashboards, reports, and useful operational visibility.
                </p>
              </div>

              <div className="service-link">
                Explore reporting services
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / ARCHITECTURE QUESTIONS</p>

              <h2>
                Systems architecture
                <br />
                <span className="gradient-text">questions answered.</span>
              </h2>
            </div>

            <p className="section-description">
              Straightforward answers about business systems architecture,
              CRM architecture, applications, integrations, automation, and
              data flow.
            </p>
          </div>

          <div>
            {faqs.map((faq) => (
              <article key={faq.question} className="service-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="site-container">
          <div className="service-card">
            <p className="eyebrow">SYSTEMS ARCHITECTURE</p>

            <h2>
              Need a clearer
              <br />
              <span className="gradient-text">systems landscape?</span>
            </h2>

            <p className="section-description">
              Tell me which systems you use, how information currently moves
              between them, where the operational friction happens, and what
              you want the technology environment to support.
            </p>

            <Link href="/#contact" className="button">
              Discuss your systems architecture
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
