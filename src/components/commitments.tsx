import { commitments } from '@/constants/commitments'

const Commitments = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-blue-600'>Community Commitment</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our community serves as a vibrant hub for developers, engineers, and enthusiasts.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {commitments.map((commitment) => (
              <div key={commitment.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                    <commitment.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  {commitment.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>{commitment.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Commitments
