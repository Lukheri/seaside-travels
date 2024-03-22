'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (name === 'fullName') {
      setFullName(value)
    } else if (name === 'email') {
      setEmail(value)
      if (errors.email) {
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }))
      }
    } else if (name === 'message') {
      setMessage(value)
      if (errors.message) {
        setErrors((prevErrors) => ({ ...prevErrors, message: '' }))
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: { email?: string; message?: string } = {}
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const formData = {
      fullName,
      email,
      message,
    }
    console.log(formData)
  }

  return (
    <section className='' id='contact-us'>
      <div className='container mx-auto px-6 py-12'>
        <div className='lg:-mx-6 lg:flex lg:items-center'>
          <div className='lg:mx-6 lg:w-1/2'>
            <h1 className='font-duke-charming text-2xl font-semibold capitalize lg:text-3xl'>
              Contact us for <br /> more info
            </h1>

            <div className='mt-6 space-y-8 md:mt-8'>
              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>

                <span className='mx-2 w-72 text-gray-700 '>
                  5625 Strand Blvd Suite 512 Naples FL, 34110
                </span>
              </p>

              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>

                <span className='mx-2 w-72 truncate text-gray-700 '>
                  (239) 392-1070
                </span>
              </p>

              <p className='-mx-2 flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-2 h-6 w-6 text-theme-500 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>

                <span className='mx-2 w-72 truncate text-gray-700 '>
                  office@seasidetherapyFL.com
                </span>
              </p>
            </div>
          </div>

          <div className='mt-8 lg:mx-6 lg:w-1/2'>
            <div className='mx-auto w-full overflow-hidden rounded-lg bg-white px-4 py-6 shadow-2xl shadow-gray-300/50 lg:max-w-xl lg:px-8 lg:py-10 '>
              <h1 className='text-lg font-medium text-gray-700'>
                What do you want to ask
              </h1>

              <form className='mt-6' onSubmit={handleSubmit}>
                <div className='flex-1'>
                  <label className='mb-2 block text-sm text-gray-600'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    placeholder='John Doe'
                    className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40'
                    value={fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className='mt-6 flex-1'>
                  <label className='mb-2 block text-sm text-gray-600'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='johndoe@example.com'
                    className={`mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
                  )}
                </div>

                <div className='mt-6 w-full'>
                  <label className='mb-2 block text-sm text-gray-600'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    className={`mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-theme-400 focus:outline-none focus:ring focus:ring-theme-400 focus:ring-opacity-40 md:h-48 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder='Message'
                    value={message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  className='mt-6 w-full transform rounded-md bg-theme-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-theme-400 focus:outline-none focus:ring focus:ring-theme-300 focus:ring-opacity-50'
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
