import Flex from '../Flex'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Paragraph from '../Paragraph';


const Footer = () => {
  return (
    <Flex className="justify-between items-center">
        <Flex className="gap-x-7">
            <a href='#'><FaFacebookF className='hover:text-[#1877F2] duration-200 text-2xl' /></a>
            <a href='#'><FaLinkedinIn  className='hover:text-[#0077b5] duration-200 text-2xl' /></a>
            <a href='#'><FaInstagram  className='hover:text-[#fccc63] duration-200 text-2xl'/></a>
        </Flex>
        <div>
            <Paragraph text="2023 Orebi Minimal eCommerce Figma Template by Adveits"/>
        </div>
    </Flex>
  )
}

export default Footer