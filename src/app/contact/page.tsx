import ContactForm from '@/components/contact/form'
import { social } from '@/mocks/social'

const Page = () => {
  return (
    <section className='min-h-screen bg-white lg:flex'>
      <div className='flex flex-col justify-center w-full p-8 bg-white lg:px-12 xl:px-32 lg:w-1/2'>
        <h1 className='text-2xl font-semibold text-blue-500 capitalize lg:text-3xl'>Contact us.</h1>
        <p className='mt-4 text-gray-800'>Ask us everything and we would love to hear from you</p>
        <div className='mt-6 md:mt-8'>
          <h3 className='font-medium text-gray-600 dark:text-gray-500 '>Follow us</h3>
          <div className='flex mt-4 -mx-1.5'>
            {social.map(({ name, icon: Icon, link }: { name: string; icon: any; link: string }) => (
              <a
                key={name}
                href={link}
                className='mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500'
              >
                <Icon />
                <span className='sr-only'>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='kn-bg-spaces flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Page
