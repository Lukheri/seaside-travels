'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/icons/logo.png'
import { motion } from 'framer-motion'

const Banner = () => {
  const title1 = 'Diverse Abilities,'.split(' ')
  const title2 = 'Shared Horizons'.split(' ')
  const body =
    'Join us on our journey to create a future where every family is supported, and every child has the chance to explore, learn, and grow, contributing to a more inclusive and understanding world.'.split(
      ' ',
    )

  return (
    <div className='relative my-11 w-full py-8'>
      <div
        className='absolute inset-0 bg-white opacity-45'
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(7px)',
        }}
      ></div>
      <div className='relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center sm:flex-row'>
        <Image
          src={Logo}
          alt='logo'
          className='h-/2 mx-auto w-1/2 sm:h-1/3 sm:w-1/3'
        />

        <div className='sm:mr-8'>
          <h2 className='font-duke-charming text-xl font-bold text-theme-700 md:text-3xl'>
            {title1.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.25,
                  delay: i / 20,
                }}
                key={el + i}
              >
                {el}{' '}
              </motion.span>
            ))}
            <br />{' '}
            {title2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.25,
                  delay: i / 20,
                }}
                key={el + i}
              >
                {el}{' '}
              </motion.span>
            ))}
          </h2>

          <p className='px-4 text-xs text-theme-700 sm:mt-4 sm:block md:text-base'>
            {body.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.25,
                  delay: i / 20,
                }}
                key={el + i}
              >
                {el}{' '}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
