import Container from "../Container";
import { FaAngleRight } from "react-icons/fa6";
import Heading from "../Heading";
import Flex from "../Flex";
import Label from "../Label";
import SignUpHeading from "../SignUpHeading";
import Button from "../Button";
import LocetionCard from "./LocetionCard";

const MainContactPage = () => {
  const bread = window.location.pathname.replace("/", "");
  return (
    <section className="pt-p124 pb-140">
      <Container>
        <div className="mb-130">
          <Heading
            text="Contacts"
            as="h3"
            className="text-primaryColor font-DM text-49 font-bold"
          />
          <Flex className="items-center capitalize text-SnColor font-DM text-xs font-normal gap-x-2 pt-3">
            <Heading text="Home" as="h4" />
            <FaAngleRight />
            <Heading text={bread} as="h4" />
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
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Button text="Post" className="py-y16 pl-l77 pr-r83" />
          </div>
        </form>

        <div className="mt-36 relative">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20229.89808322628!2d90.35871655016996!3d22.692362873064106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553407fbece487%3A0x5d069b9599d4414a!2z4Kas4Kaw4Ka_4Ka24Ka-4Kay!5e0!3m2!1sbn!2sbd!4v1704996797674!5m2!1sbn!2sbd"
              width="100%"
              height="672px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mb-36 mx-4 w-full"
            ></iframe>
          </div>
          <div className="absolute top-2/4 -translate-y-2/4 left-20">
            <LocetionCard/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainContactPage;
