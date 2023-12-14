import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import cardxa from '../../assets/cardxa.png'
import cardxb from '../../assets/cardxb.png'
import cardxc from '../../assets/cardxc.png'

const Product = () => {
  return (
    <section className='pt-140 pb-32'>
        <Container>
            <Flex className="justify-between">
                <div className='w-780 h-780'>
                    <Image src={cardxa} className='w-full cursor-pointer'/>
                </div>

                <Flex className='flex-col gap-y-10 w-780 h-780'>
                    <div>
                        <Image src={cardxb} className='w-full cursor-pointer'/>
                    </div>
                    <div>
                       <Image src={cardxc} className='w-full cursor-pointer'/>
                    </div>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Product