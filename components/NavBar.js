import Link from 'next/link'
import {  useEffect, useState } from 'react'
import Button from './Button'

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
      <header className={color?'fixed top-0 left-0 z-50 right-0 text-black bg-white':'fixed top-0 left-0 right-0 z-50'}>
        <nav className='flex items-center max-w-[70rem] mx-auto justify-between'>
          <div className='w-1/3 '>
            <Link href='#' className='text-2xl font-mont-heavy tracking-wide '>
              CINNAMON
            </Link>
          </div>
          <ul className='flex items-center flex-1 justify-between w-2/3'>
            <li className={color?'text-black font-mont-semiBold':'text-white font-mont-semiBold'}>
              <Link href='#'>Projects</Link>
            </li>
            <li className={color?'text-black font-mont-semiBold':'text-white font-mont-semiBold'}>
              <Link href='#'>Services</Link>
            </li>
            <li className={color?'text-black font-mont-semiBold':'text-white font-mont-semiBold'}>
              <Link href='#'>About Us</Link>
            </li>
            <li className={color?'text-black font-mont-semiBold':'text-white font-mont-semiBold'}>
              <Link href='#'>Careers</Link>
            </li>
            <li className={color?'text-black font-mont-semiBold':'text-white font-mont-semiBold'}>
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
      {/* Navbar for small devices */}
    </>
  )
}
