import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundEffects } from '@/components/background-effects'
import { PointerSpotlight } from '@/components/pointer-spotlight'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://work-with-vega.vercel.app'
const siteTitle =
  'Vega Morada — Technical Virtual Assistant, Zoho CRM Specialist & Automation Consultant'
const siteDescription =
  'Technical Virtual Assistant, Zoho CRM Specialist, and Make.com automation expert. I implement Zoho CRM, build business process automation and workflow automation, and design scalable business systems for growing companies.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Vega Morada',
  },
  description: siteDescription,
  keywords: [
    'Technical Virtual Assistant',
    'Zoho CRM Specialist',
    'Zoho Consultant',
    'Make.com Expert',
    'Automation Specialist',
    'CRM Consultant',
    'Workflow Automation',
    'Business Systems Consultant',
    'Business Process Automation',
    'CRM Implementation',
    'Zoho ecosystem',
    'n8n automation',
  ],
  authors: [{ name: 'Vega Morada' }],
  creator: 'Vega Morada',
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Vega Morada',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vega Morada',
  url: siteUrl,
  email: 'moradavega143@gmail.com',
  jobTitle: 'Technical Virtual Assistant & Zoho CRM Specialist',
  description: siteDescription,
  sameAs: [
    'https://linkedin.com/in/vegamorada',
    'https://www.upwork.com/freelancers/~01513b65b8672f7efa',
  ],
  knowsAbout: [
    'Zoho CRM',
    'Zoho Consulting',
    'Make.com',
    'n8n',
    'Workflow Automation',
    'Business Process Automation',
    'CRM Implementation',
    'Business Systems Consulting',
  ],
  makesOffer: [
    'Zoho CRM Implementation',
    'Business Process Automation',
    'AI Agent Systems',
    'Business Systems Consulting',
    'Technical Virtual Assistance',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#020617]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased relative">
        <BackgroundEffects />
        <PointerSpotlight />
        <div className="relative z-10">
          {children}
        </div>
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
