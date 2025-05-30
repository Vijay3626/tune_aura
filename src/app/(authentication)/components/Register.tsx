'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { validateForm } from '@/app/_validation';
import { cnfPasswordValidate, emailValidate, nameValidate, passwordValidate } from '@/context/validationrejex';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { handleRegister } from '../authServices';

const Register = () => {
    const [formdata, setFormdata] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { isValid, errors } = validateForm(formdata, {
            name: nameValidate,
            email: emailValidate,
            password: passwordValidate,
            confirmPassword: cnfPasswordValidate,
        })
        setError(errors as { name: string; email: string; password: string; confirmPassword: string });

        if (isValid) {
            const result = await handleRegister(formdata);
            console.log('result: ', result);
        }
    }
    return (
        <div className="flex flex-col justify-center h-full p-5 w-full md:w-[400px]">
            <h1 className='text-large text-muted font-bold'>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col  my-5'>
                    <label className='flex flex-col'>
                        <span className='label'>Name</span>
                        <input className='inputField' type="text" value={formdata.name} onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} />
                        <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.name}</p>
                    </label>
                    <label className='flex flex-col'>
                        <span className='label'>Email</span>
                        <input className='inputField' type="email" value={formdata.email} onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                        <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.email}</p>
                    </label>
                    <label className='flex flex-col'>
                        <span className='label'>Password</span>
                        <div className="relative">
                            <input className='inputField' type={showPassword.password ? 'text' : 'password'} value={formdata.password} onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
                            <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))}>
                                {
                                    showPassword.password ? <IconEye size={20} stroke={2} /> : <IconEyeClosed size={20} stroke={2} />
                                }
                            </div>
                        </div>
                        <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.password}</p>
                    </label>
                    <label className='flex flex-col'>
                        <span className='label'>Confirm Password</span>
                        <div className="relative">
                            <input className='inputField' type={showPassword.confirmPassword ? 'text' : 'password'} value={formdata.confirmPassword} onChange={(e) => setFormdata({ ...formdata, confirmPassword: e.target.value })} />
                            <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}>
                                {
                                    showPassword.confirmPassword ? <IconEye size={20} stroke={2} /> : <IconEyeClosed size={20} stroke={2} />
                                }
                            </div>
                        </div>
                        <p className='text-red-400 text-xs min-h-5 font-bold mt-1'>{error.confirmPassword}</p>
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

export default Register