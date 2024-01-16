import ProductsHeading from "../ProductsHeading";
import MainCategory from "../MainCategory";
import Flex from "../Flex";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from "react";

const CategoryList = () => {
  const categoryRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {
    iconRef.current.classList.toggle("rotate-180");
    categoryRef.current.classList.toggle("h-w437");
    categoryRef.current.classList.toggle("left-s0");
    categoryRef.current.classList.replace("overflow-hidden", "overflow-y-auto");
  };

  return (
    <div>
      <div>
        <div
          onClick={() => {
            handleClick();
          }}
          className="cursor-pointer"
        >
          <Flex className="justify-between items-center mb-9">
            <ProductsHeading text="Shop by Category" as="h3" />
            <span ref={iconRef} className="rotate-0 duration-300">
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </Flex>
        </div>

        <div
          ref={categoryRef}
          className="h-0 relative -left-921 overflow-x-hidden duration-300"
        >
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
