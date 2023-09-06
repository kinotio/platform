import HeroSectionComponent from '@/components/pages/home/hero/section'
import CommitmentSectionCompenent from '@/components/pages/home/commitment/section'
import SubscribeFormComponent from '@/components/pages/home/subscribe/section'

const Page = () => {
  return (
    <main className='bg-blue-950'>
      <div className='kn-header-and-hero-container'>
        <HeroSectionComponent />
      </div>
      <CommitmentSectionCompenent />
      <SubscribeFormComponent />
    </main>
  )
}

export default Page
