const FooterHelpCenterComponent = () => {
  return (
    <div>
      <h2 className='mb-6 text-md font-semibold text-white'>Help center</h2>
      <ul className='text-white font-medium'>
        <li className='text-sm mb-4'>
          <a href='https://discord.gg/SDw3amGc' className=' hover:underline'>
            Discord Server
          </a>
        </li>

        <li className='text-sm mb-4'>
          <a href='https://linkedin.com/company/kinotio' className=' hover:underline'>
            LinkedIn
          </a>
        </li>

        <li className='text-sm mb-4'>
          <a href='#' className=' hover:underline'>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterHelpCenterComponent
