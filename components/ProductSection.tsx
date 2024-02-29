import React from 'react'

const ProductSection = () => {
  return (
    <>
      <section>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-center'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              New Collection
            </h2>

            <p className='mx-auto mt-4 max-w-md text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Casual Trainers
                  </h3>

                  <span className='bg-theme-600 mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href='#' className='group relative block'>
                <img
                  src='https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Winter Jumpers
                  </h3>

                  <span className='bg-theme-600 mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
              <a href='#' className='group relative block'>
                <img
                  src='https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Skinny Jeans Blue
                  </h3>

                  <span className='bg-theme-600 mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
            <div className='bg-theme-200 grid place-content-center rounded p-6 sm:p-8'>
              <div className='mx-auto max-w-md text-center lg:text-left'>
                <header>
                  <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                    Merch
                  </h2>

                  <p className='mt-4 text-gray-500'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href='#'
                  className='mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring'
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className='lg:col-span-2 lg:py-8'>
              <ul className='grid grid-cols-2 gap-4'>
                <li>
                  <a href='#' className='group block'>
                    <img
                      src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80'
                      alt=''
                      className='aspect-square w-full rounded object-cover'
                    />

                    <div className='mt-3'>
                      <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                        Simple Watch
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href='#' className='group block'>
                    <img
                      src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80'
                      alt=''
                      className='aspect-square w-full rounded object-cover'
                    />

                    <div className='mt-3'>
                      <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                        Simple Watch
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSection
