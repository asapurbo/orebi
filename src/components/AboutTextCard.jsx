import Heading from './Heading'
import Paragraph from './Paragraph'

const AboutTextCard = ({paraClass,headText,paraText}) => {
  return (
    <div className='w-s506 mt-118'>
      <div>
        <Heading text={headText} as="h3" className="text-primaryColor font-DM text-25 font-bold leading-9"/>
        <Paragraph className={`text-secondaryColor font-DM text-base font-normal leading-30 pt-3 ${paraClass}`} text={paraText}/>
      </div>
    </div>
  )
}

export default AboutTextCard