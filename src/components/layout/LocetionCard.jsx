import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { FaPlus } from "react-icons/fa";

const LocetionCard = () => {
  return (
    <div className='w-s451 bg-white'>
       <div className='relative px-5 py-8 border-b border-solid border-cartBgColor'>
         <Heading text="Germany Office" as="h3" className="text-primaryColor font-DM text-base font-bold"/>
         <div className='absolute top-0 right-4 flex items-center justify-center h-full'>
            <FaPlus className='text-f15'/>
         </div>
       </div>

       <div className='relative px-5 py-8 border-b border-solid border-cartBgColor'>
         <Heading text="Slovakia Office" as="h3" className="text-primaryColor font-DM text-base font-bold"/>
         <div className='absolute top-0 right-4 flex items-center justify-center h-full'>
            <FaPlus className='text-f15'/>
         </div>
       </div>
      
       <div className='relative px-5 py-8'>
         <Heading text="Lithuania Office" as="h3" className="text-primaryColor font-DM text-base font-bold"/>
        <Paragraph className="text-secondaryColor font-DM text-base font-normal pt-5 pb-3" text="575 Crescent Ave. Quakertown, PA 18951"/>

        <Paragraph className="text-secondaryColor font-DM text-base font-normal pt-5 pb-3" text="+432 533 12 523"/>

        <Paragraph className="text-secondaryColor font-DM text-base font-normal pt-5 pb-3" text="info@domain.com"/>

        <Paragraph className="text-secondaryColor font-DM text-base font-normal pt-5 pb-3" text="Mon - Fri: 9am - 6pm"/>
       </div>
    </div>
  )
}

export default LocetionCard