import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { BackgroundEffects } from "@/components/background-effects"
import "./globals.css"

const siteUrl = "https://work-with-vega.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Vega Morada | CRM Specialist & Automation Consultant",
    template: "%s | Vega Morada",
  },

  description:
    "Vega Morada is a CRM specialist and business automation consultant helping businesses implement CRM systems, automate workflows, integrate applications, and improve operations.",

  keywords: [
    "Vega Morada",
    "CRM Specialist",
    "CRM Consultant",
    "CRM Implementation",
    "CRM Automation",
    "Business Automation Consultant",
    "Workflow Automation",
    "Zoho CRM Specialist",
    "Zoho CRM Consultant",
    "Zoho CRM Implementation",
    "HubSpot CRM",
    "Pipedrive CRM",
    "GoHighLevel CRM",
    "Zoho Flow",
    "Make.com Automation",
    "n8n Automation",
    "Zapier Automation",
    "API Integration",
    "Systems Integration",
    "Business Process Automation",
  ],

  authors: [
    {
      name: "Vega Morada",
      url: siteUrl,
    },
  ],

  creator: "Vega Morada",

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
      "CRM implementation, workflow automation, systems integration, and business process automation by Vega Morada.",
    siteName: "Vega Morada",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vega Morada | CRM Specialist & Automation Consultant",
    description:
      "CRM implementation, workflow automation, systems integration, and business process automation by Vega Morada.",
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

  jobTitle: "CRM Specialist & Business Automation Consultant",

  description:
    "CRM specialist and business automation consultant focused on CRM implementation, workflow automation, systems integration, and business process improvement.",

  knowsAbout: [
    "CRM Implementation",
    "CRM Optimization",
    "CRM Automation",
    "Business Process Automation",
    "Workflow Automation",
    "Systems Integration",
    "API Integration",
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

  publisher: {
    "@id": `${siteUrl}/#vega-morada`,
  },
}

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#services`,

  name: "Vega Morada CRM & Business Automation Services",

  url: siteUrl,

  description:
    "CRM implementation, CRM optimization, workflow automation, systems integration, API integration, and business process automation services.",

  founder: {
    "@id": `${siteUrl}/#vega-morada`,
  },

  knowsAbout: [
    "CRM Implementation",
    "CRM Automation",
    "Workflow Automation",
    "Business Process Automation",
    "Systems Integration",
    "API Integration",
    "Zoho CRM",
    "HubSpot",
    "Pipedrive",
    "GoHighLevel",
    "Make.com",
    "n8n",
    "Zapier",
    "Zoho Flow",
  ],
}

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
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema).replace(
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
