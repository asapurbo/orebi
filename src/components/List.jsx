import React from 'react'

const List = ({className,href,text,target}) => {
  return (
    <li className={`text-secondaryColor list-none font-DM text-sm font-normal hover:text-primaryColor hover:font-bold ${className}`}><a target={target} href={href}>{text}</a></li>
  )
}

export default List