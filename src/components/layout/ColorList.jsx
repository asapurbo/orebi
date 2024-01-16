import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { IoMdArrowDropdown } from "react-icons/io";
import MainColor from "../MainColor";
import { useRef } from "react";

const ColorList = () => {
  const colorRef = useRef(null);
  const iconRef = useRef(null);
  const handleClick = () => {
    iconRef.current.classList.toggle("rotate-180");
    colorRef.current.classList.toggle("h-s354");
    colorRef.current.classList.toggle("left-s0");
  };

  return (
    <div className="mt-53">
      <div>
        <div
          onClick={() => {
            handleClick();
          }}
          className="cursor-pointer"
        >
          <Flex className="justify-between items-center mb-9">
            <ProductsHeading text="Shop by Color" as="h3" />
            <span ref={iconRef} className="rotate-0 duration-300">
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </Flex>
        </div>

        <div ref={colorRef} className="h-0 relative -left-921 overflow-hidden duration-300">
          <MainColor text="Color 1" className="after:bg-black" />
          <MainColor text="Color 2" className="after:bg-red-600" />
          <MainColor text="Color 3" className="after:bg-green-600" />
          <MainColor text="Color 4" className="after:bg-yellow-400" />
          <MainColor text="Color 5" className="after:bg-sky-400" />
        </div>
      </div>
    </div>
  );
};

export default ColorList;
