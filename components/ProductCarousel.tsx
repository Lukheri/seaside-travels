'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules'

const ProductCarousel = () => {
  return (
    <>
      <div className='flex h-[350px] justify-center px-4 py-2'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1248: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          loop={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='flex h-full items-center justify-center bg-white'>
              Slide 1
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ProductCarousel
