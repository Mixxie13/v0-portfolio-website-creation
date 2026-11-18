import {
  ArrowUpRight,
  Database,
  Workflow,
  PlugZap,
  Compass,
  ChartNoAxesCombined,
  Layers3,
} from "lucide-react"

const services = [
  {
    title: "CRM implementation & optimization",
    description:
      "Build or improve a CRM around how your business actually works. I help structure pipelines, customer data, workflows, dashboards, and processes so your team has a system it can rely on.",
    icon: Database,
    skills: ["Zoho CRM", "HubSpot", "Pipedrive", "GoHighLevel"],
  },
  {
    title: "Business process automation",
    description:
      "Turn repetitive tasks and manual handoffs into reliable automated workflows. I connect processes across your business to reduce busywork and keep information moving.",
    icon: Workflow,
    skills: ["Make.com", "n8n", "Zapier", "Zoho Flow"],
  },
  {
    title: "Systems integration & APIs",
    description:
      "Connect your CRM, business apps, and data sources so they work together. I build integrations using APIs, webhooks, automation platforms, and custom workflow logic.",
    icon: PlugZap,
    skills: ["APIs", "Webhooks", "Data sync", "Integrations"],
  },
  {
    title: "Operations & process consulting",
    description:
      "Identify bottlenecks, map better processes, and turn them into practical systems. I help businesses create clearer workflows, documentation, and SOPs for day-to-day operations.",
    icon: Compass,
    skills: ["Process mapping", "SOPs", "Operations", "Documentation"],
  },
  {
    title: "Reporting & CRM analytics",
    description:
      "Turn operational and CRM data into useful reporting. I build dashboards, KPI views, and reporting workflows that make performance easier to understand and act on.",
    icon: ChartNoAxesCombined,
    skills: ["Dashboards", "Reporting", "KPIs", "Analytics"],
  },
  {
    title: "Systems architecture",
    description:
      "Plan how your CRM, automation tools, integrations, and operational systems should work together. I design practical system structures that can evolve as your business grows.",
    icon: Layers3,
    skills: ["Systems design", "Scalability", "Automation strategy"],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="section-space"
      aria-labelledby="services-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHAT I DO</p>

            <h2 id="services-heading">
              CRM, automation &amp;
              <br />
              <span className="text-muted-foreground">
                connected business systems.
              </span>
            </h2>
          </div>

          <p>
            I help businesses implement and improve CRM systems, automate
            repetitive processes, connect applications, and build clearer
            operational workflows.
          </p>
        </div>

        <div className="service-grid">
          {services.map(
            ({ title, description, icon: Icon, skills }, i) => (
              <article className="service-card" key={title}>
                <div className="card-top">
                  <span className="service-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>

                  <span className="card-number">
                    0{i + 1}
                  </span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div
                  className="skill-tags"
                  aria-label={`${title} technologies and capabilities`}
                >
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>

        <a href="#contact" className="text-link">
          Let&apos;s find the right CRM and automation solution for your business
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
