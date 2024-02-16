import Container from "../Container";
import Heading from "../Heading";

import Card from "../Card";
import SpecialOffersData from "../data/SpecialOffersData";
import MainSlider from "../MainSlider";

const SpecialOffers = () => {
  const {specialOfferData: specialOfferData} = SpecialOffersData();

  
  return (
    <section className="pb-36">
      <Container>
        <Heading
          text="Special Offers"
          as="h3"
          className="text-primaryColor font-DM text-39 font-bold  pb-12"
        />
        <MainSlider className="justify-between">
          {
            specialOfferData.map((item,index) => (
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
            ))
          }
        </MainSlider>
      </Container>
    </section>
  );
};

export default SpecialOffers;
