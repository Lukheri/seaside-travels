'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opcaityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ['0 1', '0.8 1'],
  })

  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: textRef,
    offset: ['0 1', '0.8 1'],
  })

  const imageXProgress = useTransform(imageScrollYProgress, [0, 1], [330, 0])

  const textXProgress = useTransform(textScrollYProgress, [0, 1], [-330, 0])
  return (
    <section id='about'>
      <div className='animate mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <motion.div
            ref={imageRef}
            style={{ x: imageXProgress }}
            className='relative z-10 hidden lg:block lg:py-16'
          >
            <div className='relative h-64 sm:h-96 lg:h-full'>
              <img
                alt=''
                src={'/users/ariel.jpg'}
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </motion.div>

          <motion.div
            ref={textRef}
            style={{ x: textXProgress }}
            className='relative hidden items-center bg-theme-primary/25 lg:flex'
          >
            <div
              className='absolute  bottom-0 left-0 right-0 top-0'
              style={{
                backgroundImage: `url(/icons/logo_no_text.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: '0.25',
              }}
            ></div>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-theme-primary/25'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                Started with Ariel, therapist, and her team seeing gaps in the
                resources and care locally for our children and families with
                unique abilities.
              </h2>

              <p className='mt-4 text-black'>
                Ariel and her family love to travel the world and is always
                pondering on her trips about how these adventures could be
                accessible for children and their families. the idea is that
                funding will be raised and mostly volunteer run by people
                educated on care for those with special needs (healthcare
                workers, teachers, community members wanting to learn etc) who
                will accompany these children on trips both locally and
                internationally in the future. families will be able to travel
                along, or enjoy date night or adults day out knowing their
                children are in safe hands. from there, it was also noted a
                growing need for community outreach and education. Support
                groups and outreach and programming are being developed for
                children with unique abilities, their caregivers, their
                siblings, grieving parents and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opcaityProgress,
            }}
            className='grid grid-cols-1 lg:hidden lg:grid-cols-2'
          >
            <div className='relative z-10 lg:hidden lg:py-16'>
              <div className='relative h-64 sm:h-96 lg:h-full'>
                <img
                  alt=''
                  src={'/users/ariel.jpg'}
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </div>
            </div>

            <div className='relative flex items-center bg-theme-primary/25 lg:hidden'>
              <div
                className='absolute  bottom-0 left-0 right-0 top-0'
                style={{
                  backgroundImage: `url(/icons/logo_no_text.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  opacity: '0.25',
                }}
              ></div>
              <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-theme-primary/25'></span>

              <div className='p-8 sm:p-16 lg:p-24'>
                <h2 className='text-2xl font-bold sm:text-3xl'>
                  Started with Ariel, therapist, and her team seeing gaps in the
                  resources and care locally for our children and families with
                  unique abilities.
                </h2>

                <p className='mt-4 text-black'>
                  Ariel and her family love to travel the world and is always
                  pondering on her trips about how these adventures could be
                  accessible for children and their families. the idea is that
                  funding will be raised and mostly volunteer run by people
                  educated on care for those with special needs (healthcare
                  workers, teachers, community members wanting to learn etc) who
                  will accompany these children on trips both locally and
                  internationally in the future. families will be able to travel
                  along, or enjoy date night or adults day out knowing their
                  children are in safe hands. from there, it was also noted a
                  growing need for community outreach and education. Support
                  groups and outreach and programming are being developed for
                  children with unique abilities, their caregivers, their
                  siblings, grieving parents and beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
