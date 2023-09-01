import { community, help, legal } from '@/mocks/footer'
import { social } from '@/mocks/social'

const Footer = () => {
  return (
    <footer className='kn-bg-spaces py-32 px-12'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-3 lg:py-8 md:grid-cols-3'>
          <div>
            <h2 className='mb-6 text-md font-semibold text-white'>Community</h2>
            <ul className='text-white font-medium'>
              {community.map(({ name, link }: { name: string; link: string }) => (
                <li key={name} className='text-sm mb-4'>
                  <a href={link} className=' hover:underline'>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='mb-6 text-md font-semibold text-white'>Help center</h2>
            <ul className='text-white font-medium'>
              {help.map(({ name, link }: { name: string; link: string }) => (
                <li key={name} className='text-sm mb-4'>
                  <a href={link} className=' hover:underline'>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='mb-6 text-md font-semibold text-white'>Legal</h2>
            <ul className='text-white font-medium'>
              {legal.map(({ name, link }: { name: string; link: string }) => (
                <li key={name} className='text-sm mb-4'>
                  <a href={link} className=' hover:underline'>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='px-4 py-6 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-white sm:text-center'>
            © 2023 <a href='https://github.com/kinotio'>Kinotio</a>. All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center md:mt-0'>
            {social.map(({ name, icon: Icon, link }: { name: string; icon: any; link: string }) => (
              <a key={name} href={link} className='text-sm text-white'>
                <Icon />
                <span className='sr-only'>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
