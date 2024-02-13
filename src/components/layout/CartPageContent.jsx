import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import CartPageCurrentCart from "./CartPageCurrentCart";
import { addToCard } from "../Slice/CardSlice";
import { decrement, increment } from "../Slice/counterSlice";

const CartPageContent = () => {
  const data = useSelector((state) => state.addToCadeData.data);
  const dispatch = useDispatch();

  // ------------------------------- Minus Start -----------------------------------
  const handleMinusFn = (i) => {
    console.log(i);
    let t = data.map((it) => {
      if (it.bmtxt === i.bmtxt && it.count > 1) {
        dispatch(decrement());
        return {
          ...it,
          count: it.count - 1,
        };
      } else {
        return {
          ...it,
        };
      }
    });
    dispatch(addToCard(t));
  };
  // ------------------------------- Minus End -----------------------------------

  // ------------------------------- Plus Start ---------------------------------
  const handlePlusFn = (y) => {
    const n = data.map((it) => {
      if (it.bmtxt === y.bmtxt) {
        dispatch(increment());
        return {
          ...it,
          count: it.count + 1,
        };
      }
      return it;
    });
    dispatch(addToCard(n));
  };
  // ------------------------------- Plus End -----------------------------------

  // ------------------------------- Plus End -----------------------------------
  const handleDeleteFn = (d) => {
    const m = data.map((it) => {
      if (it.bmtxt === d.bmtxt) {
        return undefined;
      }
      return it
    });
    const x = m.filter((z) => z !== undefined);
    dispatch(addToCard(x));
  };
  // ------------------------------- Plus End -----------------------------------

  return (
    <section className="pb-140">
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
      </Container>
    </section>
  );
};

export default CartPageContent;
