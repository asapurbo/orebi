import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { MdOutlineArrowDropUp } from "react-icons/md";
import MainPrice from "../MainPrice";

const PriceList = () => {
  return (
    <div className="mt-53">
    <div>
      <Flex className="justify-between items-center mb-9">
        <ProductsHeading text="Shop by Brand" as="h3" />
        <MdOutlineArrowDropUp className="text-xl" />
      </Flex>
      <div>
        <MainPrice text="$0.00 - $9.99"/>
        <MainPrice text="$10.00 - $19.99"/>
        <MainPrice text="$20.00 - $29.99"/>
        <MainPrice text="$30.00 - $39.99"/>
        <MainPrice text="$40.00 - $69.99"/>
      </div>
    </div>
  </div>
  )
}

export default PriceList