import { useEffect, useRef } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { FaAngleRight } from "react-icons/fa6";
import CategoryList from "./CategoryList";
import ColorList from "./ColorList";
import BrandList from "./BrandList";
import PriceList from "./PriceList";
import GridBar from "./GridBar";
import ShopProductCard from "./ShopProductCard";
import PageButton from "./PageButton";

const Shop = () => {
  const gridOneRef = useRef(null);
  const gridTwoRef = useRef(null);
  const shopOneRef = useRef(null);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const handelClick = () => {
      shopOneRef.current.classList.add("flex-col");
      shopOneRef.current.classList.add("items-center");
      cardRef.current.classList.add("w-ws70");
    };
    gridTwoRef.current.addEventListener("click", handelClick);
  }, []);

  useEffect(() => {
    const handelClick = () => {
      shopOneRef.current.classList.remove("flex-col");
      shopOneRef.current.classList.remove("items-center");
    };
    gridOneRef.current.addEventListener("click", handelClick);
  }, []);

  const bread = window.location.pathname.replace("/", "");

  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="mb-130">
          <Heading
            text="Products"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center capitalize text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
            <Heading text="Home" as="h4" />
            <FaAngleRight />
            <Heading text={bread} as="h4" />
          </Flex>
        </div>

        <Flex className="gap-x-8">
          <div className="w-372">
            <CategoryList />
            <ColorList />
            <BrandList />
            <PriceList />
          </div>

          <div className="w-full">
            <GridBar refOne={gridOneRef} refTwo={gridTwoRef} />
            <ShopProductCard refThree={shopOneRef} />
            <PageButton />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
