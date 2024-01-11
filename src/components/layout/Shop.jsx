import React from "react";
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
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="mb-130">
          <Heading
            text="Products"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
            <Heading text="Home" as="h4" />
            <FaAngleRight />
            <Heading text="Products" as="h4" />
          </Flex>
        </div>

        <Flex className="gap-x-8">
          <div className="w-372">
            <CategoryList />
            <ColorList/>
            <BrandList/>
            <PriceList/>
          </div>

          <div className="w-full">
             <GridBar/>
             <ShopProductCard/>
             <PageButton/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
