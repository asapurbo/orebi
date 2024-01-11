import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { MdOutlineArrowDropUp } from "react-icons/md";
import MainBrand from "../MainBrand";

const BrandList = () => {
  return (
    <div className="mt-53">
      <div>
        <Flex className="justify-between items-center mb-9">
          <ProductsHeading text="Shop by Brand" as="h3" />
          <MdOutlineArrowDropUp className="text-xl" />
        </Flex>
        <div>
          <MainBrand text="Brand 1"/>
          <MainBrand text="Brand 2"/>
          <MainBrand text="Brand 3"/>
          <MainBrand text="Brand 4"/>
          <MainBrand text="Brand 5"/>
        </div>
      </div>
    </div>
  )
}

export default BrandList