import React from 'react'
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import { IconSettings, IconUsersPlus } from '@tabler/icons-react';
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';
const layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="h-screen p-5">
            <div className="h-full w-full bg-[#F5F7FB] rounded-3xl flex">
                <div className="rounded-t-3xl w-15">
                    <div className="flex flex-col items-center h-full py-10 ">
                        <Tooltip content="Settings" placement='right' className='z-100'>
                        <Link href="#" className="px-5 my-4 cursor-pointer">
                            <IconSettings stroke={2} className='text-gray-500' />
                        </Link>
                        </Tooltip>
                        <Tooltip content="Requests" placement='right' className='z-100'>
                        <div className="px-5 my-4  cursor-pointer">
                            <IconUsersPlus stroke={2} className='text-gray-500'/>
                        </div> 
                        </Tooltip>
                    </div>
                </div>
                <div className="flex gap-5 p-5 pl-0 h-full w-[calc(100%-2.5rem)]">
                    <div className="h-full w-1/4">
                        <UserProfile/>
                        <div className="h-[calc(100%-88px)]">
                        <Sidebar />
                        </div>
                    </div>
                    <div className="w-4/5">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default layout