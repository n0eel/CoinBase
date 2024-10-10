import React from 'react'

function Button({title, type}) {
  return (
    <button className={`button-style w-[134px] py-[13px] text-white font-semibold text-[18px] rounded-[100px] mx-auto block`} type='{type}'>{title}</button>
  )
}

export default Button
