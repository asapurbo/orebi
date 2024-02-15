import Flex from "../Flex";
import ShopByHeading from "../ShopByHeading";
import Grid1 from "../icons/Grid1";
import Grid2 from "../icons/Grid2";
import { FaCaretDown } from "react-icons/fa";
import { forwardRef, useState } from "react";
import ShopProductCardTwo from "./ShopProductCardTwo";
import ShopProductCard from "./ShopProductCard";

const GridBar = ({ refOne, refTwo }) => {
  const [gridOne, setGridOne] = useState(false);
  const [gridTwo, setGridTwo] = useState(true);
  const [size, setSize] = useState()
  const arr = [12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 13, 14];

  const handleSize = (e) => {
    const currentSize = parseInt(e)
    setSize(currentSize)
  };


  return (
    <div>
      <Flex className="justify-between">
        <div>
          <Flex className="gap-x-5">
            <div
              ref={refOne}
              onClick={() => {
                return setGridTwo(true), setGridOne(false);
              }}
            >
              <Grid1 className="cursor-pointer" />
            </div>
            <div
              ref={refTwo}
              onClick={() => {
                return setGridOne(true), setGridTwo(false);
              }}
            >
              <Grid2 className="cursor-pointer" />
            </div>
          </Flex>
        </div>

        <div>
          <Flex className="gap-x-5 items-center">
            <Flex className="items-center gap-x-4">
              <ShopByHeading text="Sort by:" />
              <div className="relative w-249">
                <select className="focus:outline-convBorderColor outline-1 w-full py-2 px-5  border border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
                  <option value="">Featured</option>
                  <option value="">Payment options</option>
                  <option value="">Shopping cart</option>
                  <option value="">Wishlist</option>
                  <option value="">Customer login</option>
                  <option value="">Logo</option>
                  <option value="">FAQ page</option>
                </select>
                <div className="absolute right-3 bottom-0 h-full  flex justify-center items-center">
                  <FaCaretDown className="text-secondaryColor text-11" />
                </div>
              </div>
            </Flex>
            <Flex className="items-center gap-x-4">
              <ShopByHeading text="Show:" />
              <div className="relative w-249">
                <select
                  onChange={(e) => handleSize(e.target.value)}
                  className="focus:outline-convBorderColor outline-1 w-full py-2 px-5  border border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal"
                >
                  {arr.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 bottom-0 h-full  flex justify-center items-center">
                  <FaCaretDown className="text-secondaryColor text-11" />
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <div>
        {gridOne && <ShopProductCardTwo sizeFn={size} />}
        {gridTwo && <ShopProductCard sizeFn={size} />}
      </div>
    </div>
  );
};
const ForwardedGridBar = forwardRef(GridBar);

export default ForwardedGridBar;
