import React from 'react'

const Testimonials = () => {
  return (
    <section className=''>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        <p className='text-theme-500 text-xl font-medium '>Testimonials</p>

        <div>
          <h1 className='text-2xl font-semibold capitalize text-gray-800 lg:text-3xl'>
            What our Volunteers are saying
          </h1>

          <div className='mx-auto mt-6 flex'>
            <span className='bg-theme-500 inline-block h-1 w-40 rounded-full'></span>
            <span className='bg-theme-500 mx-1 inline-block h-1 w-3 rounded-full'></span>
            <span className='bg-theme-500 inline-block h-1 w-1 rounded-full'></span>
          </div>
        </div>

        <main className='relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12'>
          <div className='bg-theme-600 absolute -z-10 w-full rounded-2xl md:h-96'></div>

          <div className='bg-theme-600 w-full rounded-2xl p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12'>
            <img
              className='h-24 w-24 rounded-full object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 md:rounded-2xl lg:h-[36rem] lg:w-[26rem]'
              src='https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='client photo'
            />

            <div className='mt-2 md:mx-6'>
              <div>
                <p className='text-xl font-medium tracking-tight text-white'>
                  Ema Watson
                </p>
                <p className='text-theme-200 '>Marketing Manager at Stech</p>
              </div>

              <p className='mt-4 text-lg leading-relaxed text-white md:text-xl'>
                {' '}
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda”.
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className='container mx-auto px-6 py-10'>
        <section className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3'>
          <div className='rounded-lg border p-8'>
            <p className='leading-loose text-gray-500 '>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className='-mx-2 mt-8 flex items-center'>
              <img
                className='mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300'
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                alt=''
              />

              <div className='mx-2'>
                <h1 className='font-semibold text-gray-800'>Robert</h1>
                <span className='text-sm text-gray-500'>
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className='bg-theme-500 rounded-lg border border-transparent p-8'>
            <p className='leading-loose text-white'>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className='-mx-2 mt-8 flex items-center'>
              <img
                className='ring-theme-200 mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4'
                src='https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                alt=''
              />

              <div className='mx-2'>
                <h1 className='font-semibold text-white'>Jeny Doe</h1>
                <span className='text-theme-200 text-sm'>
                  CEO, Jeny Consultency
                </span>
              </div>
            </div>
          </div>

          <div className='rounded-lg border p-8'>
            <p className='text-gray-5 leading-loose'>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className='-mx-2 mt-8 flex items-center'>
              <img
                className='mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300'
                src='https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
              />

              <div className='mx-2'>
                <h1 className='font-semibold text-gray-800'>Ema Watson </h1>
                <span className='text-sm text-gray-500'>
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Testimonials