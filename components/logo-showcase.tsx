'use client'

import { useState } from 'react'
import Image from 'next/image'

export function LogoShowcase() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null)

  const concepts = [
    {
      id: 1,
      name: "Connected Flow Network",
      description: "Abstract interconnected nodes and flowing lines representing automation workflows and system connectivity. Features smooth curved connections with blue-to-purple gradient.",
      path: "/logo-concept-1.png",
      strength: "Emphasizes connectivity and data flow. Most abstract and modern.",
      use: "Best for: Tech-forward positioning, digital-first branding"
    },
    {
      id: 2,
      name: "Hexagonal Systems",
      description: "Geometric hexagonal layers with flowing data streams. Represents CRM systems, architecture, and business infrastructure with cyan accents and layered design.",
      path: "/logo-concept-2.png",
      strength: "Clear systems/architecture representation. Professional enterprise feel.",
      use: "Best for: CRM consultant positioning, enterprise branding"
    },
    {
      id: 3,
      name: "Growth Automation",
      description: "Interconnected nodes forming upward arrow with glowing accents. Represents business growth through automation and systems optimization.",
      path: "/logo-concept-3.png",
      strength: "Shows growth trajectory. Most optimistic and action-oriented.",
      use: "Best for: Automation consultant, growth-focused positioning"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Logo Concepts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Three distinct brand identity options. Each concept reflects automation, systems integration, and technical consulting expertise.
          </p>
        </div>

        {/* Grid of Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelectedLogo(selectedLogo === concept.id ? null : concept.id)}
              className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                selectedLogo === concept.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary'
              }`}
            >
              {/* Logo Display */}
              <div className="bg-card p-12 flex items-center justify-center h-64 relative">
                <Image
                  src={concept.path}
                  alt={concept.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-background">
                <h3 className="text-lg font-bold text-foreground mb-2">{concept.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{concept.description}</p>

                {selectedLogo === concept.id && (
                  <div className="border-t border-border pt-4 mt-4 animate-fade-in-up">
                    <p className="text-xs text-primary font-semibold mb-2">{concept.strength}</p>
                    <p className="text-xs text-muted-foreground">{concept.use}</p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Usage Examples */}
        {selectedLogo && (
          <div className="border-t border-border pt-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-12 text-center">Brand Usage Examples</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Header Example */}
              <div className="border border-border rounded-lg overflow-hidden bg-card">
                <div className="bg-background/80 backdrop-blur p-4 border-b border-border flex items-center gap-3">
                  <Image
                    src={concepts[selectedLogo - 1].path}
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="font-bold text-foreground">Vega Morada</span>
                  <div className="ml-auto flex gap-2 text-xs text-muted-foreground">
                    <span>Services</span>
                    <span>Cases</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-b from-primary/10 to-background flex items-center justify-center text-muted-foreground">
                  Header with logo
                </div>
              </div>

              {/* Favicon Example */}
              <div className="border border-border rounded-lg overflow-hidden bg-card p-8">
                <p className="text-sm text-muted-foreground mb-4">Favicon (32x32)</p>
                <div className="bg-background rounded border border-border p-4 flex items-center justify-center gap-4">
                  <Image
                    src={concepts[selectedLogo - 1].path}
                    alt="favicon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-xs text-muted-foreground">Browser tab icon</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Clear and recognizable at small sizes</p>
              </div>

              {/* LinkedIn Example */}
              <div className="border border-border rounded-lg overflow-hidden bg-card p-8">
                <p className="text-sm text-muted-foreground mb-4">LinkedIn Profile Image</p>
                <div className="bg-background rounded border border-border p-8 flex items-center justify-center h-40">
                  <Image
                    src={concepts[selectedLogo - 1].path}
                    alt="linkedin"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-4">Profile picture on dark background</p>
              </div>

              {/* Proposal Example */}
              <div className="border border-border rounded-lg overflow-hidden bg-card p-8">
                <p className="text-sm text-muted-foreground mb-4">Proposal/Document Header</p>
                <div className="bg-white rounded border border-border p-8 flex flex-col items-center justify-center h-40 gap-4">
                  <Image
                    src={concepts[selectedLogo - 1].path}
                    alt="proposal"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <p className="text-center text-sm font-semibold text-black">Vega Morada</p>
                  <p className="text-center text-xs text-gray-600">Technical Virtual Assistant | CRM Specialist</p>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Professional proposal branding</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-primary font-semibold">Ready to proceed?</p>
              <p className="text-sm text-muted-foreground mt-2">
                Select which logo concept best represents your brand, and I&apos;ll integrate it across the website along with the complete branding system (color palette, typography, components).
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
