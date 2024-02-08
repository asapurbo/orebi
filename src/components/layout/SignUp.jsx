import Container from "../Container";
import Button from "../Button";
import Heading from "../Heading";
import { FaAngleRight } from "react-icons/fa6";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import PersonalDetails from "../PersonalDetails";
import NewCustomer from "../NewCustomer";
import Password from "../Password";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderData from "../data/HeaderData";

const SignUp = () => {
  const data = useSelector((state) => state.bread.currentName);

  let link = data.toLowerCase();
  if (link === "home") {
    link = link.replace("home", "");
  } else if(link === "sing up") {
    link = link.replace("sing up", "signup")
  }
  const breadcrumbs = window.location.pathname.replace("/" , "");
  const {haendleDispatch: handleData} = HeaderData()

  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="border-b border-solid border-convBorderColor pb-b62">
          <Heading
            text="Sign up"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor font-DM text-xs font-normal gap-x-2 pt-3 pb-32">
            <Link onClick={() => {
              return handleData(data)
            }} to={`/${link}`}>{data}</Link>
            <FaAngleRight />
            <Heading text={breadcrumbs} as="h4" className='capitalize' />
          </Flex>
          <div className="w-644">
            <Paragraph
              className="text-secondaryColor font-DM text-base font-normal leading-30"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            />
          </div>
        </div>
        <form action="#">
          <div className="border-b border-solid border-convBorderColor pb-b62">
            <PersonalDetails />
          </div>
          <div className="border-b border-solid border-convBorderColor pb-b62">
            <NewCustomer />
          </div>
          <div className="border-b border-solid border-convBorderColor pb-b62">
            <Password />
          </div>

          <div className="pt-16">
            <input type="checkbox" id="box" />
            <label
              htmlFor="box"
              className="pl-4 text-secondaryColor font-DM text-sm font-normal"
            >
              I have read and agree to the Privacy Policy
            </label>
          </div>

          <Flex className="mt-6 gap-x-7 items-center">
            <Heading
              text="Subscribe Newsletter"
              as="h3"
              className=" text-secondaryColor font-DM text-sm inline-block font-normal"
            />
            <div className="sub cursor-pointer">
              <input type="radio" id="yes" name="subscribe" />
              <label
                htmlFor="yes"
                className="pl-4 text-secondaryColor font-DM text-sm inline-block font-normal"
              >
                Yes
              </label>
            </div>
            <div className="sub">
              <input type="radio" id="no" name="subscribe" />
              <label
                htmlFor="no"
                className="pl-4 text-secondaryColor font-DM text-sm inline-block font-normal"
              >
                No
              </label>
            </div>
          </Flex>
          <div className="mt-7">
            <Button text="Log in" className="py-y16 pl-l77 pr-r83" />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default SignUp;
