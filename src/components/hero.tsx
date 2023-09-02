const HeroSectionComponent = () => {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-blue-900/100 hover:ring-blue-900/80'>
            Announcing our community goals.{' '}
            <a href='#' className='font-semibold text-blue-400'>
              <span className='absolute inset-0' aria-hidden='true' />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Kinotio</h1>
          <p className='mt-6 text-lg leading-8 text-white'>
            Kinotio is collaborative digital space where software, applications, or projects are
            developed and shared openly.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-sm bg-blue-500 px-20 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Join us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionComponent
