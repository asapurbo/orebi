import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const MainSlider = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>
  };

  return (
    <div>
      <Slider {...settings} className="relative">
        {children}
      </Slider>
    </div>
  );
};

export default MainSlider;
