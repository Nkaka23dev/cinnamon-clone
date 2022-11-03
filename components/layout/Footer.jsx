import Image from 'next/image'
import Link from 'next/link'
import Button from '../buttons/Button'
import Input from '../forms/inputs'

export default function Footer (props) {
  return (
    <>
      {/* Next section */}
      <section className='background-image hidden lg:block'>
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
              <div className='space-y-5 col-span-2'>
                <h1 className='text-base mb-10 font-mont-bold'>Our newsletter</h1>
               <Input/>
                <Button name='Subscribe' className="w-[70%]" />
              </div>
              {/* First grid item */}
              <div className='space-y-12'>
                <div>
                  <Image
                    src='/footer_images/badge.svg'
                    alt='Picture of the author'
                    className='scale-125'
                    width={500}
                    height={500}
                  />
                </div>
                <Image
                  src='/footer_images/aclutch.webp'
                  alt='Picture of the author'
                  className='scale-125'
                  width={600}
                  height={600}
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

      {/* Footer for smal screen is displayed down */}
       {/* Footer for smal screen is displayed down */}
        {/* Footer for smal screen is displayed down */}
      <section className='background-image mt-2 block lg:hidden'>
        {/* Parent div */}
        <div className='max-w-[70rem] py-20 px-5'>
          {/* cinnamon, all software and links */}
          <div className='text-white  flex flex-col justify-between'>
            <div className='space-y-8'>
              <h1 className='text-2xl font-bold font-mont-bold'>CINNAMON</h1>
              <h1 className='text-2xl tracking-wide font-bold font-mont-bold'>
                All software, <br></br> zero bullshit.
              </h1>
              <div className='flex flex-row py-8 gap-36'>
                <div className="space-y-6">
                  <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                    Home
                  </h1>
                  <h1 className='text-base text-[#CFCFCF] font-mont-regular font-mont-regular'>
                    Project
                  </h1>
                  <h1 className='text-base text-[#CFCFCF] font-mont-regular'>
                    Services
                  </h1>
                </div>
                <div className="space-y-6">
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
              {/* Links ends here */}
            </div>
          </div>
          {/*End cinnamon, all software and links */}


          {/* Next flex col */}
          <div className=''>
            <div className='text-white grid grid-cols-2 gap-10 pt-10'>
              {/* First grid item */}
              <div className='space-y-5'>
                <h1 className='text-base font-mont-bold'>Zagreb</h1>
                <h4 className='text-sm font-mont-semiBold text-[#CFCFCF]'>
                  Slavonska avenija 6,<br></br> 10000, Zagreb, Croatia<br></br>{' '}
                  +385 99 347 3103.
                </h4>
              </div>
              {/* First grid item */}
              <div className='space-y-5'>
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
            </div>
            {/* First grid item */}
            {/* First grid item */}
            <div className='space-y-5 mt-10 col-span-2'>
                <h1 className='text-base mb-10 font-mont-bold'>Our newsletter</h1>
               <Input/>
                <Button name='Subscribe' className="w-[70%]" />
              </div>
            {/* First grid item */}
            <div className='space-y-5 w-1/2 mx-auto mt-20'>
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

       
        {/* last section */}
        <div className=' max-w-[70rem] mx-auto grid  space-y-9 items-center pb-10'>
            <Link className='underline mx-auto font-mont-regular text-sm' href='#'>
              hello@cinnamon.agency
            </Link>
            <div className='bg-gray-600 w-11/12 mx-auto h-[0.5px]'></div>
            <div className='flex justify-center gap-5'>
              <img src='/svgs/sv1.svg' />
              <img src='/svgs/sv2.svg' />
              <img src='/svgs/sv3.svg' />
              <img src='/svgs/sv4.svg' />
              <img src='/svgs/sv5.svg' />
              <img src='/svgs/sv6.svg' />
            </div>
            <div className='bg-gray-600 w-11/12 mx-auto h-[0.5px]'></div>
            <h1 className='space-x-6 text-base mx-auto text-[#CFCFCF] font-mont-regular'>
              <span> © 2022 Cinnamon</span>
              <span>Privacy Policy</span>
            </h1>
        </div>
      </section>
    </>
  )
}
