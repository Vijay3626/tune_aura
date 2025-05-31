import { IconSearch } from '@tabler/icons-react'
import React from 'react'
import UserList from './UserList'

const Sidebar = () => {
    return (
        <div className='h-full overflow-auto bg-white rounded-3xl  relative'>
            
            <div className="sticky top-0 left-0 bg-white z-10 p-5">
                <div className="relative">
                    <input type="text" className='inputField !rounded-full !pr-12' />
                    <span className="absolute top-4 right-4 cursor-pointer"><IconSearch stroke={2} className='text-gray-300' /></span>
                </div>
            </div>
            <div className="pt-5 overflow-auto">
                <UserList />
            </div>
        </div>
    )
}

export default Sidebar