import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`px-[30px] bg-[#262626] text-[#fff] font-bold text-sm py-[9px] ${className}`}>{text}</button>
  )
}

export default Button