import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function SingUp() {
  return (
    <div className='text-center pt-[63px] flex flex-col items-center'>
        <h2 className='text-[25px] font-bold text-white mb-[14px]'>Sign Up</h2>
        <form autoComplete='off' className='w-[362px] text-start mt-[10px]'>
            <label className='flex flex-col mb-[27px]'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>New Email</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="email" name='email' placeholder='Email' />
            </label>
            <label className='flex flex-col'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>New Password</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="password" name='password' placeholder='Password' />
            </label>
            <Link className='text-white text-[15px] leaidng-[15px] block text-center py-5' to={"/"}>Sign In</Link>
            <Button type={"submit"} title={"Sign Up"}/>
        </form>
    </div>
  )
}

export default SingUp
