'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const ProductCarousel = () => {
  return (
    <>
      <div className='flex h-[540px] justify-center overflow-visible'>
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
            <motion.a
              href='https://www.etsy.com/listing/1676002280/seaside-therapy-autism-support-baseball?click_key=36041793020f50f31a1c3d929987bfcce6b686ff%3A1676002280&click_sum=1a30fd35&ref=shop_home_active_16'
              target='_blank'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/hats.png'
              />
              <h4 className='cursor-pointer hover:underline'>Hats</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1675994996/be-happy-in-your-own-shell-seaside?click_key=6f9c96754b3bac721792b137bf755dca9e1522a1%3A1675994996&click_sum=e137d21b&ref=shop_home_active_18'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.05 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/hoodies.png'
              />
              <h4 className='cursor-pointer hover:underline'>Hoodies</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1691610861/weekender-bag-seaside-therapy-light?click_key=aaa69c89cd6a5e14299e89f37ca8f9ce2f96bd43%3A1691610861&click_sum=ef8b5f6f&ref=shop_home_active_5'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.1 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/bags.png'
              />
              <h4 className='cursor-pointer hover:underline'>Bags</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1677437744/unisex-crewneck-sweatshirt-seaside?click_key=79342a78ec97243db652d95e9dcdac1bbb573360%3A1677437744&click_sum=a8b896b7&ref=shop_home_active_3'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.15 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/long_sleeves.png'
              />
              <h4 className='cursor-pointer hover:underline'>Long Sleeves</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1677436544/two-tone-coffee-mugs-15oz-seaside?click_key=213202b84741aba9cc3d109be77757a687071b7a%3A1677436544&click_sum=89645063&ref=shop_home_active_11'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.2 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/mugs.png'
              />
              <h4 className='cursor-pointer hover:underline'>Mugs</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1690115003/be-happy-in-your-own-shell-seaside?click_key=52a6506de179142d45020d8b4cc8ed90eab2ad04%3A1690115003&click_sum=4dc04b4c&ref=shop_home_active_20'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.25 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/shirts.png'
              />
              <h4 className='cursor-pointer hover:underline'>Shirts</h4>
            </motion.a>
          </SwiperSlide>

          <SwiperSlide>
            <motion.a
              href='https://www.etsy.com/listing/1677436202/kiss-cut-vinyl-decals-seaside-travels?click_key=16bc154a164726c1b68403e538fe2f3fc7cef552%3A1677436202&click_sum=519876ab&ref=shop_home_active_13'
              className='flex h-full flex-col items-center justify-center gap-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              transition={{ delay: 0.3 }}
            >
              <img
                className='cursor-pointer drop-shadow-lg transition-transform ease-out hover:scale-110'
                src='/products/Carousel/stickers.png'
              />
              <h4 className='cursor-pointer hover:underline'>Stickers</h4>
            </motion.a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ProductCarousel
