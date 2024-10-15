import React, { useContext } from 'react'
import Button from '../../components/Button'
import { AddUserIcon, DeleteIcon, MoreIcon } from '../../assets/images/Icons'
import { Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import AgentsItem from '../../components/AgentsItem'

function Agents() {
  const {agents, setAgents} = useContext(Context)
  const navigate = useNavigate()

  function handleCheckAll(e) {
    if (e.target.checked) {
      agents.forEach(item => item.isChecked = true);
    }
    else {
      agents.forEach(item => item.isChecked = false);
    }
    console.log(agents)
    setAgents([...agents])
  }

  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-semibold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-white text-[25px] font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input className='search-input w-[216px] py-[12px] rounded-[50px] pl-[50px] bg-transparent border-[2px] border-white outline-none focus:shadow-sm focus:shadow-white text-[12px] text-white' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...'/>
          <Button onclick={() => navigate("add")} extraStyle={'flex items-center mx-0 justify-center w-[134px] gap-[8px]'}>
            <AddUserIcon/>
            <span className='text-[14px] font-normal text-white'>Add Agent</span>
          </Button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white rounded-lg mt-[28px]'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-white text-start w-[20%] pl-5'>
                <Checkbox onChange={handleCheckAll} className='text-white'>Account Status</Checkbox>
              </th>
              <th className='text-white text-center w-[20%]'>User Name</th>
              <th className='text-white text-center w-[40%]'>Email</th>
              <th className='text-white text-end w-[20%] pr-[22px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(item => <AgentsItem key={item.id} item={item}/>)}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Agents
