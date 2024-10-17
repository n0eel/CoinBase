import React, { useContext, useState } from 'react'
import { DeleteIcon, MoreIcon } from '../assets/images/Icons'
import { Checkbox } from 'antd'
import { Context } from '../context/Context'
import Loading from '../assets/images/loading.png'
import { useNavigate } from 'react-router-dom'

function AgentsItem({item, deleteBtnClick}) {
    const navigate = useNavigate()
    const {agents, setAgents} = useContext(Context)
    const [isPending, setIsPending] = useState(false)

    function handleStatusBtnClick() {
        setIsPending(true)
        setTimeout(() => {
            setIsPending(false)
            item.status = !item.status
            setAgents([...agents])
        }, 1000);
    }

    function handleCheckBtn(e) {
        item.isChecked = !item.isChecked
        setAgents([...agents])
    }

  return (
            <tr className='border-[2px] border-white'>
              <td className='space-x-[15px] py-[19px] pl-5'>
                <Checkbox onChange={handleCheckBtn} checked={item.isChecked}></Checkbox>
                <button onClick={handleStatusBtnClick} className={`${isPending ? "active-pending" : (item.status ? "bg-green-500" : "bg-red-500")} duration-500 w-[91px] text-white font-semibold py-[5px] rounded-[30px] bg-green-400`}>{isPending ? "Pending" : (item.status ? "Active" : "Down")}</button>
              </td>
              <td className='flex items-center space-x-[17px] justify-center py-[19px]'>
                <img className='rounded-full' src={item.imgUrl} alt="" width={36} height={36} />
                <strong className='text-[15px] text-white'>{item.username}</strong>
              </td>
              <td className='text-center text-white text-[15px] py-[19px]'>{item.useremail} </td>
              <td className='py-[19px] text-end space-x-[17px] pr-[22px]'>
                <button onClick={() => deleteBtnClick(item.id)} className='align-middle hover:scale-[1.2] duration-300'><DeleteIcon/></button>
                <button onClick={() => navigate(`${item.id}`)} className='align-middle hover:scale-[1.2] duration-300'><MoreIcon/></button>
              </td>
            </tr>
  )
}

export default AgentsItem
