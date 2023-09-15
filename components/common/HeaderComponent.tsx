'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Developer', href: '#' }
]

const HeaderComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white relative inset-x-0 top-0'>
      <nav
        className='container flex items-center justify-between px-6 py-6 mx-auto'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='m-1.5 p-1.5 flex'>
            <span className='sr-only'>Kinotio</span>
            <Image
              className='h-8 w-auto pr-2'
              src='/assets/images/kinotio-logo-dark.png'
              alt='Kinotio Logo'
              width='50'
              height='50'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 32 }} />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end items-center'>
          <div className='flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0 lg:px-2'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900 lg:px-4'
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className='flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0 lg:px-2'>
            <Link
              href='/join-us'
              className='text-sm font-semibold leading-6 text-white bg-black py-2 px-4 rounded-full flex items-center'
            >
              Join us
              <FontAwesomeIcon className='ml-2' icon={faChevronRight} style={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='container flex items-center justify-between px-6 py-6 mx-auto'>
            <a href='/' className='m-1.5 p-1.5 flex'>
              <span className='sr-only'>Kinotio</span>
              <Image
                className='h-8 w-auto pr-2'
                src='/assets/images/kinotio-logo-dark.png'
                alt='Kinotio Logo'
                width='50'
                height='50'
              />
            </a>
            <button
              type='button'
              className='rounded-md text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: 32 }} />
            </button>
          </div>
          <div className='flow-root px-6 py-6'>
            <div className='my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='/join-us'
                  className='text-sm font-semibold leading-6 text-white bg-black py-2 px-4 rounded-full flex items-center justify-center'
                >
                  Join us
                  <FontAwesomeIcon
                    className='ml-2'
                    icon={faChevronRight}
                    style={{ fontSize: 16 }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default HeaderComponent
