import React from 'react'

const PodcastSection = () => {
  return (
    <section>
      <div className='mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className=' p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-xl text-center'>
            <h2 className='text-2xl font-bold md:text-3xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className='hidden sm:mt-4 sm:block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                className='text-theme-500 active:text-theme-500 group relative inline-block text-sm font-medium focus:outline-none focus:ring'
                href='#'
              >
                <span className='bg-theme-500 absolute inset-0 translate-x-0 translate-y-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

                <span className='relative block border border-current bg-white px-8 py-3'>
                  {' '}
                  Listen on Youtube{' '}
                </span>
              </a>
            </div>
            <div className='mt-4 md:mt-8'>
              <a
                className='text-theme-500 active:text-theme-500 group relative inline-block text-sm font-medium focus:outline-none focus:ring'
                href='#'
              >
                <span className='bg-theme-500 absolute inset-0 translate-x-0 translate-y-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

                <span className='relative block border border-current bg-white px-8 py-3'>
                  {' '}
                  Listen on Spotify{' '}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='grid gap-8 rounded-lg '>
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='sm:border-theme-500 hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-4 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                </div>
              </div>

              <div>
                <strong className='border-theme-500 bg-theme-500 rounded border px-3 py-1.5 text-[10px] font-medium text-white'>
                  Episode #101
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Some Interesting Podcast Title{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                  necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>48:32 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Barry
                    </a>
                    ,
                    <a href='#' className='underline hover:text-gray-700'>
                      Sandra
                    </a>{' '}
                    and
                    <a href='#' className='underline hover:text-gray-700'>
                      August
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='sm:border-theme-500 hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-4 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                </div>
              </div>

              <div>
                <strong className='border-theme-500 bg-theme-500 rounded border px-3 py-1.5 text-[10px] font-medium text-white'>
                  Episode #101
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Some Interesting Podcast Title{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                  necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>48:32 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Barry
                    </a>
                    ,
                    <a href='#' className='underline hover:text-gray-700'>
                      Sandra
                    </a>{' '}
                    and
                    <a href='#' className='underline hover:text-gray-700'>
                      August
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='sm:border-theme-500 hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-4 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-6 w-0.5 rounded-full'></span>
                  <span className='bg-theme-500 h-8 w-0.5 rounded-full'></span>
                </div>
              </div>

              <div>
                <strong className='border-theme-500 bg-theme-500 rounded border px-3 py-1.5 text-[10px] font-medium text-white'>
                  Episode #101
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Some Interesting Podcast Title{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                  necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>48:32 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Barry
                    </a>
                    ,
                    <a href='#' className='underline hover:text-gray-700'>
                      Sandra
                    </a>{' '}
                    and
                    <a href='#' className='underline hover:text-gray-700'>
                      August
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PodcastSection
