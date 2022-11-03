import Button from "../buttons/Button";
import Image from 'next/image';


export default function Position (props) {
    return(
     <>
      <section className='background-image py-24'>
        <div className='max-w-[70rem] px-5 lg:px-0 mx-auto lg:pt-[5rem] flex flex-col lg:flex-row justify-between'>
          <div className='text-white space-y-8 lg:w-3/5'>
            <h1 className='text-4xl lg:text-6xl tracking-wide font-bold font-mont-bold'>
              We’re growing
            </h1>
            <div className='space-y-5'>
              <h1 className='css-nqinkkkk mb-5 max-w-[28rem] font-mont-semiBold'>
                Jump on board with Cinnamon and get the privilege of working on
                challenging projects for leading global companies! Make the
                world a better, more connected place.
              </h1>
              <Button name='See All Positions' />
            </div>
          </div>

          <div className='text-white mt-14 lg:mt-7 flex flex-col lg:w-2/5 '>
            <div>
              <div className='flex w-full justify-between'>
                <h1 className='text-2xl tracking-wide text-[#f9f9f9] font-mont-bold'>
                  Android Developer
                </h1>
                <div className='flex'>
                  <Image
                    src='/images/arrowRightWhite.png'
                    alt='Picture of the author'
                    className='m-auto'
                    width={50}
                    height={45}
                  />
                </div>
              </div>
              <div className='mt-7 h-[0.7px] w-full bg-[#6b6868]'></div>
            </div>
            {/* second dic */}
            <div className='py-5'>
              <div className='flex w-full justify-between'>
                <h1 className='text-2xl tracking-wide text-[#f9f9f9]  font-mont-bold'>
                  Android Developer
                </h1>
                <div className='flex'>
                  <Image
                    src='/images/arrowRightWhite.png'
                    alt='Picture of the author'
                    className='m-auto'
                    width={50}
                    height={45}
                  />
                </div>
              </div>
              <div className='mt-7 h-[0.7px] w-full bg-[#6b6868]'></div>
            </div>
            {/* second div */}
            <div>
              <div className='flex w-full justify-between'>
                <h1 className='text-2xl text-[#f9f9f9] tracking-wide font-mont-bold'>
                  Backend Development Team Lead
                </h1>
                <div className='flex'>
                  <Image
                    src='/images/arrowRightWhite.png'
                    alt='Picture of the author'
                    className='m-auto'
                    width={50}
                    height={45}
                  />
                </div>
              </div>
              <div className='mt-7 h-[0.7px] w-full bg-[#6b6868]'></div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
  