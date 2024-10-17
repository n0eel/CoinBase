import React, { useContext, useState } from 'react'
import Button from '../../components/Button'
import { AddUserIcon, DeleteIcon, MoreIcon } from '../../assets/images/Icons'
import { Checkbox, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import AgentsItem from '../../components/AgentsItem'
import Loading from '../../assets/images/loading.png'

function Agents() {
  const {agents, setAgents} = useContext(Context)

  const [allAgents, setAllAgents] = useState(agents)
  
  const navigate = useNavigate()
  const [checkAll, setCheckAll] = useState(JSON.parse(localStorage.getItem("checkAll")) || false)
  const [isLoading, setIsLoading] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  localStorage.setItem("checkAll", JSON.stringify(checkAll))

  function handleCheckAll(e) {
    setCheckAll(e.target.checked)
    if (e.target.checked) {
      agents.forEach(item => item.isChecked = true);
    }
    else {
      agents.forEach(item => item.isChecked = false);
    }
    console.log(agents)
    setAgents([...agents])
  }

  function deleteBtnClick(id) {
    setDeleteModal(true)
    setDeleteId(id)
  }

  function handleDeleteAgent() {
    setDeleteModal(false)
    setIsLoading(true)
    const deleteIndex = agents.findIndex(item => item.id == deleteId)
    agents.splice(deleteIndex, 1)
    setTimeout(() => {
      setIsLoading(false)
      setAgents([...agents])
    }, 1000);
  }

  function handleSearchAgent(e) {
    setIsLoading(true)
    if(e.target.value) {
      const filteredAgent = agents.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()))
      setTimeout(() => {
        setIsLoading(false)
        setAllAgents([...filteredAgent])
      }, 1000);
    }
    else {
      setTimeout(() => {
        setIsLoading(false)
        setAllAgents(agents)
      }, 1000);
    }
  }

  return (
    <div className='p-[50px]'>
      <p className='text-[12px] leading-[18px] text-white font-semibold mb-[33px]'>Admin Management   Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-white text-[25px] font-bold'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input onChange={handleSearchAgent} className='search-input w-[216px] py-[12px] rounded-[50px] pl-[50px] bg-transparent border-[2px] border-white outline-none focus:shadow-sm focus:shadow-white text-[12px] text-white' type="text" placeholder='Search Agents' name='searching' aria-label='Searching...'/>
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
                <Checkbox checked={checkAll} onChange={handleCheckAll} className='text-white'>Account Status</Checkbox>
              </th>
              <th className='text-white text-center w-[20%]'>User Name</th>
              <th className='text-white text-center w-[40%]'>Email</th>
              <th className='text-white text-end w-[20%] pr-[22px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? 
            <div className='flex justify-center w-[450%] mt-5'><img src={Loading} alt="" /></div>
            : allAgents.map(item => <AgentsItem deleteBtnClick={deleteBtnClick} setIsLoading={setIsLoading} isLoading={isLoading} key={item.id} item={item}/>)}
          </tbody>
        </table>
      </div>
        <Modal onOk={handleDeleteAgent} okText="Delete" open={deleteModal} onCancel={() => setDeleteModal(false)} title={"Are you sure to delete ?"}></Modal>
    </div>
  )
}

export default Agents
