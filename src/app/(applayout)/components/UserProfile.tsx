import { IconBell } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import user from "@public/login1.png"

const UserProfile = () => {
    return (
        <div className="flex items-center gap-4 mb-4 h-18 p-2 rounded-2xl cursor-pointer">
            <div className="h-17 w-18 rounded-full bg-sky-500 relative overflow-hidden">
                <Image src={user} alt='' objectFit='contain' />
            </div>
            <div className="flex flex-col justify-center w-3/5 h-full">
                <h3 className="text-lg font-semibold truncate">John Doe</h3>
                <p className="text-sm text-gray-500 truncate">Online</p>
            </div>
            <div className="w-1/5 h-full">
                <div className="flex flex-col items-center justify-between h-full">
                    <div className=""><IconBell stroke={2} className='text-primary' /></div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile