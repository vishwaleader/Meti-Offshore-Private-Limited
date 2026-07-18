import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Meti Offshore Private Limited | Global Maritime & Offshore Services',
  description:
    'Meti Offshore Private Limited — trusted offshore shipping, vessel management, and maritime business services since 2010. Delivering excellence across international waters.',
  generator: 'v0.app',
  openGraph: {
    title: 'Meti Offshore Private Limited',
    description:
      'Trusted offshore shipping and maritime services since 2010.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1e3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
