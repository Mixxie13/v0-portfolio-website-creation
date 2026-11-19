import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Database,
  FileText,
  Settings2,
  Users,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/case-studies/bluecloudusa`

export const metadata: Metadata = {
  title: "BlueCloudUSA Operations & CRM Case Study",
  description:
    "See how Vega Morada supported BlueCloudUSA with CRM administration, customer onboarding, operational workflows, compliance processes, documentation, and business operations.",
  alternates: {
    canonical: "/case-studies/bluecloudusa",
  },
  openGraph: {
    title: "BlueCloudUSA Operations & CRM Case Study | Vega Morada",
    description:
      "A case study covering CRM administration, customer onboarding, compliance workflows, operational coordination, documentation, and business systems at BlueCloudUSA.",
    url: pageUrl,
    type: "article",
  },
}

const technologies = [
  "Zoho CRM",
  "Zoho Projects",
  "Stripe",
  "Google Workspace",
  "Microsoft Office",
  "WhatsApp",
]

const responsibilities = [
  "Managed day-to-day operational support across customer onboarding, billing, CRM administration, and client communications",
  "Coordinated onboarding processes and account activations",
  "Managed customer follow-ups and implementation workflows",
  "Supported ACH migration initiatives and customer verification processes",
  "Oversaw customer communication, escalations, and service coordination",
  "Managed Zoho Projects tasks and operational workflows",
  "Coordinated internal teams and vendor relationships",
  "Managed 10DLC campaign compliance submissions, revisions, and approvals",
  "Investigated billing inquiries and customer account concerns",
  "Created SOPs, documentation, and repeatable operational processes",
  "Supported AI voice automation implementation planning and coordination",
]

const capabilities = [
  {
    title: "CRM administration",
    description:
      "Supported CRM administration and customer information workflows so operational teams could manage accounts, follow-ups, and customer activity more consistently.",
    icon: Database,
  },
  {
    title: "Customer onboarding",
    description:
      "Coordinated onboarding processes, account activations, customer follow-ups, and implementation workflows across the customer lifecycle.",
    icon: Users,
  },
  {
    title: "Operational workflows",
    description:
      "Structured repeatable operational processes across customer support, billing, implementation activities, internal coordination, and day-to-day business operations.",
    icon: Workflow,
  },
  {
    title: "Compliance coordination",
    description:
      "Managed 10DLC campaign compliance submissions, revisions, approvals, and supporting documentation as part of ongoing operational requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Process documentation",
    description:
      "Created SOPs and operational documentation to make recurring processes clearer, more consistent, and easier for teams to follow.",
    icon: FileText,
  },
  {
    title: "Systems planning",
    description:
      "Supported planning and coordination for operational technology initiatives, including foundational work related to VoIP and AI voice automation.",
    icon: Settings2,
  },
]

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${pageUrl}/#case-study`,
  headline: "BlueCloudUSA Operations & CRM Case Study",
  description:
    "A case study covering CRM administration, customer onboarding, operational workflows, compliance coordination, documentation, and business operations at BlueCloudUSA.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
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
      name: "BlueCloudUSA",
      item: pageUrl,
    },
  ],
}

