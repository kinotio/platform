'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'

import { validateEmail } from '@utils/common'
import ButtonLoaderIcon from '@components/icons/ButtonLoaderIcon'

const Page = () => {
  const supabase = createClientComponentClient<SupabaseDatabase>()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmitForm = async (event: any) => {
    event.preventDefault()

    if (!validateEmail({ email })) {
      toast('Please use a valid email address', {
        type: 'error'
      })
      return
    }

    setIsLoading(true)

    const { error } = await supabase.from('messages').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      message
    })

    if (error) {
      toast('We encountered an error when sending your message, please retry', {
        type: 'error'
      })
      setIsLoading(false)
      return
    }

    toast('Thanks for sending us a message, happy to hear you', {
      type: 'info'
    })
    setIsLoading(false)
  }

  return (
    <main className='container mx-auto bg-white'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 pb-6'>
          You can contact us with sending us a message here
        </h2>
        <form onSubmit={handleSubmitForm}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='w-full'>
              <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-900'>
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                placeholder='First Name'
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
              />
            </div>
            <div className='w-full'>
              <label htmlFor='lastName' className='block mb-2 text-sm font-medium text-gray-900'>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                placeholder='Last Name'
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                placeholder='Email Address'
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                placeholder='Message'
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                rows={10}
              />
            </div>
          </div>

          <button
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 bg-black rounded-full'
          >
            {isLoading ? <ButtonLoaderIcon /> : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Page
