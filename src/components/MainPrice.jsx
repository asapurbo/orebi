import ShopByHeading from "./ShopByHeading";

const MainPrice = ({text}) => {
  return (
    <div className=" pb-5 border-b border-solid border-cartBgColor pt-5">
    <ShopByHeading
      text={text}
    />
  </div>
  )
}

export default MainPrice