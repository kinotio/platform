'use client'

import { useState } from 'react'
import { PhoneInput } from 'react-international-phone'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

const JoinFormComponent = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [region, setRegion] = useState<string>('')
  const [postalCode, setPostalCode] = useState<string>('')

  const handleSubmitForm = (event: any) => {
    event.preventDefault()

    const form: FormData = new FormData()
    form.append('first_name', firstName)
    form.append('last_name', lastName)
    form.append('email', email)
    form.append('phone', phone)
    form.append('country', country)
    form.append('region', region)
  }

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 pb-6'>
          Please provide us more information about you
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
            <div className='w-full'>
              <label htmlFor='country' className='block mb-2 text-sm font-medium text-gray-900'>
                Country
              </label>
              <CountryDropdown
                id='country'
                name='country'
                value={country}
                onChange={(val) => setCountry(val)}
                classes='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='region' className='block mb-2 text-sm font-medium text-gray-900'>
                Region
              </label>
              <RegionDropdown
                id='region'
                name='region'
                disableWhenEmpty={true}
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                classes='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
              />
            </div>

            <div className='w-full'>
              <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900'>
                Phone
              </label>
              <PhoneInput
                defaultCountry='us'
                placeholder='Phone'
                value={phone}
                onChange={(val) => setPhone(val)}
              />
            </div>

            <div className='w-full'>
              <label htmlFor='postalCode' className='block mb-2 text-sm font-medium text-gray-900'>
                Postal Code
              </label>
              <input
                type='number'
                name='postalCode'
                id='postalCode'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                placeholder='Postal Code'
                onChange={(event) => setPostalCode(event.target.value)}
                value={postalCode}
              />
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 bg-black rounded-full'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinFormComponent
