import { useRef } from "react";
import Flex from "./Flex";
import ShopByHeading from "./ShopByHeading";
import { FaPlus } from "react-icons/fa6";

const MainCategory = ({ text }) => {
  const categoryRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {
      categoryRef.current.classList.toggle("h-20");
      categoryRef.current.classList.toggle("left-s0");
      iconRef.current.classList.toggle("rotate-225");
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="border-b border-solid border-cartBgColor pb-5 pt-5"
    >
      <Flex className="justify-between cursor-pointer items-center">
        <ShopByHeading text={text} />
        <span
          ref={iconRef}
          className="rotate-0 duration-300 p-2 rounded-full hover:bg-secondaryColor text-secondaryColor hover:text-white"
        >
          <FaPlus className=" text-11" />
        </span>
      </Flex>
      <div
        ref={categoryRef}
        className="h-0 relative -left-921 overflow-hidden duration-300"
      >
        <p className="text-secondaryColor font-DM text-base pt-2 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          beatae!
        </p>
      </div>
    </div>
  );
};

export default MainCategory;
