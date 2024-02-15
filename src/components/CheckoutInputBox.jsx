import Label from "../components/Label";

const CheckoutInputBox = ({label,type,placeholderTxt}) => {
  return (
    <div className="mt-5">
      <Label text={label}  className='pb-5'/>
      <input type={type} placeholder={placeholderTxt} className="placeholder:text-secondaryColor placeholder:text-sm placeholder:font-DM placeholder:font-bold outline-transparent border-b border-solid border-cartBgColor w-full pb-6 text-primaryColor font-bold text-sm font-DM "/>
    </div>
  );
};

export default CheckoutInputBox;
