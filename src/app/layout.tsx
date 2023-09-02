import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import HeaderSectionComponent from '@/components/header'
import FooterSectionCompenent from '@/components/pages/footer/section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kinotio',
  description:
    'Kinotio is collaborative digital space where software, applications, or projects are developed and shared openly.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <HeaderSectionComponent />
        {children}
        <FooterSectionCompenent />
      </body>
    </html>
  )
}

export default RootLayout
