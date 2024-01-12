import { Link } from "react-router-dom";
import Container from "../Container";
import Paragraph from "../Paragraph";
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="w-644 ">
          <div>
            <h1 className="text-primaryColor font-DM text-f200 font-bold">
              404
            </h1>
          </div>

          <div className="pr-8">
            <Paragraph
              className="text-secondaryColor font-DM font-normal leading-30"
              text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"
            />
          </div>
          <div className="mt-s50 relative">
            <input
              type="text"
              className="border border-solid placeholder:text-secondaryColor placeholder:font-DM placeholder:text-base placeholder:font-normal w-full focus:outline-cartBgColor focus:outline-1 border-cartBgColor p-5"
              placeholder="Type to search"
            />
            <div className="absolute right-7 top-0 flex justify-center items-center h-full">
              <FaSearch />
            </div>
          </div>

          <div className="w-s200 text-center bg-primaryColor mt-s60">
            <Link
              to="/"
              className="py-4 block text-white font-DM text-sm font-bold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Error;
