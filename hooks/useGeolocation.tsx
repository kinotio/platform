'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { ipinfo } from '@lib/ipinfo'

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState(null)

  useEffect(() => {
    axios
      .get(ipinfo)
      .then(({ data }) => {
        setGeolocation(data)
      })
      .catch((err) => {
        console.error('An error occured when fetching IP geolocation:', err)
      })
  }, [])

  return geolocation
}

export default useGeolocation
