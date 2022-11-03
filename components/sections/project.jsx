import Button from "../buttons/Button";
import Image from 'next/image';

export default function Project (props) {
    return(
     <>
     <section className='bg-[#F6F6F6] pt-20 pb-[12rem] lg:pb-[15rem] relative'>
        <div className='max-w-[70rem] mx-auto flex'>
          <div className='m-auto flex flex-col items-center'>
            <h1 className='pb-5 text-4xl lg:text-[3.4rem] font-mont-bold text-center leading-[5rem]'>
              <span className="hidden lg:block">Have a project in mind? </span><br></br> Let's work together.
            </h1>
            
            <Button name='Contact us' />
          </div>
        </div>
        <Image
          src='/images/cinama.png'
          alt='Picture of the author'
          className='absolute -left-40 lg:left-0 top-[13rem] scale-50 lg:scale-100'
          width={450}
          height={450}
        />
      </section>
    </>
    )
  }
  