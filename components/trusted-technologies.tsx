'use client'

export function TrustedTechnologies() {
  const technologies = {
    crm: {
      title: "CRM & Operations",
      tools: ["Zoho CRM", "Zoho Inventory", "Zoho Desk", "Zoho Flow", "Zoho Projects"]
    },
    automation: {
      title: "Automation & Integration",
      tools: ["Make.com", "APIs", "Webhooks", "Deluge (Zoho Scripting)"]
    },
    ecommerce: {
      title: "E-Commerce & Platforms",
      tools: ["WooCommerce", "Stripe", "Simpro", "Freshdesk"]
    },
    productivity: {
      title: "Productivity & Collaboration",
      tools: ["Google Workspace", "Microsoft 365", "Lucidspark", "WhatsApp"]
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            I specialize in modern business systems that scale with your company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <div key={key} className="bg-background rounded-lg border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.tools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="text-sm font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
