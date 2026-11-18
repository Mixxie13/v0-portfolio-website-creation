import Image from "next/image"
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="site-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              ZOHO CRM · AUTOMATION · SYSTEMS INTEGRATION
            </p>

            <h1 id="hero-heading">
              Zoho CRM Specialist &amp;
              <br />
              <span className="gradient-text">
                Business Automation Consultant
              </span>
            </h1>

            <p className="hero-description">
              Connected systems. Smarter operations. I help businesses
              implement Zoho CRM, automate repetitive workflows, and connect
              their tools using Zoho Flow, Make.com, n8n, Zapier, APIs, and
              custom integrations.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button">
                Work with me <ArrowUpRight size={18} />
              </a>

              <a href="#case-studies" className="button button-outline">
                Explore my work <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-person">
              <Image
                src="/profile.jpg"
                alt="Vega Morada, Zoho CRM specialist and business automation consultant"
                width={48}
                height={48}
                className="profile-thumb"
                priority
              />

              <div>
                <p>Hi, I&apos;m Vega Morada.</p>
                <span>Zoho CRM Specialist &amp; Business Automation Consultant</span>
              </div>
            </div>
          </div>

          <div
            className="system-panel"
            aria-label="Connected CRM and business automation workflow"
          >
            <div className="panel-toolbar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>

              <span>BUSINESS WORKFLOW</span>

              <span className="panel-live">
                <span className="status-dot" /> CONNECTED
              </span>
            </div>

            <div className="workflow-canvas">
              <div className="canvas-label">
                <span>01 / CONNECT YOUR TOOLS</span>
                <GitBranch size={16} />
              </div>

              <div className="workflow-inputs">
                <div className="workflow-node">
                  <span className="node-icon blue">
                    <Database size={21} />
                  </span>
                  <b>Zoho CRM</b>
                  <small>Leads &amp; customer data</small>
                </div>

                <div className="workflow-node">
                  <span className="node-icon purple">
                    <Layers3 size={21} />
                  </span>
                  <b>Business tools</b>
                  <small>Apps &amp; APIs</small>
                </div>
              </div>

              <div className="flow-lines">
                <span />
                <span />
              </div>

              <div className="workflow-core">
                <span className="node-icon teal">
                  <Zap size={25} />
                </span>

                <div>
                  <b>Automation engine</b>
                  <small>Zoho Flow · Make.com · n8n · Zapier</small>
                </div>

                <span className="core-indicator" />
              </div>

              <div className="flow-single" />

              <div className="workflow-result">
                <span className="node-icon teal">
                  <Sparkles size={21} />
                </span>

                <div>
                  <b>Less busywork. More clarity.</b>
                  <small>
                    Automated follow-ups, reporting &amp; connected operations
                  </small>
                </div>

                <Check size={18} />
              </div>

              <div className="canvas-footer">
                <span>
                  <Check size={13} /> Data synced
                </span>

                <span>
                  <Check size={13} /> Workflow connected
                </span>
              </div>
            </div>

            <div className="panel-footer">
              <span className="code-label">
                &lt;/&gt; BUILT AROUND YOUR BUSINESS
              </span>
              <span>CRM + AI + AUTOMATION</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <strong>
              6<span>+</span>
            </strong>
            <p>Years of experience</p>
          </div>

          <div>
            <strong>
              6<span>+</span>
            </strong>
            <p>CRM implementations</p>
          </div>

          <div className="hours-saved-stat">
            <strong>CRM</strong>
            <p>Implementation &amp; automation</p>
          </div>

          <a href="#services" className="stats-note">
            Built for real business.
            <br />
            <span>
              Designed for what&apos;s next. <ArrowDown size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
