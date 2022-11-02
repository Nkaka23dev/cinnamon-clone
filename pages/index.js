import { Fragment } from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import SubHero from '../components/SubHero'

export default function Home () {
  return (
    <Fragment>
      {/* Header section */}
      <section className='background-image'>
        <NavBar />
        <div className='max-w-6xl mx-auto pt-[5rem]'>
        <div className='py-32 space-y-5'>
          <h3 className='title tracking-wide font-mont-heavy text-white'>
            Results focused design &<br></br>
            development agency.
          </h3>
          <p className='sub-title text-2xl font-mont-semiBold text-white'>
          Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.
          </p>
        </div>
        </div>
      </section>
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
      <section className='background-image h-screen'></section>
    </Fragment>
  )
}
