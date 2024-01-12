import Flex from "../Flex";
import ShopByHeading from "../ShopByHeading";
import Grid1 from "../icons/Grid1";
import Grid2 from "../icons/Grid2";
import { FaCaretDown } from "react-icons/fa";

const GridBar = () => {
  return (
    <Flex className="justify-between">
      <div>
        <Flex className="gap-x-5">
          <div>
            <Grid1 className="cursor-pointer" />
          </div>
          <div>
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
              <select className="focus:outline-convBorderColor outline-1 w-full py-2 px-5  border border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
                <option value="">36</option>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
                <option value="">25</option>
                <option value="">30</option>
              </select>
              <div className="absolute right-3 bottom-0 h-full  flex justify-center items-center">
                <FaCaretDown className="text-secondaryColor text-11" />
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default GridBar;
