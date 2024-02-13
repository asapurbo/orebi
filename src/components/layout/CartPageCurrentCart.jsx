import { MdDeleteForever } from "react-icons/md";
import Flex from "../Flex";
import Image from "../Image";
import Heading from "../Heading";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useEffect, useRef } from "react";

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
  const permissionRef = useRef(null);
  const deleteRef = useRef(null);
  const handlePermissionFn = () => {
    permissionRef.current.style.cssText = `display: block;`;
  };
  const noHandleButton = () => {
    permissionRef.current.style.cssText = `display: none;`;
  }
  useEffect(() => {
    const handledl = () => {
      permissionRef.current.style.cssText = `display: none;`;
    }
    deleteRef.current.addEventListener('click', handledl);
  })

  return (
    <>
    <Flex className="items-center py-7 border border-solid border-cartBgColor px-2">
      <Flex className="items-center gap-x-10 w-s410">
        <div onClick={() => {
          return handlePermissionFn()
        }}>
          <MdDeleteForever className="text-3xl text-primaryColor cursor-pointer" />
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
    <div
        ref={permissionRef}
        className="fixed p-12 shadow-lg rounded-md top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden bg-secondaryColor w-644 h-372"
      >
        <Heading
          text="Do you want to delete this product?"
          as="h3"
          className=" text-white font-DM text-39 font-bold text-center "
        />
        <Flex className="items-center justify-center gap-x-6 mt-12">
          <button onClick={() => {
            return handleDelete()
          }} ref={deleteRef} className="py-4 px-9 rounded-md bg-primaryColor duration-300 hover:bg-categoryBgColor hover:text-primaryColor text-white font-Bold font-DM text-base">
            Yes
          </button>
          <button onClick={() => {
            return noHandleButton()
          }} className="py-4 px-9 rounded-md duration-300 hover:bg-categoryBgColor hover:text-primaryColor bg-primaryColor text-white font-Bold font-DM text-base">
            No
          </button>
        </Flex>
      </div>
    </>
  );
};

export default CartPageCurrentCart;
