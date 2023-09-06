'use client'

import { useState } from 'react'

const SubscribeFormComponent = () => {
  const [email, setEmail] = useState<string>('')

  const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
  const isValidEmail = emailRegex.test(email)

  const handleSaveSubscriber = () => {}

  return (
    <div className='flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2'>
      <input
        id='email'
        type='text'
        className='px-4 py-2 text-gray-700 bg-white border rounded-sm sm:mx-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        placeholder='Email Address'
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />

      <button
        onClick={handleSaveSubscriber}
        className='px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-sm sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
      >
        Get Started
      </button>
    </div>
  )
}

export default SubscribeFormComponent
