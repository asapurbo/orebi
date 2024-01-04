import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Button from "../Button";
import { FaAngleRight } from "react-icons/fa6";
import ReturningCustomer from "../ReturningCustomer";
import SignUpHeading from "../SignUpHeading";
const Login = () => {
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="border-b border-solid border-convBorderColor pb-b62">
          <Heading
            text="Login"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor font-DM text-xs font-normal gap-x-2 pt-3 pb-32">
            <Heading text="Home" as="h4" />
            <FaAngleRight />
            <Heading text="Login" as="h4" />
          </Flex>
          <div className="w-644">
            <Paragraph
              className="text-secondaryColor font-DM text-base font-normal leading-30"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            />
          </div>
        </div>
        <div className="border-b border-solid border-convBorderColor pb-b62">
          <form action="">
            <div>
              <ReturningCustomer />
            </div>
            <div className="mt-7">
              <Button
                text="Log in"
                className="bg-white text-primaryColor border border-solid border-userBgColor py-y16 pl-l77 pr-r83"
              />
            </div>
          </form>
        </div>
        <div className="pt-t57">
            <SignUpHeading text="New Customer"/>
            <div className="w-644 mt-10">
            <Paragraph
              className="text-secondaryColor font-DM text-base font-normal leading-30"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            />
          </div>
          <div className="mt-12">
              <Button
                text="Continue"
                className="  py-y16 pl-l77 pr-r83"
              />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
