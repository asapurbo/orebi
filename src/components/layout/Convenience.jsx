import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Paragraph from '../Paragraph';



const Convenience = () => {
  return (
    <section className='py-8 border-t border-b border-solid border-convBorderColor'>
        <Container>
            <Flex className="justify-between">
                <Flex className="gap-x-4 items-center">
                   <PiNumberTwoBold  className='text-xl'/>
                   <Paragraph text="Two years warranty" className="text-higherSecondaryColor font-DM font-normal text-base" />
                </Flex>
                <Flex className="gap-x-4 items-center">
                   <FaTruck className='text-xl'/>
                   <Paragraph text="Free shipping" className="text-higherSecondaryColor font-DM font-normal text-base" />
                </Flex>
                <Flex className="gap-x-4 items-center">
                   <FaArrowRotateLeft className='text-xl' />
                   <Paragraph text="Return policy in 30 days" className="text-higherSecondaryColor font-DM font-normal text-base" />
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Convenience