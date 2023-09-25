import BlogComponent from '@components/modules/home/BlogComponent'
import CompanyComponent from '@components/modules/home/CompanyComponent'
import FeatureComponent from '@components/modules/home/FeatureComponent'
import HeroComponent from '@components/modules/home/HeroComponent'

const Page = () => {
  return (
    <main className='container mx-auto'>
      <HeroComponent />
      {/* <CompanyComponent /> */}
      <FeatureComponent />
      {/* <BlogComponent /> */}
    </main>
  )
}

export default Page
