import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faSlack, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
  return (
    <footer className='bg-white absolute inset-x-0 bottom-0 z-50'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
          <div className='sm:col-span-2'>
            <h1 className='max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl'>
              Subscribe our newsletter to get update.
            </h1>

            <div className='flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row'>
              <input
                id='email'
                type='text'
                className='px-4 py-2 text-gray-700 bg-white border rounded-md'
                placeholder='Email Address'
              />

              <button className='w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white md:w-auto md:mx-4 bg-black rounded-full'>
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              <a href='#' className='text-black transition-colors duration-300'>
                Home
              </a>
              <a href='#' className='text-black transition-colors duration-300'>
                Who We Are
              </a>
              <a href='#' className='text-black transition-colors duration-300'>
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              <a href='#' className='text-black transition-colors duration-300'>
                Product
              </a>
              <a href='#' className='text-black transition-colors duration-300'>
                Developer
              </a>
              <a href='#' className='text-black transition-colors duration-300'>
                Marketplace
              </a>
            </div>
          </div>
        </div>

        <hr className='my-6 border-gray-200 md:my-8 dark:border-gray-700' />

        <div className='flex items-center justify-between'>
          <a href='#'>
            <Image
              className='h-8 w-auto pr-2'
              src='/assets/images/kinotio-logo-dark.png'
              alt='Kinotio Logo'
              width='50'
              height='50'
            />
          </a>

          <div className='flex mx-2'>
            <a href='#' className='mx-2 text-black' aria-label='GitHub'>
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />
            </a>

            <a href='#' className='mx-2 text-black' aria-label='Discord'>
              <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 20 }} />
            </a>

            <a href='#' className='mx-2 text-black' aria-label='Slack'>
              <FontAwesomeIcon icon={faSlack} style={{ fontSize: 20 }} />
            </a>

            <a href='#' className='mx-2 text-black' aria-label='LinkedIn'>
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
