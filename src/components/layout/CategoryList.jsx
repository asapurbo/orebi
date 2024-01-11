import ProductsHeading from "../ProductsHeading";
import MainCategory from "../MainCategory";
import Flex from "../Flex";
import { MdOutlineArrowDropUp } from "react-icons/md";

const CategoryList = () => {
  return (
    <div>
      <div>
        <Flex className="justify-between items-center mb-9">
          <ProductsHeading text="Shop by Category" as="h3" />
          <MdOutlineArrowDropUp className="text-xl" />
        </Flex>
        <div>
          <MainCategory text="Category 1" />
          <MainCategory text="Category 2" />
          <MainCategory text="Category 3" />
          <MainCategory text="Category 4" />
          <MainCategory text="Category 5" />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
