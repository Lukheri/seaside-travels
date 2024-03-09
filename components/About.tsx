import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1615175225908-141ce7144435?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-theme-primary/25'>
            <span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-theme-primary/25'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>
                Started with Ariel, therapist, and her team seeing gaps in the
                resources and care locally for our children and families with
                unique abilities.
              </h2>

              <p className='mt-4 text-gray-600'>
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
        </div>
      </div>
    </section>
  )
}

export default About
