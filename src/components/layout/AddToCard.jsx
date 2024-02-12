import Heading from "../Heading";
import Image from "../Image";
import { FaXmark } from "react-icons/fa6";
import useClick from "../hook/useClick";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import { addToCard } from "../Slice/CardSlice";
import { decrement } from "../Slice/counterSlice";
import AddToCardLogoPart from "../AddToCardLogoPart";

const AddToCard = () => {
  const {
    commonOneRef: dropRefTwo,
    handelClick: handleClickThree,
    commonTwoRef: btnRefTwo,
  } = useClick();
  // redux code

  let dispatch = useDispatch();
  const data = useSelector((state) => state.addToCadeData.data);
  // redux code
  //  -------------------------------- subtotal ---------------------------
  let d = data.map((item) => {
    return parseFloat(item.price.replace("$", "") * item.count);
  });
  let subtotal = d.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  //  -------------------------------- subtotal ---------------------------

  // ------------------------------- Cancel Item Start ---------------------
  const handleMark = (e) => {
    let x = data.map((item) => {
      if (e == item) {
        if (item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
          };
        } else if (item.count === 1) {
          return undefined;
        }
      }
      return item;
    });
    const z = x.filter((i) => {
      return i !== undefined;
    });

    dispatch(addToCard(z));
  };
  // ---------------------------------- Cancel Item Start ------------------------------
  return (
    <div className="relative">
    
      {/* ---------------- */}
      <div
        onClick={() => {
          handleClickThree();
        }}
        ref={btnRefTwo}
      >
        <AddToCardLogoPart />
      </div>
      {/* ---------------- */}

      {data.length > 0 && (
        <div
          className="absolute hidden w-360 bg-white border border-solid border-cartBgColor right-0 top-8"
          ref={dropRefTwo}
        >
          <div className="p-5 bg-categoryBgColor">
            {data.map((item, index) => (
              <Flex key={index} className="items-center justify-between py-2">
                <Flex className="items-center">
                  <div className="w-20 h-20">
                    <Image src={item.src} className="w-full" />
                  </div>

                  <div className="ml-5">
                    <Flex>
                      <Heading
                        text={`${item.bmtxt}`}
                        as="h3"
                        className="text-primaryColor font-DM text-sm font-bold"
                      />
                      <div className="flex relative left-3 items-center justify-center w-5 h-5 rounded-full bg-primaryColor">
                        <p className="  text-white font-DM text-xs font-bold">
                          {item.count}
                        </p>
                      </div>
                    </Flex>
                    <Paragraph
                      text={`$${
                        parseFloat(item.price.replace("$", "")) * item.count
                      }.00`}
                      className="text-primaryColor font-DM text-sm font-Bold pt-3"
                    />
                  </div>
                </Flex>
                <div
                  onClick={() => {
                    return handleMark(item);
                  }}
                >
                  <span
                    className="w-12 h-12 hover:bg-white cursor-pointer duration-300 flex justify-center items-center rounded-full"
                    onClick={() => {
                      return dispatch(decrement());
                    }}
                  >
                    <FaXmark />
                  </span>
                </div>
              </Flex>
            ))}
          </div>

          <div className="p-5">
            <Flex className="items-center gap-x-1">
              <Paragraph
                text="Subtotal:"
                className="text-secondaryColor font-DM text-base font-normal"
              />
              <Heading
                text={`$${subtotal}.00`}
                as="h3"
                className="text-primaryColor font-DM text-base font-bold"
              />
            </Flex>

            <Flex className="gap-x-5 mt-3">
              <button className="bg-white text-primaryColor font-DM text-sm font-bold  border border-solid border-userBgColor hover:bg-primaryColor duration-300 hover:text-white py-4 px-10">
                View Cart
              </button>

              <button className="bg-white text-primaryColor font-DM text-sm font-bold  border border-solid border-userBgColor hover:bg-primaryColor duration-300 hover:text-white py-4 px-10">
                Checkout
              </button>
            </Flex>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCard;
