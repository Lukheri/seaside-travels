'use client'
import React from 'react'

const Contact = () => {
  return (
    <section className='' id='contact-us'>
      <div className='container mx-auto px-6 py-12'>
        <div className='lg:-mx-6 lg:flex lg:items-center'>
          <div className='lg:mx-6 lg:w-1/2'>
            <h1 className='font-duke-charming text-2xl font-semibold capitalize lg:text-3xl'>
              Contact us for <br /> more info
            </h1>

            <div className='mt-6 space-y-8 md:mt-8'>
              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>

                <span className='mx-2 w-72 text-gray-700 '>
                  5625 Strand Blvd Suite 512 Naples FL, 34110
                </span>
              </p>

              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>

                <span className='mx-2 w-72 truncate text-gray-700 '>
                  (239) 392-1070
                </span>
              </p>

              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>

                <span className='mx-2 w-72 truncate text-gray-700 '>
                  office@seasidetherapyFL.com
                </span>
              </p>
            </div>
          </div>

          <div className='mt-8 lg:mx-6 lg:w-1/2'>
            <div className='mx-auto w-full overflow-hidden rounded-lg bg-white px-4 py-6 shadow-2xl shadow-gray-300/50 lg:max-w-xl lg:px-8 lg:py-10 '>
              <h1 className='text-lg font-medium text-gray-700'>
                What do you want to ask
              </h1>

              <form className='mt-6'>
                <div className='flex-1'>
                  <label className='mb-2 block text-sm text-gray-600 '>
                    Full Name
                  </label>
                  <input
                    type='text'
                    placeholder='John Doe'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40 '
                  />
                </div>

                <div className='mt-6 flex-1'>
                  <label className='mb-2 block text-sm text-gray-600 '>
                    Email address
                  </label>
                  <input
                    type='email'
                    placeholder='johndoe@example.com'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40 '
                  />
                </div>

                <div className='mt-6 w-full'>
                  <label className='mb-2 block text-sm text-gray-600 '>
                    Message
                  </label>
                  <textarea
                    className='mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40 md:h-48 '
                    placeholder='Message'
                  ></textarea>
                </div>

                <button className='mt-6 w-full transform rounded-md bg-theme-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-theme-400 focus:outline-none focus:ring focus:ring-theme-300 focus:ring-opacity-50'>
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
