import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'stoicfinch',
  description: 'Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
