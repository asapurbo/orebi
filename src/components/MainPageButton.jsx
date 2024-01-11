const MainPageButton = ({text,className}) => {
  return (
    <button className={`text-secondaryColor font-DM text-sm font-normal w-9 h-9 flex items-center justify-center border border-solid border-cartBgColor hover:bg-primaryColor hover:text-white duration-300 ${className}`} type='button'>{text}</button>
  )
}

export default MainPageButton