import Image from 'next/image'

export default function Office (props) {
  return (
    <>
      <section className='max-w-[70rem] mx-auto lg:flex flex-col pt-36 pb-24 hidden'>
        <div>
          <div className='z-10 pb-10'>
            <h1 className='text-[3.5rem] font-bold font-mont-bold'>
              Our offices
            </h1>
          </div>
          {/* Next div is right here */}
          <div className='flex w-screen lg:w-full gap-8'>
            <div className=''>
              <div>
                <img
                  src='/images/city3.jpeg'
                  className='min-w-[34rem] '
                />
              </div>
              <div className='pt-8 flex gap-4 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-9 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
              <div className='flex gap-14 py-14'>
                <Image
                  src='/images/arrow_left.png'
                  alt='Picture of the author'
                  className=''
                  width={45}
                  height={45}
                />
                <Image
                  src='/images/arrow_right.png'
                  alt='Picture of the author'
                  className=''
                  width={45}
                  height={45}
                />
              </div>
            </div>
            {/* next div */}
            <div className='w-full'>
              <div>
                <img
                  src='/images/city2.jpeg'
                  className='min-w-[34rem]'
                />
              </div>
              <div className='pt-8 flex gap-4 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-9 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <div>
                <img
                  src='/images/city11.jpeg'
                  className='min-w-[34rem]'
                />
              </div>
              <div className='pt-8 flex gap-6 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-10 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* end o grid div */}
          </div>
        </div>
      </section>




      {/* Office section for small device start hee */}
      <section className='max-w-[70rem] mx-auto flex flex-col pt-20 pb-10 lg:hidden px-6'>
        <div>
          <div className='z-10 pb-2'>
            <h1 className='text-[2.5rem] font-bold font-mont-bold'>
              Our offices
            </h1>
          </div>
          {/* Next div is right here */}
          <div className='flex scrollbar-hide overflow-x-scroll w-screen gap-8'>
            <div className=''>
              <div>
                <img
                  src='/images/city3.jpeg'
                  className='min-w-[20rem] '
                />
              </div>
              <div className='pt-8  flex gap-4 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-9 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* next div */}
            <div className='w-full'>
              <div>
                <img
                  src='/images/city2.jpeg'
                  className='min-w-[20rem]'
                />
              </div>
              <div className='pt-8 flex gap-4 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-9 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <div>
                <img
                  src='/images/city11.jpeg'
                  className='min-w-[20rem]'
                />
              </div>
              <div className='pt-8 flex gap-6 items-center'>
                <svg
                  className=''
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  height='20'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <h1 className='text-2xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg ml-10 py-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* end o grid div */}
          </div>
        </div>
      </section>
    </>
  )
}
