import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BackgroundEffects } from '@/components/background-effects'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vega Morada - Technical Virtual Assistant | Zoho CRM Specialist | Automation Systems Builder',
  description: 'Technical Virtual Assistant and Zoho CRM Specialist. I help businesses implement CRM systems, build operational workflows, automate processes, and design scalable systems. Expert in Zoho ecosystem, business process automation, and systems integration.',
  keywords: ['Zoho CRM', 'business automation', 'CRM implementation', 'Zoho Inventory', 'workflow automation', 'systems integration', 'technical assistant', 'operations consulting'],
  generator: 'v0.app',
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
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
        <div className="relative z-10">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
