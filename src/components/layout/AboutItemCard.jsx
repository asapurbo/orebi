import Image from "../Image"
import AboutButton from "../AboutButton"
const AboutItemCard = ({ImgClass,alt,src,btnText}) => {
  return (
    <div className='w-s780 h-s780 overflow-hidden relative'>
       <div>
         <Image src={src} alt={alt} className={`w-full ${ImgClass}`}/>
       </div>
       <div className="absolute left-2/4 -translate-x-1/2 bottom-20">
           <AboutButton text={btnText}/>
       </div>
    </div>
  )
}

export default AboutItemCard