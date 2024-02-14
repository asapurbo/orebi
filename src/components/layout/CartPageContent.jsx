import { useSelector } from "react-redux";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import CartPageCurrentCart from "./CartPageCurrentCart";
import useAddToCart from "../hook/useAddToCart";
import CartPricePart from "./CartPricePart";

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

        {/* ------------------------ */}
        <CartPricePart />
        {/* ------------------------ */}
      </Container>
    </section>
  );
};

export default CartPageContent;
