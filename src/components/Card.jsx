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

const Card = ({
  src,
  bmtxt,
  price,
  alt,
  hrefHeart,
  hrefRotate,
  hrefCart,
  btn,
  refFour,
  itemInfo,
}) => {
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
    <div ref={refFour} className={`w-370`}>
      <div className={`w-full relative group`}>
        <Image src={src} alt={alt} className="w-full" />
        <div className="inline-block absolute top-5 left-7">
          <Button text={btn} />
        </div>
        <div className="w-full h-0 duration-500 truncate bg-white absolute bottom-0 group-hover:h-170">
          <Link to={hrefHeart}>
            <Flex className="items-center gap-x-s15 py-4 pr-6 justify-end hover:bg-slate-200">
              <Heading
                text="Add to Wish List"
                as="h4"
                className="text-secondaryColor font-DM text-base font-normal"
              />
              <FaHeart />
            </Flex>
          </Link>

          <Link to={hrefRotate}>
            <Flex className="items-center gap-x-[15px] py-4 pr-6 justify-end hover:bg-slate-200">
              <Heading
                text="Compare"
                as="h4"
                className="text-secondaryColor font-DM text-base font-normal"
              />
              <FaArrowsRotate />
            </Flex>
          </Link>

          <Link to={hrefCart}>
            <div
              onClick={() => {
                return handleClick();
              }}
            >
              <div onClick={() => {
                dispatch(increment())
              }}>
                <Flex className="items-center gap-x-[15px] py-4 pr-6 justify-end hover:bg-slate-200">
                  <Heading
                    text="Add to Cart"
                    as="h4"
                    className="text-primaryColor font-DM text-base font-bold"
                  />
                  <FaCartShopping />
                </Flex>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Flex className={`justify-between items-center mt-[18px]`}>
        <Heading
          text={bmtxt}
          as="h4"
          className={`text-[#262626] font-dm text-xl font-bold`}
        />
        <Paragraph
          text={price}
          className={`text-[#767676] font-dm text-base font-normal `}
        />
      </Flex>
    </div>
  );
};

export default Card;
