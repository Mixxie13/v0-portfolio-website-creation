import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  Database,
  GitBranch,
  Network,
  Settings2,
  Workflow,
} from "lucide-react"

const services = [
  {
    title: "CRM implementation & optimization",
    description:
      "Build or improve a CRM around how your business actually works. I help structure pipelines, customer data, workflows, dashboards, reporting, integrations, and automation.",
    icon: Database,
    skills: ["Zoho CRM", "HubSpot", "Pipedrive", "GoHighLevel"],
    href: "/services/crm-implementation",
  },
  {
    title: "Business process automation",
    description:
      "Turn repetitive tasks and manual handoffs into reliable automated workflows. I connect processes across your business to reduce busywork, improve consistency, and keep information moving between systems.",
    icon: Workflow,
    skills: ["Make.com", "n8n", "Zapier", "Zoho Flow"],
    href: "/services/business-process-automation",
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect your CRM, business applications, databases, and other tools using APIs, webhooks, and integrations so information can move between systems without unnecessary manual work.",
    icon: Network,
    skills: ["APIs", "Webhooks", "REST", "Integrations"],
  },
  {
    title: "Workflow & operations consulting",
    description:
      "Map how work moves through your business, identify bottlenecks, and design practical systems that make processes clearer, more efficient, and easier to manage.",
    icon: GitBranch,
    skills: ["Process Mapping", "Operations", "Workflow Design"],
  },
  {
    title: "Reporting & analytics",
    description:
      "Create dashboards, reports, and operational views that turn CRM and business data into useful information for tracking activity, performance, and operational decisions.",
    icon: BarChart3,
    skills: ["Dashboards", "CRM Reporting", "Analytics"],
  },
  {
    title: "Systems architecture",
    description:
      "Design connected business systems around your CRM, automation tools, applications, integrations, and data so each platform has a clear role in your operations.",
    icon: Settings2,
    skills: ["System Design", "Data Flow", "Automation Architecture"],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SERVICES</p>

            <h2 id="services-heading">
              CRM, automation &amp;
              <br />
              <span className="gradient-text">connected systems.</span>
            </h2>
          </div>

          <p className="section-description">
            I help businesses build practical CRM and automation systems that
            connect customer data, workflows, applications, reporting, and
            day-to-day operations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon

            const content = (
              <>
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div
                  className="service-skills"
                  aria-label={`${service.title} technologies and capabilities`}
                >
                  {service.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {service.href && (
                  <div className="service-link">
                    Learn more
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </div>
                )}
              </>
            )

            if (service.href) {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="service-card"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {content}
                </Link>
              )
            }

            return (
              <article key={service.title} className="service-card">
                {content}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
