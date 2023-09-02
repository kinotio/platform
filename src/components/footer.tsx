import FooterSocialMediaComponent from '@/components/pages/footer/social'
import FooterLegalComponent from './pages/footer/legal'
import FooterHelpCenterComponent from './pages/footer/help'
import FooterCommunityComponent from './pages/footer/community'

const Footer = () => {
  return (
    <footer className='kn-bg-spaces py-32 px-12'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-3 lg:py-8 md:grid-cols-3'>
          <FooterCommunityComponent />
          <FooterHelpCenterComponent />
          <FooterLegalComponent />
        </div>

        <FooterSocialMediaComponent />
      </div>
    </footer>
  )
}

export default Footer
