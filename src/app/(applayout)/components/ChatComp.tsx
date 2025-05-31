import {  IconDots, IconLink, IconMoodSmile, IconPhone, IconSend2, IconVideo } from '@tabler/icons-react'
import React from 'react'

const ChatComp = () => {
    return (
        <div className="h-full w-full rounded-3xl relative">
            <div className="bg-gray-200 px-5 pt-5 rounded-tr-3xl">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-sky-500">
                            <img src="/login1.png" alt="User Avatar" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <h2 className='font-bold text-xl'>John Doe</h2>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="cursor-pointer p-2 hover:bg-primary-200 rounded-lg transition-colors duration-500">
                            <IconPhone stroke={2} className='text-primary' />
                        </div>
                        <div className="cursor-pointer p-2 hover:bg-primary-200 rounded-lg transition-colors duration-500">
                            <IconVideo stroke={2} className='text-primary' />
                        </div>
                        <div className="cursor-pointer p-2 hover:bg-primary-200 rounded-lg transition-colors duration-500">
                            <IconDots stroke={2} className='text-primary' />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 py-4 px-10">
                    <p className='text-lg  cursor-pointer text-primary font-semibold tab_active relative'>Conversations</p>
                    <p className='text-lg text-gray-400 cursor-pointer font-semibold relative'>Files</p>
                </div>
            </div>
            <div className="h-[calc(75vh-100px)] w-full overflow-auto"></div>
            <div className="">
                <div className="sticky bottom-0 left-0 pt-7 rounded-bl-3xl">
                    <div className="w-full relative">
                        <input type="text" placeholder='Type a message...' className='inputField !rounded-full !pr-12 w-full' />
                        <div className="absolute top-0 right-4  p-2">
                            <div className="flex gap-2">
                                <span className="cursor-pointer hover:bg-primary-200 rounded-full p-2">
                                    <IconLink stroke={2} className='text-primary' />
                                </span>
                                <span className="cursor-pointer hover:bg-primary-200 rounded-full p-2">
                                    <IconMoodSmile stroke={2} className='text-primary' />
                                </span>
                                <span className="cursor-pointer hover:bg-primary-200 rounded-full p-2">
                                    <IconSend2 stroke={2} className='text-primary' />
                                </span>
                            </div>
                        </div>
                        {/* <span className="absolute top-2 right-4 cursor-pointer hover:bg-primary-200 rounded-full p-2">
                            <IconSend2 stroke={2} className='text-primary' />
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatComp