'use client'
import React from 'react'
import Announcements from './Announcements'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      {/* <div className='bg-myrtle absolute top-0 flex h-[90px] w-full flex-col justify-end'>
        <div className='bg-warm-sand flex h-1/2 items-center justify-between px-4'> */}
      <div className='bg-primary absolute top-0 flex h-[90px] w-full flex-col justify-end'>
        <Announcements />
        <div className='bg-accent flex h-1/2 items-center justify-between px-4'>
          <div className='flex gap-4'>
            <a>Home</a>
            <a>Shop</a>
            <a>Donate</a>
            <a>Podcast</a>
          </div>
          <div>{/* to be added */}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
