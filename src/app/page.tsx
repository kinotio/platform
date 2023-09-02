import HeaderSectionComponent from '@/components/header'
import HeroSectionComponent from '@/components/hero'
import CommitmentSectionCompenent from '@/components/pages/commitment/section'
import NewsLetterSectionComponent from '@/components/pages/newletter/section'
import FooterSectionCompenent from '@/components/pages/footer/section'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <HeaderSectionComponent />
        <HeroSectionComponent />
      </div>
      <CommitmentSectionCompenent />
      <NewsLetterSectionComponent />
      <FooterSectionCompenent />
    </main>
  )
}

export default Page
