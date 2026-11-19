import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Network,
  Package,
  RefreshCw,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/case-studies/the-lucky-harvest`

export const metadata: Metadata = {
  title: "The Lucky Harvest | Zoho Systems Case Study",
  description:
    "See how Vega Morada designed Zoho Inventory workflows, WooCommerce synchronization, product data processes, and scalable operational systems for The Lucky Harvest.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Lucky Harvest | Zoho Systems Case Study",
    description:
      "A case study covering Zoho Inventory architecture, WooCommerce synchronization, workflow automation, product data, and operational process design.",
    siteName: "Vega Morada",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lucky Harvest | Zoho Systems Case Study",
    description:
      "Zoho Inventory, WooCommerce, workflow automation, product data, and operational systems case study.",
  },
}

const technologies = [
  "Zoho CRM",
  "Zoho Inventory",
  "Zoho Flow",
  "WooCommerce",
  "Simpro",
  "Make.com",
]

const solutionAreas = [
  {
    title: "Zoho Inventory architecture",
    description:
      "Designed the Zoho Inventory structure and operational workflows needed to support product management, inventory processes, and the wider operating environment.",
    icon: Package,
  },
  {
    title: "Product data synchronization",
    description:
      "Developed a WooCommerce-to-Zoho synchronization strategy to improve how product information moved between e-commerce and inventory systems.",
    icon: RefreshCw,
  },
  {
    title: "Workflow automation",
    description:
      "Structured product management workflows using Zoho Flow and developed automation scenarios using Make.com to support connected operational processes.",
    icon: Workflow,
  },
  {
    title: "Centralized operations",
    description:
      "Created centralized product and order management processes to make operational work more structured and repeatable.",
    icon: Database,
  },
  {
    title: "Process design",
    description:
      "Created process maps, operational frameworks, SOPs, and workflow documentation to establish clearer ways of working.",
    icon: GitBranch,
  },
  {
    title: "Connected systems",
    description:
      "Coordinated workflows across WooCommerce, Zoho, and Simpro while improving the structure of product, order, and operational information.",
    icon: Network,
  },
]

const responsibilities = [
  "Designed and implemented Zoho operational workflows",
  "Built product management and inventory processes",
  "Developed WooCommerce to Zoho synchronization strategy",
  "Structured automation scenarios using Make.com",
  "Structured operational systems and business workflows",
  "Developed SOPs and process documentation",
  "Created process maps and operational frameworks",
  "Improved data management and reporting structures",
  "Established scalable operational processes",
]

const outcomes = [
  "Improved product data accuracy and synchronization",
  "Reduced manual data entry",
  "Enabled real-time product visibility across platforms",
  "Established scalable operational infrastructure",
  "Created repeatable operational processes",
]

const relatedServices = [
  {
    title: "CRM implementation & optimization",
    description:
      "Design CRM structures, workflows, reporting, integrations, and automation around real business processes.",
    href: "/services/crm-implementation",
    icon: Database,
  },
  {
    title: "Business process automation",
    description:
      "Turn repetitive tasks and manual handoffs into structured automated workflows across business systems.",
    href: "/services/business-process-automation",
    icon: Workflow,
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect CRM platforms, applications, data, and workflows so information can move between systems.",
    href: "/services/systems-integration",
    icon: Network,
  },
  {
    title: "Workflow & operations consulting",
    description:
      "Map processes, identify operational friction, and design clearer workflows around how the business operates.",
    href: "/services/workflow-operations-consulting",
    icon: GitBranch,
  },
]

const faqs = [
  {
    question: "What systems were used in The Lucky Harvest project?",
    answer:
      "The project involved Zoho CRM, Zoho Inventory, Zoho Flow, WooCommerce, Simpro, and Make.com across product management, inventory, workflow automation, synchronization, and operational processes.",
  },
  {
    question: "What business challenge did The Lucky Harvest need to solve?",
    answer:
      "The Lucky Harvest needed to synchronize product data between WooCommerce and inventory systems, improve order workflow coordination, and establish scalable operational processes to support growing e-commerce operations.",
  },
  {
    question: "How was Zoho used in the project?",
    answer:
      "Zoho was used across CRM, inventory, and workflow processes. The work included Zoho Inventory architecture, operational workflows, product management processes, and workflow automation using Zoho Flow.",
  },
  {
    question: "How were WooCommerce and Zoho connected?",
    answer:
      "The project included a WooCommerce-to-Zoho synchronization strategy designed to improve product data coordination between the e-commerce and inventory environments.",
  },
  {
    question: "Was workflow automation part of the project?",
    answer:
      "Yes. The work included product management workflows using Zoho Flow and structured automation scenarios using Make.com as part of the wider operational system.",
  },
  {
    question: "What operational outcomes were achieved?",
    answer:
      "The documented outcomes include improved product data accuracy and synchronization, reduced manual data entry, real-time product visibility across platforms, scalable operational infrastructure, and repeatable processes.",
  },
]

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${pageUrl}/#case-study`,
  headline: "The Lucky Harvest — Zoho Systems & Operations Case Study",
  description:
    "Case study covering Zoho Inventory architecture, WooCommerce synchronization, workflow automation, product data management, and operational process design for The Lucky Harvest.",
  url: pageUrl,
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  about: [
    "Zoho Inventory",
    "Zoho CRM",
    "Zoho Flow",
    "WooCommerce",
    "Business Process Automation",
    "Systems Integration",
    "Operations Management",
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
      name: "Case Studies",
      item: `${siteUrl}/#case-studies`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "The Lucky Harvest",
      item: pageUrl,
    },
  ],
}

