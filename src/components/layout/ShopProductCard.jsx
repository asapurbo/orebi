import Card from "../Card";
import productya from "../../assets/productya.png";
import productyb from "../../assets/productyb.png";
import productyc from "../../assets/productyc.png";
import productyd from "../../assets/productyd.png";

import productxi from '../../assets/productxi.png'
import productxj from '../../assets/productxj.png'
import productxk from '../../assets/productxk.png'
import productxl from '../../assets/productxl.png'
import { forwardRef } from "react";





const ShopProductCard = ({refThree}) => {

  return (
    <div className="mt-s60 ">
      <div ref={refThree} className="flex w-full flex-wrap justify-between gap-y-130">
        <Card
          src={productya}
          bmtxt="Basic Crew Neck Tee"
          price="$44.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="New"
        />

        <Card
          src={productyb}
          bmtxt="Basic Crew Neck Tee"
          price="$50.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-10%"
        />

        <Card
          src={productyc}
          bmtxt="Basic Crew Neck Tee"
          price="$60.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-30%"
        />

        <Card
          src={productyd}
          bmtxt="Basic Crew Neck Tee"
          price="$78.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="New"
        />
        <Card
          src={productya}
          bmtxt="Basic Crew Neck Tee"
          price="$44.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="New"
        />

        <Card
          src={productyb}
          bmtxt="Basic Crew Neck Tee"
          price="$50.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-52%"
        />

        <Card
          src={productyc}
          bmtxt="Basic Crew Neck Tee"
          price="$60.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-30%"
        />

        <Card
          src={productyd}
          bmtxt="Basic Crew Neck Tee"
          price="$78.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-10%"
        />

        <Card
          src={productxi}
          bmtxt="Basic Crew Neck Tee"
          price="$98.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="New"
        />

        <Card
          src={productxj}
          bmtxt="Basic Crew Neck Tee"
          price="$36.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-60%"
        />

        <Card
          src={productxk}
          bmtxt="Basic Crew Neck Tee"
          price="$41.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="-15%"
        />

        <Card
          src={productxl}
          bmtxt="Basic Crew Neck Tee"
          price="$76.00"
          hrefHeart="#"
          hrefRotate="#"
          hrefCart="#"
          target="_blank"
          btn="New"
        />
      </div>
    </div>
  );
};

const forwardShopProductCard = forwardRef(ShopProductCard)


export default forwardShopProductCard;
