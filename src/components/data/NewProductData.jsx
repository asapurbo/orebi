import productya from "../../assets/productya.png";
import productyb from "../../assets/productyb.png";
import productyc from "../../assets/productyc.png";
import productyd from "../../assets/productyd.png";
const NewProductData = () => {
    const newproductData = [
        {
          src: productya,
          bmtxt: "Timepiece",
          price: "$44.00",
          hrefHeart: "#",
          hrefRotate: "#",
          hrefCart: "#",
          btn: "New",
        },
        {
          src: productyc,
          bmtxt: "Basket",
          price: "$44.00",
          hrefHeart: "#",
          hrefRotate: "#",
          hrefCart: "#",
          btn: "New",
        },
        {
          src: productyb,
          bmtxt: "Wrist Watch",
          price: "$70.00",
          hrefHeart: "#",
          hrefRotate: "#",
          hrefCart: "#",
          btn: "New",
        },
        {
          src: productyd,
          bmtxt: "Mouse Doll",
          price: "$60.00",
          hrefHeart: "#",
          hrefRotate: "#",
          hrefCart: "#",
          btn: "New",
        },
      ];
  return {
    newproductData
  }
}

export default NewProductData