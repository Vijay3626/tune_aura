'use client'
import { validateForm } from '@/app/_validation';
import { emailValidate, emptyPasswordValidate } from '@/context/validationrejex';
import Link from 'next/link'
import React, { useState } from 'react'
import { handlelogin } from '../_actions';
import { showToast } from '@/app/constants';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [formdata, setFormdata] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(formdata, {email: emailValidate,password: emptyPasswordValidate});
    setError(errors as { email: string; password: string });
    if (isValid) {
      const result = await handlelogin(formdata);
      console.log('result: ', result);
      if(result.status === 200){
        localStorage.setItem('token', result.data.token);
        showToast(result.data.message, 'success');
        router.push('/dashboard');
      }
      else{
        showToast(result.data.message, 'error');
      }
    }
  };
  return (
    <div className="flex flex-col justify-center h-full p-5 w-full md:w-[400px]">
      <h1 className='text-large text-muted font-bold'>Logineser</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 my-5'>
          <label className='flex flex-col '>
            <span className='label'>Email</span>
            <input className={`inputField ${error.email && '!border-red-400'}`} type="text" value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
            <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.email}</p>
          </label>
          <label className='flex flex-col'>
            <span className='label'>Password</span>
            <input className={`inputField ${error.password && '!border-red-400'}`} type="password" value={formdata.password} onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
            <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.password}</p>
          </label>
          <div className="flex justify-end">
            <button className='text-primary text-sm cursor-pointer font-medium'>Forgot Password?</button>
          </div>
        </div>
        <button type='submit' className='primaryButton' onClick={handleSubmit}>Login</button>
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