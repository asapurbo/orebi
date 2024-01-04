import Flex from "./Flex";
import Label from "./Label";
import SignUpHeading from "./SignUpHeading";

const Password = () => {
  return (
    <div className="pt-t57 pb-b69">
    <SignUpHeading text="Your Personal Details" className="pb-b42" />
    <Flex className="gap-10 mb-6">
      <div className="w-w437">
        <Label text="Password" className="pb-3" />
        <input
          type="password"
          className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
          placeholder="Password"
        />
      </div>

      <div className="w-w437">
        <Label text="Repeat Password" className="pb-3" />
        <input
          type="password"
          className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
          placeholder="Repeat password"
        />
      </div>
    </Flex>
  </div>
  )
}

export default Password