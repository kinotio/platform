import '@styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import HeaderComponent from '@/components/common/Header'
import FooterComponent from '@/components/common/Footer'

const inter = Poppins({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'Kinotio',
  description:
    'Kinotio is collaborative digital space where software, applications, or projects are developed and shared openly.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
