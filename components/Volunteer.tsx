'use client'
import React from 'react'
import Logo from '@/public/icons/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transiton: { duration: 1 },
  },
}

const Volunteer = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        id='events'
      >
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-40 w-full object-cover sm:h-56 md:h-full'
              />

              <img
                alt=''
                src='https://images.unsplash.com/photo-1600880291319-1a7499c191e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-40 w-full object-cover sm:h-56 md:h-full'
              />
            </div>
            <div className='relative bg-theme-600 p-8 md:p-12 lg:px-16 lg:py-24'>
              <div className='sticky top-4 mx-auto max-w-xl text-center'>
                <h2 className='text-2xl font-bold text-white md:text-3xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className='hidden text-white/90 sm:mt-4 sm:block'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className='mt-4 md:mt-8'>
                  <a
                    href='#'
                    className='inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-theme-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section
        id='events'
        className='relative flex flex-wrap overflow-hidden lg:h-screen lg:items-center lg:overflow-visible'
      >
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className='w-full px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:w-1/2 lg:px-8 lg:pb-24 lg:pt-16'
        >
          <div className='mx-auto max-w-lg text-center'>
            <Image src={Logo} alt='logo' className='mx-auto h-1/2 w-1/2' />
            <h1 className='font-duke-charming text-2xl font-bold sm:text-3xl'>
              Get started today!
            </h1>

            <p className='mt-4 text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action='#' className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter email'
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter password'
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div> */}

            <div className='flex items-center justify-between'>
              {/* <p className='text-sm text-gray-500'>
                No account?
                <a className='underline' href='#'>
                  Sign up
                </a>
              </p> */}
              <div></div>

              <button
                type='submit'
                className='inline-block rounded-lg bg-theme-600 px-5 py-3 text-sm font-medium text-white'
              >
                Register now
              </button>
            </div>
          </form>
        </motion.div>

        <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </div>
      </section>
    </>
  )
}

export default Volunteer
