import Heading from './Heading'

const Label = ({text,className}) => {
  return (
    <Heading text={text} as="h3" className={` text-primaryColor font-DM text-base font-bold leading-l23 ${className}`} />
  )
}

export default Label