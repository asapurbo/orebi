
import { Link } from "react-router-dom";

const List = ({ className, href, text, lkClass, handelClick }) => {
  return (
    <li
      className={`text-secondaryColor list-none font-DM text-sm font-normal hover:text-primaryColor hover:font-bold ${className}`}
    >
      <Link
        onClick={() => {
          return handelClick();
        }}
        className={`block ${lkClass}`}
        to={href}
      >
        {text}
      </Link>
    </li>
  );
};

export default List;
