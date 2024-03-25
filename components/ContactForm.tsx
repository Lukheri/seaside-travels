'use client'
import React, { useState } from 'react'

const ContactForm = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})
  const [isSending, setIsSending] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

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
      setIsSending(false)
      return
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        message: message,
      }),
    })
    setIsSending(false)
    console.log(response)
    if (response.ok) {
      setSuccess(true)
      setFullName('')
      setEmail('')
      setMessage('')
      setErrors({})
      window.location.hash = 'contact'
    }
  }

  return (
    <div className='relative mx-auto w-full overflow-hidden rounded-lg bg-white px-4 py-6 shadow-2xl shadow-gray-300/50 lg:max-w-xl lg:px-8 lg:py-10 '>
      {success && (
        <div role='alert' className='alert border-none bg-theme-accent'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Your message has been sent!</span>
        </div>
      )}
      <h1 className='mt-4 text-lg font-medium text-gray-700'>
        What do you want to ask
      </h1>

      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='flex-1'>
          <label className='mb-2 block text-sm text-gray-600'>Full Name</label>
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
          <label className='mb-2 block text-sm text-gray-600'>Message</label>
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
            <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='relative mt-6 w-full transform rounded-md bg-theme-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-theme-400 focus:outline-none focus:ring focus:ring-theme-300 focus:ring-opacity-50'
        >
          {!isSending ? (
            'get in touch'
          ) : (
            <>
              sending
              <span className='loading loading-dots loading-xs absolute bottom-[5px] -translate-y-1/2'></span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
