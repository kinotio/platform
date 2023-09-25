import Image from 'next/image'

import { companies } from '@mocks/data'

const CompanyComponent = () => {
  return (
    <section className='pb-8'>
      <div className='mx-auto'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h1 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
            Trusted and supported by innovative
            <span className='text-blue-400 font-garet-heavy pl-2'>teams</span>
          </h1>
        </div>
        <div className='mx-auto mt-16 max-w-lg grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {companies.map((company) => (
            <Image
              key={company.name}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src={company.logoUrl}
              alt={company.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyComponent
