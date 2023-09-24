'use client'

import { useState } from 'react'
import moment from 'moment'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'

import { validateEmail, validatePostalCode } from '@/utils/validator'

import Input from '@components/ui/form/Input'
import Button from '@/components/ui/form/Button'
import DatePicker from '@components/ui/form/DatePicker'
import PhoneInput, { PhoneInputCountryType } from '@components/ui/form/PhoneInput'
import CountryRegionDropdown from '@components/ui/custom/CountryRegionDropdown'

const Page = () => {
  const supabase = createClientComponentClient<SupabaseDatabase>()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [phoneCountry, setPhoneCountry] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [region, setRegion] = useState<string>('')
  const [postalCode, setPostalCode] = useState<string>('')
  const [birthdate, setBirthdate] = useState<Date>(new Date())
  const [position, setPosition] = useState<string>('')

  const [github, setGithub] = useState<string>('')
  const [gitlab, setGitlab] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmitForm = async (event: any) => {
    event.preventDefault()

    if (!validateEmail({ email })) {
      toast('Please use a valid email address', {
        type: 'error'
      })
      return
    }

    if (!validatePostalCode({ postalCode, countryCode: country })) {
      toast('Please use a valid postal code', {
        type: 'error'
      })
      return
    }

    const birthdate_parsed = moment(birthdate).format('YYYYMMDD')

    setIsLoading(true)

    const { error } = await supabase.from('joiners').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      phone_country: phoneCountry,
      country,
      region,
      postal_code: postalCode,
      birthdate: birthdate_parsed,
      position,
      github_username: github,
      gitlab_username: gitlab
    })

    if (error) {
      toast('We encountered an error when saving you has joiners, please retry', {
        type: 'error'
      })
      setIsLoading(false)
      return
    }

    toast('Thanks for joining us, happy to have you with us', {
      type: 'info'
    })
    setIsLoading(false)
  }

  return (
    <main className='container mx-auto bg-white'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 pb-6'>
          Please provide us more information about you
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
            <DatePicker
              label='Birthdate'
              name='birthdate'
              value={birthdate}
              className='w-full'
              onChange={(val: Date) => setBirthdate(val)}
            />
            <Input
              label='position'
              name='position'
              value={position}
              className='w-full'
              placeholder='Ex: Software Engineer, Product Owner, ...'
              onChange={(event) => setPosition(event.target.value)}
            />
            <CountryRegionDropdown
              className='w-full'
              countryLabel='Country'
              countryName='country'
              countryValue={country}
              countryOnChange={(val) => setCountry(val)}
              regionLabel='Region'
              regionName='region'
              regionValue={region}
              regionOnChange={(val) => setRegion(val)}
            />
            <PhoneInput
              className='w-full'
              label='Phone'
              name='phone'
              value={phone}
              placeholder='Phone'
              onChange={(phone: string, country: PhoneInputCountryType) => {
                setPhone(phone)
                setPhoneCountry(country)
              }}
            />
            <Input
              label='Postal Code'
              name='postalCode'
              value={postalCode}
              className='w-full'
              placeholder='Postal Code'
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </div>

          <hr className='my-12 border-gray-700' />

          <h2 className='text-xl font-bold text-gray-900 pb-6'>Community links (optional)</h2>

          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <Input
              label='GitHub'
              name='github'
              value={github}
              className='w-full'
              placeholder='@your_username'
              onChange={(event) => setGithub(event.target.value)}
            />
            <Input
              label='GitLab'
              name='gitlab'
              value={gitlab}
              className='w-full'
              placeholder='@your_username'
              onChange={(event) => setGitlab(event.target.value)}
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
