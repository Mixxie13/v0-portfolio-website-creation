import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  Database,
  GitBranch,
  RefreshCw,
  Settings2,
  Workflow,
  Zap,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/business-process-automation`

export const metadata: Metadata = {
  title: "Business Process Automation Consultant | Vega Morada",
  description:
    "Business process automation for repetitive workflows, CRM processes, integrations, notifications, data synchronization, and connected operations.",

  alternates: {
    canonical: "/services/business-process-automation",
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Business Process Automation Consultant | Vega Morada",
    description:
      "Build practical automated workflows using Make.com, n8n, Zapier, Zoho Flow, APIs, webhooks, CRM systems, and connected business applications.",
    siteName: "Vega Morada",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation Consultant | Vega Morada",
    description:
      "Workflow automation, CRM automation, integrations, and connected business processes using Make.com, n8n, Zapier, Zoho Flow, APIs, and webhooks.",
  },
}

const automationAreas = [
  {
    title: "Workflow automation",
    description:
      "Turn repetitive multi-step processes into structured workflows with triggers, conditions, actions, notifications, and automated handoffs.",
    icon: Workflow,
  },
  {
    title: "CRM automation",
    description:
      "Automate lead routing, record updates, follow-ups, task creation, lifecycle changes, notifications, and other CRM processes.",
    icon: Database,
  },
  {
    title: "Application integration",
    description:
      "Connect business applications so information can move between your CRM, forms, databases, communication tools, and operational systems.",
    icon: GitBranch,
  },
  {
    title: "Data synchronization",
    description:
      "Keep important information aligned between systems using automation platforms, APIs, webhooks, and structured data flows.",
    icon: RefreshCw,
  },
  {
    title: "Notifications & handoffs",
    description:
      "Automatically notify the right people and move work to the next step when important events, updates, or conditions occur.",
    icon: Bell,
  },
  {
    title: "Automation optimization",
    description:
      "Review existing automations, simplify unnecessary complexity, improve workflow structure, and make connected processes easier to maintain.",
    icon: Settings2,
  },
]

const platforms = [
  {
    name: "Make.com",
    description:
      "Build visual multi-step automations that connect applications, transform information, route data, and coordinate business processes.",
  },
  {
    name: "n8n",
    description:
      "Create flexible workflows for application integrations, API operations, data processing, conditional logic, and custom automation requirements.",
  },
  {
    name: "Zapier",
    description:
      "Connect commonly used business applications and automate straightforward triggers, actions, notifications, and cross-platform workflows.",
  },
  {
    name: "Zoho Flow",
    description:
      "Automate processes across Zoho applications and external tools while connecting CRM activity with broader business workflows.",
  },
]

const capabilities = [
  "Business process and workflow mapping",
  "CRM workflow automation",
  "Lead routing and assignment",
  "Automated follow-ups and notifications",
  "Task and record creation",
  "Status and lifecycle automation",
  "Application and API integrations",
  "Webhook-based workflows",
  "Cross-platform data synchronization",
  "Conditional workflow logic",
  "Existing automation optimization",
  "Documentation and workflow handover",
]

const caseStudies = [
  {
    company: "The Lucky Harvest",
    description:
      "Zoho and WooCommerce workflows involving product synchronization, inventory processes, Make.com automation, and connected operational systems.",
    href: "/case-studies/the-lucky-harvest",
  },
  {
    company: "We Clear Junk",
    description:
      "CRM workflow planning, customer lifecycle automation, Zoho Flow and Make.com strategy, ticket management, and operational reporting.",
    href: "/case-studies/we-clear-junk",
  },
]

const faqs = [
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software and workflow rules to handle repetitive or structured business processes with less manual intervention. This can include moving information between applications, updating CRM records, assigning tasks, sending notifications, synchronizing data, and triggering actions when specific conditions are met.",
  },
  {
    question: "Which automation platforms does Vega Morada work with?",
    answer:
      "Vega Morada works with automation platforms including Make.com, n8n, Zapier, and Zoho Flow. Automation can also involve CRM-native workflow tools, APIs, webhooks, and custom integrations depending on the systems and process requirements.",
  },
  {
    question: "What business processes can be automated?",
    answer:
      "Processes that follow repeatable rules are often good candidates for automation. Examples include lead assignment, follow-ups, notifications, task creation, CRM record updates, status changes, data synchronization, application handoffs, reporting workflows, and other structured operational processes.",
  },
  {
    question: "Can CRM workflows be connected with other applications?",
    answer:
      "Yes. CRM workflows can often connect with other business applications through native integrations, automation platforms, APIs, and webhooks. This allows information and actions to move between the CRM and the other systems used by the business.",
  },
  {
    question: "Can existing automations be improved instead of rebuilt?",
    answer:
      "Yes. Existing workflows can be reviewed to identify unnecessary steps, duplicated actions, fragile connections, confusing logic, and maintenance issues. In some cases, improving the existing automation is more practical than rebuilding the entire workflow.",
  },
  {
    question: "How does a business automation project usually start?",
    answer:
      "An automation project usually starts by understanding the current process, the applications involved, the information being moved, the manual steps, the conditions that affect the workflow, and the desired outcome. The automation can then be designed around the real business process.",
  },
]

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
      name: "Business Process Automation",
      item: pageUrl,
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Business Process Automation",
  url: pageUrl,
  description:
    "Business process automation services covering workflow automation, CRM automation, systems integration, data synchronization, notifications, and connected operations.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  serviceType: [
    "Business Process Automation",
    "Workflow Automation",
    "CRM Automation",
    "Systems Integration",
    "Application Integration",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function BusinessProcessAutomationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            serviceSchema,
            faqSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="section">
        <div className="site-container">
          <Link
            href="/#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "4rem",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="section-heading">
            <div>
              <p className="eyebrow">
                BUSINESS PROCESS AUTOMATION · WORKFLOW AUTOMATION
              </p>

              <h1>
                Business process
                <br />
                <span className="gradient-text">automation.</span>
              </h1>
            </div>

            <div>
              <p className="section-description">
                Automate repetitive work and connect the systems your business
                already uses. I design practical workflows that move
                information, trigger actions, update records, notify teams, and
                reduce unnecessary manual handoffs.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {["Make.com", "n8n", "Zapier", "Zoho Flow"].map((platform) => (
                  <span className="tag" key={platform}>
                    {platform}
                  </span>
                ))}
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
                Automate the process,
                <br />
                <span className="muted-text">not just the task.</span>
              </h2>
            </div>

            <p className="section-description">
              Useful automation starts with understanding how work actually
              moves through the business. The goal is to connect the right
              systems and automate the right steps without creating unnecessary
              complexity.
            </p>
          </div>

          <div className="services-grid">
            {automationAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <article className="service-card" key={area.title}>
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

      {/* PLATFORMS */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / AUTOMATION PLATFORMS</p>

              <h2>
                Different tools.
                <br />
                <span className="muted-text">
                  One process-first approach.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The platform should support the workflow rather than define it. I
              work across several automation tools and choose the approach
              around the applications, logic, data, and operational
              requirements involved.
            </p>
          </div>

          <div className="services-grid">
            {platforms.map((platform, index) => (
              <article className="service-card" key={platform.name}>
                <div className="service-card-top">
                  <span className="service-icon">
                    <Zap size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From repetitive work
                <br />
                <span className="muted-text">to connected workflows.</span>
              </h2>
            </div>

            <p className="section-description">
              The exact automation depends on your current process and
              technology stack, but projects can include the following areas.
            </p>
          </div>

          <div
            className="service-card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {capabilities.map((capability) => (
              <div
                key={capability}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <Check
                  size={18}
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    marginTop: "0.2rem",
                  }}
                />

                <span>{capability}</span>
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
                Automation applied
                <br />
                <span className="muted-text">to real operations.</span>
              </h2>
            </div>

            <p className="section-description">
              See how workflow automation, CRM processes, connected systems,
              and data synchronization support real business operations.
            </p>
          </div>

          <div className="services-grid">
            {caseStudies.map((study) => (
              <article className="service-card" key={study.company}>
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
              Explore automation projects
              <ArrowUpRight size={17} aria-hidden="true" />
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
                Connect automation
                <br />
                <span className="muted-text">
                  with your systems and CRM.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Automation often works alongside CRM implementation and systems
              integration when workflows need to coordinate information and
              actions across multiple applications.
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
              href="/services/systems-integration"
              className="button button-outline"
            >
              Systems integration &amp; APIs
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
              <p className="eyebrow">06 / AUTOMATION QUESTIONS</p>

              <h2>
                Business automation
                <br />
                <span className="muted-text">questions answered.</span>
              </h2>
            </div>

            <p className="section-description">
              Straightforward answers about workflow automation, CRM
              automation, integrations, platforms, and project planning.
            </p>
          </div>

          <div className="services-grid">
            {faqs.map((faq) => (
              <article className="service-card" key={faq.question}>
                <div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="site-container">
          <div className="service-card">
            <p className="eyebrow">AUTOMATION PROJECT</p>

            <h2>
              Ready to reduce
              <br />
              <span className="gradient-text">repetitive work?</span>
            </h2>

            <p
              className="section-description"
              style={{
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            >
              Tell me about your current process, applications, manual steps,
              bottlenecks, and what you want the workflow to accomplish.
            </p>

            <Link href="/#contact" className="button">
              Discuss your automation project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
