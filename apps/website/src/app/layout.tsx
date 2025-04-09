import React from 'react'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'aloshy.🅰🅸 - Secure Data Monetization Platform',
  description: 'Monetize your data securely with aloshy.🅰🅸. A blockchain-based protocol for secure data sharing and monetization, built for the future of AI.',
  openGraph: {
    title: 'aloshy.🅰🅸 - Secure Data Monetization Platform',
    description: 'Monetize your data securely with aloshy.🅰🅸. A blockchain-based protocol for secure data sharing and monetization, built for the future of AI.',
    url: 'https://aloshy.ai',
    siteName: 'aloshy.🅰🅸',
    images: [
      {
        url: 'https://aloshy.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'aloshy.🅰🅸 - Secure Data Monetization Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aloshy.🅰🅸 - Secure Data Monetization Platform',
    description: 'Monetize your data securely with aloshy.🅰🅸. A blockchain-based protocol for secure data sharing and monetization, built for the future of AI.',
    images: ['https://aloshy.ai/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={inter.className}>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </body>
    </html>
  )
} 