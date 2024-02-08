import Container from "../components/Container"
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";
import HeaderData from "../components/data/HeaderData";
import { useSelector } from "react-redux";
import Paragraph from "../components/Paragraph";
import { FaAngleRight } from "react-icons/fa6";

const JournalPage = () => {

  const data = useSelector((state) => {
    return state.bread.currentName;
  });

  let link = data.toLowerCase();
  if (link === "home") {
    link = link.replace("home", "");
  } else if (link === "sing up") {
    link = link.replace("sing up", "signup");
  }

  const breadcrumb = window.location.pathname.replace("/" , "");
  const {haendleDispatch: handleData} = HeaderData()
  
  return (
    <section className="pt-p124 pb-140">
      <Container>
      <div className="border-b border-solid border-convBorderColor pb-b62">
          <Heading
            text="Journal"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor font-DM text-xs font-normal gap-x-2 pt-3 pb-32">
            <Link onClick={() => {
              handleData(data)
            }} to={`/${link}`}>{data}</Link>
            <FaAngleRight />
            <Heading text={breadcrumb} as="h4" className='capitalize'/>
          </Flex>
          <div className="w-644">
            <Paragraph
              className="text-secondaryColor font-DM text-base font-normal leading-30"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JournalPage