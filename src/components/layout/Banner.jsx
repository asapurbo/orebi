import React from 'react'
import Image from '../Image'
import bannercard from "../../assets/bannercard.png"

const Banner = () => {
  return (
    <section>
        <a href='#'> 
            <Image src={bannercard} className="w-full"/>
        </a>
    </section>
  )
}

export default Banner