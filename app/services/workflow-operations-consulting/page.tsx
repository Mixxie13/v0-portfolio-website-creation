import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ClipboardList,
  GitBranch,
  Network,
  Route,
  Search,
  Settings2,
  Workflow,
} from "lucide-react"

const siteUrl = "https://work-with-vega.vercel.app"
const pageUrl = `${siteUrl}/services/workflow-operations-consulting`

export const metadata: Metadata = {
  title: "Workflow & Operations Consulting | Vega Morada",
  description:
    "Workflow and operations consulting for businesses that need clearer processes, better system design, fewer bottlenecks, and more efficient day-to-day operations.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Workflow & Operations Consulting | Vega Morada",
    description:
      "Map workflows, identify bottlenecks, improve business processes, and design practical operational systems with Vega Morada.",
    siteName: "Vega Morada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow & Operations Consulting | Vega Morada",
    description:
      "Workflow mapping, process improvement, operational systems, and practical workflow design for growing businesses.",
  },
}

const consultingAreas = [
  {
    icon: GitBranch,
    title: "Process mapping",
    description:
      "Document how work currently moves through your business, including people, applications, decisions, handoffs, information, and dependencies.",
  },
  {
    icon: Search,
    title: "Bottleneck identification",
    description:
      "Find delays, duplicated work, unclear ownership, unnecessary manual steps, and process gaps that make operations harder to manage.",
  },
  {
    icon: Workflow,
    title: "Workflow design",
    description:
      "Design clearer workflows with defined stages, responsibilities, triggers, decisions, handoffs, and expected outcomes.",
  },
  {
    icon: Network,
    title: "Systems alignment",
    description:
      "Clarify how your CRM, automation tools, communication platforms, databases, and other applications should support the workflow.",
  },
  {
    icon: Route,
    title: "Operational improvement",
    description:
      "Simplify processes and improve how information, tasks, approvals, customer activity, and internal work move through the business.",
  },
  {
    icon: Settings2,
    title: "Automation planning",
    description:
      "Identify which parts of a process are suitable for automation and which decisions or activities should remain human-led.",
  },
]

const process = [
  {
    number: "01",
    title: "Understand the current workflow",
    description:
      "Start with how the process actually works today, including the people involved, systems used, information required, decisions made, and desired outcome.",
  },
  {
    number: "02",
    title: "Map the process",
    description:
      "Break the workflow into stages, actions, handoffs, dependencies, decisions, and system interactions so the full process is visible.",
  },
  {
    number: "03",
    title: "Identify friction",
    description:
      "Review the workflow for unnecessary steps, duplicated work, delays, unclear ownership, disconnected systems, and opportunities for improvement.",
  },
  {
    number: "04",
    title: "Design the improved workflow",
    description:
      "Create a clearer process around the actual operational requirements rather than forcing the business into unnecessary complexity.",
  },
  {
    number: "05",
    title: "Align systems and automation",
    description:
      "Determine where CRM workflows, integrations, automation, notifications, reporting, or other systems can support the redesigned process.",
  },
  {
    number: "06",
    title: "Document the operating model",
    description:
      "Create a structure that makes the improved workflow easier to understand, implement, maintain, and hand over to the people who use it.",
  },
]

const helpWith = [
  "Business process and workflow mapping",
  "CRM process design",
  "Lead and customer lifecycle workflows",
  "Sales pipeline process improvement",
  "Operational bottleneck analysis",
  "Task and responsibility mapping",
  "Manual handoff reduction",
  "Approval and decision workflows",
  "Cross-team workflow design",
  "Systems and application mapping",
  "Automation opportunity assessment",
  "Workflow documentation and handover",
]

