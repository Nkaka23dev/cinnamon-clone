import Button from "../buttons/Button";
import Image from 'next/image'

export default function Work (props) {
    return(
     <>
    <section className='bg-white py-40 relative hidden lg:block'>
        <div className='max-w-[70rem] mx-auto flex justify-start'>
          <div className='max-w-5xl flex items-start justify-between gap-36'>
            <Image
              src='/images/cinama1.png'
              alt='Picture of the author'
              className=''
              width={300}
              height={300}
            />
            <div className='space-y-8 ml-auto w-full '>
              <h1 className='css-nqi6vo max-w-sm font-mont-semiBold'>
                Seize the unique opportunity to participate<br></br> in a wide
                range of courses conducted by<br></br> professionals with an
                impeccable<br></br> reputation in the digital industry.
              </h1>
              <Button name='See how it works' />
            </div>
          </div>
        </div>
        <img
          src='/images/cinama2.png'
          className=' top-40 absolute h-[22.3rem] w-[35rem] right-0 bottom-0'
        />
      </section>

      {/* Small devices */}

      <section className='bg-white py-24 relative block lg:hidden'>
        <div className='max-w-full mx-auto flex justify-center px-5'>
          <div className='max-w-full flex justify-center flex-col gap-10'>
            <Image
              src='/images/cinama1.png'
              alt='Picture of the author'
              className=''
              width={300}
              height={300}
            />
            <div className='space-y-8 w-full '>
              <h1 className='text-[#525252] font-mont-regular'>
                Seize the unique opportunity to participate in a wide
                range of courses conducted by professionals with an
                impeccablereputation in the digital industry.
              </h1>
              <Button name='See how it works' />
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
  