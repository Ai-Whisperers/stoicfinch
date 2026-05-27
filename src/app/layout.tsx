import type { Metadata } from 'next'
import './globals.css'
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

export const metadata: Metadata = {
  title: 'stoicfinch',
  description: 'Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}
