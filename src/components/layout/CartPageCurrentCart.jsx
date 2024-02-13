import { MdDeleteForever } from "react-icons/md";
import Flex from "../Flex";
import Image from "../Image";
import Heading from "../Heading";
import { FaPlus, FaMinus } from "react-icons/fa6";


const CartPageCurrentCart = ({
  productSrc,
  productName,
  productPrice,
  productCount,
  productTotalPrice,
  handleMinus,
  handlePlus,
  handleDelete
}) => {

  return (
    <Flex className="items-center py-7 border border-solid border-cartBgColor px-2">
      <Flex className="items-center gap-x-10 w-s410">
        <div onClick={() => {
          return handleDelete()
        }}>
          <MdDeleteForever className="text-3xl cursor-pointer" />
        </div>
        <div className="w-s100 h-s100">
          <Image src={productSrc} />
        </div>
        <div>
          <Heading
            text={productName}
            as="h3"
            className="text-primaryColor font-Bold font-DM text-base"
          />
        </div>
      </Flex>

      <div className=" w-s375">
        <Heading
          text={productPrice}
          as="h3"
          className="text-primaryColor font-DM text-base font-bold"
        />
      </div>
      <div className="w-s451">
        <Flex className="w-140 border-solid text-secondaryColor border border-cartBgColor p-5 h-9 items-center justify-between">
          <div onClick={() => {
            return handleMinus()
          }} className="w-6 h-6 hover:bg-cartBgColor cursor-pointer duration-300 flex items-center justify-center rounded-full">
            <FaMinus />
          </div>

          <Heading text={productCount} as="h3" className="font-DM font-bold" />

          <div 
          onClick={() => {
            return handlePlus()
          }}
           className="w-6 h-6 hover:bg-cartBgColor cursor-pointer duration-300 flex items-center justify-center rounded-full"
          >
            <FaPlus />
          </div>
        </Flex>
      </div>
      <div className="">
        <Heading
          text={productTotalPrice}
          as="h3"
          className="text-primaryColor font-DM text-base font-bold"
        />
      </div>
    </Flex>
  );
};

export default CartPageCurrentCart;
