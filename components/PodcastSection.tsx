import React from 'react'

const PodcastSection = () => {
  return (
    <section id='podcast'>
      <div className='mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className=' p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-xl text-center'>
            <h2 className='text-2xl font-bold md:text-3xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className='hidden sm:mt-4 sm:block'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                className='group relative inline-block text-sm font-medium text-theme-500 focus:outline-none focus:ring active:text-theme-500'
                href='https://www.youtube.com/@WavesofWisdomFL'
                target='_blank'
              >
                <span className='absolute inset-0 translate-x-0 translate-y-0 bg-theme-500 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

                <span className='relative flex items-center justify-center gap-4 border border-current bg-white px-8 py-3'>
                  {' '}
                  Listen on Youtube{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='40'
                    height='40'
                    viewBox='0 0 100 100'
                  >
                    <path
                      fill='#de333b'
                      d='M88.927,33.79c-0.285-3.583-1.501-6.406-3.35-8.63c-0.051-0.094-0.096-0.188-0.147-0.281	c-0.701-1.261-1.649-2.012-2.684-2.359c-5.71-4.186-14.318-5.295-21.448-5.697c-7.475-0.421-14.968-0.281-22.445,0.022	c-4.78,0.193-10.406-0.249-15.119,1.364c-5.947-0.306-9.869,2.976-12.367,7.8c-1.339,1.943-2.308,4.179-2.786,6.623	c-0.143,0.734-0.152,1.403-0.076,2.019c-1,5.058-1.186,10.445-0.936,14.854c-0.085,0.367-0.145,0.742-0.146,1.131	c-0.002,2.131,0.256,4.182,0.673,6.195c-0.009,0.151-0.014,0.301-0.018,0.451c-0.008-0.001-0.016-0.001-0.024-0.002	c0.005,0.052,0.016,0.101,0.021,0.153c-0.131,5.471,2.194,10.197,6.9,13.459c2.01,1.393,4.191,2.27,6.46,2.808	c6.826,4.016,16.184,3.296,23.76,3.357c11.133,0.09,22.299-0.74,32.876-4.387c0.237-0.034,0.477-0.079,0.722-0.143	c9.043-2.386,10.127-12.368,10.981-20.258C90.461,45.92,90.412,39.733,88.927,33.79z'
                    ></path>
                    <path
                      fill='#de333b'
                      d='M60.734,32.231c-0.412-0.087-0.815-0.196-1.215-0.328c0.443,0.155,0.885,0.31,1.328,0.465	c-0.664-0.236-1.291-0.532-1.894-0.896c-1.129-0.68-2.915-0.716-4.133-0.33c-1.302,0.413-2.683,1.505-3.252,2.773	c-0.573,1.275-0.826,2.783-0.33,4.133c0.532,1.449,1.449,2.455,2.773,3.252c1.348,0.812,2.902,1.366,4.437,1.689	c1.382,0.291,2.954,0.003,4.139-0.767c1.131-0.735,2.156-2.115,2.384-3.469C65.464,35.82,63.743,32.864,60.734,32.231L60.734,32.231	z'
                    ></path>
                    <path
                      fill='#de333b'
                      d='M56.78,46.53c7.1,0,6.544-10.99-0.517-10.99C49.163,35.54,49.719,46.53,56.78,46.53L56.78,46.53z'
                    ></path>
                    <path
                      fill='#de333b'
                      d='M11.152,66.211c0.954,1.928,3.004,2.821,4.473,4.262c4.395,4.31,11.909-2.064,8.264-7.11	c-1.301-1.802-4.297-4.4-4.991-5.36c-4.248-5.883-12.249-0.247-9.225,5.991c7.802,16.098,29.343,12.253,43.525,10.658	c7.015-0.789,6.526-11.781-0.517-10.99c-6.449,0.725-13.217,1.617-19.698,1.647c-5.583,0.025-11.491-1.955-14.085-7.306	c-3.075,1.997-6.15,3.994-9.225,5.991c1.301,1.802,4.297,4.4,4.991,5.36c2.755-2.37,5.51-4.74,8.264-7.11	c-0.618-0.606-2.497-1.914-2.551-2.023C17.242,53.888,8.043,59.932,11.152,66.211L11.152,66.211z'
                    ></path>
                    <path
                      fill='#f2f2f2'
                      d='M61.507,44.549c-0.218-0.422-0.559-0.822-1.072-1.17c-5.329-3.613-10.658-7.227-15.987-10.84	c-2.934-1.989-6.549,0.883-5.871,3.497c-0.52,3.454-0.389,7.168-0.1,10.864c-0.12,3.702-0.089,7.405,0.155,11.125	c0.142,2.166,1.836,3.202,3.522,3.204c0.765,0.141,1.574,0.04,2.324-0.432c5.571-3.509,10.955-7.269,16.169-11.29	C62.356,48.189,62.618,46.085,61.507,44.549z'
                    ></path>
                    <path d='M12.916,30.202c0,0-0.077,0.17-0.228,0.501c-0.141,0.335-0.395,0.817-0.646,1.483c-0.538,1.317-1.213,3.317-1.768,5.975	c-0.565,2.656-0.933,5.973-1.036,9.827c-0.083,3.87,0.044,8.207,0.383,13.085c0.229,2.434,0.699,5.118,2.067,7.611	c1.341,2.48,3.411,4.653,5.871,6.327c2.46,1.687,5.269,2.964,8.254,3.881c2.994,0.918,6.117,1.515,9.351,1.912	c6.475,0.782,13.257,0.666,20.22,0.368c6.978-0.333,14.271-1.043,21.569-2.885c1.813-0.453,3.651-0.968,5.459-1.709	c1.801-0.738,3.586-1.736,5.091-3.143c1.513-1.407,2.622-3.14,3.399-4.898c0.781-1.765,1.276-3.564,1.658-5.323	c1.449-6.981,1.748-13.869,1.161-20.351c-0.145-1.62-0.342-3.215-0.598-4.778c-0.253-1.563-0.545-3.12-0.988-4.648	c-0.439-1.525-1.019-3.021-1.818-4.4c-0.791-1.381-1.834-2.624-2.994-3.62c-2.333-2.006-4.997-3.19-7.548-4.064	c-2.571-0.87-5.111-1.388-7.533-1.732c-4.856-0.653-9.237-0.722-13.079-0.759c-3.843-0.011-7.146,0.098-9.842,0.214	c-5.392,0.242-8.367,0.457-8.367,0.457s3.009,0.027,8.374,0.076c2.694,0.044,5.989,0.122,9.803,0.332	c3.805,0.235,8.164,0.522,12.837,1.364c2.331,0.437,4.738,1.038,7.121,1.952c2.375,0.915,4.763,2.118,6.679,3.897	c1.934,1.747,3.146,4.186,3.84,6.971c0.357,1.385,0.591,2.853,0.792,4.36c0.205,1.508,0.353,3.043,0.453,4.601	c0.41,6.221-0.018,12.833-1.478,19.421c-0.734,3.227-1.895,6.394-4.162,8.454c-2.262,2.096-5.608,3.15-9.092,4.019	c-6.981,1.763-14.052,2.514-20.911,2.933c-6.88,0.388-13.524,0.626-19.735,0.031c-6.192-0.599-12.068-1.953-16.626-4.874	c-2.274-1.433-4.145-3.274-5.399-5.379c-1.268-2.095-1.814-4.485-2.136-6.814c-0.538-4.721-0.884-9.101-0.998-12.89	c-0.096-3.803,0.081-7.085,0.482-9.735c0.391-2.651,0.933-4.675,1.381-6.017c0.207-0.678,0.426-1.173,0.544-1.518	C12.851,30.378,12.916,30.202,12.916,30.202z'></path>
                    <path
                      fill='#eb5d46'
                      d='M28.215,24.148c-9.894,2.029-11.92,12.621-11.979,21.179c-0.02,2.95,2.893,3.95,4.969,3.047	c0.586-0.057,1.17-0.248,1.696-0.556c1.719-0.018,3.389-1.135,3.347-3.374c-0.006-0.297-0.017-0.63-0.029-0.979	c-0.061-2.763,0.123-5.521,1.265-8.09c1.113-2.502,3.401-3.779,4.683-6.085C33.715,26.507,31.172,23.542,28.215,24.148z'
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className='mt-4 md:mt-8'>
              <a
                className='group relative inline-block text-sm font-medium text-theme-500 focus:outline-none focus:ring active:text-theme-500'
                href='https://podcasters.spotify.com/pod/show/waves-of-wisdom'
                target='_blank'
              >
                <span className='absolute inset-0 translate-x-0 translate-y-0 bg-theme-500 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

                <span className='relative flex items-center justify-center gap-4 border border-current bg-white px-8 py-3'>
                  {' '}
                  Listen on Spotify{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='40'
                    height='40'
                    viewBox='0 0 100 100'
                  >
                    <path
                      fill='#74953c'
                      d='M84.607,48.271c0.185-18.056-12.399-36.823-31.648-37.332c-6.292-1.002-12.895-0.154-19.074,2.641	c-10.86,4.912-20.159,15.623-21.457,27.549c-4.01,20.841,11.981,41.957,34.376,42.275c3.815,0.054,7.51-0.511,10.984-1.601	C73.147,79.479,84.453,63.403,84.607,48.271z'
                    ></path>
                    <path
                      fill='#f2f2f2'
                      d='M38.285,64.249c6.382-3.192,13.462-2.242,19.138,1.92c3.637,2.666,7.133-3.405,3.533-6.044	c-7.727-5.665-17.723-6.161-26.205-1.92C30.722,60.219,34.263,66.26,38.285,64.249L38.285,64.249z'
                    ></path>
                    <path
                      fill='#f2f2f2'
                      d='M31.593,52.923c10.432-4.774,22.843-4.98,31.983,2.665c3.433,2.872,8.411-2.055,4.95-4.95	c-11.768-9.843-26.922-9.958-40.466-3.759C23.969,48.751,27.522,54.786,31.593,52.923L31.593,52.923z'
                    ></path>
                    <path
                      fill='#f2f2f2'
                      d='M26.825,40.407c13.423-4.136,29.453-6.971,41.327,2.628c3.473,2.807,8.455-2.116,4.95-4.95	c-14.035-11.345-31.921-9.425-48.138-4.428C20.672,34.979,22.503,41.739,26.825,40.407L26.825,40.407z'
                    ></path>
                    <path d='M15.702,37.24c0,0-0.235,0.541-0.612,1.64c-0.368,1.099-0.878,2.765-1.201,5.038l0.003-0.018	c-0.705,3.483-1.311,8.554-0.068,14.644c0.104,0.77,0.334,1.528,0.566,2.304c0.229,0.779,0.463,1.574,0.702,2.385	c0.322,0.784,0.649,1.583,0.983,2.397c0.171,0.406,0.33,0.824,0.518,1.231c0.213,0.396,0.428,0.795,0.644,1.197	c1.627,3.285,4.025,6.471,6.99,9.4c5.824,5.973,14.966,10.158,24.99,10.307c2.431,0.044,4.988,0.032,7.607-0.42	c0.652-0.119,1.308-0.25,1.958-0.425l0.838-0.234l0.875-0.176c0.657-0.136,1.315-0.273,1.976-0.41	c0.64-0.208,1.283-0.417,1.927-0.627l0.967-0.319l0.929-0.417c0.62-0.281,1.241-0.562,1.864-0.844l1.775-1.027l0.889-0.521	l0.838-0.598l1.677-1.208l1.57-1.352l0.782-0.684l0.727-0.743l1.451-1.499c2.405-2.702,4.375-5.701,5.944-8.835	c1.552-3.14,2.751-6.418,3.378-9.774c0.673-3.344,0.773-6.75,0.538-9.984c-0.102-0.807-0.203-1.609-0.304-2.408l-0.157-1.192	l-0.252-1.169c-0.17-0.775-0.339-1.546-0.507-2.313c-0.229-0.75-0.457-1.495-0.684-2.236C82.061,26.524,73.384,17.82,64.5,14.862	c-0.556-0.174-1.106-0.345-1.649-0.515c-0.545-0.159-1.069-0.366-1.621-0.439c-1.09-0.191-2.143-0.423-3.177-0.557	c-1.04-0.063-2.051-0.124-3.033-0.184l-0.295-0.016l-0.358-0.041c-0.237-0.027-0.473-0.054-0.707-0.08	c-0.471-0.037-0.935-0.073-1.391-0.109c-3.657-0.192-6.797,0.225-9.279,0.808c-2.49,0.575-4.338,1.3-5.568,1.815	c-0.617,0.257-1.076,0.477-1.385,0.625c-0.308,0.147-0.467,0.222-0.467,0.222s0.164-0.063,0.482-0.187	c0.318-0.126,0.791-0.311,1.422-0.524c1.259-0.427,3.138-1.019,5.62-1.429c2.474-0.42,5.564-0.638,9.086-0.256	c0.439,0.059,0.885,0.118,1.338,0.179c0.227,0.038,0.456,0.077,0.687,0.116l0.347,0.058l0.42,0.047	c0.935,0.106,1.897,0.215,2.888,0.327c0.978,0.179,1.968,0.453,2.989,0.681c0.518,0.091,1.005,0.316,1.512,0.491	c0.504,0.184,1.014,0.37,1.53,0.558c8.211,3.175,15.956,11.609,19.181,22.744c0.194,0.696,0.389,1.396,0.585,2.1	c0.138,0.718,0.277,1.439,0.417,2.164l0.211,1.09l0.119,1.11c0.078,0.742,0.157,1.487,0.236,2.236	c0.15,3.022,0.007,6.052-0.647,9.097c-0.611,3.048-1.748,6.046-3.194,8.917c-1.462,2.866-3.281,5.612-5.473,8.076l-1.32,1.363	l-0.659,0.678L72.64,76.65l-1.414,1.23l-1.503,1.091l-0.748,0.544l-0.791,0.467l-1.576,0.932l-1.646,0.76l-0.819,0.381l-0.85,0.286	c-0.565,0.193-1.129,0.385-1.69,0.577c-0.578,0.126-1.154,0.252-1.729,0.378l-0.968,0.214c-0.083,0.019-0.131,0.025-0.242,0.06	l-0.104,0.031l-0.207,0.063l-0.415,0.121c-0.554,0.159-1.12,0.281-1.686,0.394c-2.272,0.433-4.633,0.501-7.006,0.507	c-9.272,0.043-17.745-3.489-23.455-8.89c-2.885-2.64-5.291-5.553-6.977-8.607c-0.225-0.374-0.448-0.745-0.669-1.112	c-0.197-0.38-0.365-0.77-0.547-1.15c-0.358-0.763-0.709-1.511-1.053-2.246c-0.267-0.765-0.529-1.515-0.785-2.25	c-0.262-0.734-0.523-1.453-0.66-2.186c-1.507-5.796-1.231-10.777-0.76-14.26l0.003-0.019c0.18-2.25,0.576-3.935,0.867-5.052	C15.508,37.798,15.702,37.24,15.702,37.24z'></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='grid gap-8 rounded-lg '>
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-theme-500'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-4 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                </div>
              </div>

              <div>
                <strong className='rounded border border-theme-500 bg-theme-500 px-3 py-1.5 text-[10px] font-medium text-white'>
                  Pilot Episode
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Waves of Wisdom: Pilot{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Welcome to the inaugural episode of Waves of Wisdom, the
                  podcast brought to you by Seaside Therapy, where we ride the
                  currents of knowledge and empathy to explore the vast ocean of
                  neurodiversity.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>18:53 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Ariel Price
                    </a>
                    , and{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Danielle Van Curen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-theme-500'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-4 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                </div>
              </div>

              <div>
                <strong className='rounded border border-theme-500 bg-theme-500 px-3 py-1.5 text-[10px] font-medium text-white'>
                  Pilot Episode
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Waves of Wisdom: Pilot{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Welcome to the inaugural episode of Waves of Wisdom, the
                  podcast brought to you by Seaside Therapy, where we ride the
                  currents of knowledge and empathy to explore the vast ocean of
                  neurodiversity.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>18:53 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Ariel Price
                    </a>
                    , and{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Danielle Van Curen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>{' '}
          <article className='rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8'>
            <div className='flex items-start sm:gap-8'>
              <div
                className='hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-theme-500'
                aria-hidden='true'
              >
                <div className='flex items-center gap-1'>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-4 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-6 w-0.5 rounded-full bg-theme-500'></span>
                  <span className='h-8 w-0.5 rounded-full bg-theme-500'></span>
                </div>
              </div>

              <div>
                <strong className='rounded border border-theme-500 bg-theme-500 px-3 py-1.5 text-[10px] font-medium text-white'>
                  Pilot Episode
                </strong>

                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  <a href='#' className='hover:underline'>
                    {' '}
                    Waves of Wisdom: Pilot{' '}
                  </a>
                </h3>

                <p className='mt-1 text-sm text-gray-700'>
                  Welcome to the inaugural episode of Waves of Wisdom, the
                  podcast brought to you by Seaside Therapy, where we ride the
                  currents of knowledge and empathy to explore the vast ocean of
                  neurodiversity.
                </p>

                <div className='mt-4 sm:flex sm:items-center sm:gap-2'>
                  <div className='flex items-center gap-1 text-gray-500'>
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>

                    <p className='text-xs font-medium'>18:53 minutes</p>
                  </div>

                  <span className='hidden sm:block' aria-hidden='true'>
                    &middot;
                  </span>

                  <p className='mt-2 text-xs font-medium text-gray-500 sm:mt-0'>
                    Featuring{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Ariel Price
                    </a>
                    , and{' '}
                    <a href='#' className='underline hover:text-gray-700'>
                      Danielle Van Curen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PodcastSection
