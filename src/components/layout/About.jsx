import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import List from '../List'
import Paragraph from '../Paragraph'
import Logo from '../icons/Logo'
import Footer from './Footer'

const About = () => {
  return (
     <section className='pt-[55px] pb-[60px] bg-categoryBgColor'>
        <Container>
            <Flex className="justify-between">
                <Flex className="w-540 justify-between">
                    <div className='w-120'>
                        <Heading text="MENU" as="h1" className="text-primaryColor pb-4 font-DM text-base font-bold" />
                        <div>
                            <List text="Home" href="#" className="py-y6"/>
                            <List text="Shop" href="#" className="py-y6"/>
                            <List text="About" href="#" className="py-y6"/>
                            <List text="Contact" href="#" className="py-y6"/>
                            <List text="Journal" href="#" className="py-y6"/>
                        </div>
                    </div>
                    <div className='w-140'>
                        <Heading text="SHOP" as="h1" className="text-primaryColor pb-4 font-DM text-base font-bold" />
                        <div>
                            <List text="Category 1" href="#" className="py-y6"/>
                            <List text="Category 2" href="#" className="py-y6"/>
                            <List text="Category 3" href="#" className="py-y6"/>
                            <List text="Category 4" href="#" className="py-y6"/>
                            <List text="Category 5" href="#" className="py-y6"/>
                        </div>
                    </div>
                    <div className='w-170'>
                        <Heading text="HELP" as="h1" className="text-primaryColor pb-4 font-DM text-base font-bold" />
                        <div>
                            <List text="Privacy Policy" href="#" className="py-y6"/>
                            <List text="Terms & Conditions" href="#" className="py-y6"/>
                            <List text="Special E-shop" href="#" className="py-y6"/>
                            <List text="Shipping" href="#" className="py-y6"/>
                            <List text="Secure Payments" href="#" className="py-y6"/>
                        </div>
                    </div>
                </Flex>


                <Flex className="w-921 gap-x-[260px]">
                   <div className="text-primaryColor font-DM font-bold text-base">
                     <Heading text="(052) 611-5711" as="h3" className=" text-primaryColor font-DM font-bold text-base"/>
                     <Heading text="company@domain.com" as="h4" className="text-primaryColor font-DM font-bold text-base"/>
                    <Paragraph text="575 Crescent Ave. Quakertown, PA 18951" className="text-higherSecondaryColor font-DM font-normal text-sm pt-4"/>
                   </div>

                  <div>
                    <Logo/>
                  </div>
                </Flex>
            </Flex>

            <div className='pt-16'>
               <Footer/>
            </div>
        </Container>
     </section>
  )
}

export default About