export default function TheLuckyHarvestCaseStudy() {
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

      {/* HERO */}
      <section className="section">
        <div className="site-container">
          <Link href="/#case-studies" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to case studies
          </Link>

          <div className="section-heading">
            <div>
              <p className="eyebrow">
                CASE STUDY · ZOHO · E-COMMERCE OPERATIONS
              </p>

              <h1>
                The Lucky
                <br />
                <span className="gradient-text">Harvest.</span>
              </h1>
            </div>

            <div>
              <p className="eyebrow">
                OPERATIONS MANAGER · ZOHO CONSULTANT · SYSTEMS SUPPORT
              </p>

              <p className="section-description">
                Business systems optimization, operational process
                improvement, inventory management, product data architecture,
                and operational workflow design across Zoho, WooCommerce,
                Simpro, and automation platforms.
              </p>

              <div className="service-skills">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CHALLENGE */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / BUSINESS CHALLENGE</p>

              <h2>
                Growing operations needed
                <br />
                <span className="gradient-text">
                  connected product data.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The Lucky Harvest needed to synchronize product data between
              WooCommerce and inventory systems, improve order workflow
              coordination, and establish scalable operational processes to
              support growing e-commerce operations.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SOLUTION DESIGNED</p>

              <h2>
                Build the workflow
                <br />
                <span className="gradient-text">
                  around connected systems.
                </span>
              </h2>
            </div>

            <p className="section-description">
              I designed Zoho Inventory architecture and operational
              workflows, developed the WooCommerce-to-Zoho synchronization
              strategy, structured product management workflows using Zoho
              Flow, created centralized product and order management
              processes, and established scalable operational systems in
              Simpro.
            </p>
          </div>

          <div className="services-grid">
            {solutionAreas.map((area, index) => {
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

      {/* SYSTEMS */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SYSTEMS &amp; TECHNOLOGIES</p>

              <h2>
                One workflow.
                <br />
                <span className="gradient-text">
                  Multiple connected systems.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The operational environment combined CRM, inventory,
              e-commerce, workflow automation, field operations, and
              integration tools.
            </p>
          </div>

          <div className="service-card">
            <div className="service-skills">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL COORDINATION */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                04 / OPERATIONAL COORDINATION
              </p>

              <h2>
                Structure the systems
                <br />
                <span className="gradient-text">
                  around the operation.
                </span>
              </h2>
            </div>

            <p className="section-description">
              I coordinated product data management between WooCommerce and
              Zoho Inventory, structured order workflow processes, designed
              product-to-job mapping in Simpro, improved data organization and
              reporting structures, and established operational process
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / KEY RESPONSIBILITIES</p>

              <h2>
                From architecture
                <br />
                <span className="gradient-text">to operations.</span>
              </h2>
            </div>

            <p className="section-description">
              The work covered system design, product and inventory
              processes, automation, documentation, data management, and
              operational workflow development.
            </p>
          </div>

          <div className="service-card">
            <div className="services-grid">
              {responsibilities.map((responsibility) => (
                <div key={responsibility} className="service-link">
                  <Check size={17} aria-hidden="true" />
                  {responsibility}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / BUSINESS OUTCOMES</p>

              <h2>
                Better data.
                <br />
                <span className="gradient-text">
                  More repeatable operations.
                </span>
              </h2>
            </div>

            <p className="section-description">
              The work improved product data accuracy and synchronization,
              reduced manual data entry, enabled real-time product visibility
              across platforms, and established scalable operational
              infrastructure and repeatable processes.
            </p>
          </div>

          <div className="services-grid">
            {outcomes.map((outcome, index) => (
              <article key={outcome} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <Check size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{outcome}</h3>
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
              <p className="eyebrow">07 / RELATED SERVICES</p>

              <h2>
                Need a similar
                <br />
                <span className="gradient-text">business system?</span>
              </h2>
            </div>

            <p className="section-description">
              This project brought together CRM, automation, systems
              integration, and operational workflow design.
            </p>
          </div>

          <div className="services-grid">
            {relatedServices.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="service-card"
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="service-link">
                    Explore service
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">08 / CASE STUDY QUESTIONS</p>

              <h2>
                The Lucky Harvest
                <br />
                <span className="gradient-text">case study FAQs.</span>
              </h2>
            </div>

            <p className="section-description">
              Answers about the systems, integrations, automation, and
              operational work involved in this project.
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
            <p className="eyebrow">CRM · AUTOMATION · OPERATIONS</p>

            <h2>
              Building a connected
              <br />
              <span className="gradient-text">business system?</span>
            </h2>

            <p className="section-description">
              Tell me which systems you use, where manual work or disconnected
              data is creating friction, and what you want the workflow to
              accomplish.
            </p>

            <Link href="/#contact" className="button">
              Discuss your project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
