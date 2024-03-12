import React from 'react'
import Image from 'next/image'
import Logo from '@/public/icons/logo.png'

const Donate = () => {
  return (
    <>
      <section id='donate' className=''>
        <div className='mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
              Your donation is highly appreciated
            </h2>

            <p className='mt-4 text-theme-700 sm:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className='mt-8 sm:mt-12'>
            <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              <div className='flex flex-col rounded-lg bg-theme-200/15 px-4 py-8 text-center'>
                <dt className='order-last text-lg font-medium text-theme-600'>
                  Total Donations
                </dt>

                <dd className='text-4xl font-extrabold text-theme-700 md:text-5xl'>
                  $4.8m
                </dd>
              </div>

              <div className='flex flex-col rounded-lg bg-theme-200/15 px-4 py-8 text-center'>
                <dt className='order-last text-lg font-medium text-theme-600'>
                  Official Addons
                </dt>

                <dd className='text-4xl font-extrabold text-theme-700 md:text-5xl'>
                  24
                </dd>
              </div>

              <div className='flex flex-col rounded-lg bg-theme-200/15 px-4 py-8 text-center'>
                <dt className='order-last text-lg font-medium text-theme-600'>
                  Total Addons
                </dt>

                <dd className='text-4xl font-extrabold text-theme-700 md:text-5xl'>
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='mx-auto max-w-screen-2xl rounded-lg bg-theme-200/15 px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:py-12'>
              <Image src={Logo} alt='logo' className='mx-auto h-1/2 w-1/2' />
              <p className='max-w-xl text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum labore provident impedit esse recusandae facere
                libero harum sequi.
              </p>

              <div className='mt-8'>
                <a href='#' className='text-2xl font-bold text-theme-700'>
                  {' '}
                  0151 475 4450{' '}
                </a>

                <address className='mt-2 not-italic'>
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className='rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12'>
              <form action='#' className='space-y-4'>
                <div>
                  <label className='sr-only' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full rounded-lg border-theme-600 p-3 text-sm'
                    placeholder='Name'
                    type='text'
                    id='name'
                  />
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='sr-only' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='w-full rounded-lg border-theme-600 p-3 text-sm'
                      placeholder='Email address'
                      type='email'
                      id='email'
                    />
                  </div>

                  <div>
                    <label className='sr-only' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      className='w-full rounded-lg border-theme-600 p-3 text-sm'
                      placeholder='Phone Number'
                      type='tel'
                      id='phone'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                  <div>
                    <label
                      htmlFor='Option1'
                      className='block w-full cursor-pointer rounded-lg border border-theme-400 p-3 text-gray-600 hover:border-theme-700 has-[:checked]:border-theme-700 has-[:checked]:bg-theme-700 has-[:checked]:text-white'
                      tabIndex={0}
                    >
                      <input
                        className='sr-only'
                        id='Option1'
                        type='radio'
                        tabIndex={-1}
                        name='option'
                      />

                      <span className='text-sm'> $10 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor='Option2'
                      className='block w-full cursor-pointer rounded-lg border border-theme-400 p-3 text-gray-600 hover:border-theme-700 has-[:checked]:border-theme-700 has-[:checked]:bg-theme-700 has-[:checked]:text-white'
                      tabIndex={0}
                    >
                      <input
                        className='sr-only'
                        id='Option2'
                        type='radio'
                        tabIndex={-1}
                        name='option'
                      />

                      <span className='text-sm'> $50 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor='Option3'
                      className='block w-full cursor-pointer rounded-lg border border-theme-400 p-3 text-gray-600 hover:border-theme-700 has-[:checked]:border-theme-700 has-[:checked]:bg-theme-700 has-[:checked]:text-white'
                      tabIndex={0}
                    >
                      <input
                        className='sr-only'
                        id='Option3'
                        type='radio'
                        tabIndex={-1}
                        name='option'
                      />

                      <span className='text-sm'> $100 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className='sr-only' htmlFor='amount'>
                    Enter amount
                  </label>
                  <input
                    className='w-full rounded-lg border-theme-600 p-3 text-sm'
                    placeholder='Enter amount'
                    type='text'
                    id='amount'
                  />
                </div>

                <div>
                  <label className='sr-only' htmlFor='message'>
                    Message
                  </label>

                  <textarea
                    className='w-full rounded-lg border-theme-600 p-3 text-sm'
                    placeholder='Message'
                    rows={8}
                    id='message'
                  ></textarea>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='inline-block w-full rounded-lg bg-theme-700 px-5 py-3 font-medium text-white sm:w-auto'
                  >
                    Donate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
