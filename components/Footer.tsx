import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
      <div className='mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
        <Image
          src={Logo}
          alt='logo'
          height={90}
          width={90}
          className='mx-auto'
        />

        <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#merch'
            >
              {' '}
              Merch{' '}
            </a>
          </li>

          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#about'
            >
              {' '}
              About{' '}
            </a>
          </li>

          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#podcast'
            >
              {' '}
              Podcast{' '}
            </a>
          </li>

          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#events'
            >
              {' '}
              Events{' '}
            </a>
          </li>

          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#donate'
            >
              {' '}
              Donate{' '}
            </a>
          </li>

          <li>
            <a
              className='text-gray-700 transition hover:text-gray-700/75'
              href='#'
            >
              {' '}
              Misson & Vision{' '}
            </a>
          </li>
        </ul>

        <ul className='mt-12 flex justify-center gap-6 md:gap-8'>
          <li>
            <a
              href='https://www.facebook.com/SeasideTherapyFL?mibextid=LQQJ4d'
              rel='noreferrer'
              target='_blank'
              className='text-gray-700 transition hover:text-gray-700/75'
            >
              <span className='sr-only'>Facebook</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href='https://www.instagram.com/seasidetherapyfl?igsh=MWMxbm4xb2UxMmRjbg%3D%3D&utm_source=qr'
              rel='noreferrer'
              target='_blank'
              className='text-gray-700 transition hover:text-gray-700/75'
            >
              <span className='sr-only'>Instagram</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href='https://www.tiktok.com/@wavesofwisdomfl?_t=8kcGUz93mWl&_r=1'
              rel='noreferrer'
              target='_blank'
              className='text-gray-700 transition hover:text-gray-700/75'
            >
              <span className='sr-only'>Tiktok</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path d='M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z' />
              </svg>
            </a>
          </li>

          <li>
            <a
              href='https://youtube.com/@WavesofWisdomFL?si=j3ttR5OX1NRUrc0i'
              rel='noreferrer'
              target='_blank'
              className='text-gray-700 transition hover:text-gray-700/75'
            >
              <span className='sr-only'>Youtube</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 64'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path d='M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z' />
              </svg>
            </a>
          </li>

          <li>
            <a
              href='https://open.spotify.com/show/7f1rXKHkqn5Ar4csAhcIe3?si=1535756476d64237'
              rel='noreferrer'
              target='_blank'
              className='text-gray-700 transition hover:text-gray-700/75'
            >
              <span className='sr-only'>Spotify</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path d='M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z' />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
