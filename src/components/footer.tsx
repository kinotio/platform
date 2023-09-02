import FooterSocialMediaComponent from '@/components/footer/social'
import FooterLegalComponent from './footer/legal'
import FooterHelpCenterComponent from './footer/help'
import FooterCommunityComponent from './footer/community'

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
