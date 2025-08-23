import React from 'react'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn,UserButton } from '@clerk/nextjs'
import { SignedOut, SignInButton } from '@clerk/clerk-react'
const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-[#292737] px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
      <Image src='/icons/logo.svg' alt='Logo' width={32} height={32} className='max-sm:size-10' />
      <p className='text-white font-extrabold text-[26px] max-sm:hidden'>Yoom</p>
      </Link>

      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>
       
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar;
