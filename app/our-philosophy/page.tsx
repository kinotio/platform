import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandshakeAngle,
  faGraduationCap,
  faEarthEurope,
  faComments,
  faArrowTrendUp,
  faCertificate
} from '@fortawesome/free-solid-svg-icons'

const Page = () => {
  return (
    <main className='container mx-auto bg-white'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl'>
          Explore our {''}
          <span className='underline decoration-gray-500'>Philosophy</span>
        </h1>

        <p className='mt-4 text-gray-500 xl:mt-6 text-md'>
          At Kinotio, our philosophy is the driving force behind everything we do. It reflects our
          core values, beliefs, and the principles that guide our business. Our philosophy shapes
          our approach to serving our customers, developing our products, and engaging with our
          community.
        </p>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3'>
          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faHandshakeAngle} style={{ fontSize: 24 }} className='pr-2' />
              Knowledge Sharing
            </h1>
            <p className='text-black pb-2'>
              We believe in the power of knowledge sharing. Our community is committed to openly
              sharing insights, best practices, and technical expertise across various disciplines
              within software development and testing.
            </p>
          </div>

          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: 24 }} className='pr-2' />
              Learning Ecosystem
            </h1>
            <p className='text-black pb-2'>
              We foster a learning ecosystem where members can enhance their skills through
              tutorials, workshops, and mentorship programs, helping each other grow professionally
              and personally.
            </p>
          </div>

          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faEarthEurope} style={{ fontSize: 24 }} className='pr-2' />
              Diversity and Inclusion
            </h1>
            <p className='text-black pb-2'>
              We celebrate diversity as a source of strength and creativity. We foster an inclusive
              environment where every voice is heard and valued. Our commitment to diversity is
              reflected in our teams, our partnerships, and the way we serve our global community.
            </p>
          </div>

          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faComments} style={{ fontSize: 24 }} className='pr-2' />
              Inclusive Dialogue
            </h1>
            <p className='text-black pb-2'>
              Respectful and open dialogue is at the heart of our community. We encourage healthy
              discussions, constructive feedback, and the exchange of ideas to foster a vibrant
              community culture.
            </p>
          </div>

          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faArrowTrendUp} style={{ fontSize: 24 }} className='pr-2' />
              Collaborative Projects
            </h1>
            <p className='text-black pb-2'>
              From open source software development to collaborative bug bashes, we actively engage
              in projects that challenge us, spark creativity, and drive meaningful impact.
            </p>
          </div>

          <div className='space-y-3'>
            <h1 className='text-md font-semibold text-gray-500 capitalize'>
              <FontAwesomeIcon icon={faCertificate} style={{ fontSize: 24 }} className='pr-2' />
              Recognition and Rewards
            </h1>
            <p className='text-black pb-2'>
              We value the hard work of our members. Through badges, leaderboards, and project
              showcases, we recognize and celebrate individual and collective achievements.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
