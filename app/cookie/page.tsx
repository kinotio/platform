import Link from 'next/link'

const Page = () => {
  return (
    <main className='container mx-auto'>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-xl font-bold text-gray-900 pb-1'>Our Cookie Policy</h2>

          <span className='px-3 py-1 mb-4 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'>
            Sep 13, 2023
          </span>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <p className='mt-2 text-black'>
                This website uses cookies to improve user experience. By using our website, you
                consent to all cookies in accordance with our Cookie Policy.
              </p>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>
                What Are Cookies?
              </span>
              <p className='mt-2 text-black'>
                Cookies are small text files that are placed on your computer or mobile device when
                you visit a website. They are widely used to make websites work more efficiently and
                to provide information to website owners.
              </p>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>
                How We Use Cookies
              </span>
              <p className='mt-2 text-black pb-6'>
                We use cookies for a variety of purposes, including:
              </p>

              <ul>
                <li>▶︎ To provide a better user experience.</li>
                <li>▶︎ To understand how visitors use our website.</li>
                <li>▶︎ To personalize content</li>
              </ul>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>
                Types of Cookies We Use
              </span>
              <p className='mt-2 text-black'>
                We use both session and persistent cookies on our website. Session cookies are
                temporary and are deleted from your device when you close your web browser.
                Persistent cookies remain on your device for a specified period or until you delete
                them manually.
              </p>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>
                Managing Cookies
              </span>
              <p className='mt-2 text-black'>
                You can control and/or delete cookies as you wish. You can delete all cookies that
                are already on your computer, and you can set your browser to prevent them from
                being placed. If you do this, however, you may have to manually adjust some
                preferences every time you visit our website, and some features may not work
                correctly.
              </p>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>
                Changes to Our Cookie Policy
              </span>
              <p className='mt-2 text-black'>
                We may update our Cookie Policy from time to time to reflect changes in technology,
                legislation, or our data practices. When we make changes to this policy, we will
                revise the last updated date at the top of this page.
              </p>
            </div>
          </div>

          <div className='max-w-2xl px-8 py-4  rounded-lg shadow-md bg-gray-100 mt-8'>
            <div className='mt-2'>
              <span className='text-xl font-bold text-gray-500 hover:underline'>Contact Us</span>
              <p className='mt-2 text-black'>
                If you have any questions about our Cookie Policy, please contact us{' '}
                <Link href='#' className='text-blue-500'>
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
