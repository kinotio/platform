'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { navigation } from '@/constants/header'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Kinotio</span>
            {/* <Logo /> */}
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-white'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Join us <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>

      <HeaderMenuMobileDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}

const HeaderMenuMobileDialog = ({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className='fixed inset-0 z-50' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white'>
        <div className='flex items-center justify-between'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Kinotio</span>
            {/* <Logo /> */}
          </a>
          <button
            type='button'
            className='-m-2.5 rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-white'>
            <div className='space-y-2 py-6'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-950'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='py-6'>
              <a
                href='#'
                className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-950'
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default Header
