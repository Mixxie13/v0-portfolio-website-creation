import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundEffects } from '@/components/background-effects'
import './globals.css'

const siteUrl = 'https://work-with-vega.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Vega Morada | Zoho CRM Specialist & Automation Consultant',
    template: '%s | Vega Morada',
  },

  description:
    'Vega Morada is a Zoho CRM specialist and business automation consultant helping businesses implement CRM systems, automate workflows, integrate applications, and improve operations.',

  keywords: [
    'Vega Morada',
    'Zoho CRM Specialist',
    'Zoho CRM Consultant',
    'Zoho CRM Implementation',
    'CRM Automation',
    'Business Automation Consultant',
    'Workflow Automation',
    'Zoho Flow',
    'Make.com Automation',
    'n8n Automation',
    'Zapier Automation',
    'API Integration',
    'Systems Integration',
  ],

  authors: [{ name: 'Vega Morada', url: siteUrl }],
  creator: 'Vega Morada',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Vega Morada | Zoho CRM Specialist & Automation Consultant',
    description:
      'Zoho CRM implementation, workflow automation, systems integration, and business process automation by Vega Morada.',
    siteName: 'Vega Morada',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vega Morada | Zoho CRM Specialist & Automation Consultant',
    description:
      'Zoho CRM implementation, workflow automation, systems integration, and business process automation.',
  },

  icons: {
    icon: {
      url: '/vega-abstract-icon.png',
      type: 'image/png',
    },
    apple: '/vega-abstract-apple-icon.png',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#vega-morada`,
  name: 'Vega Morada',
  url: siteUrl,
  jobTitle: 'Zoho CRM Specialist & Business Automation Consultant',
  description:
    'Zoho CRM specialist and business automation consultant focused on CRM implementation, workflow automation, systems integration, and business process improvement.',
  knowsAbout: [
    'Zoho CRM',
    'Zoho Flow',
    'CRM Implementation',
    'CRM Automation',
    'Business Process Automation',
    'Workflow Automation',
    'Make.com',
    'n8n',
    'Zapier',
    'API Integration',
    'Systems Integration',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Vega Morada',
  description:
    'Portfolio of Vega Morada, Zoho CRM specialist and business automation consultant.',
  publisher: {
    '@id': `${siteUrl}/#vega-morada`,
  },
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

        <div className="relative z-10">{children}</div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
