import Container from "../Container";
import Heading from "../Heading";
import BestsellersProductData from "../data/BestsellersProductData";
import Card from "../Card";
import MainSlider from "../MainSlider";

const BestsellersProduct = () => {
  const { bestsellersdata: bestsellersdata } = BestsellersProductData();

  return (
    <section className="pb-32">
      <Container>
        <Heading
          text="Our Bestsellers"
          as="h3"
          className="text-primaryColor font-DM text-39 font-bold  pb-12"
        />
        <MainSlider className="justify-between">
          {bestsellersdata.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              bmtxt={item.bmtxt}
              price={item.price}
              hrefHeart={item.hrefHeart}
              hrefRotate={item.hrefRotate}
              hrefCart={item.hrefCart}
              target={item.target}
              btn={item.btn}
              itemInfo={item}
            />
          ))}
        </MainSlider>
      </Container>
    </section>
  );
};

export default BestsellersProduct;
