import DiscordIcon from '@/components/icons/discord'
import GitHubIcon from '@/components/icons/github'
import LinkedInIcon from '@/components/icons/linkedin'

interface CommonType {
  name: string
  link: string
}

export const community: Array<CommonType> = [
  {
    name: 'About Us',
    link: '#'
  },
  {
    name: 'Blog',
    link: '#'
  }
]

export const help: Array<CommonType> = [
  {
    name: 'Discord Server',
    link: '#'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/company/kinotio'
  },
  {
    name: 'Contact Us',
    link: '#'
  }
]

export const legal: Array<CommonType> = [
  {
    name: 'Privacy Policy',
    link: '#'
  },
  {
    name: 'Licensing',
    link: '#'
  },
  {
    name: 'Terms & Conditions',
    link: '#'
  }
]

export const social = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://linkedin.com/company/kinotio'
  },
  {
    name: 'Discord server',
    icon: DiscordIcon,
    link: '#'
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    link: 'https://github.com/kinotio'
  }
]
