import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-dm-sans', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })

export const metadata: Metadata = {
  title: 'Muranova | Mobilieri e personalizuar në Prishtinë',
  description: 'Muranova krijon mobilje të personalizuara prej druri për shtëpi dhe hapësira pune në Kosovë.',
  generator: 'Muranova Woodworks',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#211d19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq" className={`bg-background ${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
