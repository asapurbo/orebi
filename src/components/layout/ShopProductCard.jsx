import Card from "../Card";
import CardData from "../data/CardData";
const ShopProductCard = ({ sizeFn }) => {
  const { cardData: cardData } = CardData();
  const setSize = sizeFn || 12;

  return (
    <div className="mt-s60 ">
      <div className="flex w-full flex-wrap gap-x-20 gap-y-130">
        {cardData.map((item, index) =>
          setSize > index ? (
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
          ) : null
        )}
      </div>
    </div>
  );
};

export default ShopProductCard;
