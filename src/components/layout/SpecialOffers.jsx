import Container from "../Container";
import Heading from "../Heading";
import productca from "../../assets/productca.png";
import productcb from "../../assets/productcb.png";
import productcc from "../../assets/productcc.png";
import productcd from "../../assets/productcd.png";
import Card from "../Card";
import Flex from "../Flex";

const SpecialOffers = () => {
  return (
    <section className="pb-36">
      <Container>
        <Heading
          text="Special Offers"
          as="h3"
          className="text-primaryColor font-DM text-39 font-bold  pb-12"
        />
        <Flex className="justify-between">
          <Card
            src={productca}
            bmtxt="Basic Crew Neck Tee"
            price="$56.00"
            hrefHeart="#"
            hrefRotate="#"
            hrefCart="#"
            target="_blank"
            btn="New"
          />

          <Card
            src={productcb}
            bmtxt="Basic Crew Neck Tee"
            price="$89.00"
            hrefHeart="#"
            hrefRotate="#"
            hrefCart="#"
            target="_blank"
            btn="New"
          />

          <Card
            src={productcc}
            bmtxt="Basic Crew Neck Tee"
            price="$96.00"
            hrefHeart="#"
            hrefRotate="#"
            hrefCart="#"
            target="_blank"
            btn="New"
          />

          <Card
            src={productcd}
            bmtxt="Basic Crew Neck Tee"
            price="$36.00"
            hrefHeart="#"
            hrefRotate="#"
            hrefCart="#"
            target="_blank"
            btn="New"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
