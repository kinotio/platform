import Header from '@/components/header'
import Hero from '@/components/hero'
import Commitments from '@/components/commitments'
import Footer from '@/components/footer'
import NewsLetterSectionComponent from '@/components/pages/newletter/section'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <Header />
        <Hero />
      </div>
      <Commitments />
      <NewsLetterSectionComponent />
      <Footer />
    </main>
  )
}

export default Page
