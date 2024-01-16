import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { IoMdArrowDropdown } from "react-icons/io";
import MainBrand from "../MainBrand";
import { useRef } from "react";

const BrandList = () => {
  const brandRef = useRef(null);
  const iconRef = useRef(null);
  
  const handleClick = () => {
    iconRef.current.classList.toggle("rotate-180");
    brandRef.current.classList.toggle("h-s354");
    brandRef.current.classList.toggle("left-s0");
  }

  return (
    <div className="mt-53">
      <div>
        <div onClick={() => {
          handleClick()
        }}
        className="cursor-pointer"
        >
          <Flex className="justify-between items-center mb-9">
            <ProductsHeading text="Shop by Brand" as="h3" />
            <span ref={iconRef} className="rotate-0 duration-300">
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </Flex>
        </div>

        <div ref={brandRef} className="h-0 relative -left-921 overflow-hidden duration-300">
          <MainBrand text="Brand 1" />
          <MainBrand text="Brand 2" />
          <MainBrand text="Brand 3" />
          <MainBrand text="Brand 4" />
          <MainBrand text="Brand 5" />
        </div>
      </div>
    </div>
  );
};

export default BrandList;
