import Container from "../Container";
import { FaAngleRight } from "react-icons/fa6";
import Heading from "../Heading";
import Flex from "../Flex";
import Label from "../Label";
import SignUpHeading from "../SignUpHeading";
import Button from "../Button";

const MainContactPage = () => {
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="mb-130">
          <Heading
            text="Contacts"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
            <Heading text="Home" as="h4" />
            <FaAngleRight />
            <Heading text="Contacts" as="h4" />
          </Flex>
        </div>
        <form action="#">
          <div className="pt-t57 pb-b69">
            <SignUpHeading text="Fill up a Form" className="pb-b42" />
            <div className="mb-6">
              <div className="w-780 mt-6">
                <Label text="Name" className="pb-3" />
                <input
                  type="text"
                  className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
                  placeholder="Your name here"
                />
              </div>

              <div className="w-780 mt-6">
                <Label text="Email" className="pb-3" />
                <input
                  type="email"
                  className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
                  placeholder="Your email here"
                />
              </div>

              <div className="w-780 mt-6">
                <Label text="Message" className="pb-3" />
                <textarea
                  type="email"
                  className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
                  placeholder="Your message here"
                >
                </textarea>
              </div>
             
            </div>
          </div>
          <div className="mt-7">
            <Button text="Post" className="py-y16 pl-l77 pr-r83" />
          </div>
        </form>
        <div>
        
        </div>
      </Container>
    </section>
  );
};

export default MainContactPage;
