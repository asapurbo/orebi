import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { MdOutlineArrowDropUp } from "react-icons/md";
import MainColor from "../MainColor";

const ColorList = () => {
  return (
    <div className="mt-53">
      <div>
        <Flex className="justify-between items-center mb-9">
          <ProductsHeading text="Shop by Category" as="h3" />
          <MdOutlineArrowDropUp className="text-xl" />
        </Flex>
        <div>
            <MainColor text="Color 1" className="after:bg-black"/>
            <MainColor text="Color 2" className="after:bg-red-600"/>
            <MainColor text="Color 3" className="after:bg-green-600"/>
            <MainColor text="Color 4" className="after:bg-yellow-400"/>
            <MainColor text="Color 5" className="after:bg-sky-400"/>
        </div>
      </div>
    </div>
  );
};

export default ColorList;
