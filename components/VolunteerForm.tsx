'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Logo from '@/public/icons/logo.png'
import Image from 'next/image'
import addData from '@/app/firebase/firestore/addData'

const VolunteerForm = () => {
  const [email, setEmail] = useState<string>('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value as string)
  }

  return (
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
              onChange={handleEmailChange}
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

        <div className='flex items-center justify-end'>
          <button
            type='submit'
            className='inline-block rounded-lg bg-theme-600 px-5 py-3 text-sm font-medium text-white'
          >
            Register now
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default VolunteerForm
