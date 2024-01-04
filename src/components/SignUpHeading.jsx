import React from 'react'
import Heading from './Heading'

const SignUpHeading = ({text,className}) => {
  return (
    <Heading text={text} as="h3" className={`text-primaryColor font-DM text-39 font-bold ${className}`}/>
  )
}

export default SignUpHeading