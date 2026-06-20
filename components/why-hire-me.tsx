'use client'

export function WhyHireMe() {
  const benefits = [
    {
      title: "Bridge Operations & Technology",
      description: "Most businesses understand they need CRM systems, automation, or better workflows—but lack someone who grasps both the business process and technical implementation. I bridge that gap.",
      icon: "🔗"
    },
    {
      title: "CRM Implementation Without Overhead",
      description: "Get professional CRM design, setup, and optimization without hiring a full-time systems administrator. I design systems that scale with your growth.",
      icon: "📊"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline workflows, reduce manual tasks, improve visibility across teams, and establish repeatable processes that compound efficiency over time.",
      icon: "⚡"
    },
    {
      title: "Systems Integration",
      description: "Connect your business tools seamlessly—WooCommerce to Zoho, Stripe workflows, custom API integrations. Your systems work together, not against each other.",
      icon: "🔄"
    },
    {
      title: "Reporting & Business Intelligence",
      description: "Transform raw data into actionable dashboards and KPIs. Make decisions based on real-time visibility, not guesswork.",
      icon: "📈"
    },
    {
      title: "Scalable Architecture",
      description: "Build business systems designed for growth. As you scale, your infrastructure adapts—not breaks. No technical debt, just clean systems.",
      icon: "🏗️"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Clients Hire Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            I help businesses organize operations, optimize systems, and build infrastructure that supports growth. Here&apos;s what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I don&apos;t just build systems—I build infrastructure that enables your team to work smarter, not harder. Let&apos;s discuss how I can help your business scale.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition active:scale-95">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
