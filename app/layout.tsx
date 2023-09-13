import '@styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import 'react-datepicker/dist/react-datepicker.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer } from 'react-toastify'

config.autoAddCss = false

import HeaderComponent from '@components/common/HeaderComponent'
import FooterComponent from '@components/common/FooterComponent'

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
        <section>
          <ToastContainer
            hideProgressBar={true}
            icon={false}
            position='top-center'
            theme='colored'
          />
        </section>

        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}

export default RootLayout
