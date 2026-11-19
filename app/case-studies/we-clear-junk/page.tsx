import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  GitBranch,
  Headphones,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/case-studies/we-clear-junk`

export const metadata: Metadata = {
  title: "We Clear Junk CRM Implementation Case Study",
  description:
    "See how Vega Morada designed CRM architecture, lead-to-job workflows, reporting frameworks, customer service systems, and automation planning for We Clear Junk.",
  alternates: {
    canonical: "/case-studies/we-clear-junk",
  },
  openGraph: {
    title: "We Clear Junk CRM Implementation Case Study | Vega Morada",
    description:
      "A CRM implementation and systems architecture case study covering lead-to-job workflows, reporting, customer service, and automation planning.",
    url: pageUrl,
    type: "article",
  },
}

const systems = [
  "Zoho CRM",
  "Zoho Desk",
  "Zoho Flow",
  "Make.com",
  "Freshdesk",
]

const responsibilities = [
  "Led Zoho systems implementation planning",
  "Designed CRM architecture and customer workflows",
  "Created business process maps and operational frameworks",
  "Developed lead-to-job lifecycle workflows",
  "Structured customer service and ticket management systems",
  "Planned automation and workflow strategies",
  "Designed reporting structures and KPI dashboards",
  "Built financial reporting frameworks and management visibility tools",
  "Improved operational reporting processes",
  "Developed process documentation and implementation plans",
]

const focusAreas = [
  {
    title: "CRM architecture",
    description:
      "Designed the CRM structure around customer workflows and the movement from lead through job completion.",
    icon: Database,
  },
  {
    title: "Lead-to-job workflows",
    description:
      "Developed customer lifecycle workflows to create a clearer operational path from incoming leads through completed jobs.",
    icon: Workflow,
  },
  {
    title: "Customer service systems",
    description:
      "Structured customer service and ticket management processes to support organized issue handling and escalation workflows.",
    icon: Headphones,
  },
  {
    title: "Reporting & visibility",
    description:
      "Designed reporting structures, KPI dashboards, and financial reporting frameworks to improve management visibility.",
    icon: BarChart3,
  },
  {
    title: "Automation planning",
    description:
      "Planned workflow and automation strategies using Zoho Flow and Make.com to support connected business processes.",
    icon: GitBranch,
  },
]

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${pageUrl}/#article`,
  headline: "We Clear Junk CRM Implementation Case Study",
  description:
    "A CRM implementation and systems architecture case study covering lead-to-job workflows, reporting frameworks, customer service systems, and automation planning.",
  url: pageUrl,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
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
      name: "Case Studies",
      item: `${siteUrl}/#case-studies`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "We Clear Junk",
      item: pageUrl,
    },
  ],
}

export default function WeClearJunkCaseStudyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="section">
        <div className="site-container">
          <Link href="/#case-studies" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to case studies
          </Link>

          <div className="service-page-hero">
            <div>
              <p className="eyebrow">
                CASE STUDY · CRM IMPLEMENTATION · REPORTING
              </p>

              <h1>
                We Clear Junk
                <br />
                <span className="gradient-text">
                  CRM &amp; systems implementation.
                </span>
              </h1>
            </div>

            <div>
              <p className="service-page-intro">
                CRM implementation, systems architecture, operational
                reporting, process optimization, automation planning, and
                business intelligence designed around a lead-to-job business
                workflow.
              </p>

              <div className="service-skills">
                {systems.map((system) => (
                  <span key={system}>{system}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / BUSINESS CHALLENGE</p>

              <h2>
                Building a clearer
                <br />
                <span className="muted-text">lead-to-job system.</span>
              </h2>
            </div>

            <p className="section-description">
              We Clear Junk needed to implement a comprehensive CRM system to
              manage lead-to-job workflows, establish customer service
              ticketing, create reporting dashboards, and build financial
              visibility across operations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SOLUTION DESIGNED</p>

              <h2>
                CRM architecture built
                <br />
                <span className="muted-text">around the operation.</span>
              </h2>
            </div>

            <p className="section-description">
              I led Zoho CRM implementation planning, designed customer
              lifecycle workflows from lead to job completion, structured Zoho
              Desk for customer service, created financial reporting
              frameworks, and planned automation strategies using Make.com and
              Zoho Flow.
            </p>
          </div>

          <div className="services-grid">
            {focusAreas.map((area, index) => {
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

      {/* Systems */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SYSTEMS &amp; TECHNOLOGIES</p>

              <h2>
                The systems behind
                <br />
                <span className="muted-text">the implementation.</span>
              </h2>
            </div>

            <p className="section-description">
              The project involved CRM, customer service, workflow automation,
              and operational systems used to support the broader customer
              lifecycle and reporting structure.
            </p>
          </div>

          <div className="service-skills">
            {systems.map((system) => (
              <span key={system}>{system}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Management */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / PROCESS MANAGEMENT</p>

              <h2>
                Connecting customer workflows
                <br />
                <span className="muted-text">with operational visibility.</span>
              </h2>
            </div>

            <p className="section-description">
              The work included lead-to-job workflow processes, customer
              lifecycle automation planning, ticket management and escalation
              workflows, and KPI dashboard structures for management
              visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / BUSINESS OUTCOMES</p>

              <h2>
                A stronger foundation
                <br />
                <span className="muted-text">
                  for CRM-driven operations.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The work established scalable CRM infrastructure, improved lead
              tracking and conversion visibility, created comprehensive
              financial reporting for better decision-making, and reduced
              manual handoff errors.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / KEY RESPONSIBILITIES</p>

              <h2>
                From implementation planning
                <br />
                <span className="muted-text">to reporting architecture.</span>
              </h2>
            </div>

            <p className="section-description">
              My responsibilities covered CRM architecture, workflow design,
              customer service systems, automation planning, operational
              reporting, and implementation documentation.
            </p>
          </div>

          <div className="scope-grid">
            {responsibilities.map((responsibility) => (
              <div key={responsibility} className="scope-item">
                <Check size={16} aria-hidden="true" />
                <span>{responsibility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">07 / RELATED SERVICES</p>

              <h2>
                Need a similar
                <br />
                <span className="muted-text">business system?</span>
              </h2>
            </div>

            <div>
              <p className="section-description">
                Explore the services related to the CRM, reporting, automation,
                and systems work demonstrated in this case study.
              </p>

              <div className="hero-actions">
                <Link
                  href="/services/crm-implementation"
                  className="button"
                >
                  CRM implementation
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/reporting-analytics"
                  className="button button-outline"
                >
                  Reporting &amp; analytics
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <p className="eyebrow">CRM &amp; SYSTEMS PROJECT</p>

            <h2>
              Need clearer workflows,
              <br />
              <span className="gradient-text">
                reporting, and CRM visibility?
              </span>
            </h2>

            <p>
              Tell me how leads, customers, jobs, reporting, and operational
              handoffs currently move through your business. I can help
              identify where CRM architecture, workflow design, reporting, and
              automation can create a more connected system.
            </p>

            <div className="hero-actions">
              <Link href="/#contact" className="button">
                Discuss your project
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/case-studies/the-lucky-harvest"
                className="button button-outline"
              >
                View another case study
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
