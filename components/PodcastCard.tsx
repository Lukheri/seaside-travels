'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PodcastCard = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opcaityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opcaityProgress,
      }}
      className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'
    >
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-8'>
        {/* <div className='h-auto w-full sm:h-[450px] sm:w-[450px]'> */}
        <img
          src='/podcast thumbnails/ep1_thumbnail.jpg'
          alt='thumbnail'
          className='h-auto w-full cursor-pointer rounded-lg sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]'
        />
        {/* </div> */}

        <div>
          <strong className='rounded border border-theme-500 bg-theme-500 px-3 py-1.5 text-[10px] font-medium text-white'>
            Pilot Episode
          </strong>

          <h3 className='mt-4 text-lg font-medium sm:text-xl'>
            <a
              href='https://www.youtube.com/watch?v=tnksmG_KnjM&t=1s'
              target='_blank'
              className='hover:underline'
            >
              {' '}
              Waves of Wisdom: Pilot{' '}
            </a>
          </h3>

          <p className='mt-1 text-sm text-gray-700'>
            Welcome to the inaugural episode of Waves of Wisdom, the podcast
            brought to you by Seaside Therapy, where we ride the currents of
            knowledge and empathy to explore the vast ocean of neurodiversity.
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

              <p className='text-xs font-medium'>18:53 minutes</p>
            </div>

            <span className='hidden sm:block' aria-hidden='true'>
              &middot;
            </span>

            <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
              Featuring{' '}
              <a href='#' className='underline hover:text-gray-700'>
                Ariel Price
              </a>
              , and{' '}
              <a href='#' className='underline hover:text-gray-700'>
                Danielle Van Curen
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default PodcastCard
