import Card from "../Card";
import CardData from "../data/CardData";
const ShopProductCard = () => {
   const {cardData:cardData} = CardData()

  return (
    <div className="mt-s60 ">
      <div className="flex w-full flex-wrap justify-between gap-y-130">
        {cardData.map((item, index) => (
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
      </div>
    </div>
  );
};

export default ShopProductCard;
