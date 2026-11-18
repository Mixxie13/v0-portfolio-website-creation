"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Mail,
  Send,
} from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const subject = String(form.get("subject") || "")
    const message = String(form.get("message") || "")

    const emailSubject = subject || "CRM or automation project inquiry"

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n")

    window.location.href = `mailto:moradavega143@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`

    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="section-space"
      aria-labelledby="contact-heading"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / LET&apos;S WORK TOGETHER</p>

            <h2 id="contact-heading">
              Build a better system
              <br />
              <span className="text-muted-foreground">
                for your business.
              </span>
            </h2>
          </div>

          <p>
            Need a better CRM, workflow, or integration? Let&apos;s discuss your
            current process, systems, bottlenecks, and project goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="service-card">
              <p className="eyebrow">START A CONVERSATION</p>

              <h3>Tell me what&apos;s slowing your business down.</h3>

              <p>
                Whether you&apos;re implementing a CRM, improving an existing
                system, automating repetitive work, or connecting tools that
                don&apos;t currently work together, tell me what&apos;s happening
                and what you&apos;d like to improve.
              </p>

              <div className="space-y-4 mt-6">
                <a
                  href="mailto:moradavega143@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span
                    className="service-icon"
                    aria-hidden="true"
                  >
                    <Mail size={20} strokeWidth={1.5} />
                  </span>

                  <span>
                    <small className="block text-muted-foreground">
                      Email
                    </small>

                    <strong>moradavega143@gmail.com</strong>
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/vegamorada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <span
                    className="service-icon"
                    aria-hidden="true"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </span>

                  <span>
                    <small className="block text-muted-foreground">
                      LinkedIn
                    </small>

                    <strong>Connect with Vega Morada</strong>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="service-card">
              <p className="eyebrow">PROJECTS I CAN HELP WITH</p>

              <div className="space-y-3">
                {[
                  "CRM implementation and optimization",
                  "Business process automation",
                  "Workflow design and integration",
                  "API and webhook integrations",
                  "CRM dashboards and reporting",
                  "Operational systems improvement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="service-card">
            <p className="eyebrow">PROJECT INQUIRY</p>

            <h3>Tell me about your project.</h3>

            <p>
              A little context about your current setup and what you want to
              improve will help me understand where I can add the most value.
            </p>

            <form
              className="space-y-5 mt-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium mb-2"
                >
                  What do you need help with?
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="CRM or automation project inquiry"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                >
                  Project details
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your current process, the tools you're using, what's not working, and what you'd like to improve."
                  className="w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="button w-full sm:w-auto"
              >
                Send project inquiry
                <Send size={16} aria-hidden="true" />
              </button>

              {submitted && (
                <p
                  className="text-sm text-muted-foreground"
                  role="status"
                >
                  Your email application should open with your project details
                  ready to send.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
