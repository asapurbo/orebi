import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import Bar from "../icons/Bar";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Image from "../Image";
import cardimgx from "../../assets/cardimgx.png";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../Slice/counterSlice";
import useClick from "../hook/useClick";


const Category = () => {
  const {handelClick: handleClick, commonOneRef: dropRef, commonTwoRef: btnRef  } = useClick()

  const {handelClick: handleClickTwo, commonOneRef: dropRefOne, commonTwoRef: btnRefOne  } = useClick()

  const {handelClick: handleClickThree, commonOneRef: dropRefTwo, commonTwoRef: btnRefTwo  } = useClick()

  // redux code 
   let counter = useSelector((state) => {
    return state.count.value
   })
   let dispatch = useDispatch()
  // redux code 

  return (
    <section className="py-10 bg-categoryBgColor border-t border-b border-solid border-borderColor">
      <Container>
        <Flex className="items-center">
          <div className="w-3/12 relative">
            <Flex className="gap-x-3 items-center">
              <div
                onClick={() => {
                  handleClick();
                }}
                ref={btnRef}
              >
                <Bar className="cursor-pointer" />
              </div>

              <Paragraph text="Shop by Category" className="inline-block" />
            </Flex>

            <div
              ref={dropRef}
              className="w-[263px] hidden bg-primaryColor absolute top-12"
            >
              <ul>
                <List
                  text="Accesories"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />

                <List
                  text="Furniture"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />

                <List
                  text="Electronics"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />

                <List
                  text="Clothes"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />

                <List
                  text="Bags"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />

                <List
                  text="Home appliances"
                  href="#"
                  className="text-ctgyColor hover:text-white pl-5 py-4 border-b border-solid border-ctgyBdrColor hover:pl-8 duration-300"
                />
              </ul>
            </div>
          </div>

          <Flex className="w-6/12 items-center justify-center">
            <input
              className="w-[601px] h-[50px] outline-transparent pl-5 placeholder:text-placeholderColor placeholder:font-DM placeholder:font-normal placeholder:text-sm font-DM font-normal text-sm"
              placeholder="Search Products"
            />
            <FaSearch className="ml-[-40px] cursor-pointer" />
          </Flex>
          <div className="w-3/12">
            <Flex className="justify-end gap-x-10">
              <div className="relative">
                <div
                  onClick={() => {
                    handleClickTwo();
                  }}
                  ref={btnRefOne}
                >
                  <Flex>
                    <FaUser className="cursor-pointer" />
                    <FaCaretDown className="cursor-pointer" />
                  </Flex>
                </div>

                <div
                  ref={dropRefOne}
                  className="w-s200 hidden bg-white -left-s170 top-8 absolute border border-solid border-cartBgColor"
                >
                  <div className="text-center">
                    <Link
                      className="py-4 block px-s50 bg-white text-primaryColor font-Bold hover:text-white hover:bg-primaryColor duration-300"
                      to="/login"
                    >
                      Login
                    </Link>

                    <Link
                      className="py-4 block px-s50 bg-white text-primaryColor font-Bold hover:text-white hover:bg-primaryColor duration-300 border-t border-solid border-cartBgColor"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  onClick={() => {
                    handleClickThree();
                  }}
                  ref={btnRefTwo}
                  className="flex relative"
                >
                  <div className="absolute -top-4 -right-4 flex items-center justify-center w-5 h-5 rounded-full bg-primaryColor">
                    <p className="  text-white font-DM text-xs font-bold">{counter}</p>
                  </div>
                  <FaShoppingCart className="cursor-pointer" />
                </div>

                <div
                  className="absolute hidden w-360 bg-white border border-solid border-cartBgColor right-0 top-8"
                  ref={dropRefTwo}
                >
                  <div className="p-5 bg-categoryBgColor">
                    <Flex className="items-center justify-between">
                      <Flex className="items-center">
                        <Image src={cardimgx} />

                        <div className="ml-5">
                          <Heading
                            text="Black Smart Watch"
                            as="h3"
                            className="text-primaryColor font-DM text-sm font-bold"
                          />
                          <Paragraph
                            text="$44.00"
                            className="text-primaryColor font-DM text-sm font-Bold pt-3"
                          />
                        </div>
                      </Flex>
                      <span
                        className="w-12 h-12 hover:bg-white cursor-pointer duration-300 flex justify-center items-center rounded-full"
                        onClick={() => {dispatch(decrement())}}
                      >
                        <FaXmark />
                      </span>
                    </Flex>
                  </div>

                  <div className="p-5">
                    <Flex className="items-center gap-x-1">
                      <Paragraph
                        text="Subtotal:"
                        className="text-secondaryColor font-DM text-base font-normal"
                      />
                      <Heading
                        text="$44.00"
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
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
