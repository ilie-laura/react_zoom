"use client";
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#292737] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
            <div className='flex flex-1 flex-col gap-6'>
                {sidebarLinks.map((link) => {
                    const isActive = pathName === link.route || pathName.startsWith(link.route);
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                                'bg-[#51A3B0]': isActive,
                                'hover:bg-[#3f8491] hover:text-white': !isActive
                            })}
                        >
                            <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                            <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>

                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Sidebar;
