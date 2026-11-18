import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Layers3,
  Settings2,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/crm-implementation`

export const metadata: Metadata = {
  title: "CRM Implementation & Optimization",

  description:
    "CRM implementation and optimization by Vega Morada for Zoho CRM, HubSpot, Pipedrive, and GoHighLevel, including workflows, pipelines, integrations, reporting, and automation.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "CRM Implementation & Optimization | Vega Morada",
    description:
      "Build or improve a CRM around your business processes, customer data, workflows, integrations, reporting, and automation.",
    siteName: "Vega Morada",
  },

  robots: {
    index: true,
    follow: true,
  },
}

const capabilities = [
  {
    title: "CRM architecture",
    description:
      "Structure pipelines, modules, fields, stages, permissions, and customer data around the way your business actually operates.",
    icon: Database,
  },
  {
    title: "Workflow automation",
    description:
      "Reduce repetitive work with automated assignments, notifications, follow-ups, status changes, and operational workflows.",
    icon: Workflow,
  },
  {
    title: "Systems integration",
    description:
      "Connect your CRM with the applications and data sources your team already uses through APIs, webhooks, and automation platforms.",
    icon: GitBranch,
  },
  {
    title: "CRM optimization",
    description:
      "Improve an existing CRM by simplifying processes, cleaning up structure, removing friction, and making the system easier for teams to use.",
    icon: Settings2,
  },
  {
    title: "Reporting & visibility",
    description:
      "Create useful dashboards, reports, and operational views so teams can understand pipeline activity, customer data, and business performance.",
    icon: Layers3,
  },
]

const platforms = [
  "Zoho CRM",
  "HubSpot",
  "Pipedrive",
  "GoHighLevel",
]

const deliverables = [
  "CRM requirements and process mapping",
  "Pipeline and lifecycle design",
  "Modules, fields, stages, and data structure",
  "Workflow and business process automation",
  "Lead and customer management processes",
  "CRM dashboards and reporting",
  "Application and API integrations",
  "Data migration and organization planning",
  "User roles, permissions, and operational structure",
  "Documentation and team handover",
]

const faqs = [
  {
    question: "What is CRM implementation?",
    answer:
      "CRM implementation is the process of configuring a customer relationship management system around a business's sales, customer, operational, and reporting processes. It can include pipeline design, data structure, workflows, automation, integrations, dashboards, permissions, migration, and user setup.",
  },
  {
    question: "Which CRM platforms does Vega Morada work with?",
    answer:
      "Vega Morada works with CRM platforms including Zoho CRM, HubSpot, Pipedrive, and GoHighLevel. The right platform and configuration depend on the business process, existing technology stack, team requirements, and automation needs.",
  },
  {
    question: "Can an existing CRM be optimized instead of replaced?",
    answer:
      "Yes. CRM optimization can improve an existing system without replacing it. This may involve restructuring pipelines, simplifying fields, improving workflows, cleaning up automation, connecting applications, improving reporting, and removing unnecessary complexity.",
  },
  {
    question: "Can CRM workflows be automated?",
    answer:
      "Yes. CRM workflows can automate repetitive processes such as lead assignment, follow-ups, notifications, record updates, status changes, task creation, data synchronization, and other rule-based business processes.",
  },
  {
    question: "Can a CRM connect with other business applications?",
    answer:
      "Yes. CRM systems can often connect with other applications through native integrations, APIs, webhooks, or automation platforms such as Make.com, n8n, Zapier, and Zoho Flow.",
  },
  {
    question: "How does a CRM implementation project usually start?",
    answer:
      "A CRM implementation usually starts by understanding the current business process, existing tools, data, bottlenecks, users, and desired outcomes. The system can then be designed around those requirements rather than forcing the business into an unnecessary generic setup.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "CRM Implementation & Optimization",
  url: pageUrl,
  description:
    "CRM implementation and optimization services covering CRM architecture, workflows, automation, integrations, reporting, and operational processes.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
  },
  serviceType: [
    "CRM Implementation",
    "CRM Optimization",
    "CRM Automation",
    "CRM Integration",
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
      name: "CRM Implementation & Optimization",
      item: pageUrl,
    },
  ],
}

export default function CRMImplementationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* Hero */}
      <section className="section-space">
        <div className="site-container">
          <Link href="/#services" className="text-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="section-heading" style={{ marginTop: "3rem" }}>
            <div>
              <p className="eyebrow">
                CRM IMPLEMENTATION · OPTIMIZATION · AUTOMATION
              </p>

              <h1>
                CRM implementation
                <br />
                <span className="gradient-text">&amp; optimization.</span>
              </h1>
            </div>

            <div>
              <p>
                Build or improve a CRM around the way your business actually
                works. I help structure customer data, pipelines, workflows,
                reporting, integrations, and automation so your CRM becomes a
                useful operating system rather than another tool your team has
                to manage.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {platforms.map((platform) => (
                  <span className="skill-tags" key={platform}>
                    <span>{platform}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CRM implementation matters */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE APPROACH</p>

              <h2>
                Your CRM should fit
                <br />
                <span className="text-muted-foreground">
                  your business process.
                </span>
              </h2>
            </div>

            <p>
              A CRM is most useful when its structure reflects how leads,
              customers, information, tasks, and decisions actually move
              through the business.
            </p>
          </div>

          <div className="service-grid">
            {capabilities.map(
              ({ title, description, icon: Icon }, index) => (
                <article className="service-card" key={title}>
                  <div className="card-top">
                    <span className="service-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="card-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / CRM PLATFORMS</p>

              <h2>
                Different platforms.
                <br />
                <span className="text-muted-foreground">
                  Same business-first approach.
                </span>
              </h2>
            </div>

            <p>
              I work across several CRM platforms and focus on choosing and
              configuring the system around the process it needs to support.
            </p>
          </div>

          <div className="service-grid">
            {platforms.map((platform, index) => (
              <article className="service-card" key={platform}>
                <div className="card-top">
                  <span className="service-icon">
                    <Database
                      size={22}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{platform}</h3>

                <p>
                  Implementation, configuration, process design, workflow
                  improvement, reporting, and integration based on the
                  requirements of your business.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From CRM structure
                <br />
                <span className="text-muted-foreground">
                  to connected operations.
                </span>
              </h2>
            </div>

            <p>
              The exact scope depends on your current system and business
              requirements, but CRM projects can include the following areas.
            </p>
          </div>

          <div className="service-card">
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {deliverables.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <Check
                    size={18}
                    className="text-primary"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related proof */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / REAL WORK</p>

              <h2>
                See CRM systems
                <br />
                <span className="text-muted-foreground">
                  applied to real projects.
                </span>
              </h2>
            </div>

            <p>
              Explore examples of CRM, automation, integration, reporting, and
              operational systems work from my portfolio.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link href="/#case-studies" className="button">
              View case studies
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <Link href="/#projects" className="button button-outline">
              Explore projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / CRM QUESTIONS</p>

              <h2>
                CRM implementation
                <br />
                <span className="text-muted-foreground">
                  questions answered.
                </span>
              </h2>
            </div>

            <p>
              Straightforward answers about CRM implementation, optimization,
              automation, integrations, and project planning.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1rem",
            }}
          >
            {faqs.map(({ question, answer }) => (
              <article className="service-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space">
        <div className="site-container">
          <div className="service-card">
            <p className="eyebrow">CRM PROJECT</p>

            <h2>
              Need a CRM that works
              <br />
              <span className="gradient-text">
                around your business?
              </span>
            </h2>

            <p>
              Tell me about your current CRM, processes, tools, bottlenecks,
              and what you want the system to help your team accomplish.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/#contact" className="button">
                Discuss your CRM project
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
