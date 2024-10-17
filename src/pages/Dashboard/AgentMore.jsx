import useConfig from 'antd/es/config-provider/hooks/useConfig'
import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import { BackArrow } from '../../assets/images/Icons'
import Button from '../../components/Button'

function AgentMore() {
    const navigate = useNavigate()
    const {agents} = useContext(Context)
    const {id} = useParams()
    const singleAgent = agents.find(item => item.id == id)
    
  return (
    <div className='p-[55px]'>
        <p className='text-[12px] leading-[18px] text-white font-semibold mb-[33px]'>Admin Management   Agents</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                <button onClick={() => navigate(-1)} className='hover:scale-[1.2] duration-300'><BackArrow/></button>
                <h2 className='text-white text-[25px] font-bold'>{singleAgent.username}</h2>
                </div>
                <div className='flex items-center space-x-[20px]'>
                    <Button onclick={() => navigate("edit")} extraStyle={'flex items-center mx-0 justify-center w-[134px] gap-[8px]'}>
                        <span className='text-[14px] font-normal text-white'>Edit Agent</span>
                    </Button>
                </div>
            </div>
            <div className='flex justify-between w-[60%] p-5 rounded-lg border-[2px] border-white mt-10'>
                <ul className='space-y-5 w-[50%]'>
                <li className='flex flex-col'>
                    <span className='text-slate-400'>ID</span>
                    <p className='text-white text-[22px] font-semibold'>{id}</p>
                </li>
                <li className='flex flex-col'>
                    <span className='text-slate-400'>Username</span>
                    <p className='text-white text-[22px] font-semibold'>{singleAgent.username}</p>
                </li>
                <li className='flex flex-col'>
                    <span className='text-slate-400'>Email</span>
                    <p className='text-white text-[22px] font-semibold'>{singleAgent.useremail}</p>
                </li>
                <li className='flex flex-col'>
                    <span className='text-slate-400'>About </span>
                    <p className='text-white text-[22px] font-semibold'>{singleAgent.about}</p>
                </li>
                <li className='flex flex-col'>
                    <span className='text-slate-400'>Status</span>
                    <p className={`${singleAgent.status ? "text-green-500 " : "text-red-500"} text-[22px] font-semibold`}>{singleAgent.status ? "Active" : "Down"}</p>
                </li>
                </ul>
                <div className='space-y-5 w-[50%]'>
                    <img src={singleAgent.imgUrl} alt="" width={300} height={300}/>
                </div>  
            </div>
    </div>
  )
}

export default AgentMore
