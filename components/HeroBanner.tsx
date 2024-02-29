/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const HeroBanner = () => {
  return (
    <div className='h-screen'>
      <div
        className='flex h-[90%] items-center justify-center'
        style={{
          backgroundImage:
            'url("https://static.wixstatic.com/media/11062b_566bc9122e1a4c1d86618be148c495d9~mv2.jpg/v1/fill/w_1291,h_854,fp_0.50_0.60,q_85,usm_0.66_1.00_0.01,enc_auto/Leaning%20On%20Palm%20Tree.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute top-[150px] text-black'>
          <p className='text-4xl uppercase sm:text-6xl md:text-7xl xl:text-8xl'>
            <span className='font-serif font-thin'>Seaside</span>{' '}
            <span className='font-mono'>Travels</span>
          </p>
        </div>
        <a
          className='active:text-myrtle group absolute bottom-[calc(10%+60px)] inline-flex items-center overflow-hidden border border-current bg-white px-10 py-5 text-black focus:outline-none focus:ring'
          href='#'
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
      <div className='flex h-[10%] items-center justify-center text-2xl tracking-wider'>
        Lorem ipsum dolor sit amet
      </div>
    </div>
  )
}

export default HeroBanner
