const ProductsHeading = (props) => {
  return (
    <props.as className={`text-primaryColor font-DM text-xl font-bold ${props.className}`}>{props.text}</props.as>
  )
}

export default ProductsHeading