import Link from 'next/link'
import Button from './Button'

export default function NavBar () {
  return (
    <>
      <header className='fixed top-0 left-0 right-0'>
        <nav className='flex items-center max-w-[70rem] mx-auto justify-between'>
          <div className='w-1/3 '>
            <Link href='#' className='text-2xl font-mont-heavy tracking-wide'>
              CINNAMON
            </Link>
          </div>
          <ul className='flex items-center flex-1 justify-between w-2/3'>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Projects</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Projects</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Services</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>About Us</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Careers</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Blog</Link>
            </li>
            <li className='tracking-wide nav-link'>
              <Link href='#'>Careers</Link>
            </li>
            <li className='pb-4'>
              <Link href='#'> <Button/> </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
