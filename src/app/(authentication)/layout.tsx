'use client'
import React from 'react'
import Image from 'next/image';
import login from "../../../public/login1.png"

const layout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (


        <div className="h-screen w-screen flex items-center justify-center p-5">
            <div className={`w-full h-full flex  transition-transform duration-700 rounded-2xl ease-in-out`}>
                <div className={`bg-primary  hidden lg:block p-5 relative rounded-l-2xl overflow-hidden w-2/5`}>
                    <h1 className='text-5xl font-sans text-white font-bold pt-5 pl-5'>Feel the rhythm<br />Live the music.</h1>
                    <div className="">
                        <Image src={login} alt="Tune Aura" width={0} height={0} className='absolute top-0 left-0 w-full h-full object-cover' />
                    </div>
                </div>
                <div className={`bg-[#F4F2FF] rounded-r-2xl transition-transform duration-700 ease-in-out overflow-hidden p-5 flex justify-center w-3/5`}>{children}</div>
            </div>
        </div>
    )


}

export default layout
