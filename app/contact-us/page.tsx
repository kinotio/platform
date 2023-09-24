'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'

import { validateEmail } from '@/utils/validator'

import Input from '@components/ui/form/Input'
import Button from '@/components/ui/form/Button'
import TextArea from '@/components/ui/form/TextArea'

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
            <Input
              label='First Name'
              name='firstName'
              value={firstName}
              className='w-full'
              placeholder='First Name'
              onChange={(event) => setFirstName(event.target.value)}
            />
            <Input
              label='Last Name'
              name='lastName'
              value={lastName}
              className='w-full'
              placeholder='Last Name'
              onChange={(event) => setLastName(event.target.value)}
            />
            <Input
              label='Email'
              name='email'
              value={email}
              className='sm:col-span-2'
              placeholder='Email Address'
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextArea
              label='Message'
              name='message'
              placeholder='Message'
              className='sm:col-span-2'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <Button
            label='Submit'
            type='submit'
            className='bg-black text-white'
            loading={isLoading}
          />
        </form>
      </div>
    </main>
  )
}

export default Page
