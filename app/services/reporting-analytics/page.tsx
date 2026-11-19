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
  Search,
  TableProperties,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/reporting-analytics`

export const metadata: Metadata = {
  title: "Reporting & Analytics | CRM Dashboards | Vega Morada",
  description:
    "Reporting and analytics for CRM and business operations, including dashboards, KPIs, data visibility, pipeline reporting, and operational reporting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Reporting & Analytics | Vega Morada",
    description:
      "Turn CRM and operational data into useful dashboards, reports, KPIs, and business visibility.",
    siteName: "Vega Morada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reporting & Analytics | Vega Morada",
    description:
      "CRM dashboards, operational reporting, KPIs, pipeline visibility, and practical business analytics.",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
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
                REPORTING · DASHBOARDS · BUSINESS VISIBILITY
              </p>

              <h1>
                Reporting
                <br />
                <span className="gradient-text">&amp; analytics.</span>
              </h1>
            </div>

            <div>
              <p className="section-description">
                Turn CRM and operational data into information your team can
                actually use. I help organize reporting, dashboards, KPIs, and
                business visibility around the questions and processes that
                matter to your operations.
              </p>

              <div className="service-skills">
                <span>Dashboards</span>
                <span>CRM Reporting</span>
                <span>KPIs</span>
                <span>Analytics</span>
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
                Start with the question,
                <br />
                <span className="gradient-text">
                  then build the report.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Useful reporting is not about displaying every available metric.
              It starts with understanding what the business needs to know,
              where the information comes from, and how that information will
              support day-to-day decisions.
            </p>
          </div>

          <div className="services-grid">
            {reportingAreas.map((area, index) => {
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

      {/* PROCESS */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / REPORTING PROCESS</p>

              <h2>
                From raw data
                <br />
                <span className="gradient-text">
                  to useful visibility.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Reporting works best when the questions, underlying data,
              structure, and audience are understood before dashboards are
              built.
            </p>
          </div>

          <div className="services-grid">
            {reportingProcess.map((step) => (
              <article key={step.number} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <BarChart3 size={22} aria-hidden="true" />
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

      {/* CAPABILITIES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From CRM activity
                <br />
                <span className="gradient-text">
                  to operational insight.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Reporting requirements vary by business, but projects can cover
              CRM data, operational processes, dashboards, KPIs, and connected
              reporting workflows.
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

      {/* RELATED SERVICES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / CONNECTED SYSTEMS</p>

              <h2>
                Better reporting starts
                <br />
                <span className="gradient-text">
                  with better systems.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Reporting often depends on CRM structure, workflow design,
              automation, and integrations. These services can support the
              systems behind the reporting layer.
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
                  Structure CRM data, pipelines, workflows, and reporting
                  around the way your business operates.
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
                  Automate structured workflows and keep information moving
                  through the systems that support your operations.
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
                  <Database size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>Systems integration &amp; APIs</h3>
                <p>
                  Connect applications and data sources when reporting depends
                  on information from multiple business systems.
                </p>
              </div>

              <div className="service-link">
                Explore integration services
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
              <p className="eyebrow">05 / REPORTING QUESTIONS</p>

              <h2>
                Reporting &amp; analytics
                <br />
                <span className="gradient-text">
                  questions answered.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Straightforward answers about CRM reporting, dashboards, KPIs,
              operational visibility, and reporting projects.
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
            <p className="eyebrow">REPORTING PROJECT</p>

            <h2>
              Need a clearer view
              <br />
              <span className="gradient-text">
                of your business?
              </span>
            </h2>

            <p className="section-description">
              Tell me what you need to understand, where the information lives,
              how you currently report on it, and what decisions the reporting
              needs to support.
            </p>

            <Link href="/#contact" className="button">
              Discuss your reporting project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
