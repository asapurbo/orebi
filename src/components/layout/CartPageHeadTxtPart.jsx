import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { prevPage } from "../Slice/breadcrumbSlice";

const CartPageHeadTxtPart = () => {
  const bread = window.location.pathname.replace("/", "");
  const data = useSelector((state) => state.bread.currentName);
  const dispatch = useDispatch();

  let link = data.toLowerCase();
  if (link === "home") {
    link = link.replace("home", "");
  } else if (link === "sing up") {
    link = link.replace("sing up", "signup");
  }

  return (
    <section className="pt-p124">
      <Container>
        <div className="mb-130">
          <Heading
            text="Cart"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center capitalize text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
            <Link
              onClick={() => {
                return dispatch(prevPage(data));
              }}
              to={`/${link}`}
            >
              {data}
            </Link>
            <FaAngleRight />
            <Heading text={bread} as="h4" />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default CartPageHeadTxtPart;
