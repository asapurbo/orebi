import { useSelector } from "react-redux";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import CartPageCurrentCart from "./CartPageCurrentCart";
import useAddToCart from "../hook/useAddToCart";
import { FaCaretDown } from "react-icons/fa";

const CartPageContent = () => {
  const data = useSelector((state) => state.addToCadeData.data);

  const {
    handleMinusFn: handleMinusFn,
    handlePlusFn: handlePlusFn,
    handleDeleteFn: handleDeleteFn,
  } = useAddToCart();

  return (
    <section className="pb-140 relative">
      <Container>
        <Flex className="py-9 bg-categoryBgColor w-full px-5 gap-x-[350px]">
          <Heading
            text="Product"
            as="h3"
            className="text-primaryColor font-Bold font-DM text-base"
          />
          <Heading
            text="Price"
            as="h3"
            className="text-primaryColor font-Bold font-DM text-base"
          />
          <Heading
            text="Quantity"
            as="h3"
            className="text-primaryColor font-Bold font-DM text-base"
          />
          <Heading
            text="Total"
            as="h3"
            className="text-primaryColor font-Bold font-DM text-base"
          />
        </Flex>

        <div>
          {data.map((item, index) => (
            <CartPageCurrentCart
              key={index}
              productSrc={item.src}
              productName={item.bmtxt}
              productCount={item.count}
              productPrice={`${item.price}`}
              productTotalPrice={`$${
                parseFloat(item.price.replace("$", "")) * item.count
              }.00`}
              handleMinus={() => {
                return handleMinusFn(item);
              }}
              handlePlus={() => {
                return handlePlusFn(item);
              }}
              handleDelete={() => {
                return handleDeleteFn(item);
              }}
            />
          ))}
        </div>
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
        
      </Container>
    </section>
  );
};

export default CartPageContent;
