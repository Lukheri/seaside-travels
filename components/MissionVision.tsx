import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
const MissionVision = () => {
  return (
    <>
      <section>
        <div className='mx-auto mt-8 flex max-w-screen-xl flex-col gap-8 lg:mt-16 lg:gap-16'>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
            <div className='w-full p-8 sm:p-16 lg:w-1/2 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>Mission</h2>

              <p className='mt-4 text-gray-500'>
                Seaside Travels is a non-profit organization committed to
                uniting families with unique abilities by offering vital
                resources and educational support on medical topics. Our mission
                is to build a strong community that connects parents and
                children, fostering resilience and understanding. Through
                compassionate initiatives and education, we strive to create a
                world where every child, regardless of their abilities, can
                thrive and seamlessly integrate into society.
              </p>
            </div>
            <div className='w-full px-4 sm:h-96 sm:px-8 lg:h-full lg:w-1/2 lg:px-16'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col-reverse gap-4 lg:flex-row lg:gap-8'>
            <div className='w-full px-4 sm:h-96 sm:px-8 lg:h-full lg:w-1/2 lg:px-16'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='w-full p-8 sm:p-16 lg:w-1/2 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>Vision</h2>

              <p className='mt-4 text-gray-500'>
                To envision a world where families with unique abilities thrive
                in a supportive and inclusive community, where children are
                empowered to explore the wonders of the world, breaking down
                societal barriers and fostering understanding.
              </p>
            </div>
          </div>

          <div className='grid h-fit grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>Objectives</h2>

              <ul className='mt-4 list-inside list-disc text-gray-500'>
                <li>
                  Empowering Families: Provide essential resources and support
                  to families with children having unique abilities, creating a
                  network that fosters understanding and resilience.
                </li>
                <li>
                  Educational Support: Develop and implement educational
                  programs, support groups, and outreach initiatives to empower
                  caregivers, siblings, and grieving parents in navigating the
                  challenges associated with unique abilities.
                </li>
                <li>
                  Inclusive Travel Experiences: Collaborate with a network of
                  dedicated volunteers, including healthcare workers, teachers,
                  and community members, to organize safe and accessible travel
                  experiences—both locally and internationally—for children with
                  unique abilities, allowing families to explore the world with
                  peace of mind.
                </li>
                <li>
                  Community Outreach: Expand our outreach efforts to raise
                  awareness about neurodiversity, dispel misconceptions, and
                  promote inclusivity, fostering a more understanding and
                  accepting community.
                </li>
                <li>
                  Collaborative Learning: Provide opportunities for individuals
                  to learn and contribute, creating a knowledgeable and
                  compassionate community that supports those with unique
                  abilities.
                </li>
                <li>
                  Breaking Societal Barriers: Work towards a society where every
                  child, regardless of their abilities, has the opportunity to
                  grow and explore, breaking down societal barriers through
                  education, awareness, and inclusivity.
                </li>
                <li>
                  Future Integration: Strive towards a future where every family
                  feels supported, and every child can reach their fullest
                  potential, seamlessly integrating into society with the
                  confidence and skills acquired through our programs.
                </li>
              </ul>
            </div>
            <div className='flex justify-center'>
              <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-3/4'>
                <img
                  alt=''
                  src='https://images.unsplash.com/photo-1599690352319-c3e8f571ddb6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
            </div>
          </div>

          <div className='mx-auto flex max-w-3xl flex-col items-center text-center sm:flex-row'>
            <Image src={Logo} alt='logo' className='mx-auto h-1/3 w-1/3' />

            <div className='sm:mr-8'>
              <h2 className='text-2xl font-bold md:text-3xl'>
                Empowering Every Child
              </h2>

              <p className='hidden text-gray-500 sm:mt-4 sm:block'>
                Join us on our journey to create a future where every family is
                supported, and every child has the chance to explore, learn, and
                grow, contributing to a more inclusive and understanding world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
