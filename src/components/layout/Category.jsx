import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'
import Paragraph from '../Paragraph'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";



const Category = () => {
  return (
    <section className="py-10 bg-categoryBgColor border-t border-b border-solid border-borderColor">
        <Container>
            <Flex className="items-center">
                <div className="w-3/12">
                    <Flex className="gap-x-3 items-center">
                        <Bar/>
                        <Paragraph text="Shop by Category"/>
                    </Flex>
                </div>

                <Flex className="w-6/12 items-center justify-center">
                    <input className="w-[601px] h-[50px] outline-transparent pl-5 placeholder:text-placeholderColor placeholder:font-DM placeholder:font-normal placeholder:text-sm font-DM font-normal text-sm" placeholder='Search Products'/>
                    <FaSearch className="ml-[-40px] cursor-pointer"/>
                </Flex>
                <div className="w-3/12">
                    <Flex className="justify-end gap-x-10">
                      <Flex>
                        <FaUser className='cursor-pointer'/>
                        <FaCaretDown  className='cursor-pointer'/>
                      </Flex>
                        <FaShoppingCart className='cursor-pointer'/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Category