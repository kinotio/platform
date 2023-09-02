import NewsLetterFormComponent from '@/components/pages/newletter/form'

const NewsLetterSectionComponent = () => {
  return (
    <section className='bg-blue-950'>
      <div className='max-w-3xl px-6 py-16 mx-auto text-center'>
        <h1 className='text-3xl font-semibold text-white'>Want to see Back in action?</h1>
        <p className='max-w-md mx-auto mt-5 text-white'>
          Join us today and embark on a journey of knowledge, inspiration, and connection.
        </p>

        <NewsLetterFormComponent />
      </div>
    </section>
  )
}

export default NewsLetterSectionComponent
