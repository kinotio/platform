'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline'

const NotFound = () => {
  const router = useRouter()

  const goBack = () => router.back()
  const goHome = () => router.push('/')

  return (
    <section className='bg-blue-950'>
      <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
        <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
          <Image
            className='w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover'
            src='/assets/not-found.png'
            alt='Not Found'
            width='500'
            height='500'
            priority={true}
          />
        </div>

        <div className='w-full lg:w-1/2 mt-4'>
          <p className='text-sm font-medium text-blue-500'>404</p>
          <h1 className='mt-3 text-2xl font-semibold text-white md:text-3xl'>Page not found</h1>
          <p className='mt-4 text-white'>
            Sorry, the page you are looking for doesnt exist.Here are some helpful links:
          </p>

          <div className='flex items-center mt-6 gap-x-3 justify-start'>
            <button
              onClick={goBack}
              className='flex items-center justify-center px-5 py-2 text-sm text-blue-500 transition-colors duration-200 bg-white hover:bg-blue-500 hover:text-white border-blue-500 border rounded-md gap-x-4'
            >
              <ArrowLeftIcon />
              <span>Go back</span>
            </button>

            <button
              onClick={goHome}
              className='flex items-center justify-center px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-700 hover:bg-blue-500 border rounded-md gap-x-4'
            >
              <HomeIcon />
              <span>Go Home</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
