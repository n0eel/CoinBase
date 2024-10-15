import React, { useContext, useState } from 'react'
import { UploadImgIcon } from '../../assets/images/Icons'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import CustomLoading from '../../components/CustomLoading'

function AgentsAdd() {
  const {agents, setAgents} = useContext(Context)
  const [username, setUsername] = useState("")
  const [useremail, setUsereamil] = useState("")
  const [about, setAbout] = useState("")
  const [imgUrl, setImgUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  function handleSubmitAgent(e) {
    e.preventDefault()
    const data = { 
      id: agents.length + 1,
      isChecked: false, 
      status: true,
      imgUrl,
      username,
      useremail,
      about
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setAgents([...agents, data])
      navigate(-1)
    }, 1800);
  }

  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-semibold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-white text-[25px] font-bold'>Agent Create</h2>
      </div>
      <form autoComplete='off' onSubmit={handleSubmitAgent} className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <label className='w-[244px] h-[168px] border-[2px] border-white rounded-md flex flex-col items-center pt-[52px] mx-auto mb-[83px]'>
          <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
            {imgUrl ?
              <img className='w-full h-full' src={imgUrl} alt="Choosen img" width={"100%"} height={"100%"} />
            :
            <>
              <UploadImgIcon/>
              <strong className='text-white font-bold text-[12px] mt-[19px]'>Upload Agent image here</strong>
          </>
        }
        </label>
        <label className='flex flex-col w-[362px] mx-auto mb-[27px]'>
            <span className='text-[15px] text-white inline-block mb-[17px]'>Agent Name</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} required className='py-[23px] pl-[34px] rounded-[100px] outline-none focus:shadow-sm focus:shadow-white bg-transparent border-[2px] border-white text-white' type="text" name='agentName' placeholder='Enter name' />
        </label>
        <label className='flex flex-col w-[362px] mx-auto mb-[27px]'>
            <span className='text-[15px] text-white inline-block mb-[17px]'>Agent Email</span>
            <input value={useremail} onChange={(e) => setUsereamil(e.target.value)} required className='py-[23px] pl-[34px] rounded-[100px] outline-none focus:shadow-sm focus:shadow-white bg-transparent border-[2px] border-white text-white' type="email" name='agentEmail' placeholder='Enter email' />
        </label>
        <label className='flex flex-col w-[362px] mx-auto mb-[38px]'>
            <span className='text-[15px] text-white inline-block mb-[17px]'>About</span>
            <input value={about} onChange={(e) => setAbout(e.target.value)} required className='py-[23px] pl-[34px] rounded-[100px] outline-none focus:shadow-sm focus:shadow-white bg-transparent border-[2px] border-white text-white' type="text" name='agentAbout' placeholder='Enter about agent' />
        </label>
        <Button type={"submit"} extraStyle={"font-thin"}>Add Agent</Button>
      </form>
      {isLoading && <CustomLoading/>}
    </div>
  )
}

export default AgentsAdd
