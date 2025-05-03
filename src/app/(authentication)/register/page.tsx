import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center h-full p-5 w-[400px]">
      <h1 className='text-large text-muted font-bold'>Register</h1>
      <form >
        <div className='flex flex-col gap-4 my-5'>
        <label className='flex flex-col'>
            <span className='label'>Name</span>
            <input className='inputField' type="text" />
          </label>
          <label className='flex flex-col'>
            <span className='label'>Email</span>
            <input className='inputField' type="email" />
          </label>
          <label className='flex flex-col'>
            <span className='label'>Password</span>
            <input className='inputField' type="password" />
          </label>
          <label className='flex flex-col'>
            <span className='label'>Confirm Password</span>
            <input className='inputField' type="password" />
          </label>
        </div>
        <button type='submit' className='primaryButton'>Register</button>
      </form>
      <div className="flex justify-center items-center gap-2 my-5">
        <span className='text-muted text-sm'>Already have an account?</span>
        <Link href={'/login'} className='text-primary text-sm cursor-pointer font-medium'>
          <button className='text-primary text-sm cursor-pointer font-medium' >Log in</button>
        </Link>
      </div>
    </div>
  )
}

export default page