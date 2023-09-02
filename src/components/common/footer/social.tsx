import DiscordIcon from '@/components/icons/discord'
import GitHubIcon from '@/components/icons/github'
import LinkedInIcon from '@/components/icons/linkedin'

const FooterSocialMediaComponent = () => {
  return (
    <div className='px-4 py-6 md:flex md:items-center md:justify-between'>
      <span className='text-sm text-white sm:text-center'>
        © 2023 <a href='https://github.com/kinotio'>Kinotio</a>. All Rights Reserved.
      </span>
      <div className='flex mt-4 space-x-5 sm:justify-center md:mt-0'>
        <a href='https://discord.gg/SDw3amGc' className='text-sm text-white'>
          <DiscordIcon />
          <span className='sr-only'>Discord</span>
        </a>

        <a href='https://github.com/kinotio' className='text-sm text-white'>
          <GitHubIcon />
          <span className='sr-only'>GitHub</span>
        </a>

        <a href='https://linkedin.com/company/kinotio' className='text-sm text-white'>
          <LinkedInIcon />
          <span className='sr-only'>LinkedIn</span>
        </a>
      </div>
    </div>
  )
}

export default FooterSocialMediaComponent
