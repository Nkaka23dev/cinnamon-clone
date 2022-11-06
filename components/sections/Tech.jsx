import Link from 'next/link'
import Image from 'next/image'

export default function Tech (props) {
    return(
     <>
         <section className='max-w-[70rem] pb-28 mx-auto lg:flex flex-col hidden '>
        <div>
          <div className=''>
            <h1 className='text-[3.4rem] leading-[1.3] font-bold font-mont-bold pb-16'>
              Stay in the loop <br></br> on tech topics
            </h1>
          </div>
          {/* Next div is right here */}
          <div className='grid  grid-cols-3 gap-5'>
            <div className=''>
              <img src='/images/img1.webp' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Sales</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='text-[1rem] text-gray-700 font-mont-regular'>
                  Matija Bermanec & l...
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-10-13</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>6min</h1>
                </div>
              </div>
              <div className='text-2xl mt-4 font-mont-bold'>
                Difference in Hiring an <br></br> Agency vs. Freelancers 2.0
              </div>
              <div className='ml-auto flex gap-3  py-16 '>
                <Image
                  src='/images/arrow.svg'
                  alt='Picture of the author'
                  className=''
                  width={8}
                  height={8}
                />
                <Link
                  href=''
                  className='text-[#5135FF] font-mont-bold border-b-2 border-[#5135FF] pb-1'
                >
                  VIEW MORE BLOGS
                </Link>
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <img src='/images/flutter.webp' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Development</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='text-[1rem] text-gray-700 font-mont-regular'>
                  Samantha Holstead
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-10-03</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>3min</h1>
                </div>
              </div>
              <div className='text-2xl mt-4 font-mont-bold'>
                Cinnamon Flutter Template <br></br>Overview
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <img src='/images/tinder.webp' className='' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Design</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='text-[1rem] text-gray-700 font-mont-regular'>
                  Jan Marine
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-9-15</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>10min</h1>
                </div>
              </div>
              <div className='text-2xl mt-4 font-mont-bold'>
                How Tinder Swindled User <br></br> Experience
              </div>
            </div>
            {/* end o grid div */}
          </div>
        </div>
      </section>




      {/* This is for a  small screen  */}


      <section className='px-6 max-w-[70rem] pb-14 mx-auto flex flex-col lg:hidden '>
        <div>
          <div className=''>
            <h1 className='text-[2.4rem] leading-[1.3] font-bold font-mont-bold pb-8 pt-10'>
              Stay in the loop on tech topics
            </h1>
          </div>
          {/* Next div is right here */}
          <div className='flex w-screen gap-8 scrollbar-hide overflow-x-scroll'>
            <div className=''>
              <img src='/images/img1.webp' className='min-w-[11rem]' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Sales</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='hidden text-[1rem] text-gray-700 font-mont-regular'>
                  Matija Bermanec & l...
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='ml-1 bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-10-13</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>6min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-mont-bold'>
                Difference in Hiring an <br></br> Agency vs. Freelancers 2.0
              </div>
              <div className='ml-auto flex gap-3 py-8 '>
                <Image
                  src='/images/arrow.svg'
                  alt='Picture of the author'
                  className=''
                  width={8}
                  height={8}
                />
                <Link
                  href=''
                  className='text-[#5135FF] font-mont-bold border-b-2 border-[#5135FF] pb-1'
                >
                  VIEW MORE BLOGS
                </Link>
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <img src='/images/flutter.webp' className='min-w-[11rem]' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Development</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='hidden text-[1rem] text-gray-700 font-mont-regular'>
                  Samantha Holstead
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-10-03</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>3min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-mont-bold'>
                Cinnamon Flutter Template <br></br>Overview
              </div>
            </div>
            {/* next div */}
            <div className=''>
              <img src='/images/tinder.webp' className='min-w-[11rem]' />
              <div className='mt-5 flex gap-5 items-center'>
                <h1 className='text-sm font-mont-bold'>Design</h1>
              </div>
              <div className='mt-2 text-xl flex gap-3'>
                <h1 className='hidden text-[1rem] text-gray-700 font-mont-regular'>
                  Jan Marine
                </h1>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>2022-9-15</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-yellow-400 rounded-full w-[0.4rem] h-[0.4rem]'></div>
                  <h1 className='text-[1rem] text-gray-700 '>10min</h1>
                </div>
              </div>
              <div className='text-xl mt-4 font-mont-bold'>
                How Tinder Swindled User <br></br> Experience
              </div>
            </div>
            {/* end o grid div */}
          </div>
        </div>
      </section>
    </>
    )
  }
  