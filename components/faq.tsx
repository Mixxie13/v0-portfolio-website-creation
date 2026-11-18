const faqs = [
  {
    question: "What does Vega Morada do?",
    answer:
      "Vega Morada is a CRM specialist and business automation consultant who helps businesses implement and optimize CRM systems, automate workflows, integrate applications, improve reporting, and design more efficient operational processes.",
  },
  {
    question: "Which CRM platforms does Vega work with?",
    answer:
      "Vega works with CRM platforms including Zoho CRM, HubSpot, Pipedrive, and GoHighLevel. The right platform and setup depend on the business process, existing technology stack, reporting needs, and automation requirements.",
  },
  {
    question: "Can Vega implement and optimize Zoho CRM?",
    answer:
      "Yes. Vega's portfolio includes Zoho CRM implementation, CRM architecture, workflow automation, dashboards, reporting, lead management, Zoho Desk workflows, Zoho Flow automations, and integrations with other business systems.",
  },
  {
    question: "What business processes can be automated?",
    answer:
      "Automation can support processes such as lead capture, CRM updates, follow-ups, customer communication, order processing, data synchronization, reporting, document handling, inventory workflows, and other repetitive operational tasks.",
  },
  {
    question: "What automation platforms does Vega use?",
    answer:
      "Vega works with Make.com, n8n, Zapier, and Zoho Flow, as well as APIs and webhooks when a workflow requires direct system-to-system integration.",
  },
  {
    question: "Can Vega connect a CRM with other business applications?",
    answer:
      "Yes. Vega builds systems integrations using automation platforms, APIs, webhooks, and data synchronization workflows. Portfolio examples include CRM, WooCommerce, Zoho Inventory, Zoho Desk, email, reporting, and other operational systems.",
  },
  {
    question: "How does a CRM and automation project usually start?",
    answer:
      "A project typically starts by understanding the current process, identifying bottlenecks and manual work, reviewing the tools involved, and defining the desired workflow. The solution can then be designed around the business requirements rather than automating an inefficient process as-is.",
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-space"
      aria-labelledby="faq-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / COMMON QUESTIONS</p>

            <h2 id="faq-heading">
              CRM &amp; automation
              <br />
              <span className="text-muted-foreground">questions answered.</span>
            </h2>
          </div>

          <p>
            Clear answers about the CRM, automation, integration, and
            operational systems work I provide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="service-card group">
              <summary className="cursor-pointer font-semibold text-foreground">
                {question}
              </summary>

              <p className="mt-4">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
