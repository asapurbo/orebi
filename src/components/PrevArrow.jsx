import PrevBtn from "./icons/PrevBtn";

const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer inline-block absolute top-1/2 left-0 -translate-y-1/2 z-50 ${className}`}
    >
      <PrevBtn />
    </div>
  );
};

export default PrevArrow;
