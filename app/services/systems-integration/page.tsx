import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Network,
  RefreshCw,
  Webhook,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/systems-integration`

export const metadata: Metadata = {
  title: "Systems Integration & API Integration",
  description:
    "Connect CRM systems, business applications, databases, and workflows using APIs, webhooks, automation platforms, and practical systems integration.",

  alternates: {
    canonical: "/services/systems-integration",
  },

  openGraph: {
    title: "Systems Integration & API Integration | Vega Morada",
    description:
      "Connect CRM systems, applications, data, and workflows through APIs, webhooks, automation platforms, and practical business integrations.",
    url: pageUrl,
    type: "website",
    siteName: "Vega Morada",
  },

  robots: {
    index: true,
    follow: true,
  },
}

const capabilities = [
  {
    title: "API integration",
    description:
      "Connect applications through APIs so systems can exchange information, trigger actions, update records, and support connected business processes.",
    icon: Network,
  },
  {
    title: "Webhook workflows",
    description:
      "Use webhooks to send events and information between systems when important actions, updates, or conditions occur.",
    icon: Webhook,
  },
  {
    title: "CRM integration",
    description:
      "Connect CRM platforms with forms, communication tools, databases, operational applications, and other systems used by your business.",
    icon: Database,
  },
  {
    title: "Data synchronization",
    description:
      "Keep important records aligned between applications using structured integrations, automation platforms, APIs, and controlled data flows.",
    icon: RefreshCw,
  },
  {
    title: "Workflow integration",
    description:
      "Coordinate multi-system processes so information and actions can move through the right applications without unnecessary manual handoffs.",
    icon: Workflow,
  },
  {
    title: "Integration optimization",
    description:
      "Review existing integrations, simplify fragile connections, improve data flow, and make connected systems easier to understand and maintain.",
    icon: GitBranch,
  },
]

const integrationMethods = [
  {
    title: "REST APIs",
    description:
      "Connect applications that expose API endpoints for reading, creating, updating, or exchanging business information.",
  },
  {
    title: "Webhooks",
    description:
      "Create event-driven connections that send information when specific actions or changes occur inside an application.",
  },
  {
    title: "Automation platforms",
    description:
      "Use tools such as Make.com, n8n, Zapier, and Zoho Flow to coordinate applications, logic, data, and workflow actions.",
  },
  {
    title: "Native integrations",
    description:
      "Use supported application-to-application integrations when they provide the functionality and reliability the business process requires.",
  },
]

const scope = [
  "CRM and application integration",
  "API-based system connections",
  "Webhook configuration and workflows",
  "Cross-platform data synchronization",
  "Lead and customer data routing",
  "Forms and CRM integrations",
  "Application and database connections",
  "Automation platform integrations",
  "Data mapping and transformation",
  "Integration troubleshooting and optimization",
  "Workflow and event orchestration",
  "Documentation and system handover",
]

const caseStudies = [
  {
    company: "The Lucky Harvest",
    description:
      "Connected WooCommerce, Zoho Inventory, CRM, automation, and operational workflows to support product and order information across business systems.",
    href: "/case-studies/the-lucky-harvest",
  },
  {
    company: "We Clear Junk",
    description:
      "CRM, customer service, reporting, and automation planning across Zoho CRM, Zoho Desk, Make.com, Zoho Flow, and related operational workflows.",
    href: "/case-studies/we-clear-junk",
  },
]

const faqs = [
  {
    question: "What is systems integration?",
    answer:
      "Systems integration is the process of connecting applications, databases, CRM platforms, and other business systems so information and actions can move between them. Integration can use APIs, webhooks, native connectors, automation platforms, or a combination of methods depending on the systems involved.",
  },
  {
    question: "What is API integration?",
    answer:
      "API integration connects applications through their application programming interfaces so they can exchange information or perform actions. An API integration may create or update records, retrieve information, synchronize data, trigger processes, or connect one application with another.",
  },
  {
    question: "Which systems can Vega Morada integrate?",
    answer:
      "Vega Morada works with CRM systems, automation platforms, business applications, APIs, webhooks, databases, forms, and operational tools. The integration approach depends on the applications involved, their available integration capabilities, and the business process the connection needs to support.",
  },
  {
    question: "Can a CRM be connected with other business applications?",
    answer:
      "Yes. CRM platforms can often connect with forms, communication tools, databases, reporting systems, operational applications, and other business software through native integrations, APIs, webhooks, or automation platforms.",
  },
  {
    question: "Can data be synchronized between multiple systems?",
    answer:
      "Yes, when the applications provide suitable integration methods. Data synchronization can keep selected records aligned between systems using APIs, webhooks, native integrations, or automation platforms. The exact design depends on the data, update frequency, business rules, and capabilities of each system.",
  },
  {
    question: "How does a systems integration project usually start?",
    answer:
      "A systems integration project usually starts by identifying the applications involved, the information that needs to move between them, the events that should trigger actions, existing manual steps, business rules, and the desired outcome. The integration can then be designed around that process.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Systems Integration & API Integration",
  url: pageUrl,
  description:
    "Systems integration and API integration services for connecting CRM systems, business applications, databases, workflows, and automation platforms.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  serviceType: [
    "Systems Integration",
    "API Integration",
    "CRM Integration",
    "Webhook Integration",
    "Application Integration",
    "Data Synchronization",
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
      name: "Systems Integration & APIs",
      item: pageUrl,
    },
  ],
}

export default function SystemsIntegrationPage() {
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

          <div className="service-page-hero">
            <div>
              <p className="eyebrow">
                SYSTEMS INTEGRATION · APIs · WEBHOOKS
              </p>

              <h1>
                Systems integration
                <br />
                <span className="gradient-text">&amp; API integration.</span>
              </h1>
            </div>

            <div>
              <p className="service-page-intro">
                Connect the systems your business already uses so information
                can move where it needs to go. I build practical integrations
                between CRM platforms, applications, databases, forms, and
                workflows using APIs, webhooks, automation platforms, and
                native integrations.
              </p>

              <div className="service-skills">
                <span>APIs</span>
                <span>Webhooks</span>
                <span>REST</span>
                <span>Integrations</span>
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
                Connect the systems,
                <br />
                <span className="muted-text">
                  not just the applications.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Useful integration starts with understanding what information
              needs to move, why it needs to move, when it should move, and
              what each system should do with it.
            </p>
          </div>

          <div className="services-grid">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <article key={capability.title} className="service-card">
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>

                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATION METHODS */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / INTEGRATION METHODS</p>

              <h2>
                Different connections.
                <br />
                <span className="muted-text">
                  One business-first approach.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The right integration method depends on the applications,
              available interfaces, data, workflow requirements, and how the
              connected process needs to operate.
            </p>
          </div>

          <div className="services-grid">
            {integrationMethods.map((method, index) => (
              <article key={method.title} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <Network size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
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
                From disconnected tools
                <br />
                <span className="muted-text">to connected operations.</span>
              </h2>
            </div>

            <p className="section-description">
              Integration projects vary by technology stack and business
              process, but the work can include the following areas.
            </p>
          </div>

          <div className="scope-grid">
            {scope.map((item) => (
              <div key={item} className="scope-item">
                <Check size={16} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
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
                <span className="muted-text">applied to real operations.</span>
              </h2>
            </div>

            <p className="section-description">
              Explore examples where CRM platforms, automation tools,
              applications, and operational workflows needed to work together.
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
                  <Link href={study.href} className="text-link">
                    View case study
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/#projects" className="button button-outline">
              Explore integration projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / RELATED SERVICES</p>

              <h2>
                Build connected
                <br />
                <span className="muted-text">
                  CRM and automation workflows.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Systems integration often works alongside CRM implementation and
              business process automation when applications need to exchange
              information and coordinate actions.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/services/crm-implementation"
              className="button button-outline"
            >
              CRM implementation &amp; optimization
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/services/business-process-automation"
              className="button button-outline"
            >
              Business process automation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / INTEGRATION QUESTIONS</p>

              <h2>
                Systems integration
                <br />
                <span className="muted-text">questions answered.</span>
              </h2>
            </div>

            <p className="section-description">
              Straightforward answers about APIs, webhooks, CRM integrations,
              data synchronization, and connected business systems.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
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
          <div className="cta-panel">
            <p className="eyebrow">INTEGRATION PROJECT</p>

            <h2>
              Need your systems to
              <br />
              <span className="gradient-text">work together?</span>
            </h2>

            <p>
              Tell me which applications you use, what information needs to
              move between them, where the manual work happens, and what you
              want the connected process to accomplish.
            </p>

            <div className="hero-actions">
              <Link href="/#contact" className="button">
                Discuss your integration project
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
