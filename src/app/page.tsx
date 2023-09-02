import HeroSectionComponent from '@/components/pages/hero/section'
import CommitmentSectionCompenent from '@/components/pages/commitment/section'
import NewsLetterSectionComponent from '@/components/pages/newletter/section'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <HeroSectionComponent />
      </div>
      <CommitmentSectionCompenent />
      <NewsLetterSectionComponent />
    </main>
  )
}

export default Page
