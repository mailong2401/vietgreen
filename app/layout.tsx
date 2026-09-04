import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/common/Header'
import Chatbot from '@/components/ui/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VietGreen',
  description: 'Vietnam Green Production & Consumption Intelligence Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Chatbot />
        </Providers>
      </body>
    </html>
  )
}
