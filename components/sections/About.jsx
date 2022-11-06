import Image from 'next/image'
import Button from '../buttons/Button'

export default function About (props) {
  return (
    <>
      {/* About page for big screen */}
      <section className='relative h-full bg-[#F6F6F6] hidden lg:block'>
        <div className='max-w-[70rem] mx-auto px-6 py-56 flex justify-between'>
          {/* First grid item */}
          <div className='space-y-10 w-2/3'>
            <h1 className='text-5xl font-mont-bold'>Who we are</h1>
            <h4 className='font-mont-regular text-gray-700 max-w-2xl leading-7 '>
              Meet our international teams made up of 86 <br></br> innovators,
              branched into 8 departments, that <br></br> influence the market
              throughout 20 different countries.
            </h4>
            <div className='flex justify-between py-8 w-4/5'>
              <div className='space-y-7'>
                <h1 className='text-xl font-mont-bold'>Product design</h1>
                <h1 className='text-xl font-mont-bold'>Web development</h1>
                <h1 className='text-xl font-mont-bold'>Mobile development</h1>
                <h1 className='text-xl font-mont-bold'>Quality assurance</h1>
                <h1 className='text-xl font-mont-bold'>Marketing</h1>
              </div>
              <div className='space-y-7'>
                <h1 className='text-xl font-mont-bold'>Project management</h1>
                <h1 className='text-xl font-mont-bold'>Human resources</h1>
                <h1 className='text-xl font-mont-bold'>Sales</h1>
                <h1 className='text-xl font-mont-bold'>Fluffy friends</h1>
              </div>
            </div>
            {/* arroe div */}
            <div className='flex gap-14'>
              <Button name='Read About Us' />
            </div>
          </div>
          {/* next div */}
        </div>
        <Image
          src='/images/man2.png'
          alt='Picture of the author'
          className='absolute right-0 top-[25%]'
          width={350}
          height={350}
        />
      </section>
      {/* About page on small screen here */}

      <section className='relative h-full bg-[#F6F6F6] block lg:hidden'>
        <div className='max-w-[70rem] mx-auto px-6 py-28'>
          {/* First grid item */}
          <div className='space-y-4'>
            <h1 className='text-4xl font-mont-bold'>Who we are</h1>
            <h4 className='font-mont-regular text-gray-700 max-w-md leading-7 '>
              Meet our international teams made up of 86 innovators,
              branched into 8 departments, that influence the market
              throughout 20 different countries.
            </h4>
            <Image
          src='/images/man2.png'
          alt='Picture of the author'
          className=''
          width={350}
          height={350}
        />
            {/* arroe div */}
            <div className='flex gap-14'>
              <Button name='Read About Us' />
            </div>
          </div>
          {/* next div */}
        </div>
      </section>
    </>
  )
}
