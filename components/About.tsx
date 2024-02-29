import React from 'react'

const About = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt=''
                src='https://static.wixstatic.com/media/11062b_eab1a0942f074249ade26c3a93cbd037~mv2.jpeg/v1/fill/w_1201,h_870,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Coffee%20on%20the%20Beach.jpeg'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='bg-theme-primary/25 relative flex items-center'>
            <span className='lg:bg-theme-primary/25 hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className='mt-4 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