const faqs = [
  {
    question: "What is workflow and operations consulting?",
    answer:
      "Workflow and operations consulting focuses on understanding how work moves through a business and improving the processes, responsibilities, systems, and information flows involved. The goal is to create clearer and more practical ways of working.",
  },
  {
    question: "What is business process mapping?",
    answer:
      "Business process mapping documents the steps, decisions, people, systems, information, and handoffs involved in completing a business process. It makes the current workflow easier to understand and helps reveal gaps, delays, duplication, and improvement opportunities.",
  },
  {
    question: "Can workflow consulting help before implementing automation?",
    answer:
      "Yes. Understanding the process before automating it can help determine what should be automated, what should be simplified first, and where human decisions are still required. This can prevent unnecessary complexity from being built into an automated workflow.",
  },
  {
    question: "Can existing business processes be improved?",
    answer:
      "Yes. Existing workflows can be reviewed for unnecessary steps, duplicated work, unclear responsibilities, disconnected systems, manual handoffs, and other sources of friction. The process can then be redesigned around the actual operational requirements.",
  },
  {
    question: "Does workflow consulting include CRM processes?",
    answer:
      "Yes. CRM processes can include lead capture, qualification, assignment, pipeline stages, follow-ups, customer lifecycle management, task creation, reporting, notifications, and integrations with other business applications.",
  },
  {
    question: "How does an operations consulting project usually start?",
    answer:
      "A project usually starts by understanding the current process, the people involved, the applications being used, the information moving between them, the existing problems, and the desired outcome. The workflow can then be mapped and reviewed before improvements are designed.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Workflow & Operations Consulting",
  url: pageUrl,
  description:
    "Workflow and operations consulting focused on business process mapping, workflow design, bottleneck identification, systems alignment, and operational improvement.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}/#vega-morada`,
    name: "Vega Morada",
    url: siteUrl,
  },
  serviceType: [
    "Workflow Consulting",
    "Operations Consulting",
    "Business Process Mapping",
    "Workflow Design",
    "Process Improvement",
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
      name: "Workflow & Operations Consulting",
      item: pageUrl,
    },
  ],
}

export default function WorkflowOperationsConsultingPage() {
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

      <section className="section">
        <div className="site-container">
          <Link href="/#services" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="section-heading">
            <div>
              <p className="eyebrow">
                WORKFLOW CONSULTING · OPERATIONS · PROCESS DESIGN
              </p>

              <h1>
                Workflow &amp; operations
                <br />
                <span className="gradient-text">consulting.</span>
              </h1>
            </div>

            <div>
              <p className="section-description">
                Improve how work moves through your business. I help map
                processes, identify bottlenecks, clarify handoffs, align
                systems, and design practical workflows around the way your
                operations actually work.
              </p>

              <div className="service-skills">
                <span>Process Mapping</span>
                <span>Operations</span>
                <span>Workflow Design</span>
                <span>Process Improvement</span>
              </div>
            </div>
          </div>

          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / THE APPROACH</p>

              <h2>
                Improve the process,
                <br />
                <span className="gradient-text">
                  not just the individual task.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Useful operational improvement starts by understanding the whole
              workflow. That means looking at the people, systems, information,
              decisions, dependencies, and handoffs involved before deciding
              what should change.
            </p>
          </div>

          <div className="services-grid">
            {consultingAreas.map((area, index) => {
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / CONSULTING PROCESS</p>

              <h2>
                Understand first.
                <br />
                <span className="gradient-text">Improve second.</span>
              </h2>
            </div>

            <p className="section-description">
              The exact approach depends on the business and workflow, but the
              process is designed to move from understanding the current state
              toward a clearer and more maintainable operating model.
            </p>
          </div>

          <div className="services-grid">
            {process.map((step) => (
              <article key={step.number} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <ClipboardList size={22} aria-hidden="true" />
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>

              <h2>
                From process friction
                <br />
                <span className="gradient-text">
                  to clearer operations.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Every workflow is different, but consulting projects can cover
              the following operational and process areas.
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / CONNECTED SYSTEMS</p>

              <h2>
                Processes and technology
                <br />
                <span className="gradient-text">
                  should work together.
                </span>
              </h2>
            </div>

            <p className="section-description">
              Workflow consulting can lead into CRM optimization, automation,
              or systems integration when technology changes are needed to
              support the improved process.
            </p>
          </div>

          <div className="services-grid">
            <Link
              href="/services/crm-implementation"
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Settings2 size={22} aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3>CRM implementation &amp; optimization</h3>
                <p>
                  Structure CRM pipelines, customer data, workflows,
                  reporting, integrations, and automation around the business
                  process.
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
                  Turn suitable repetitive processes and manual handoffs into
                  connected automated workflows.
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
                  Connect applications, CRM platforms, APIs, webhooks, and
                  data flows so the systems supporting the process can work
                  together.
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

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / WORKFLOW QUESTIONS</p>

              <h2>
                Workflow &amp; operations
                <br />
                <span className="gradient-text">questions answered.</span>
              </h2>
            </div>

            <p className="section-description">
              Straightforward answers about process mapping, workflow design,
              operations improvement, CRM processes, and automation planning.
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

      <section className="section">
        <div className="site-container">
          <div className="service-card">
            <p className="eyebrow">WORKFLOW CONSULTING</p>

            <h2>
              Ready to build
              <br />
              <span className="gradient-text">a clearer process?</span>
            </h2>

            <p className="section-description">
              Tell me how the process works today, where the friction happens,
              which people and systems are involved, and what you want the
              workflow to accomplish.
            </p>

            <a href="/#contact" className="button">
              Discuss your workflow
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
