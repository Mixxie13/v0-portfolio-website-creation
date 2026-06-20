'use client'

import { useState } from 'react'
import { Code2, Webhook, Braces, Building2, Phone, type LucideIcon } from 'lucide-react'

/**
 * Simple Icons slugs for tools that have a recognizable brand mark.
 * Icons render monochrome (light) for clean visibility on the dark theme.
 * Unknown / non-brand tools fall back to a lucide glyph or a monogram chip.
 */
const SLUGS: Record<string, string> = {
  'Zoho CRM': 'zoho',
  'Zoho Inventory': 'zoho',
  'Zoho Desk': 'zoho',
  'Zoho Creator': 'zoho',
  'Zoho Flow': 'zoho',
  'Zoho Projects': 'zoho',
  'Zoho One/Ecosystem': 'zoho',
  Zoho: 'zoho',
  HubSpot: 'hubspot',
  Salesforce: 'salesforce',
  'Salesforce (Foundational Knowledge)': 'salesforce',
  'Make.com': 'make',
  Make: 'make',
  n8n: 'n8n',
  WooCommerce: 'woocommerce',
  Stripe: 'stripe',
  Freshdesk: 'freshdesk',
  'Google Workspace': 'google',
  'Microsoft 365': 'microsoft365',
  'Microsoft Office': 'microsoft365',
  Teams: 'microsoftteams',
  Slack: 'slack',
  Notion: 'notion',
  HighLevel: 'gohighlevel',
  WhatsApp: 'whatsapp',
}

const LUCIDE: Record<string, LucideIcon> = {
  APIs: Code2,
  Webhooks: Webhook,
  Deluge: Braces,
  Simpro: Building2,
  Viirtue: Phone,
  GoVoIP: Phone,
}

interface BrandIconProps {
  name: string
  size?: number
  className?: string
}

export function BrandIcon({ name, size = 18, className = '' }: BrandIconProps) {
  const slug = SLUGS[name]
  const [failed, setFailed] = useState(false)

  if (slug && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${slug}/E2E8F0`}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setFailed(true)}
        className={className}
        style={{ width: size, height: size }}
      />
    )
  }

  const Lucide = LUCIDE[name]
  if (Lucide) {
    return <Lucide width={size} height={size} className={`text-slate-300 ${className}`} />
  }

  // Monogram fallback
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <span
      className={`inline-flex items-center justify-center rounded font-bold text-[9px] text-slate-300 bg-white/10 ${className}`}
      style={{ width: size, height: size }}
      aria-label={name}
    >
      {initials}
    </span>
  )
}
