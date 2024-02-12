import productca from "../../assets/productca.png";
import productcb from "../../assets/productcb.png";
import productcc from "../../assets/productcc.png";
import productcd from "../../assets/productcd.png";

const SpecialOffersData = () => {
  const specialOfferData = [
    {
      src: productca,
      bmtxt: "Cap",
      price: "$56.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      target: "_blank",
      btn: "New",
    },
    {
      src: productcb,
      bmtxt: "Dining Table",
      price: "$89.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      target: "_blank",
      btn: "New",
    },
    {
      src: productcc,
      bmtxt: "Headphone",
      price: "$96.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      target: "_blank",
      btn: "New",
    },
    {
      src: productcd,
      bmtxt: "Glasse",
      price: "$36.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      target: "_blank",
      btn: "New",
    },
  ];

  return { specialOfferData };
};

export default SpecialOffersData;