export default function BlueCloudUSACaseStudyPage() {
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

      <section className="section">
        <div className="site-container">
          <Link href="/#case-studies" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to case studies
          </Link>

          <div className="service-page-hero">
            <div>
              <p className="eyebrow">
                CASE STUDY · OPERATIONS · CRM
              </p>

              <h1>
                BlueCloudUSA
                <br />
                <span className="gradient-text">
                  operations &amp; CRM.
                </span>
              </h1>
            </div>

            <div>
              <p className="service-page-intro">
                As Operations Manager &amp; Executive Assistant, I supported
                BlueCloudUSA across customer onboarding, CRM administration,
                compliance management, billing operations, internal
                coordination, and operational documentation.
              </p>

              <div className="service-skills">
                <span>CRM Administration</span>
                <span>Operations</span>
                <span>Onboarding</span>
                <span>Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / BUSINESS CHALLENGE</p>

              <h2>
                Building repeatable
                <br />
                <span className="muted-text">
                  operational processes.
                </span>
              </h2>
            </div>

            <p className="section-description">
              BlueCloudUSA needed to establish scalable operational systems
              across customer onboarding, ACH migration support, compliance
              management, and CRM administration while maintaining quality and
              team coordination.
            </p>
          </div>

          <div className="cta-panel">
            <p className="eyebrow">THE OPERATING ENVIRONMENT</p>

            <h2>
              Customer operations required
              <br />
              <span className="gradient-text">
                coordination across systems.
              </span>
            </h2>

            <p>
              The work involved customer onboarding, account activations,
              customer follow-ups, billing administration, CRM management,
              compliance processes, vendor coordination, documentation, and
              communication between internal teams and customers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SOLUTION DESIGNED</p>

              <h2>
                A structured framework
                <br />
                <span className="muted-text">
                  for day-to-day operations.
                </span>
              </h2>
            </div>

            <p className="section-description">
              I established an operational framework using Zoho CRM and Zoho
              Projects for customer workflow management, coordinated ACH
              migration initiatives and customer verification processes,
              structured 10DLC compliance tracking and documentation, and
              developed SOPs for repeatable operational processes.
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SYSTEMS &amp; TECHNOLOGIES</p>

              <h2>
                The tools supporting
                <br />
                <span className="muted-text">the operation.</span>
              </h2>
            </div>

            <p className="section-description">
              The operational environment included CRM, project management,
              payment, communication, and productivity platforms used across
              customer and internal workflows.
            </p>
          </div>

          <div className="service-skills">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / OPERATIONAL COORDINATION</p>

              <h2>
                Connecting customers,
                <br />
                <span className="muted-text">
                  systems &amp; internal teams.
                </span>
              </h2>
            </div>

            <p className="section-description">
              I coordinated customer onboarding workflows, managed ACH
              migration support and verification processes, tracked 10DLC
              compliance submissions and approvals, liaised with internal
              teams on vendor relationships, and provided executive support
              and billing administration.
            </p>
          </div>

          <div className="cta-panel">
            <p className="eyebrow">PROCESS MANAGEMENT</p>

            <h2>
              Repeatable workflows
              <br />
              <span className="gradient-text">
                instead of scattered tasks.
              </span>
            </h2>

            <p>
              The focus was on making recurring operational work easier to
              coordinate by defining responsibilities, maintaining customer
              follow-ups, documenting procedures, organizing CRM and project
              activities, and keeping operational processes moving between the
              people and systems involved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / BUSINESS OUTCOMES</p>

              <h2>
                More structured
                <br />
                <span className="muted-text">business operations.</span>
              </h2>
            </div>

            <p className="section-description">
              The work improved operational visibility and accountability
              across departments, established repeatable onboarding and
              compliance processes, coordinated successful ACH migration, and
              provided foundational support for planned VoIP and AI voice
              agent initiatives.
            </p>
          </div>

          <div className="scope-grid">
            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Improved operational visibility and accountability
              </span>
            </div>

            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Established repeatable customer onboarding processes
              </span>
            </div>

            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Established repeatable compliance processes
              </span>
            </div>

            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Coordinated successful ACH migration support
              </span>
            </div>

            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Created SOPs and operational documentation
              </span>
            </div>

            <div className="scope-item">
              <Check size={16} aria-hidden="true" />
              <span>
                Supported planning for VoIP and AI voice initiatives
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / KEY RESPONSIBILITIES</p>

              <h2>
                Operations management
                <br />
                <span className="muted-text">in practice.</span>
              </h2>
            </div>

            <p className="section-description">
              The role combined customer operations, CRM administration,
              process coordination, compliance management, documentation, and
              cross-functional operational support.
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">07 / RELATED EXPERTISE</p>

              <h2>
                From operational work
                <br />
                <span className="muted-text">
                  to scalable systems.
                </span>
              </h2>
            </div>

            <div>
              <p className="section-description">
                This work reflects the same business-first approach I use when
                designing CRM systems, improving workflows, documenting
                processes, and connecting operational tools.
              </p>

              <div className="hero-actions">
                <Link
                  href="/services/workflow-operations-consulting"
                  className="button"
                >
                  Workflow &amp; operations consulting
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/services/crm-implementation"
                  className="button button-outline"
                >
                  CRM implementation
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <p className="eyebrow">WORK WITH VEGA</p>

            <h2>
              Need clearer operations
              <br />
              <span className="gradient-text">
                behind your systems?
              </span>
            </h2>

            <p>
              I help businesses organize CRM workflows, customer processes,
              operational systems, automation, documentation, and the
              connections between the tools their teams use every day.
            </p>

            <div className="hero-actions">
              <Link href="/#contact" className="button">
                Discuss your project
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>

              <Link href="/#case-studies" className="button button-outline">
                View more case studies
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
