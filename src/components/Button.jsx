import React from 'react'

function Button({children, type, extraStyle, onclick}) {
  return (
    <button onClick={onclick} className={`button-style w-[134px] py-[13px] text-white font-semibold text-[18px] rounded-[100px] mx-auto block ${extraStyle}`} type='{type}'>{children}</button>
  )
}

export default Button
