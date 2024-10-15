import { Logo } from '../../assets/images/Icons'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import LoadingIcon from '../../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'

function SingIn() {
    const {token, setToken} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const signUpData = JSON.parse(localStorage.getItem("signUp"))

    function handleSignInSubmit(e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        setIsLoading(true)
        if(signUpData){
            if(data.email == signUpData.email && data.password == signUpData.password){
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else{
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User is not found!")
                }, 1000);
            }
            
        }else {
            if(data.email == "n0elkchau@gmail.com" && data.password == "123"){
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else{
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error("User is not found!")
                }, 1000);
            }
        }
    }

  return (
    <div data-aos="fade-up" data-aos-duration="1100" className='text-center pt-[63px] flex flex-col items-center'>
        <Toaster position="top-center" reverseOrder={false}/>
        <Logo />
        <h2 className='text-[25px] font-bold text-white mb-[10px] mt-[14px]'>Sign In</h2>
        <form onSubmit={handleSignInSubmit} autoComplete='off' className='w-[362px] text-start mt-[10px]'>
            <label className='flex flex-col mb-[27px]'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>Email</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none focus:shadow-sm focus:shadow-white' type="email" name='email' placeholder='Email' />
            </label>
            <label className='flex flex-col'>
                <span className='text-[15px] text-white inline-block mb-[17px]'>Password</span>
                <input required className='py-[23px] pl-[34px] rounded-[100px] outline-none focus:shadow-sm focus:shadow-white' type="password" name='password' placeholder='Password' />
            </label>
            <Link className='text-white text-[15px] leaidng-[15px] block text-center my-5 hover:scale-110 duration-300' to={"/sign-up"}>Sign Up</Link>
            <Button title={"Sign In"}>
                {isLoading ? <img className='scale-[2.5] mx-auto' src={LoadingIcon} alt="Loading" width={27}/> : "Sign In"}      
            </Button>
        </form>
    </div>
  )
}

export default SingIn
