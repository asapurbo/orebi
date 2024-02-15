import Flex from "../Flex";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartPricePart = () => {
  const data = useSelector((state) => {
    return state.addToCadeData.data
  });

  let total = data.reduce((sum,item) => {
    let x = parseFloat(item.price.replace('$', ''))
    return sum += x * item.count
  },0)
  return (
    <div>
      <div className="py-5 border border-solid border-cartBgColor px-5 w-full">
        <Flex className="items-center justify-between">
          <Flex className="items-center gap-x-6">
            <div className="relative w-249 items-center">
              <select className="focus:outline-convBorderColor outline-1 w-full py-2 px-5  border border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
                <option value="">SIZE</option>
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
            <div>
              <Heading
                text="Apply coupon"
                as="h3"
                className="text-primaryColor font-Bold font-DM text-base"
              />
            </div>
          </Flex>
          <div>
            <Heading
              text="Update cart"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
        </Flex>
      </div>
      <Flex className="flex-col items-end mt-14">
        <Heading
          text="Cart totals"
          as="h3"
          className="text-primaryColor font-Bold font-DM text-base pb-8"
        />
        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text="Subtotal"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text={`$${total}.00`}
              as="h3"
              className="text-secondaryColor font-normal font-DM text-base"
            />
          </div>
        </Flex>
        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text="Total"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text={`$${total}.00`}
              as="h3"
              className="text-primaryColor font-medium font-DM text-base"
            />
          </div>
        </Flex>
        <div className="">
          <Link
            to="/checkout"
            className="py-5 px-8 bg-primaryColor font-DM text-sm text-white font-bold inline-block mt-8"
          >
            Proceed to Checkout
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default CartPricePart;
