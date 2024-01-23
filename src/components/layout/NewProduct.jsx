import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import productya from '../../assets/productya.png'
import productyb from '../../assets/productyb.png'
import productyc from '../../assets/productyc.png'
import productyd from '../../assets/productyd.png'
import Card from '../Card'
import Flex from '../Flex'

const NewProduct = () => {
  return (
    <section className='pb-118'>
        <Container>
           <Heading text="New Arrivals" as="h3" className="text-primaryColor font-DM text-39 font-bold  pb-12"/>
           <Flex className="gap-x-10">
             <Card src={productya} bmtxt="Basic Crew Neck Tee" price="$44.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productyb} bmtxt="Basic Crew Neck Tee" price="$50.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productyc} bmtxt="Basic Crew Neck Tee" price="$60.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productyd} bmtxt="Basic Crew Neck Tee" price="$78.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />
           </Flex>
          
        </Container>
    </section>
  )
}

export default NewProduct