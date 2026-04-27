export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Vega Morada
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance font-light">
          Senior Executive Assistant | Automation Specialist | CRM Expert
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Transforming business operations through intelligent automation, CRM optimization, and strategic process design. 5+ years of experience helping founders and teams scale efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold text-accent">5+</p>
            <p className="text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">10+</p>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">100%</p>
            <p className="text-muted-foreground mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
