import Flex from "./Flex";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
import { Link } from "react-router-dom";
import { addToCard } from "./Slice/CardSlice";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Slice/counterSlice";

const CardTwo = ({src, alt, btnTxt, productName, productPrice, productColor,itemInfo }) => {
    // redux code
    const dispatch = useDispatch();
    const data = useSelector((state) => state.addToCadeData.data);
   
    // redux code
  
    const handleClick = () => {
      if (data.find((x) => x.bmtxt === itemInfo.bmtxt)) {
        let returnArr = data.map((y) => {
          if (y.bmtxt === itemInfo.bmtxt) {
            return {
              ...y,
              count: y.count + 1,
            };
          }
          return y;
        });
        dispatch(addToCard(returnArr));
      } else {
        dispatch(
          addToCard({
            ...itemInfo,
            count: 1,
          })
        );
      }
    };

  return (
    <Flex className="w-[900px] ml-64 justify-between items-center mt-s60">
      <div className="relative">
        <div>
          <Image src={src} alt={alt} className="w-full" />
        </div>
        <div className="inline-block absolute top-5 left-7">
          <Button text={btnTxt} />
        </div>
      </div>
      <div>
        <Link to="#">
          <Flex className="items-center w-96 gap-x-6 py-5 pr-6 justify-end hover:bg-slate-200">
            <Heading
              text='Add to Wish List'
              as="h4"
              className="text-secondaryColor font-DM text-base font-normal"
            />
            <FaHeart />
          </Flex>
        </Link>

        <Link to="#">
          <Flex className="items-center w-96 gap-x-6 py-6 pr-6 justify-end hover:bg-slate-200">
            <Heading
              text='Compare'
              as="h4"
              className="text-secondaryColor font-DM text-base font-normal"
            />
            <FaArrowsRotate />
          </Flex>
        </Link>

        <Link to="#">
          <div
            onClick={() => {
              return handleClick();
            }}
          >
            <div
               onClick={() => {
                dispatch(increment())
              }}
            >
              <Flex className="items-center w-96 gap-x-6 py-6 pr-6 justify-end hover:bg-slate-200">
                <Heading
                  text='Add to Cart'
                  as="h4"
                  className="text-primaryColor font-DM text-base font-bold"
                />
                <FaCartShopping />
              </Flex>
            </div>
          </div>
        </Link>

        <Flex className={`justify-between items-center mt-20`}>
          <Heading
            text={productName}
            as="h4"
            className={`text-[#262626] font-dm text-xl font-bold`}
          />
          <Paragraph
            text={productPrice}
            className={`text-[#767676] font-dm text-base font-normal `}
          />
        </Flex>
        <div className="mt-7">
          <Heading
            text={productColor}
            as="h4"
            className="text-secondaryColor font-DM text-base font-normal"
          />
        </div>
      </div>
    </Flex>
  );
};

export default CardTwo;
