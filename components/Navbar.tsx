import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10'>
      <div className='bg-myrtle absolute top-0 flex h-[90px] w-full flex-col justify-end'>
        <div className='bg-warm-sand flex h-1/2 items-center justify-between px-4'>
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
