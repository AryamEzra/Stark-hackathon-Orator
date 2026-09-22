import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Spectral, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const spectral = Spectral({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-spectral', display: 'swap' })
const sourceCode = Source_Code_Pro({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-source-code', display: 'swap' })

export const metadata: Metadata = { title: 'Orator — Find your voice', description: 'A warm, calm voice-coaching practice for confident speaking.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffecd1', userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spectral.variable} ${sourceCode.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
