'use client'
import React, { useEffect } from 'react'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Announcements = () => {
  return (
    <div className='flex h-[60px] items-center bg-primary px-4 py-2'>
      <div className='mx-auto flex w-full max-w-3xl items-center justify-center'>
        {/* <button
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
        </button> */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          // navigation={true}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <p className='text-center text-xs font-medium text-gray-900 lg:text-sm'>
              Love our merch?
              <a href='#merch' className='block underline sm:inline-block'>
                Check out whats new!
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-center text-xs font-medium text-gray-900 lg:text-sm'>
              Get ready for new events.{' '}
              <a href='#events' className='block underline sm:inline-block'>
                Learn more!
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-center text-xs font-medium text-gray-900 lg:text-sm'>
              Listen to our podcast!{' '}
              <a href='#podcast' className='block underline sm:inline-block'>
                Listen here!
              </a>
            </p>
          </SwiperSlide>
        </Swiper>

        {/* <button
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
        </button> */}
      </div>
    </div>
  )
}

export default Announcements
