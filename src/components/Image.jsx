import React from 'react'

const Image = ({src,alt,className}) => {
  return (
    <picture>
       <img src={src} alt={alt} className={`${className}`} />
    </picture>
  )
}

export default Image