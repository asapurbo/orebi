import Flex from "../Flex"
import MainPageButton from "../MainPageButton"

const PageButton = () => {
  return (
    <Flex className="mt-12 gap-x-4">
        <MainPageButton text="1"/>
        <MainPageButton text="2"/>
        <MainPageButton text="3"/>
        <MainPageButton text="4"/>
         <div className="flex items-end text-secondaryColor">...</div>
        <MainPageButton text="10"/>
    </Flex>
  )
}

export default PageButton