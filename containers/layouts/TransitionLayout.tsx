'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import HeaderComponent from '@components/common/HeaderComponent'
import FooterComponent from '@components/common/FooterComponent'
import CookieComponent from '@components/common/CookieComponent'

const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <HeaderComponent key={uuidv4()} />
      <main className='container mx-auto'>{children}</main>
      <FooterComponent key={uuidv4()} />

      <motion.div
        initial={{ y: '120vh' }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeInOut', delay: 0.1 }}
        key={uuidv4()}
      >
        <CookieComponent />
      </motion.div>
    </AnimatePresence>
  )
}

export default TransitionLayout
