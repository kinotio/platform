import Image from 'next/image'
import Link from 'next/link'

const BlogCardComponent = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          className='object-cover object-center w-full h-64 rounded-lg lg:h-80'
          src='https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
          width={1470}
          height={500}
        />
      </div>

      <h1 className='mt-6 text-xl font-semibold text-gray-800'>
        What do you want to know about UI
      </h1>

      <p className='text-sm text-black'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet
        dolores praesentium, alias nam? Tempore
      </p>

      <div className='flex items-center mt-6 mb-6'>
        <Image
          className='object-cover object-center w-10 h-10 rounded-full'
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
          width={1470}
          height={500}
        />

        <div className='mx-4'>
          <h1 className='text-sm text-black'>Amelia. Anderson</h1>
          <p className='text-sm text-black'>Lead Developer</p>
        </div>
      </div>

      <Link href='#' className='bg-black inline-block mt-4 text-white py-2 px-4 rounded-full'>
        Read more
      </Link>
    </div>
  )
}

const BlogComponent = () => {
  return (
    <section className='bg-white'>
      <div className='container px-6 py-10 mx-auto'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h1 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
            Check our latest
            <span className='text-blue-400 font-garet-heavy pl-2'>blog</span>
          </h1>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3'>
          {Array.from([1, 2, 3]).map((blog, idx) => (
            <BlogCardComponent key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogComponent
