'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'

import { validateEmail } from '@utils/common'
import ButtonLoaderIcon from '@components/icons/ButtonLoaderIcon'

const SubscribeForm = () => {
  const supabase = createClientComponentClient<SupabaseDatabase>()

  const [email, setEmail] = useState<string>('')
  const [isLoding, setIsLoading] = useState<boolean>(false)

  const handleSaveSubscriber = async () => {
    if (!validateEmail({ email })) return

    setIsLoading(true)

    const { error } = await supabase.from('subscribers').insert({ email })

    if (error) {
      toast('We encountered an error when saving you has subscribers', {
        type: 'error'
      })
      setIsLoading(false)
    }

    toast('Thanks for subscribing to our newsletter, happy to have you with us', {
      type: 'info'
    })
    setIsLoading(false)
  }

  return (
    <div className='sm:col-span-2'>
      <h1 className='max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl'>
        Subscribe our newsletter to get update.
      </h1>

      <div className='flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row'>
        <div className='flex flex-col lg:w-1/2'>
          <input
            id='email'
            type='text'
            className='px-4 py-2 text-gray-700 bg-white border rounded-full'
            placeholder='Email Address'
            onChange={(event) => setEmail(event.target.value)}
          />

          {email && !validateEmail({ email }) ? (
            <span className='pt-4 text-red-500 text-sm'>Please enter a valid email address</span>
          ) : null}
        </div>

        <button
          className='w-full h-11 px-6 py-2.5 text-sm font-medium tracking-wider text-white md:w-auto md:mx-4 bg-black rounded-full flex justify-center items-center'
          onClick={handleSaveSubscriber}
        >
          {isLoding ? <ButtonLoaderIcon /> : 'Subscribe'}
        </button>
      </div>
    </div>
  )
}

export default SubscribeForm
