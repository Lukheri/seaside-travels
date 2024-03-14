import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seaside Travels',
  description:
    'Join us on our journey to create a future where every family is supported, and every child has the chance to explore, learn, and grow, contributing to a more inclusive and understanding world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={leagueSpartan.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
