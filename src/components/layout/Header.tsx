import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className='fixed top-0 left-0 w-full flex items-center justify-between px-16 py-4 text-light z-[99] mix-blend-difference'>
      <div className='relative font-body font-semibold text-lg text-third'>
        uncode.
      </div>
      <nav>
        <ul className='relative flex'>
          <li>
            <Link href='/'>
              <div className='nav-link mx-2'>Home</div>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <div className='nav-link mx-2'>About</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
