import NextBtn from "./icons/NextBtn";

const NextArrow = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer inline-block absolute top-1/2 right-7 -translate-y-1/2 z-50 ${className}`}
    >
      <NextBtn />
    </div>
  );
};

export default NextArrow;
