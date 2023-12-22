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

  const [click, setClick] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
  });
  // Shop by Category Part End

  //  User Account Part Start
  const [user, setUser] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    let handleUser = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUser(false);
      }
    };

    document.addEventListener("mousedown", handleUser);
  });
  //  User Account Part End

  //  Card Account Part Start
  const [card, setCard] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    let handleCard = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setCard(false);
      }
    };

    document.addEventListener("mousedown", handleCard);
  });
  //  Card Account Part End

  return (
    <section className="py-10 bg-categoryBgColor border-t border-b border-solid border-borderColor">
      <Container>
        <Flex className="items-center">
          <div className="w-3/12 relative">
            <Flex className="gap-x-3 items-center">
              <div
                onClick={() => {
                  setClick(!click);
                }}
              >
                <Bar className="cursor-pointer" />
              </div>

              <Paragraph text="Shop by Category" className="inline-block" />
            </Flex>

            {click && (
              <div
                ref={menuRef}
                className="w-[263px] bg-primaryColor absolute top-12"
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
            )}
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
                    setUser(!user);
                  }}
                >
                  <Flex>
                    <FaUser className="cursor-pointer" />
                    <FaCaretDown className="cursor-pointer" />
                  </Flex>
                </div>
                {user && (
                  <div
                    ref={userRef}
                    className="w-[200px] bg-white left-[-170px] top-8 absolute"
                  >
                    <ul className="text-center">
                      <List
                        text="My Account"
                        href="#"
                        className="py-4 px-[50px] bg-userBgColor font-Bold  text-white hover:text-white"
                      />
                      <List
                        text="Log Out"
                        href="#"
                        className="py-4 px-[50px] hover:font-normal text-black"
                      />
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative">
                <div onClick={() => {
                  setCard(!card)
                }}>
                  <FaShoppingCart className="cursor-pointer" />
                </div>
                {card && (
                  <div
                    className="absolute w-360 bg-white border border-solid border-cartBgColor right-0 top-8"
                    ref={cardRef}
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
                        <FaXmark />
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
                )}
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
