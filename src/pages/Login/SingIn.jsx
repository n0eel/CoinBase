import { Logo } from '../../assets/images/Icons'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useContext } from 'react'
import { Context } from '../../context/Context'

function SingIn() {
    const {token, setToken} = useContext(Context)

    function handleSignInSubmit(e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        if(data.email == "n0elkchau@gmail.com" && data.password == "123"){
            setToken(data)
        }
    }

  return (
    <div className='text-center pt-[63px] flex flex-col items-center'>
        <Logo />
        <h2 className='text-[25px] font-bold text-white mb-[10px] mt-[14px]'>Sign In</h2>
        <form onSubmit={handleSignInSubmit} autoComplete='off' className='w-[362px] text-start mt-[10px]'>
            <label className='flex flex-col mb-[27px]'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>Email</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="email" name='email' placeholder='Email' />
            </label>
            <label className='flex flex-col'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>Password</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none' type="password" name='password' placeholder='Password' />
            </label>
            <Link className='text-white text-[15px] leaidng-[15px] block text-center py-5' to={"/sign-up"}>Sign Up</Link>
            <Button type={"submit"} title={"Sign In"}/>
        </form>
    </div>
  )
}

export default SingIn
