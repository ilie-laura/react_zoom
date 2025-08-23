"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
       <Sheet>

  <SheetTrigger asChild>
    <Image src='/icons/hamburger.svg' alt='Menu' width={36} height={36} className='cursor-pointer sm:hidden'/>
  </SheetTrigger>

  <SheetContent side='left' className='border-none bg-[#292737]'>
    <SheetHeader className='m-0 p-0'>
        <SheetTitle className='text-white font-bold text-lg opacity-0'>Menu</SheetTitle>
    </SheetHeader>
    
   <Link href='/' className='flex items-center gap-1'>
      <Image src='/icons/logo.svg' alt='Logo' width={32} height={32} className='max-sm:size-10'/>
      <p className='text-white font-extrabold text-[26px]'>Yoom</p>
      </Link>
      <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
        <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
             {sidebarLinks.map((link) => {
                    const isActive = link.route === '/' ? pathName === '/' : pathName.startsWith(link.route);
                    return (
                        <SheetClose asChild key={link.route}>
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                                'bg-[#51A3B0]': isActive,
                                'hover:bg-[#3f8491] hover:text-white': !isActive
                            })}
                        >
                            <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                            <p className='font-semibold'>{link.label}</p>

                        </Link>
                        </SheetClose>
                    );
                })}
            </section>

        </SheetClose>

      </div>

  </SheetContent>
</Sheet>



    </section>
  )
}

export default MobileNav;
