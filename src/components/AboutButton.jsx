const AboutButton = ({className,text}) => {
  return (
    <button className={`py-7 bg-primaryColor px-24 text-white font-DM text-base font-bold ${className}`} type='button'>{text}</button>
  )
}

export default AboutButton