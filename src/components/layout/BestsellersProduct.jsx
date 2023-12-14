import Container from '../Container'
import Heading from '../Heading'
import productxi from '../../assets/productxi.png'
import productxj from '../../assets/productxj.png'
import productxk from '../../assets/productxk.png'
import productxl from '../../assets/productxl.png'
import Card from '../Card'
import Flex from '../Flex'

const BestsellersProduct = () => {
  return (
    <section className='pb-32'>
        <Container>
           <Heading text="Our Bestsellers" as="h3" className="text-primaryColor font-DM text-39 font-bold  pb-12"/>
           <Flex className="justify-between">
             <Card src={productxi} bmtxt="Basic Crew Neck Tee" price="$98.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productxj} bmtxt="Basic Crew Neck Tee" price="$36.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productxk} bmtxt="Basic Crew Neck Tee" price="$41.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />

             <Card src={productxl} bmtxt="Basic Crew Neck Tee" price="$76.00" hrefHeart="#" hrefRotate="#" hrefCart="#" target="_blank" btn="New" />
           </Flex>
          
        </Container>
    </section>
  )
}

export default BestsellersProduct