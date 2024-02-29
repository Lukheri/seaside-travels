import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 py-8 sm:py-12'>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='w-[65%]'>
          <img
            className='w-full'
            src='https://static.wixstatic.com/media/11062b_7814d7c85f614c3195c0bfb091ef04c6f000.jpg/v1/fill/w_827,h_433,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_7814d7c85f614c3195c0bfb091ef04c6f000.jpg'
          ></img>
        </div>
        <div className='flex-1 p-5 pr-20 text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  )
}

export default About
