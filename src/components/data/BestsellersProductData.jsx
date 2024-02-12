import productxi from "../../assets/productxi.png";
import productxj from "../../assets/productxj.png";
import productxk from "../../assets/productxk.png";
import productxl from "../../assets/productxl.png";

const BestsellersProductData = () => {
  const bestsellersdata = [
    {
      src: productxi,
      bmtxt: "New design water bottle",
      price: "$98.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      btn: "New",
    },
    {
      src: productxj,
      bmtxt: "White gray college bag",
      price: "$200.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      btn: "New",
    },
    {
      src: productxk,
      bmtxt: "Grinding",
      price: "$53.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      btn: "New",
    },
    {
      src: productxl,
      bmtxt: "black bag",
      price: "$86.00",
      hrefHeart: "#",
      hrefRotate: "#",
      hrefCart: "#",
      btn: "New",
    },
  ];

  return {
    bestsellersdata,
  };
};

export default BestsellersProductData;
