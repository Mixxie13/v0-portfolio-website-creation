import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { BackgroundEffects } from "@/components/background-effects"
import "./globals.css"

const siteUrl = "https://work-with-vega.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "vSCWZGZotfVnNRHl_l8M0utRamFFhotcXvXW3MVT6co",
  },

  title: {
    default: "Vega Morada | CRM Specialist & Automation Consultant",
    template: "%s | Vega Morada",
  },

  description:
    "Vega Morada is a CRM specialist and business automation consultant helping businesses implement CRM systems, automate workflows, integrate applications, improve reporting, and streamline operations.",

  authors: [
    {
      name: "Vega Morada",
      url: siteUrl,
    },
  ],

  creator: "Vega Morada",
  publisher: "Vega Morada",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Vega Morada | CRM Specialist & Automation Consultant",
    description:
      "CRM implementation, business process automation, systems integration, reporting, and workflow consulting by Vega Morada.",
    siteName: "Vega Morada",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vega Morada | CRM Specialist & Automation Consultant",
    description:
      "CRM implementation, business process automation, systems integration, reporting, and workflow consulting by Vega Morada.",
  },

  icons: {
    icon: {
      url: "/vega-abstract-icon.png",
      type: "image/png",
    },
    apple: "/vega-abstract-apple-icon.png",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#vega-morada`,

  name: "Vega Morada",
  url: siteUrl,

  mainEntityOfPage: {
    "@id": `${siteUrl}/#website`,
  },

  jobTitle: "CRM Specialist & Business Automation Consultant",

  description:
    "CRM specialist and business automation consultant focused on CRM implementation, CRM optimization, workflow automation, systems integration, reporting, systems architecture, and business process improvement.",

  sameAs: [
    "https://linkedin.com/in/vegamorada",
    "https://www.upwork.com/freelancers/~01513b65b8672f7efa",
  ],

  knowsAbout: [
    "CRM Implementation",
    "CRM Optimization",
    "CRM Automation",
    "Business Process Automation",
    "Workflow Automation",
    "Systems Integration",
    "API Integration",
    "Workflow and Operations Consulting",
    "CRM Reporting",
    "Business Analytics",
    "Systems Architecture",
    "Zoho CRM",
    "Zoho Flow",
    "HubSpot",
    "Pipedrive",
    "GoHighLevel",
    "Make.com",
    "n8n",
    "Zapier",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,

  url: siteUrl,
  name: "Vega Morada",

  description:
    "Professional portfolio of Vega Morada, CRM specialist and business automation consultant.",

  inLanguage: "en-US",

  about: {
    "@id": `${siteUrl}/#vega-morada`,
  },

  publisher: {
    "@id": `${siteUrl}/#vega-morada`,
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#crm-automation-services`,

  name: "CRM & Business Automation Services",

  url: `${siteUrl}/#services`,

  description:
    "CRM implementation and optimization, business process automation, systems integration, workflow and operations consulting, reporting and analytics, and systems architecture services.",

  provider: {
    "@id": `${siteUrl}/#vega-morada`,
  },

  serviceType: [
    "CRM Implementation & Optimization",
    "Business Process Automation",
    "Systems Integration & APIs",
    "Workflow & Operations Consulting",
    "Reporting & Analytics",
    "Systems Architecture",
  ],
}

const structuredData = [
  personSchema,
  websiteSchema,
  serviceSchema,
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased relative">
        <BackgroundEffects />

        <div className="relative z-10">
          {children}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
