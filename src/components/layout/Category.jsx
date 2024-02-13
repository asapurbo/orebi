import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import Bar from "../icons/Bar";
import Paragraph from "../Paragraph";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useClick from "../hook/useClick";
import HeaderData from "../data/HeaderData";
import AddToCard from "./AddToCard";
import { useSelector } from "react-redux";

const Category = () => {
  const {
    handelClick: handleClick,
    commonOneRef: dropRef,
    commonTwoRef: btnRef,
  } = useClick();

  const {
    handelClick: handleClickTwo,
    commonOneRef: dropRefOne,
    commonTwoRef: btnRefOne,
  } = useClick();

  let { haendleDispatch: handelClick } = HeaderData();

  const data = useSelector((state) => state.addToCadeData.data);

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
                      onClick={() => {
                        return handelClick("Login");
                      }}
                    >
                      Login
                    </Link>

                    <Link
                      className="py-4 block px-s50 bg-white text-primaryColor font-Bold font-DM hover:text-white hover:bg-primaryColor duration-300 border-t border-solid border-cartBgColor"
                      to="/signup"
                      onClick={() => {
                        return handelClick("Sing Up");
                      }}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              {/* ----------------------------- */}

              <AddToCard />

              {/* ----------------------------- */}
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
