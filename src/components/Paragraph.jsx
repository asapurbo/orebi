import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`text-primaryColor text-sm font-DM font-normal ${className}`}>{text}</p>
  )
}

export default Paragraph