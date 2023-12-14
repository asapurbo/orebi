import React from 'react'
import Container from '../Container'
import Image from '../Image'
import itemcard from '../../assets/itemcard.png'
const Item = () => {
  return (
    <section className='pb-32'>
        <Container>
            <div>
                <Image src={itemcard} className='cursor-pointer'/>
            </div>
        </Container>
    </section>
  )
}

export default Item