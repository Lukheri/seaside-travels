/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
// import DukeCharmingFont from '@/assets/fonts/Duke Charming DEMO.otf'

const myFont = localFont({
  src: '../assets/fonts/Duke Charming DEMO.otf',
  weight: '300',
  display: 'swap',
})

const HeroBanner = () => {
  return (
    <>
      <div className='h-screen'>
        <div
          className='flex h-full items-center justify-center'
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1610813328474-8ea0c1abf782?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* -- Overlay with white background */}
          <div className='absolute left-0 top-0 h-full w-full bg-white opacity-30'></div>
          {/* -- Overlay with white background */}

          <div className='hero-banner-wave'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                opacity='.25'
                className='fill-theme-primary'
              ></path>
              <path
                d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
                opacity='.5'
                className='fill-theme-primary'
              ></path>
              <path
                d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
                className='fill-theme-primary'
              ></path>
            </svg>
          </div>
          <div className='absolute top-[160px] text-black sm:top-[180px]'>
            <img
              src='/icons/logo_text.png'
              className='mx-auto h-auto w-[320px] sm:w-[360px] md:w-[400px] lg:w-[480px]'
            />
            <p
              className={`mt-4 text-center font-sans text-lg italic text-theme-700 md:text-2xl`}
            >
              Diverse Abilities, Shared Horizons
            </p>
          </div>
          <a
            className='group absolute bottom-[calc(12%+60px)] inline-flex items-center overflow-hidden border border-theme-500 bg-theme-700 px-10 py-5 text-theme-accent'
            href='https://www.etsy.com/shop/seasidetherapy/?etsrc=sdt'
            target='_blank'
          >
            <span className='absolute -end-full transition-all group-hover:end-4'>
              <svg
                className='size-5 rtl:rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span className='text-xs font-medium transition-all group-hover:me-4 sm:text-sm'>
              {' '}
              Shop now{' '}
            </span>
          </a>
        </div>
      </div>
      <div className='hero-wave-spacer hero-wave-layer1 relative flex items-center justify-center'>
        <div className='absolute bottom-0 text-3xl tracking-wider'>
          About Us
        </div>
      </div>
    </>
  )
}

export default HeroBanner
