import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import 'react-datepicker/dist/react-datepicker.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import HeaderComponent from '@components/common/HeaderComponent'
import FooterComponent from '@components/common/FooterComponent'

import CookieContainer from '@/containers/CookieContainer'

config.autoAddCss = false

const inter = Poppins({ subsets: ['latin'], weight: '500' })

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastContainer hideProgressBar={true} icon={false} position='top-center' theme='colored' />

        <HeaderComponent />
        {children}
        <FooterComponent />

        <CookieContainer />
      </body>
    </html>
  )
}

export default DefaultLayout
