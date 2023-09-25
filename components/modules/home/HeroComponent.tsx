import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const HeroComponent = () => {
  return (
    <section className='px-6 pb-16 pt-16'>
      <div className='items-center lg:flex'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
              Welcome to a world of endless
              <span className='text-blue-400 font-garet-heavy pl-2'>possibilities</span>
            </h1>

            <p className='mt-3 text-gray-600 text-sm'>
              Collaborative digital space where software, applications, or projects are developed
              and shared openly.
            </p>

            <Link
              className='px-4 py-2 mt-6 text-sm font-semibold leading-6 text-white bg-black rounded-full flex justify-center items-center w-28'
              href='/join-us'
            >
              Join us
              <FontAwesomeIcon className='ml-2' icon={faChevronRight} style={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>

        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <Image src='/assets/images/to-the-moon.png' alt='Landing Moon' width='500' height='500' />
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
