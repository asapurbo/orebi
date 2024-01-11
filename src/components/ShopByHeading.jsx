import Heading from "./Heading"

const ShopByHeading = ({text,className}) => {
  return (
    <Heading className={`text-secondaryColor font-DM text-base font-normal leading-30 ${className}`} text={text} as="h3"/>
  )
}

export default ShopByHeading