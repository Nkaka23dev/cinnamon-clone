import Link from 'next/link'
import Image from 'next/image'
import {  useEffect, useState } from 'react'
import Button from '../buttons/Button';


export default function NavBar () {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 30){
      setColor(true)
    }else {
      setColor(false)
    }
  }
  useEffect(() => {
    changeColor();
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <>
      <header className={color?'hidden lg:block fixed top-0 left-0 z-50 right-0 text-black bg-white':'fixed top-0 left-0 right-0 z-50 hidden lg:block '}>
        <nav className='flex py-2 items-center max-w-[70rem] mx-auto justify-between'>
          <div className='w-1/3 '>
            <Link href='#' className='text-3xl font-mont-bold tracking-wide '>
              CINNAMON
            </Link>
          </div>
          <ul className='flex  items-center flex-1 justify-between w-2/3'>
            <li className={color?'text-black text-md hover:text-[#5135FF] font-mont-semiBold':'text-lg text-white font-mont-semiBold hover:text-[#5135FF]'}>
              <Link href='#'>Projects</Link>
            </li>
            <li className={color?'text-black text-md hover:text-[#5135FF] font-mont-semiBold':'text-lg text-white font-mont-semiBold hover:text-[#5135FF]'}>
              <Link href='#'>Services</Link>
            </li>
            <li className={color?'text-black text-md hover:text-[#5135FF] font-mont-semiBold':'text-lg text-white font-mont-semiBold hover:text-[#5135FF]'}>
              <Link href='#'>About Us</Link>
            </li>
            <li className={color?'text-black text-md hover:text-[#5135FF] font-mont-semiBold':'text-lg text-white font-mont-semiBold hover:text-[#5135FF]'}>
              <Link href='#'>Careers</Link>
            </li>
            <li className={color?'text-black text-md hover:text-[#5135FF] font-mont-semiBold':'text-lg text-white font-mont-semiBold hover:text-[#5135FF]'}>
              <Link href='#'>Blog</Link>
            </li>
            <li className=''>
              <Link href='#'>
              <button offset="0" className={color?"rounded-button bg--dark border--blue bg--white":"rounded-button border--white bg--dark"}><div aria-label="Play" offset="0" class={color?"rounded-button__play play--blue":"rounded-button__play play"}></div></button>
              </Link>
            </li>
            <li className='pb-4'>
              <Link href='#'>
                {' '}
                <Button name="Contact Us" />{' '}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
       {/* Navbar for big screen */}

      {/* Navbar for small devices */}
      <header className={color?'block lg:hidden fixed top-0 left-0 z-50 right-0 text-black bg-white':'fixed top-0 left-0 right-0 z-50 block lg:hidden '}>
        <nav className='flex items-center py-6 px-5 max-w-[70rem] mx-auto justify-between'>
          <div className='w-1/3 '>
            <Link href='#' className='text-3xl font-mont-heavy tracking-wide '>
              CINNAMON
            </Link>
          </div>
          <div>
          <Image
                src='/menu/white.svg'
                alt='Picture of the author'
                className={color?'hidden':'block'}
                width={40}
                height={40}
              />
              <Image
                src='/menu/dark.svg'
                alt='Picture of the author'
                className={color?'block':'hidden'}
                width={40}
                height={40}
              />
          </div>
        </nav>
      </header>
       {/* End Navbar for small devices */}
    </>
  )
}
