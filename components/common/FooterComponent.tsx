import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faSlack, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import SubscribeForm from '@components/shared/SubscribeFormComponent'

const links = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Our Philosophy', href: '#' }
]

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Developer', href: '#' },
  { name: 'Marketplace', href: '#' }
]

const FooterComponent = () => {
  return (
    <footer className='bg-white relative inset-x-0 bottom-0 z-50'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
          <SubscribeForm />

          <div>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className='my-6 border-gray-200 md:my-8 dark:border-gray-700' />

        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              className='h-8 w-auto pr-2'
              src='/assets/images/kinotio-logo-dark.png'
              alt='Kinotio Logo'
              width='50'
              height='50'
            />
          </Link>

          <div className='flex mx-2'>
            <Link href='#' className='mx-2 text-black' aria-label='GitHub'>
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />
            </Link>

            <Link href='#' className='mx-2 text-black' aria-label='Discord'>
              <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 20 }} />
            </Link>

            <Link href='#' className='mx-2 text-black' aria-label='Slack'>
              <FontAwesomeIcon icon={faSlack} style={{ fontSize: 20 }} />
            </Link>

            <Link href='#' className='mx-2 text-black' aria-label='LinkedIn'>
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 20 }} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
