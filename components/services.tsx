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
      "Turn repetitive tasks and manual handoffs into reliable automated workflows. I connect processes across your business to reduce busywork and improve operational consistency.",
    icon: Workflow,
    skills: ["Make.com", "n8n", "Zapier", "Zoho Flow"],
    href: "/services/business-process-automation",
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect your CRM, business applications, databases, and other tools so information can move between systems without unnecessary manual work.",
    icon: Network,
    skills: ["APIs", "Webhooks", "REST", "Integrations"],
    href: "/services/systems-integration",
  },
  {
    title: "Workflow & operations consulting",
    description:
      "Map how work moves through your business, identify bottlenecks, and design practical systems that make processes clearer, more efficient, and easier to manage.",
    icon: GitBranch,
    skills: ["Process Mapping", "Operations", "Workflow Design"],
    href: "/services/workflow-operations-consulting",
  },
  {
    title: "Reporting & analytics",
    description:
      "Create dashboards, reports, and operational views that turn CRM and business data into useful information for tracking activity, performance, and decisions.",
    icon: BarChart3,
    skills: ["Dashboards", "CRM Reporting", "Analytics"],
    href: "/services/reporting-analytics",
  },
  {
    title: "Systems architecture",
    description:
      "Design connected business systems around your CRM, automation tools, applications, and data so each platform has a clear role in your operations.",
    icon: Settings2,
    skills: ["System Design", "Data Flow", "Automation Architecture"],
    href: "/services/systems-architecture",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="section services-section"
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

            return (
              <Link
                key={service.title}
                href={service.href}
                className="service-card"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <span className="service-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="service-card-content">
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

                <div className="service-link">
                  <span>Learn more</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
