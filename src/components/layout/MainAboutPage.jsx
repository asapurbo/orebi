import Container from "../Container";
import { FaAngleRight } from "react-icons/fa6";
import Heading from "../Heading";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import AboutItemCard from "./AboutItemCard";
import productcb from "../../assets/productcb.png";
import productyc from "../../assets/productyc.png";
import AboutTextCard from "../AboutTextCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderData from "../data/HeaderData";

const MainAboutPage = () => {
  const data = useSelector((state) => {
    return state.bread.currentName;
  });

  console.log(data);
  
  let link = data.toLowerCase();
  if (link === "home") {
    link = link.replace("home", "");
  } else if(link === "sing up") {
    link = link.replace("sing up", "signup")
  }

  const bread = window.location.pathname.replace("/", "");
  const {haendleDispatch: dataHeadle} = HeaderData()
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="mb-130">
          <Heading
            text="About"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor capitalize font-DM text-xs font-normal gap-x-2 pt-3">
            <Link onClick={() => { return dataHeadle(data) }} to={`/${link}`}>{data}</Link>
            <FaAngleRight />
            <Heading text={bread} as="h4" />
          </Flex>
        </div>

        <Flex className="justify-between items-center">
          <AboutItemCard src={productyc} btnText="Our Stores" alt="productyc" />
          <AboutItemCard src={productcb} btnText="Our Brands" alt="productcb" />
        </Flex>

        <div className="mt-32 pr-36">
          <Paragraph
            className="text-primaryColor font-DM text-39 font-normal leading-l52"
            text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
          />
        </div>

        <Flex className="justify-between">
          <div>
            <AboutTextCard
              headText="Our Vision"
              paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>

          <div>
            <AboutTextCard
              headText="Our Story"
              paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            />
          </div>

          <div>
            <AboutTextCard
              headText="Our Brands"
              paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default MainAboutPage;