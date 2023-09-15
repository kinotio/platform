'use client'

import { AnimatePresence } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import HeaderComponent from '@components/common/HeaderComponent'
import FooterComponent from '@components/common/FooterComponent'

const TransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence initial={false}>
      <HeaderComponent key={uuidv4()} />
      <main className='container mx-auto'>{children}</main>
      <FooterComponent key={uuidv4()} />
    </AnimatePresence>
  )
}

export default TransitionLayout
