'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Announcements from './Announcements'
import Logo from '@/public/icons/logo_no_text.png'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrollingDown(scrollTop > lastScrollTop)
      setIsAtTop(scrollTop === 0)
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      // with debounce
      // clearTimeout(timeout)
      // timeout = setTimeout(() => {
      //   const scrollTop = window.scrollY || document.documentElement.scrollTop
      //   setIsScrollingDown(scrollTop > lastScrollTop)
      //   setIsAtTop(scrollTop === 0)
      //   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      //   console.log(scrollTop)
      // }, 200)
    }

    let lastScrollTop = 0
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div
        onClick={(e: any) => {
          e.preventDefault()
          setIsSidebarOpen(false)
        }}
        className={`${isSidebarOpen ? 'block' : 'hidden'} fixed top-0 z-[60] h-[100dvh] w-full bg-black opacity-50 transition-transform ease-in`}
      ></div>
      <div
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-[100%]'} fixed top-0 z-[61] h-[100dvh] w-[80%] bg-base-200 shadow-xl transition-transform ease-in`}
      >
        <ul className='menu z-50 min-h-full p-4 text-base-content'>
          <li>
            <Image
              src={Logo}
              alt='logo'
              width={150}
              height={150}
              className='mx-auto flex cursor-pointer'
            />
          </li>
          <li>
            <a href='#merch' onClick={() => setIsSidebarOpen(false)}>
              <span className='mx-1 text-sm sm:text-base'>Merch</span>
            </a>
          </li>

          <li>
            <a href='#events' onClick={() => setIsSidebarOpen(false)}>
              <span className='mx-1 text-sm sm:text-base'>Events</span>
            </a>
          </li>

          <li>
            <a href='#podcast' onClick={() => setIsSidebarOpen(false)}>
              <span className='mx-1 text-sm sm:text-base'>Podcast</span>
            </a>
          </li>

          <li>
            <a href='#donate' onClick={() => setIsSidebarOpen(false)}>
              <span className='mx-1 text-sm sm:text-base'>Donate</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`glass-navbar fixed top-0 z-50 flex w-full flex-col bg-primary ${isScrollingDown ? '-translate-y-[170px]' : isAtTop ? 'translate-y-0' : '-translate-y-[60px]'}`}
        style={{ transition: 'transform 0.3s ease' }}
      >
        <Announcements />
        <div
          onClick={() => setIsSidebarOpen(true)}
          className='btn btn-ghost absolute top-10 z-[51] sm:top-12'
        >
          <Menu />
        </div>

        <div className='relative flex h-[90px] items-center justify-between sm:h-[110px] md:px-4'>
          <a href='#'>
            <Image
              src={Logo}
              alt='logo'
              width={70}
              height={70}
              className='hidden cursor-pointer transition-transform ease-in hover:scale-110 lg:flex'
            />
          </a>

          <div className='absolute left-1/2 hidden -translate-x-1/2 sm:gap-0 md:gap-6 lg:flex lg:gap-6'>
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
            <a
              href='#contact-us'
              className='-px-1 cursor-base -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 border-transparent bg-transparent px-2 py-2 text-center text-gray-700 hover:border-gray-400 focus:outline-none sm:px-4'
            >
              <span className='mx-1 text-sm sm:text-base'>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
