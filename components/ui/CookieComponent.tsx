'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CookieComponent = () => {
  const [show, setShow] = useState<boolean>(true)

  const handleHideCookieBanner = () => {
    setShow(false)
    setCookie('opened_cookie', Math.floor(Math.random() * Date.now()).toString(36))
  }

  useEffect(() => {
    if (getCookie('opened_cookie')) {
      setShow(false)
    }
  }, [])

  return (
    <>
      {show ? (
        <section className='fixed bottom-0 w-full bg-gray-500 z-50'>
          <div className='max-w-5xl px-4 py-8 mx-auto md:flex md:items-center md:gap-x-6'>
            <div className='flex items-start md:items-center gap-x-2'>
              <p className='text-white'>
                We use cookies to enhance your user experience. By continuing to visit this site you
                agree to{' '}
                <a
                  href='/cookie'
                  className='underline transition-colors duration-200 hover:text-black'
                >
                  our use of cookies
                </a>
                .
              </p>
            </div>
            <button
              onClick={handleHideCookieBanner}
              className='items-center justify-center hidden text-white transition-colors duration-300 rounded-full md:flex w-7 h-7 focus:outline-none'
            >
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: 24 }} />
            </button>
          </div>
        </section>
      ) : null}
    </>
  )
}

export default CookieComponent
