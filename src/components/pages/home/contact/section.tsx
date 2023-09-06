import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const ContactSectionComponent = () => {
  return (
    <section className='bg-white'>
      <div className='container px-6 py-24 sm:py-32 mx-auto'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-blue-600'>Contact us</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className='p-3 text-blue-500 rounded-full bg-blue-100/80'>
              <EnvelopeIcon className='h-6 w-6' aria-hidden='true' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800'>Email</h2>
            <p className='mt-2 text-gray-500'>Our friendly team is here to help.</p>
            <p className='mt-2 text-blue-500'>hello@merakiui.com</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center'>
            <span className='p-3 text-blue-500 rounded-full bg-blue-100/80'>
              <MapPinIcon className='h-6 w-6' aria-hidden='true' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800'>Office</h2>
            <p className='mt-2 text-gray-500'>Come say hello at our office HQ.</p>
            <p className='mt-2 text-blue-500'>100 Smith Street Collingwood VIC 3066 AU</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center'>
            <span className='p-3 text-blue-500 rounded-full bg-blue-100/80'>
              <PhoneIcon className='h-6 w-6' aria-hidden='true' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800'>Phone</h2>
            <p className='mt-2 text-gray-500'>Mon-Fri from 8am to 5pm.</p>
            <p className='mt-2 text-blue-500'>+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSectionComponent
