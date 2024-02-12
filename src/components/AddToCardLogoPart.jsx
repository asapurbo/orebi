import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Heading from "./Heading";

const AddToCardLogoPart = () => {
  const data = useSelector((state) => state.addToCadeData.data);
  let counter = useSelector((state) => {
    return state.count.value;
  });
  return (
    <div className="flex relative">
      <div className="absolute -top-4 -right-4 flex items-center justify-center w-5 h-5 rounded-full bg-primaryColor">
        <p className="  text-white font-DM text-xs font-bold">{counter}</p>
      </div>
      <div className="relative group duration-300">
        <FaShoppingCart
          className={data.length > 0 ? "cursor-pointer" : "cursor-not-allowed"}
        />
        {data.length === 0 && (
          <div className="absolute w-52 p-2 bg-[#979797] -left-40 top-7 hidden group-hover:block rounded-md">
            <div className="relative text-center">
              <Heading
                text="Please add card"
                as="h3"
                className="text-primaryColor font-DM text-sm font-bold"
              />
              <div className="absolute w-3 h-3 bg-[#979797] rotate-45 -top-[13px] right-6"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCardLogoPart;
