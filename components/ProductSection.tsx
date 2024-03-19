import React from 'react'
import Marquee from './Marquee'
import Image from 'next/image'
import ProductCarousel from './ProductCarousel'

const ProductSection = () => {
  return (
    <>
      <section id='merch'>
        <ProductCarousel />
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
            <div className='playing relative grid place-content-center overflow-hidden rounded bg-theme-200 p-6 sm:p-8'>
              <div className='wave'></div>
              <div className='wave'></div>
              <div className='wave'></div>
              <div className='z-10 mx-auto max-w-md text-center lg:text-left'>
                <header>
                  <h2 className='font-duke-charming text-xl font-bold text-gray-900 sm:text-3xl'>
                    Featured
                  </h2>

                  <p className='mt-4 text-gray-900'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href='https://www.etsy.com/shop/seasidetherapy/?etsrc=sdt'
                  target='_blank'
                  className='mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring'
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className='lg:col-span-2 lg:py-8'>
              <ul className='grid grid-cols-2 gap-4'>
                <li>
                  <a
                    href='https://www.etsy.com/listing/1690163467/be-happy-in-your-own-shell-seaside?click_key=e1efad53eb32cfde29fcc9ac8c4355e6abdb0da6%3A1690163467&click_sum=f867332e&ref=shop_home_active_19'
                    target='_blank'
                    className='group block'
                  >
                    <div className='relative h-[350px] sm:h-[450px]'>
                      <Image
                        src='/products/Mug/mug alt.jpg'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
                      />

                      <Image
                        src='/products/Mug/turtle 1.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                      />
                    </div>

                    <div className='mt-3'>
                      <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                        Mug
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>PHP 426.16</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.etsy.com/listing/1677437744/unisex-crewneck-sweatshirt-seaside?click_key=58758c06e2f987045fd80991d7c1ee0cffe8d1f6%3A1677437744&click_sum=08aea23f&ref=shop_home_active_2'
                    target='_blank'
                    className='group block overflow-hidden'
                  >
                    <div className='relative h-[350px] sm:h-[450px]'>
                      <Image
                        src='/products/Long sleeves/long sleeves alt.avif'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
                      />

                      <Image
                        src='/products/Long sleeves/turtle 1.png'
                        alt=''
                        fill
                        className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                      />
                    </div>

                    <div className='mt-3'>
                      <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                        Long Sleeves
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>PHP 1,627.91</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <section>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-center'>
            <h2 className='font-duke-charming text-2xl font-bold text-theme-800 sm:text-5xl'>
              New Collection
            </h2>

            <p className='mx-auto mt-4 max-w-md text-theme-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <li>
              <a
                href='https://www.etsy.com/listing/1690174819/be-happy-in-your-own-shell-seaside?click_key=a619a74275c7d5fd8eef756382f569156360f1f9%3A1690174819&click_sum=e1cde8f6&ref=shop_home_active_15'
                target='_blank'
                className='group relative block'
              >
                <img
                  src='/products/Tote bag/turtle.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-theme-700'>
                    Tote bags
                  </h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a
                href='https://www.etsy.com/listing/1691589503/unisex-jersey-short-sleeve-tee-seaside?click_key=3a12aba236ae4fa6b1283c9e7c08f42f72d7526d%3A1691589503&click_sum=6f667042&ref=shop_home_active_1'
                target='_blank'
                className='group relative block'
              >
                <img
                  src='/products/Shirt/shirt turtle.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-theme-700'>Shirts</h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
              <a
                href='https://www.etsy.com/listing/1675994996/be-happy-in-your-own-shell-seaside?click_key=1ab88ab48dd749433e34d2b94040d0af21e0727f%3A1675994996&click_sum=8757d152&ref=shop_home_active_18'
                target='_blank'
                className='group relative block'
              >
                <img
                  src='/products/Hoodie/hoodie ver 3.png'
                  alt=''
                  className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:opacity-90'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-theme-700'>
                    Hoodies
                  </h3>

                  <span className='mt-1.5 inline-block bg-theme-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ProductSection
