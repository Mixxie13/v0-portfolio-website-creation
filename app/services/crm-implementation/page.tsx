import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
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
    icon: BarChart3,
  },
]

const platforms = ["Zoho CRM", "HubSpot", "Pipedrive", "GoHighLevel"]

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

const caseStudies = [
  {
    company: "We Clear Junk",
    description:
      "Zoho CRM implementation planning, lead-to-job lifecycle workflows, customer service systems, reporting, and automation strategy.",
    href: "/case-studies/we-clear-junk",
  },
  {
    company: "The Lucky Harvest",
    description:
      "Zoho CRM and inventory workflows connecting product data, order processes, automation, and operational systems.",
    href: "/case-studies/the-lucky-harvest",
  },
  {
    company: "BlueCloudUSA",
    description:
      "CRM administration, customer onboarding, operational workflows, compliance coordination, and business process documentation.",
    href: "/case-studies/bluecloudusa",
  },
]

const relatedServices = [
  {
    title: "Business process automation",
    description:
      "Automate repetitive CRM and operational workflows across your business.",
    href: "/services/business-process-automation",
    icon: Workflow,
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect your CRM with applications, databases, APIs, and automation platforms.",
    href: "/services/systems-integration",
    icon: GitBranch,
  },
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
    <main className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}
      <section className="service-page-hero">
        <div className="site-container">
          <Link href="/#services" className="service-back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to services
          </Link>

          <div className="service-hero-grid">
            <div className="service-hero-title">
              <p className="eyebrow">
                CRM IMPLEMENTATION · OPTIMIZATION · AUTOMATION
              </p>

              <h1>
                CRM implementation
                <br />
                <span className="gradient-text">&amp; optimization.</span>
              </h1>
            </div>

            <div className="service-hero-copy">
              <p>
                Build or improve a CRM around the way your business actually
                works. I help structure customer data, pipelines, workflows,
                reporting, integrations, and automation so your CRM becomes a
                useful operating system rather than another tool your team has
                to manage.
              </p>

              <div className="service-platform-tags">
                {platforms.map((platform) => (
                  <span key={platform}>{platform}</span>
                ))}
              </div>

              <Link href="/#contact" className="button service-hero-cta">
                Discuss your CRM project
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="service-page-section">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">01 / THE APPROACH</p>

              <h2>
                Your CRM should fit
                <br />
                <span className="service-heading-muted">
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

          <div className="service-capability-grid">
            {capabilities.map(
              ({ title, description, icon: Icon }, index) => (
                <article className="service-detail-card" key={title}>
                  <div className="service-detail-card-top">
                    <span className="service-detail-icon">
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </span>

                    <span className="service-detail-number">
                      {String(index + 1).padStart(2, "0")}
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

      {/* PLATFORMS */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">02 / CRM PLATFORMS</p>

              <h2>
                Different platforms.
                <br />
                <span className="service-heading-muted">
                  Same business-first approach.
                </span>
              </h2>
            </div>

            <p>
              I work across several CRM platforms and focus on choosing and
              configuring the system around the process it needs to support.
            </p>
          </div>

          <div className="service-platform-grid">
            {platforms.map((platform, index) => (
              <article className="service-detail-card" key={platform}>
                <div className="service-detail-card-top">
                  <span className="service-detail-icon">
                    <Database size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <span className="service-detail-number">
                    {String(index + 1).padStart(2, "0")}
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

      {/* DELIVERABLES */}
      <section className="service-page-section">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From CRM structure
                <br />
                <span className="service-heading-muted">
                  to connected operations.
                </span>
              </h2>
            </div>

            <p>
              The exact scope depends on your current system and business
              requirements, but CRM projects can include the following areas.
            </p>
          </div>

          <div className="service-deliverables-panel">
            <div className="service-deliverables-grid">
              {deliverables.map((item) => (
                <div className="service-deliverable" key={item}>
                  <span className="service-check">
                    <Check size={15} strokeWidth={2} aria-hidden="true" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">04 / RELATED CASE STUDIES</p>

              <h2>
                CRM systems
                <br />
                <span className="service-heading-muted">
                  applied to real operations.
                </span>
              </h2>
            </div>

            <p>
              Explore examples of CRM implementation, administration,
              automation, reporting, and connected operational workflows.
            </p>
          </div>

          <div className="service-case-grid">
            {caseStudies.map((study) => (
              <Link
                href={study.href}
                className="service-case-card"
                key={study.company}
              >
                <div>
                  <span className="service-card-label">CASE STUDY</span>
                  <h3>{study.company}</h3>
                  <p>{study.description}</p>
                </div>

                <div className="service-card-link">
                  View case study
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="service-section-action">
            <Link href="/#projects" className="button button-outline">
              Explore CRM &amp; automation projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="service-page-section">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">05 / RELATED SERVICES</p>

              <h2>
                Connect your CRM
                <br />
                <span className="service-heading-muted">
                  to the rest of your operation.
                </span>
              </h2>
            </div>

            <p>
              CRM implementation often overlaps with workflow automation and
              systems integration when information needs to move between
              platforms and business processes.
            </p>
          </div>

          <div className="related-service-grid">
            {relatedServices.map(
              ({ title, description, href, icon: Icon }) => (
                <Link
                  href={href}
                  className="related-service-card"
                  key={title}
                >
                  <span className="service-detail-icon">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>

                  <ArrowUpRight
                    className="related-service-arrow"
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">06 / CRM QUESTIONS</p>

              <h2>
                CRM implementation
                <br />
                <span className="service-heading-muted">
                  questions answered.
                </span>
              </h2>
            </div>

            <p>
              Straightforward answers about CRM implementation, optimization,
              automation, integrations, and project planning.
            </p>
          </div>

          <div className="service-faq-grid">
            {faqs.map(({ question, answer }) => (
              <article className="service-faq-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-page-cta-section">
        <div className="site-container">
          <div className="service-cta-panel">
            <div>
              <p className="eyebrow">CRM PROJECT</p>

              <h2>
                Need a CRM that works
                <br />
                <span className="gradient-text">
                  around your business?
                </span>
              </h2>
            </div>

            <div className="service-cta-copy">
              <p>
                Tell me about your current CRM, processes, tools, bottlenecks,
                and what you want the system to help your team accomplish.
              </p>

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
