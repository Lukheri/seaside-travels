import React, { useCallback, useEffect, useState } from 'react'
import Announcements from './Announcements'
import Logo from '@/public/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 flex w-full flex-col bg-primary'>
      <Announcements />
      <div className='glass relative flex h-[110px] items-center justify-between bg-accent px-4'>
        <Image
          src={Logo}
          alt='logo'
          width={90}
          height={90}
          className='cursor-pointer'
        />
        <div className='absolute left-1/2 flex -translate-x-1/2 gap-6'>
          {/* <button className='-px-1 -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-theme-500 bg-transparent px-2 py-2 text-center text-theme-600 focus:outline-none sm:px-4 '>
              <span className='mx-1 text-sm sm:text-base'>Merch</span>
            </button> */}
          <a
            href='#merch'
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Merch</span>
          </a>

          <a
            href='#events'
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Events</span>
          </a>

          <a
            href='#podcast'
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Podcast</span>
          </a>

          <a
            href='#donate'
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Donate</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
