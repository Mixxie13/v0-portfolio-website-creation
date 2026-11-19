import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  Gauge,
  LineChart,
  Network,
  Search,
  TableProperties,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/reporting-analytics`

export const metadata: Metadata = {
  title: "Reporting & Analytics | CRM Dashboards",

  description:
    "Reporting and analytics for CRM and business operations, including dashboards, KPIs, data visibility, pipeline reporting, and operational reporting.",

  alternates: {
    canonical: "/services/reporting-analytics",
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Reporting & Analytics | CRM Dashboards | Vega Morada",
    description:
      "Turn CRM and operational data into useful dashboards, reports, KPIs, and business visibility.",
    siteName: "Vega Morada",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reporting & Analytics | CRM Dashboards | Vega Morada",
    description:
      "CRM dashboards, operational reporting, KPIs, pipeline visibility, and practical business analytics.",
  },

  robots: {
    index: true,
    follow: true,
  },
}

const reportingAreas = [
  {
    title: "CRM reporting",
    description:
      "Create useful views of leads, opportunities, customers, pipeline activity, follow-ups, and other CRM information that matters to the business.",
    icon: Database,
  },
  {
    title: "Dashboards",
    description:
      "Bring important information into clear dashboards so teams can understand activity, status, trends, and operational priorities without digging through disconnected records.",
    icon: Gauge,
  },
  {
    title: "KPI tracking",
    description:
      "Define and organize practical key performance indicators around the processes and outcomes the business actually needs to monitor.",
    icon: LineChart,
  },
  {
    title: "Operational reporting",
    description:
      "Build reporting around workflows, tasks, customer activity, service processes, sales operations, and other day-to-day business functions.",
    icon: BarChart3,
  },
  {
    title: "Data organization",
    description:
      "Improve how reporting data is structured, categorized, and captured so dashboards and reports are based on clearer and more consistent information.",
    icon: TableProperties,
  },
  {
    title: "Reporting optimization",
    description:
      "Review existing reports and dashboards to remove unnecessary noise, improve visibility, and make important information easier to understand and use.",
    icon: Search,
  },
]

const reportingProcess = [
  {
    number: "01",
    title: "Define the questions",
    description:
      "Start with what the business needs to understand, monitor, or decide rather than building reports simply because the data exists.",
  },
  {
    number: "02",
    title: "Identify the data",
    description:
      "Determine which CRM fields, applications, records, workflow events, and other data sources contain the information needed for reporting.",
  },
  {
    number: "03",
    title: "Review data quality",
    description:
      "Check whether the underlying information is structured consistently enough to support useful reporting and identify gaps that may need to be addressed.",
  },
  {
    number: "04",
    title: "Design the reporting structure",
    description:
      "Organize metrics, filters, views, dashboards, and reporting logic around the people who need the information and the decisions they need to make.",
  },
  {
    number: "05",
    title: "Build useful visibility",
    description:
      "Create dashboards and reports that make important activity, status, performance, and operational information easier to understand.",
  },
  {
    number: "06",
    title: "Refine and maintain",
    description:
      "Review reporting as processes change so dashboards continue to reflect the information that is useful to the business.",
  },
]

const helpWith = [
  "CRM dashboards and reports",
  "Sales pipeline reporting",
  "Lead and opportunity reporting",
  "Customer activity visibility",
  "Workflow and process reporting",
  "Operational dashboards",
  "KPI definition and tracking",
  "Management reporting views",
  "Data structure for reporting",
  "Dashboard organization",
  "Cross-system reporting workflows",
  "Existing report optimization",
]

const caseStudies = [
  {
    company: "We Clear Junk",
    description:
      "Zoho CRM implementation work involving reporting dashboards, financial reporting frameworks, customer lifecycle visibility, service processes, and operational reporting.",
    href: "/case-studies/we-clear-junk",
  },
  {
    company: "The Lucky Harvest",
    description:
      "Connected product, inventory, order, and operational systems work involving Zoho Inventory, WooCommerce, automation, and centralized information management.",
    href: "/case-studies/the-lucky-harvest",
  },
]

const relatedServices = [
  {
    title: "CRM implementation & optimization",
    description:
      "Structure CRM data, pipelines, workflows, and reporting around the way your business operates.",
    href: "/services/crm-implementation",
    icon: Database,
  },
  {
    title: "Business process automation",
    description:
      "Automate structured workflows and keep information moving through the systems that support your operations.",
    href: "/services/business-process-automation",
    icon: Workflow,
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect applications and data sources when reporting depends on information from multiple business systems.",
    href: "/services/systems-integration",
    icon: Network,
  },
]

const faqs = [
  {
    question: "What is CRM reporting?",
    answer:
      "CRM reporting organizes customer, lead, opportunity, pipeline, activity, and process information into reports or dashboards that make CRM data easier to understand and use. The exact reporting structure depends on the business process and the information teams need to monitor.",
  },
  {
    question: "What is an operational dashboard?",
    answer:
      "An operational dashboard presents information about ongoing business activity, such as pipeline status, tasks, customer activity, workflow stages, service processes, or other operational indicators. Its purpose is to make relevant information easier to see and act on.",
  },
  {
    question: "Can existing CRM dashboards be improved?",
    answer:
      "Yes. Existing dashboards can be reviewed for unnecessary reports, unclear metrics, inconsistent filters, missing information, poor data structure, and other issues that make reporting difficult to use.",
  },
  {
    question: "What KPIs should a business track?",
    answer:
      "The appropriate KPIs depend on the business model, process, team, and decisions the reporting needs to support. Useful KPIs should connect to a clear business question or operational objective rather than being tracked only because the data is available.",
  },
  {
    question: "Can reporting use data from multiple systems?",
    answer:
      "Yes, when the systems provide suitable integration or export capabilities. Data may be connected through native integrations, APIs, automation platforms, databases, or other reporting workflows depending on the technology stack and reporting requirements.",
  },
  {
    question: "How does a reporting and analytics project usually start?",
    answer:
      "A reporting project usually starts by identifying the questions the business needs answered, the people who need the information, the available data sources, and the quality of the underlying data. Reports and dashboards can then be designed around those requirements.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Reporting & Analytics",
  url: pageUrl,
  description:
    "Reporting and analytics services covering CRM reporting, dashboards, KPI tracking, operational reporting, data organization, and reporting optimization.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  serviceType: [
    "CRM Reporting",
    "Business Reporting",
    "Dashboard Design",
    "Operational Reporting",
    "KPI Tracking",
    "Reporting Analytics",
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
      name: "Reporting & Analytics",
      item: pageUrl,
    },
  ],
}

export default function ReportingAnalyticsPage() {
  return (
    <main className="service-page">
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
      <section className="service-page-hero">
        <div className="site-container">
          <Link href="/#services" className="service-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="service-hero-grid">
            <div className="service-hero-title">
              <p className="eyebrow">
                REPORTING · DASHBOARDS · BUSINESS VISIBILITY
              </p>

              <h1>
                Reporting
                <br />
                <span className="gradient-text">&amp; analytics.</span>
              </h1>
            </div>

            <div className="service-hero-copy">
              <p>
                Turn CRM and operational data into information your team can
                actually use. I help organize reporting, dashboards, KPIs, and
                business visibility around the questions and processes that
                matter to your operations.
              </p>

              <div
                className="service-platform-tags"
                aria-label="Reporting capabilities"
              >
                <span>Dashboards</span>
                <span>CRM Reporting</span>
                <span>KPIs</span>
                <span>Analytics</span>
              </div>

              <div className="service-hero-cta">
                <Link href="/#contact" className="button">
                  Discuss your reporting project
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
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
                Start with the question,
                <br />
                <span className="service-heading-muted">
                  then build the report.
                </span>
              </h2>
            </div>

            <p>
              Useful reporting is not about displaying every available metric.
              It starts with understanding what the business needs to know,
              where the information comes from, and how that information will
              support day-to-day decisions.
            </p>
          </div>

          <div className="service-capability-grid">
            {reportingAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <article className="service-detail-card" key={area.title}>
                  <div className="service-detail-card-top">
                    <span className="service-detail-icon">
                      <Icon size={21} aria-hidden="true" />
                    </span>

                    <span className="service-detail-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* REPORTING PROCESS */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">02 / REPORTING PROCESS</p>

              <h2>
                From raw data
                <br />
                <span className="service-heading-muted">
                  to useful visibility.
                </span>
              </h2>
            </div>

            <p>
              Reporting works best when the questions, underlying data,
              structure, and audience are understood before dashboards are
              built.
            </p>
          </div>

          <div className="service-capability-grid">
            {reportingProcess.map((step) => (
              <article className="service-detail-card" key={step.number}>
                <div className="service-detail-card-top">
                  <span className="service-detail-icon">
                    <BarChart3 size={21} aria-hidden="true" />
                  </span>

                  <span className="service-detail-number">{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="service-page-section">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From CRM activity
                <br />
                <span className="service-heading-muted">
                  to operational insight.
                </span>
              </h2>
            </div>

            <p>
              Reporting requirements vary by business, but projects can cover
              CRM data, operational processes, dashboards, KPIs, and connected
              reporting workflows.
            </p>
          </div>

          <div className="service-deliverables-panel">
            <div className="service-deliverables-grid">
              {helpWith.map((item) => (
                <div className="service-deliverable" key={item}>
                  <span className="service-check">
                    <Check size={14} aria-hidden="true" />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">04 / RELATED CASE STUDIES</p>

              <h2>
                Reporting and visibility
                <br />
                <span className="service-heading-muted">
                  grounded in real operations.
                </span>
              </h2>
            </div>

            <p>
              Explore work involving CRM reporting, financial visibility,
              operational information, customer processes, and connected
              business systems.
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
                  <span>View case study</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="service-page-section">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">05 / CONNECTED SERVICES</p>

              <h2>
                Better reporting starts
                <br />
                <span className="service-heading-muted">
                  with better systems.
                </span>
              </h2>
            </div>

            <p>
              Reporting often depends on CRM structure, workflow automation,
              and systems integration. These services can support the
              information and processes behind the reporting layer.
            </p>
          </div>

          <div className="related-service-grid">
            {relatedServices.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  href={service.href}
                  className="related-service-card"
                  key={service.title}
                >
                  <span className="service-detail-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <ArrowUpRight
                    className="related-service-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-page-section service-page-section-alt">
        <div className="site-container">
          <div className="service-section-heading">
            <div>
              <p className="eyebrow">06 / REPORTING QUESTIONS</p>

              <h2>
                Reporting &amp; analytics
                <br />
                <span className="service-heading-muted">
                  questions answered.
                </span>
              </h2>
            </div>

            <p>
              Straightforward answers about CRM reporting, dashboards, KPIs,
              operational visibility, and reporting projects.
            </p>
          </div>

          <div className="service-faq-grid">
            {faqs.map((faq) => (
              <article className="service-faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
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
              <p className="eyebrow">REPORTING PROJECT</p>

              <h2>
                Need a clearer view
                <br />
                <span className="gradient-text">of your business?</span>
              </h2>
            </div>

            <div className="service-cta-copy">
              <p>
                Tell me what you need to understand, where the information
                lives, how you currently report on it, and what decisions the
                reporting needs to support.
              </p>

              <Link href="/#contact" className="button">
                Discuss your reporting project
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
