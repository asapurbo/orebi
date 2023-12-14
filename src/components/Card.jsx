import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import Image from './Image'
import Paragraph from './Paragraph'
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, FaCartShopping } from "react-icons/fa6";
import Button from './Button'



const Card = ({src,bmtxt,price,alt,target,hrefHeart,hrefRotate,hrefCart,btn}) => {
  return (
     <div className='w-[370px]'>
         <div className='w-[370px] h-[370px] relative group'>
           <Image src={src} alt={alt}/>
            <div className='inline-block absolute top-5 left-7'>
              <Button text={btn}/>       
            </div>
           <div className='w-[0px] h-[156] duration-700 truncate bg-white absolute bottom-0 group-hover:w-[370px]'>
                <a href={hrefHeart} target={target}>
                 <Flex className="items-center gap-x-[15px] pt-6 pr-6 justify-end">
                    <Heading text="Add to Wish List" as="h4" className="text-secondaryColor font-DM text-base font-normal"/>
                    <FaHeart />
                 </Flex>
                </a>
             
                <a href={hrefRotate} target={target}>
                 <Flex className="items-center gap-x-[15px] pt-5 pr-6 justify-end">
                    <Heading text="Compare" as="h4" className="text-secondaryColor font-DM text-base font-normal"/>
                    <FaArrowsRotate />
                 </Flex>
                </a>
             
                <a href={hrefCart} target={target}>
                    <Flex className="items-center gap-x-[15px] pt-5 pr-6 pb-6 justify-end">
                        <Heading text="Add to Cart" as="h4" className="text-primaryColor font-DM text-base font-bold"/>
                        <FaCartShopping />
                   </Flex>
                </a>
            
           </div>
         </div>
        <Flex className={`justify-between items-center mt-[18px]`}>
            <Heading text={bmtxt} as="h4" className={`text-[#262626] font-dm text-xl font-bold`}/>
            <Paragraph text={price} className={`text-[#767676] font-dm text-base font-normal `} />
        </Flex>
        
     </div>
  )
}

export default Card