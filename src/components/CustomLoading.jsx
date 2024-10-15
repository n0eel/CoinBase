import React from 'react'
import LoadingImg from '../assets/images/loading.png'

function CustomLoading() {
  return (
    <div className='flex items-center justify-center fixed inset-0 bg-[#00000059] backdrop-blur'>
        <img src={LoadingImg} alt="" width={200} height={200} />
    </div>
  )
}

export default CustomLoading
