import Header from '@/components/header'
import Hero from '@/components/hero'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <Header />
        <section className='kn-hero-container'>
          <Hero />
        </section>
      </div>
    </main>
  )
}

export default Page
