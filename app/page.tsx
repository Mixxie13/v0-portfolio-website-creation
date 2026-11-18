import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustedTechnologies } from "@/components/trusted-technologies"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { WhyHireMe } from "@/components/why-hire-me"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <TrustedTechnologies />
        <Services />
        <About />
        <Experience />
        <Projects />
        <WhyHireMe />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
