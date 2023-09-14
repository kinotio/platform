'use client'

import { getCookies } from 'cookies-next'

const useCookie = () => {
  const cookie = getCookies()
  return cookie
}

export default useCookie
