import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const capabilities = [
  "CRM implementation and optimization",
  "Workflow and business process automation",
  "API and systems integration",
  "Operational process design",
  "CRM reporting and dashboards",
  "Automation architecture",
]

export function About() {
  return (
    <section
      id="about"
      className="section-space"
      aria-labelledby="about-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / ABOUT VEGA</p>

            <h2 id="about-heading">
              Business understanding.
              <br />
              <span className="text-muted-foreground">
                Technical execution.
              </span>
            </h2>
          </div>

          <p>
            I&apos;m Vega Morada, a CRM specialist and business automation
            consultant focused on building practical systems around the way
            businesses actually operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="service-card">
            <p className="eyebrow">CRM + AUTOMATION</p>

            <h3>Technology is better with business sense.</h3>

            <p>
              My work combines CRM implementation, automation, systems
              integration, reporting, and operational process design. I help
              businesses move from disconnected tools and manual processes to
              systems that are easier to manage, understand, and improve.
            </p>

            <p>
              I work with CRM platforms including Zoho CRM, HubSpot, Pipedrive,
              and GoHighLevel, alongside automation tools such as Make.com,
              n8n, Zapier, and Zoho Flow.
            </p>

            <a href="#case-studies" className="text-link">
              See how I apply this in real projects
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>

          <article className="service-card">
            <p className="eyebrow">CORE CAPABILITIES</p>

            <h3>From process problem to connected system.</h3>

            <div className="space-y-4">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{capability}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="text-link">
              Discuss your systems or automation project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
