import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { features } from '@mocks/data'

const FeatureComponent = () => {
  return (
    <section className='px-6 pb-16 pt-16'>
      <div className='mx-auto'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h1 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
            Everything you need to know about our community
            <span className='text-blue-400 font-garet-heavy pl-2'>features</span>
          </h1>
        </div>
        <div className='mx-auto mt-16 w-full sm:mt-20 lg:mt-24'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-md font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400'>
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                {feature.features?.map((feat) => (
                  <>
                    <dd key={feat.name} className='mt-2 leading-7 my-4'>
                      <span className='font-bold text-sm'>{feat.name}:</span>{' '}
                      <span className='text-gray-600 text-sm'>{feat.value}</span>
                    </dd>
                  </>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FeatureComponent
