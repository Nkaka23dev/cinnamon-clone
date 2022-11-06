import Button from '../buttons/Button'
import Image from 'next/image'

export default function Team (props) {
  return (
    <>
      <section className='bg-[#F6F6F6] relative py-40 px-5 hidden 2xl:px-0 lg:block'>
        <div className='max-w-[70rem] mx-auto'>
          <div className='max-w-5xl flex flex-row justify-between gap-52'>
            <div className='space-y-5 w-2/4'>
              <h1 className='text-[3.275rem] leading-[4.3rem] font-mont-bold'>
                Agile team<br></br> on demand
              </h1>
            </div>
            <div className='space-y-5 w-2/3 mt-15 '>
              <h1 className='text-[1.05rem]  text-[#525252] max-w-sm font-mont-regular'>
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
          className='absolute right-0 top-72'
          width={350}
          height={350}
        />
      </section>
      {/* Mobile version of the team is down here */}

      {/* Mobile version of the team is down here */}
      <section className='bg-[#F6F6F6] block lg:hidden'>
        <div className='max-w-[70rem] mx-auto px-5 py-20'>
          <div className='max-w-5xl space-y-16'>
            <div className='space-y-5 '>
              <h1 className='text-[2.275rem] leading-[3.2rem] font-mont-bold'>
                Agile team<br></br> on demand
              </h1>
            </div>
            <Image
              src='/images/image 4.png'
              alt='Picture of the author'
              className=''
              width={320}
              height={320}
            />
            <div className='space-y-5 mb-5'>
              <h1 className='text-base text-[#525252]  font-mont-regular'>
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </h1>
              <Button name='See how it works' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
