import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import HeaderData from "../data/HeaderData";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import SignUpHeading from '../SignUpHeading';
import CheckoutInputBox from "../CheckoutInputBox";
import CheckoutForm from "./CheckoutForm";

const MainCheckout = () => {
  const { haendleDispatch: handleData } = HeaderData();

  const bread = window.location.pathname.replace("/", "");
  const data = useSelector((state) => state.bread.currentName);

  let link = data.toLowerCase();
  if (link === "home") {
    link = link.replace("home", "");
  } else if (link === "sing up") {
    link = link.replace("sing up", "signup");
  }

  return (
    <div>
      <section className="pt-p124 pb-140">
        <Container>
          <div className="mb-130">
            <Heading
              text="Checkout"
              as="h3"
              className="text-primaryColor font-DM text-49 font-bold"
            />
            <Flex className="items-center capitalize text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
              <Link
                onClick={() => {
                  handleData(data);
                }}
                to={`/${link}`}
              >
                {data}
              </Link>
              <FaAngleRight />
              <Heading text={bread} as="h4" />
            </Flex>
          </div>

          <Flex className='gap-x-1 my-36'>
            <Heading
              text="Have a coupon?"
              as="h3"
              className="text-secondaryColor font-DM text-base"
            />
            <Heading
              text="Click here to enter your code"
              as="h3"
              className="text-primaryColor font-DM text-base"
            />
          </Flex>
          <div>
            <SignUpHeading text="Billing Details" className="pb-b42" />
          </div>
          {/* ---------- */}
           <CheckoutForm/>
          {/* ---------- */}
        </Container>
      </section>
    </div>
  );
};

export default MainCheckout;
