const FooterLegalComponent = () => {
  return (
    <div>
      <h2 className='mb-6 text-md font-semibold text-white'>Legal</h2>
      <ul className='text-white font-medium'>
        <li className='text-sm mb-4'>
          <a href='#' className=' hover:underline'>
            Privacy Policy
          </a>
        </li>

        <li className='text-sm mb-4'>
          <a href='#' className=' hover:underline'>
            Licensing
          </a>
        </li>

        <li className='text-sm mb-4'>
          <a href='#' className=' hover:underline'>
            Terms & Conditions
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterLegalComponent
