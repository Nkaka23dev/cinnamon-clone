import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/buttons/Button'
import Hero from '../components/Hero'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Position from '../components/sections/position'
import Work from '../components/sections/work'
import SubHero from '../components/SubHero'
import Project from '../components/sections/project'

export default function Home () {
  return (
    <div className='overflow-hidden'>
      {/* Header section */}
      <Header />
      {/* Hero section */}
      <Hero
        className='bg-[#91F1C3]'
        img='/images/image1.png'
        height='1100'
        width='1100'
      />

      <SubHero
        heading1='PRODUCT DESIGN'
        heading2='QUALITY ASSURANCE'
        title='Corrily:  Optimize prices'
        title2=' to maximize revenue'
        content='Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.'
      />

      <Hero
        className='bg-[#50227D]'
        img='/images/image2.png'
        height='1300'
        width='1100'
      />

      <SubHero
        heading1='PRODUCT DESIGN'
        heading2='WEB DEVELOPMENT'
        title='Fiona:  Engage &'
        title2='Decide'
        content='Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.'
      />
      <Hero
        className='bg-[#FFCB47]'
        img='/images/image3.png'
        height='1300'
        width='1100'
      />

      <SubHero
        heading1='PRODUCT DESIGN'
        heading2='WEB DEVELOPMENT'
        title='Ukulele: '
        title2='The largest ukulele tabs archive'
        content='Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.'
      />
      <section className='background-image mt-20 lg:mt-40 py-8 lg:py-24'>
        <div className='max-w-6xl mx-auto pt-[5rem] flex flex-col lg:flex-row justify-between'>
          <div className='text-white w-full lg:w-2/5'>
            <h1 className='text-4xl px-5 lg:px-0 lg:text-5xl tracking-wide font-bold font-mont-bold mb-12 lg:mb-0 '>
              Our services
            </h1>
          </div>
          <div className='text-white px-5 lg:px-0  w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-24'>
            {/* First grid item */}
            <div className='space-y-7 lg:space-y-5'>
              <Image
                src='/images/s_image3.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={50}
              />
              <h1 className='text-2xl font-mont-bold'>Product design</h1>
              <h4 className='font-mont-semiBold text-[#CFCFCF]'>
                Producing, prototyping and testing sketches, high-fidelity
                wireframes and the final UI is a process that results in
                intuitive and impactful design that’s easy on the eyes.
              </h4>
            </div>
            {/* First grid item */}
            <div className='space-y-5'>
              <Image
                src='/images/s_image2.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={50}
              />
              <h1 className='text-2xl font-mont-bold'>Product design</h1>
              <h4 className='font-mont-semiBold text-[#CFCFCF]'>
                Producing, prototyping and testing sketches, high-fidelity
                wireframes and the final UI is a process that results in
                intuitive and impactful design that’s easy on the eyes.
              </h4>
            </div>
            {/* First grid item */}
            <div className='space-y-5'>
              <Image
                src='/images/s_image1.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={50}
              />
              <h1 className='text-2xl font-mont-bold'>Product design</h1>
              <h4 className='font-mont-semiBold text-[#CFCFCF]'>
                Producing, prototyping and testing sketches, high-fidelity
                wireframes and the final UI is a process that results in
                intuitive and impactful design that’s easy on the eyes.
              </h4>
            </div>
            {/* First grid item */}
            <div className='space-y-5'>
              <Image
                src='/images/s_image4.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={50}
              />
              <h1 className='text-2xl font-mont-bold'>Product design</h1>
              <h4 className='font-mont-semiBold text-[#CFCFCF]'>
                Producing, prototyping and testing sketches, high-fidelity
                wireframes and the final UI is a process that results in
                intuitive and impactful design that’s easy on the eyes.
              </h4>
            </div>
            <div className='space-y-5'>
              <Button name='See our services' />
            </div>
          </div>
        </div>
      </section>
      {/* Next section */}
      <section className='bg-[#F6F6F6] relative py-20 lg:py-40'>
        <div className='max-w-[70rem] mx-auto'>
          <div className='max-w-5xl flex flex-col lg:flex-row justify-between gap-52'>
            <div className='space-y-5 lg:w-2/4 px-5 lg:px-0 '>
              <h1 className='text-4xl lg:text-[3.275rem] lg:leading-[4.3rem] font-mont-bold'>
                Agile team<br></br> on demand
              </h1>
            </div>
            <div className='space-y-5 px-5 lg:px-0 lg:w-2/3 mt-15 '>
              <h1 className='text-[1.05rem]  text-[#525252] lg:max-w-sm font-mont-regular pt-20 lg:pt-0'>
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </h1>
              <Button name='See how it works' />
            </div>
          </div>
        </div>
        <Image
          src='/images/image 4.png'
          alt='Picture of the author'
          className='absolute right-28 scale-90 lg:scale-100 lg:right-0 top-52 lg:top-72'
          width={350}
          height={350}
        />
      </section>

      {/* next section */}
      <section className='relative'>
        <div className='max-w-[70rem] mx-auto py-36 flex flex-col lg:flex-row justify-between'>
          {/* First grid item */}
          <div className='space-y-10 px-5 lg:px-0 lg:w-2/3'>
            <h1 className='text-3xl lg:text-4xl font-mont-bold'>
              They’re consistent, and <br className='block lg:hidden'></br> the
              communication is <br className='block lg:hidden'></br> good.
            </h1>
            <h4 className='font-mont-regular tracking-wide text-gray-700 max-w-2xl leading-10 lg:leading-7'>
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </h4>
            <div className='flex lg:flex-row flex-col gap-3 lg:gap-8'>
              <Image
                src='/images/man1.png'
                alt='Picture of the author'
                className=''
                width={70}
                height={70}
              />
              <div>
                <h1 className='text-2xl font-mont-bold'>Garin Toren,</h1>
                <h1 className='text-md'>CEO, ping</h1>
              </div>
            </div>
            {/* arroe div */}
            <div className='mb-10 lg:mb-0 flex gap-14'>
              <Image
                src='/images/arrow_left.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={45}
              />
              <Image
                src='/images/arrow_right.png'
                alt='Picture of the author'
                className=''
                width={50}
                height={45}
              />
            </div>
          </div>
          {/* next div */}
          <div className='lg:w-1/3 flex'>
            <div className='lg:ml-auto ml-6 mt-10 lg:mt-0 flex flex-col justify-between'>
              <Image
                src='/images/ping.png'
                alt='Picture of the author'
                className='mt-16 hidden lg:block'
                width={200}
                height={200}
              />
              <div className='ml-auto flex gap-3 '>
                <Image
                  src='/images/arrow.svg'
                  alt='Picture of the author'
                  className=''
                  width={10}
                  height={10}
                />
                <Link
                  href=''
                  className='text-blue-600 font-bold underline pb-2'
                >
                  VIEW CASE STUDY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* next section */}
      <section className='relative lg:h-full bg-[#F6F6F6]'>
        <div className='max-w-[70rem] mx-auto px-6 lg:px-0 py-10 lg:py-56 flex justify-between'>
          {/* First grid item */}
          <div className='lg:space-y-10 lg:w-2/3'>
            <h1 className='text-4xl lg:text-5xl font-mont-bold'>Who we are</h1>
            <h4 className='font-mont-regular text-gray-700 max-w-2xl leading-7 '>
              Meet our international teams made up of 86 <br></br> innovators,
              branched into 8 departments, that <br></br> influence the market
              throughout 20 different countries.
            </h4>
            <div className='hidden lg:flex  justify-between py-8 lg:w-4/5'>
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
            <div className='flex mt-[27rem] lg:mt-0 lg:gap-14'>
              <Button name='Read About Us' />
            </div>
          </div>
          {/* next div */}
        </div>
        <Image
          src='/images/man2.png'
          alt='Picture of the author'
          className='absolute right-[9.5rem] lg:right-0 top-[20%] lg:top-[25%] scale-75 lg:scale-100'
          width={350}
          height={350}
        />
      </section>
      {/* Work section section */}
      <Work />
      {/* work section ends */}
      <Position />
      {/* next section */}

      <section className='max-w-[70rem] mx-auto flex flex-col py-36'>
        <div>
          <div className='z-10 mb-24'>
            <h1 className='text-[3.5rem] font-bold font-mont-bold'>
              Our offices
            </h1>
          </div>
          {/* Next div is right here */}
          <div className='grid px-12 grid-cols-3 gap-32 -mr-[37rem] '>
            <div className='w-full'>
              <div>
                <img
                  src='/images/city3.jpeg'
                  className='min-w-full min-h-full max-w-full max-h-full scale-125'
                />
              </div>
              <div className='mt-20 scale-125 flex gap-5 items-center'>
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
                <h1 className='text-xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg -ml-2 mt-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
              <div className='mt-16 scale-125 flex gap-5 items-center'>
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
                  className='min-w-full min-h-full max-w-full max-h-full scale-125'
                />
              </div>
              <div className='mt-20 scale-125 flex gap-5 items-center'>
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
                <h1 className='text-xl font-mont-bold'>New York</h1>
              </div>
              <div>
                <h1 className='text-lg -ml-2 mt-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* next div */}
            <div className='w-full'>
              <div>
                <img
                  src='/images/city11.jpeg'
                  className='min-w-full min-h-full max-w-full max-h-full scale-125'
                />
              </div>
              <div className='mt-20 scale-125 flex gap-5 items-center'>
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
                <h1 className='text-xl font-mont-bold'>Zagreb</h1>
              </div>
              <div>
                <h1 className='text-lg -ml-2 mt-3'>
                  Slavonska avenija 6, 10000, zagreb, croacia
                </h1>
              </div>
            </div>
            {/* end o grid div */}
          </div>
        </div>
      </section>

      {/* Next section */}

      <section className='max-w-[70rem] pb-40 mx-auto flex flex-col '>
        <div>
          <div className=''>
            <h1 className='text-[3.5rem] font-bold font-mont-bold pb-16'>
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
      <Project />
      {/* Next Section */}
      <Footer />
    </div>
  )
}
