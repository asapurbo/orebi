import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import Bar from "../icons/Bar";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Button from "../Button";
import Image from "../Image";
import cardimgx from "../../assets/cardimgx.png";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Category = () => {
  // Shop by Category Part Start
  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);

  let handleClick = (dropRefCmn, btnRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };
  // Cancel Start
  let cancel = () => {
    const dropStyle = dropRefTwo.current.style;
    dropStyle.display = "none";
  };
  // Cancel End

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);
  // Shop by Category Part End

  return (
    <section className="py-10 bg-categoryBgColor border-t border-b border-solid border-borderColor">
      <Container>
        <Flex className="items-center">
          <div className="w-3/12 relative">
            <Flex className="gap-x-3 items-center">
              <div
                onClick={() => {
                  handleClick(dropRef, btnRef);
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
                    handleClick(dropRefOne, btnRefOne);
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
                  className="w-[200px] hidden bg-white left-[-170px] top-8 absolute border border-solid border-cartBgColor"
                >
                  <ul className="text-center">
                    <List
                      text="Login"
                      href="/login"
                      className="py-4 px-[50px] bg-userBgColor font-Bold  text-white hover:text-white"
                    />
                    <List
                      text="Sign Up"
                      href="/signup"
                      className="py-4 px-[50px] hover:font-normal text-black"
                    />
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div
                  onClick={() => {
                    handleClick(dropRefTwo, btnRefTwo);
                  }}
                  ref={btnRefTwo}
                >
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
                        onClick={cancel}
                        className="w-12 h-12 hover:bg-white cursor-pointer duration-300 flex justify-center items-center rounded-full"
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
                      <Button
                        text="View Cart"
                        className="bg-white text-primaryColor border border-solid border-userBgColor py-4 px-10"
                      />
                      <Button text="Checkout" className="py-4 px-10" />
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
