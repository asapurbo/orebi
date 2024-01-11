import Flex from './Flex'
import ShopByHeading from './ShopByHeading'
import { FaPlus } from "react-icons/fa6";


const MainCategory = ({text}) => {
  return (
    <div>
        <Flex className="justify-between items-center pb-5 border-b border-solid border-cartBgColor pt-5">
            <ShopByHeading text={text}/>
            <FaPlus className="text-secondaryColor text-11" />
        </Flex>
    </div>
  )
}

export default MainCategory