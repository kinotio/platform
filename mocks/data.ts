import { faComments, faCalendar, faRocket, faBook } from '@fortawesome/free-solid-svg-icons'

export const links = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about-us' },
  { name: 'Contact us', href: '/contact-us' },
  { name: 'Our Philosophy', href: '/our-philosophy' },
  { name: 'Cookie Policy', href: '/cookie-policy' }
]

export const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Developer', href: '#' },
  { name: 'Join us', href: '/join-us' }
]

export const features = [
  {
    name: 'Collaboration and Communication',
    features: [
      {
        name: 'Discussion Forums',
        value:
          'Provide a platform for community members to ask questions, share ideas, and discuss technical topics.'
      },
      {
        name: 'Chat Channels',
        value:
          'Offer real-time communication through chat rooms or channels for quick discussions and troubleshooting.'
      },
      {
        name: 'Direct Messaging',
        value: 'Enable private communication between members for personalized help and networking.'
      }
    ],
    icon: faComments
  },
  {
    name: 'Events and Meetups',
    features: [
      {
        name: 'Event Calendar',
        value: 'List upcoming events, such as meetups, webinars, conferences, and hackathons.'
      },
      {
        name: 'RSVP and Registration',
        value: 'Allow members to register for events and receive reminders.'
      },
      {
        name: 'Virtual Meetings',
        value: 'Integrate video conferencing tools for virtual meetups and collaborative sessions.'
      }
    ],
    icon: faCalendar
  },
  {
    name: 'Mentorship and Onboarding',
    features: [
      {
        name: 'Mentorship Programs',
        value: 'Create opportunities for experienced members to mentor newcomers.'
      },
      {
        name: 'Onboarding Guides',
        value:
          'Develop guides to help new contributors understand the projects structure and processes.'
      }
    ],
    icon: faRocket
  },

  {
    name: 'Learning Resources',
    features: [
      {
        name: 'Learning Paths',
        value: 'Create structured learning paths for different skill levels and technologies.'
      },
      {
        name: 'Onboarding Guides',
        value:
          'Develop guides to help new contributors understand the projects structure and processes.'
      }
    ],
    icon: faBook
  }
]
