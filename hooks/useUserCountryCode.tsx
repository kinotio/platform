'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { ipinfoEnvironment } from '@lib/ipinfo'

const useUserCountryCode = () => {
  const [countryCode, setCountryCode] = useState('')

  useEffect(() => {
    axios
      .get(`${ipinfoEnvironment.url}?token=${ipinfoEnvironment.token}`)
      .then(({ data }) => {
        const userCountryCode = data.country.toLowerCase()
        setCountryCode(userCountryCode)
      })
      .catch((err) => {
        console.error('Error fetching IP information:', err)
      })
  }, [])

  return countryCode
}

export default useUserCountryCode
