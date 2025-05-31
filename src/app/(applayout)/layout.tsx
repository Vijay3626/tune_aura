import React from 'react'
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
const layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="h-screen p-5">
            <div className="h-full w-full bg-[#F5F7FB] rounded-3xl">
                <div className="flex gap-5 p-5 h-full">
                    <div className="h-[80vh] w-1/4">
                        <UserProfile/>
                        <Sidebar />
                    </div>
                    <div className="w-4/5">{children}</div>
                </div>

            </div>
        </div>
    )
}

export default layout