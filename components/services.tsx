export function Services() {
  const services = [
    {
      title: "Workflow Automation",
      description: "Design and implement automated workflows using Zapier, Make, n8n, and HighLevel to eliminate repetitive tasks and improve efficiency.",
      icon: "⚙️"
    },
    {
      title: "CRM Optimization",
      description: "Configure and optimize CRM systems including Pipedrive, HubSpot, Zoho, and HighLevel for better lead management and sales processes.",
      icon: "📊"
    },
    {
      title: "Lead Generation & Management",
      description: "Build comprehensive lead generation strategies and systems for qualified prospect identification and consistent pipeline management.",
      icon: "🎯"
    },
    {
      title: "API & Webhook Integration",
      description: "Connect disparate systems and platforms through custom API integrations and webhook configurations for seamless data flow.",
      icon: "🔗"
    },
    {
      title: "No-Code/Low-Code Solutions",
      description: "Build scalable business solutions without coding using industry-leading no-code platforms and workflow builders.",
      icon: "🚀"
    },
    {
      title: "Executive Operations",
      description: "Comprehensive support including email management, calendar coordination, document editing, and strategic process improvement.",
      icon: "📋"
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Comprehensive solutions to automate your business and optimize operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg bg-background border border-border hover:border-accent transition group cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
