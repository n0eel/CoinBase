import React, { useState } from 'react'
import { AgentsIcon, BitcoinIcon, CardsIcon, LogOutIcon, OverViewIcon, PaymentsIcon, StatisticsIcon, TransactionsIcon, UsersIcon } from '../assets/images/Icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

function Navbar() {
    const [isOpenModal, setIsOpenModal] = useState(false)
     const navigate = useNavigate

    function handelSureLogOut() {
        localStorage.clear
        setIsOpenModal(false)
        location.reload()
        location.pathname = "/"
    }

    const navbarList = [
        {
            id: 1,
            icon: <OverViewIcon/>,
            title: "Overview",
            path: "/",
            notificationCount: null 
        },
        {
            id: 2,
            icon: <UsersIcon/>,
            title: "Users",
            path: "/users",
            notificationCount: null
        },
        {
            id: 3,
            icon: <AgentsIcon/>,
            title: "Agents",
            path: "/agents",
            notificationCount: null
        },
        {
            id: 4,
            icon: <CardsIcon/>,
            title: "Cards",
            path: "/cards",
            notificationCount: 19
        },
        {
            id: 5,
            icon: <BitcoinIcon/>,
            title: "Bitcoin & Ethereum",
            path: "/bitcoin-ethereum",
            notificationCount: null
        },
        {
            id: 6,
            icon: <PaymentsIcon/>,
            title: "Payments",
            path: "/payments",
            notificationCount: 10
        },
        {
            id: 7,
            icon: <TransactionsIcon/>,
            title: "Transactions",
            path: "/transactions",
            notificationCount: null
        },
        {
            id: 8,
            icon: <StatisticsIcon/>,
            title: "Statistics",
            path: "/statistics",
            notificationCount: null
        }
    ]

  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto border-r-[2px] border-white pt-[44px] pr-[17px]'>
        {navbarList.map(item => (
            <NavLink className={"flex relative items-center space-x-[21px] pl-[55px] py-[19px] rounded-r-[100px]"} to={item.path} key={item.id}>
                {item.icon}
                <span className='text-white text-[14px] leading-[]'>{item.title}</span>
                {item.notificationCount ? <button className='notification-btn w-[20px] h-[20px] rounded-full text-white text-[8px] text-center absolute top-0 bottom-0 my-auto right-[21px] font-semibold'>{item.notificationCount}</button> : ""}
            </NavLink>
        ))}
        <button onClick={() => setIsOpenModal(true)} className='flex relative items-center space-x-[21px] pl-[55px] py-[19px] rounded-r-[100px] mt-[10px]'>
            <LogOutIcon/>
            <span className='text-white text-[14px] leading-[]'>Logout</span>
        </button>
        <Modal title="Are you sure?" open={isOpenModal} onOk={handelSureLogOut} onCancel={() => setIsOpenModal(false)}></Modal>
    </div>
  )
}

export default Navbar
