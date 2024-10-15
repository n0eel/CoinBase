import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import LoadingIcon from '../../assets/images/loading.png'

function SingUp() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmitSignUp(e) {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("signUp", JSON.stringify(data))
      navigate(-1)
    }, 1000);
  }
  return (
    <div data-aos="fade-up" data-aos-duration="1100" className='text-center pt-[63px] flex flex-col items-center'>
        <h2 className='text-[25px] font-bold text-white mb-[14px]'>Sign Up</h2>
        <form onSubmit={handleSubmitSignUp} autoComplete='off' className='w-[362px] text-start mt-[10px]'>
            <label className='flex flex-col mb-[27px]'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>New Email</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="email" name='email' placeholder='Email' />
            </label>
            <label className='flex flex-col'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>New Password</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="password" name='password' placeholder='Password' />
            </label>
            <Link className='text-white text-[15px] leaidng-[15px] block text-center py-5 hover:scale-110 duration-300' to={"/"}>Sign In</Link>
            <Button type={"submit"}>
              {isLoading ? <img className='scale-[2.5] mx-auto' src={LoadingIcon} alt="Loading" width={27}/> : "Sign Up"}
            </Button>
        </form>
    </div>
  )
}

export default SingUp
