import React from 'react'
import Logo from '../assets/images/logo-dashboard.svg'
import LogoHalf from '../assets/images/logo-half.svg'
import Bell from '../assets/images/bell.svg'
import { Badge } from 'antd'

function Header() {
  return (
    <div className='flex items-center justify-between py-[24px] border-b-[2px] border-white px-[65px]'>
        <img src={Logo} alt="Main Logo" width={104} height={21} />
        <div className='flex items-center space-x-[77px]'>
            <div className='flex items-center space-x-[11px]'>
                <img src={LogoHalf} alt="" width={36} height={36} />
                <span className='text-white text-[14px] leading-[27px]'>CoinBase</span> 
            </div>
            <Badge color='#FD749B' size='small' count={8}>
                <img src={Bell} alt="Bell Icon" width={12} height={20} />
            </Badge>
        </div>
    </div>
  )
}

export default Header
