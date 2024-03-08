import React from 'react'
import Marquee from './Marquee'
import Image from 'next/image'

const ProductSection = () => {
  return (
    <>
      <section id='merch'>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
            <div className='grid place-content-center rounded bg-theme-200 p-6 sm:p-8'>
              <div className='mx-auto max-w-md text-center lg:text-left'>
                <header>
                  <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                    Featured
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
                    <div className='relative h-[350px] sm:h-[450px]'>
                      <Image
                        src='/products/Mug/turtle 1.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
                      />

                      <Image
                        src='/products/Mug/turtle.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                      />
                    </div>

                    <div className='mt-3'>
                      <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                        Mug
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href='#' className='group block overflow-hidden'>
                    <div className='relative h-[350px] sm:h-[450px]'>
                      <Image
                        src='/products/Long sleeves/turtle 1.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
                      />

                      <Image
                        src='/products/Long sleeves/waves of change ver 2.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                      />
                    </div>

                    <div className='relative pt-3'>
                      <h3 className='text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                        Long Sleeves
                      </h3>

                      <p className='mt-1.5 tracking-wide text-gray-900'>
                        $189.99
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
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
                  src='/products/Tote bag/turtle.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-theme-700'>
                    Tote bags
                  </h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href='#' className='group relative block'>
                <img
                  src='/products/Shirt/shirt turtle.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-theme-700'>Shirts</h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
              <a href='#' className='group relative block'>
                <img
                  src='/products/Hoodie/hoodie ver 3.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-border-white text-xl font-medium text-theme-700'>
                    Hoodies
                  </h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
              {/* <a href='#' className='group relative block'>
                <div className='relative h-[350px] sm:h-[450px]'>
                  <img
                    src='https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
                  />

                  <img
                    src='https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                  />
                </div>

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Skinny Jeans Blue
                  </h3>

                  <p className='mt-1.5 text-pretty text-xs text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos sequi dicta impedit aperiam ipsum!
                  </p>

                  <span className='mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a> */}
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ProductSection
