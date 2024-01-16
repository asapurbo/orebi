import ProductsHeading from "../ProductsHeading";
import Flex from "../Flex";
import { IoMdArrowDropdown } from "react-icons/io";
import MainPrice from "../MainPrice";
import { useRef } from "react";

const PriceList = () => {
  const priceRef = useRef(null);
  const iconRef = useRef(null);

  return (
    <div className="mt-53">
      <div>
        <div onClick={() => {
          iconRef.current.classList.toggle("rotate-180")
          priceRef.current.classList.toggle("h-s354")
          priceRef.current.classList.toggle("left-s0");
        }}
        className="cursor-pointer"
        >
          <Flex className="justify-between items-center mb-9">
            <ProductsHeading text="Shop by Price" as="h3" />
            <span ref={iconRef} className="rotate-0 duration-300">
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </Flex>
        </div>

        <div ref={priceRef} className="h-0 relative -left-921 first-letter: overflow-hidden duration-300">
          <MainPrice text="$0.00 - $9.99" />
          <MainPrice text="$10.00 - $19.99" />
          <MainPrice text="$20.00 - $29.99" />
          <MainPrice text="$30.00 - $39.99" />
          <MainPrice text="$40.00 - $69.99" />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
