import Header from '@/components/header'
import Hero from '@/components/hero'
import Commitments from '@/components/commitments'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <Header />
        <div className='kn-hero-container'>
          <Hero />
        </div>
      </div>
      <div>
        <Commitments />
      </div>
    </main>
  )
}

export default Page
