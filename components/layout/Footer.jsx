import Image from 'next/image'
import Link from 'next/link'
import Button from '/components/Button'

export default function Footer (props) {
  return (
    <>
      {/* Next section */}
      <section className='background-image'>
        <div className='max-w-[70rem] mx-auto flex justify-between pt-20 pb-5'>
          <div className='text-white w-2/5 flex flex-col justify-between'>
            <div>
              <h1 className='text-3xl font-bold font-mont-bold'>CINNAMON</h1>
              <div className='flex flex-col py-8 gap-3'>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                  Home
                </h1>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular font-mont-regular'>
                  Project
                </h1>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                  Services
                </h1>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                  About Us
                </h1>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                  Careers
                </h1>
                <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                  Blog
                </h1>
              </div>
            </div>
            <div>
              <Link className='underline font-mont-regular text-sm' href='#'>
                hello@cinnamon.agency
              </Link>
            </div>
          </div>
          {/* Next flex col */}
          <div className='w-2/3'>
            <div className='text-white w-full'>
              <h1 className='text-3xl tracking-wide font-bold font-mont-bold'>
                All software, zero bullshit.
              </h1>
            </div>
            <div className='text-white grid grid-cols-3 gap-24 pt-10'>
              {/* First grid item */}
              <div className='space-y-5 '>
                <h1 className='text-base font-mont-bold'>Zagreb</h1>
                <h4 className='text-sm font-mont-semiBold text-[#CFCFCF]'>
                  Slavonska avenija 6,<br></br> 10000, Zagreb, Croatia<br></br>{' '}
                  +385 99 347 3103.
                </h4>
              </div>
              {/* First grid item */}
              <div className='space-y-5 row-span-2'>
                <h1 className='text-base font-mont-bold'>New York</h1>
                <h4 className='text-sm font-mont-semiBold text-[#CFCFCF]'>
                  500 7th Ave, New York<br></br>,NY 10018, United States
                </h4>
              </div>
              {/* First grid item */}
              <div className='space-y-5'>
                <h1 className='text-base font-mont-bold'>Belgrade</h1>
                <h4 className='text-sm font-mont-semiBold text-[#CFCFCF]'>
                  Bulevar vojvode Mišića 37 11000, Belgrade, Serbia
                </h4>
              </div>
              {/* First grid item */}
              <div className='space-y-5'>
                <h1 className='text-base font-mont-bold'>Our newsletter</h1>
                <h4 className='text-sm font-mont-semiBold text-[#CFCFCF]'>
                  Producing, prototyping and testing sketches.
                </h4>
                <Button name='Subscribe' />
              </div>
              {/* First grid item */}
              <div className='space-y-5'>
                <div>
                  <Image
                    src='/footer_images/badge.svg'
                    alt='Picture of the author'
                    className=''
                    width={400}
                    height={400}
                  />
                </div>
                <Image
                  src='/footer_images/aclutch.webp'
                  alt='Picture of the author'
                  className=''
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        {/* horizontal line */}
        <div className='bg-gray-600 max-w-[70rem] mx-auto h-[0.5px]'></div>
        {/* last section */}
        <div className='flex max-w-[70rem] mx-auto justify-between  py-10  items-center'>
          <div>
            <h1 className='space-x-6 text-base text-[#CFCFCF] font-mont-regular'>
              <span> © 2022 Cinnamon</span>
              <span>Privacy Policy</span>
            </h1>
          </div>
          <div className='flex gap-5'>
            <img src='/svgs/sv1.svg' />
            <img src='/svgs/sv2.svg' />
            <img src='/svgs/sv3.svg' />
            <img src='/svgs/sv4.svg' />
            <img src='/svgs/sv5.svg' />
            <img src='/svgs/sv6.svg' />
          </div>
        </div>
      </section>
    </>
  )
}
