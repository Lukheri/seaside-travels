import React from 'react'

const Donate = () => {
  return (
    <>
      <section className=''>
        <div className='mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
              Your donation is highly appreciated
            </h2>

            <p className='text-theme-400 mt-4 sm:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className='mt-8 sm:mt-12'>
            <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              <div className='bg-theme-200/15 flex flex-col rounded-lg px-4 py-8 text-center'>
                <dt className='text-theme-400 order-last text-lg font-medium'>
                  Total Donations
                </dt>

                <dd className='text-primary text-4xl font-extrabold md:text-5xl'>
                  $4.8m
                </dd>
              </div>

              <div className='bg-theme-200/15 flex flex-col rounded-lg px-4 py-8 text-center'>
                <dt className='text-theme-400 order-last text-lg font-medium'>
                  Official Addons
                </dt>

                <dd className='text-primary text-4xl font-extrabold md:text-5xl'>
                  24
                </dd>
              </div>

              <div className='bg-theme-200/15 flex flex-col rounded-lg px-4 py-8 text-center'>
                <dt className='text-theme-400 order-last text-lg font-medium'>
                  Total Addons
                </dt>

                <dd className='text-primary text-4xl font-extrabold md:text-5xl'>
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='bg-theme-200/15 mx-auto max-w-screen-2xl rounded-lg px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:py-12'>
              <p className='max-w-xl text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum labore provident impedit esse recusandae facere
                libero harum sequi.
              </p>

              <div className='mt-8'>
                <a href='#' className='text-primary text-2xl font-bold'>
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
                    className='border-theme-400 w-full rounded-lg p-3 text-sm'
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
                      className='border-theme-400 w-full rounded-lg p-3 text-sm'
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
                      className='border-theme-400 w-full rounded-lg p-3 text-sm'
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
                      className='hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary border-theme-400 block w-full cursor-pointer rounded-lg border p-3 text-gray-600 has-[:checked]:text-white'
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
                      className='hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary border-theme-400 block w-full cursor-pointer rounded-lg border p-3 text-gray-600 has-[:checked]:text-white'
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
                      className='hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary border-theme-400 block w-full cursor-pointer rounded-lg border p-3 text-gray-600 has-[:checked]:text-white'
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
                    className='border-theme-400 w-full rounded-lg p-3 text-sm'
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
                    className='border-theme-400 w-full rounded-lg p-3 text-sm'
                    placeholder='Message'
                    rows={8}
                    id='message'
                  ></textarea>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='bg-primary inline-block w-full rounded-lg px-5 py-3 font-medium text-white sm:w-auto'
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
