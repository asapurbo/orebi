import CardTwo from "../CardTwo";
import CardData from "../data/CardData";

const ShopProductCardTwo = ({ sizeFn }) => {
  const { cardData: cardData } = CardData();
  const setSize = sizeFn || 12;

  return (
    <div>
      {cardData.map((item, index) =>
        setSize > index ? (
          <CardTwo
            key={index}
            src={item.src}
            alt={item.alt}
            btnTxt={item.btn}
            productName={item.bmtxt}
            productPrice={item.price}
            productColor="Black"
            itemInfo={item}
          />
        ) : null
      )}
    </div>
  );
};

export default ShopProductCardTwo;
