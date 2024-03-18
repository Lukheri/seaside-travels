'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
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
      <div className='flex h-[400px] justify-center'>
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
          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/hats.png'
              />
              <h4>Hats</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/hoodies.png'
              />
              <h4>Hoodies</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/bags.png'
              />
              <h4>Bags</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/long_sleeves.png'
              />
              <h4>Long Sleeves</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/mugs.png'
              />
              <h4>Mugs</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/shirts.png'
              />
              <h4>Shirts</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full flex-col items-center justify-center gap-3'>
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/stickers.png'
              />
              <h4>Stickers</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ProductCarousel
