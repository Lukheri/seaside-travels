'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Announcements from './Announcements'
import Logo from '@/assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
          <button
            onClick={() => scrollToSection('merch')}
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Merch</span>
          </button>

          <button
            onClick={() => scrollToSection('events')}
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Events</span>
          </button>

          <button
            onClick={() => scrollToSection('podcast')}
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Podcast</span>
          </button>

          <button
            onClick={() => scrollToSection('donate')}
            className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
          >
            <span className='mx-1 text-sm sm:text-base'>Donate</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
