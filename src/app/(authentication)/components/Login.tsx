import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col justify-center h-full p-5 w-[400px]">
      <h1 className='text-large text-muted font-bold'>Login</h1>
      <form >
        <div className='flex flex-col gap-4 my-5'>
          <label className='flex flex-col '>
            <span className='label'>Email</span>
            <input className='inputField' type="text" />
          </label>
          <label className='flex flex-col'>
            <span className='label'>Password</span>
            <input className='inputField' type="password" />
          </label>
          <div className="flex justify-end">
            <button className='text-primary text-sm cursor-pointer font-medium'>Forgot Password?</button>
          </div>
        </div>
        <button type='submit' className='primaryButton'>Login</button>
      </form>
      <div className="flex justify-center items-center gap-2 my-5">
        <span className='text-muted text-sm'>Dont have an account?</span>
        <Link href={'/register'} className='text-primary text-sm cursor-pointer font-medium'>
        <button className='text-primary text-sm cursor-pointer font-medium' >Register</button>
        </Link>
      </div>
    </div>
  )
}

export default Login