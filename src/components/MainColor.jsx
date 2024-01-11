import ShopByHeading from "./ShopByHeading";

const MainColor = ({className,text}) => {
  return (
    <div className=" pb-5 border-b border-solid border-cartBgColor pt-5">
      <ShopByHeading
        text={text}
        className={`relative after:absolute left-5 after:content-[''] after:w-s11 after:h-s11 after:rounded-full ${className} after:top-2/4 after:-translate-y-2/4 after:-left-5`}
      />
    </div>
  );
};

export default MainColor;
