'use client'
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Announcements = ({ isAtTop }: { isAtTop: boolean }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay, Navigation, Pagination],
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 5000,
      },
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.swiper-prev-button',
        nextEl: '.swiper-next-button',
      },
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <div
      className={`flex h-[50px] items-center bg-primary px-4 py-2 ${isAtTop ? 'translate-y-[0]' : '-translate-y-[50px]'}`}
      style={{ transition: 'transform 0.3s ease' }}
    >
      <div className='mx-auto flex w-full max-w-3xl items-center justify-center'>
        <button
          className='swiper-prev-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition'
          aria-label='Previous slide'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-5 rtl:rotate-180'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <p className='text-center text-sm font-medium text-gray-900'>
                Love our merch?{' '}
                <a href='#merch' className='block underline sm:inline-block'>
                  Check out whats new!
                </a>
              </p>
            </div>

            <div className='swiper-slide'>
              <p className='text-center text-sm font-medium text-gray-900'>
                Get ready for new events.{' '}
                <a href='#events' className='block underline sm:inline-block'>
                  Learn more!
                </a>
              </p>
            </div>

            <div className='swiper-slide'>
              <p className='text-center text-sm font-medium text-gray-900'>
                Listen to our podcast!{' '}
                <a href='#podcast' className='block underline sm:inline-block'>
                  Listen here!
                </a>
              </p>
            </div>
          </div>
        </div>

        <button
          className='swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition'
          aria-label='Next slide'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-5 rtl:rotate-180'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Announcements
