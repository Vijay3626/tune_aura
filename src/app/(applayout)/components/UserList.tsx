import Image from 'next/image'
import React from 'react'
import image from "../../../../public/login2.png"
import image2 from "../../../../public/login1.png"
const UserList = () => {
    return (
        <div>
            {Array.from({ length: 10 }).map((item, index) => {
                return (
                    <div className="flex items-center gap-4 mb-4 h-18 hover:shadow-md p-2 rounded-2xl cursor-pointer" key={index}>
                        <div className="h-13 w-13 rounded-full bg-sky-500 relative overflow-hidden">
                            <Image src={index % 2 === 0 ? image : image2} alt='' objectFit='contain' />
                        </div>
                        <div className="flex flex-col justify-center w-3/5 h-full">
                            <h3 className="text-lg font-semibold truncate">John Doe</h3>
                            <p className="text-sm text-gray-500 truncate">Online</p>
                        </div>
                        <div className="w-1/5 h-full">
                            <div className="flex flex-col items-center justify-between h-full">
                                <p className='text-xs'>09:31</p>
                                <div className="px-1.5 py-1 rounded-2xl bg-primary text-white text-xs font-bold flex items-center justify-center">21</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default UserList