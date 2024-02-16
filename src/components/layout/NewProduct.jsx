import Container from "../Container";
import Heading from "../Heading";

import Card from "../Card";
import MainSlider from "../MainSlider";
import NewProductData from "../data/NewProductData";

const NewProduct = () => {
  const {newproductData: newproductData} = NewProductData()

  return (
    <section className="pb-118">
      <Container>
        <Heading
          text="New Arrivals"
          as="h3"
          className="text-primaryColor font-DM text-39 font-bold  pb-12"
        />
        <MainSlider className="justify-between">
          {newproductData.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              bmtxt={item.bmtxt}
              price={item.price}
              hrefHeart={item.hrefHeart}
              hrefRotate={item.hrefRotate}
              hrefCart={item.hrefCart}
              btn={item.btn}
              itemInfo={item}
            />
          ))}
        </MainSlider>
      </Container>
    </section>
  );
};

export default NewProduct;
