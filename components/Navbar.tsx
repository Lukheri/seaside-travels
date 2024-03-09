import React, { useCallback, useEffect, useState } from 'react'
import Announcements from './Announcements'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 flex w-full flex-col bg-primary'>
      <Announcements />
      <div className='glass relative flex h-[90px] items-center justify-between bg-accent px-4 sm:h-[110px]'>
        <div className='drawer block sm:hidden'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <label htmlFor='my-drawer' className='btn drawer-button'>
              <Menu />
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
              <li>
                <Image
                  src={Logo}
                  alt='logo'
                  width={150}
                  height={150}
                  className='mx-auto flex cursor-pointer sm:hidden'
                />
              </li>
              <li>
                <a href='#merch'>
                  <span className='mx-1 text-sm sm:text-base'>Merch</span>
                </a>
              </li>

              <li>
                <a href='#events'>
                  <span className='mx-1 text-sm sm:text-base'>Events</span>
                </a>
              </li>

              <li>
                <a href='#podcast'>
                  <span className='mx-1 text-sm sm:text-base'>Podcast</span>
                </a>
              </li>

              <li>
                <a href='#donate'>
                  <span className='mx-1 text-sm sm:text-base'>Donate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={Logo}
          alt='logo'
          width={90}
          height={90}
          className='hidden cursor-pointer sm:flex'
        />
        <div className='absolute left-1/2 hidden -translate-x-1/2 sm:flex sm:gap-0 md:gap-6'>
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
