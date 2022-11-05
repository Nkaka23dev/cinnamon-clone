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
import Team from '../components/sections/Team'
import About from '../components/sections/About'
import Office from '../components/sections/Office'
import Tech from '../components/sections/Tech'

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
      {/* Team  section */}
      <Team/>
      {/* End of Team section */}
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
      {/* Abou section start here */}
     <About/>
     {/* About Section end hjere */}
      {/* Work section section */}
      <Work />
      {/* work section ends */}
      <Position />
      {/* Office section*/}
     <Office/>
      {/* Office section end her section */}

      <Tech/>
      <Project />
      {/* Next Section */}
      <Footer />
    </div>
  )
}
