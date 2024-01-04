import Flex from "./Flex";
import Label from "./Label";
import SignUpHeading from "./SignUpHeading";

const PersonalDetails = () => {
  return (
    <div className="pt-t57 pb-b69">
      <SignUpHeading text="Your Personal Details" className="pb-b42" />
      <Flex className="gap-10 mb-6">
        <div className="w-w437">
          <Label text="First Name" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="First Name"
          />
        </div>

        <div className="w-w437">
          <Label text="Last Name" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="Last Name"
          />
        </div>
      </Flex>
      <Flex className="gap-10">
        <div className="w-w437">
          <Label text="Email address" className="pb-3" />
          <input
            type="email"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="company@domain.com"
          />
        </div>

        <div className="w-w437">
          <Label text="Telephone" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="Your phone number"
          />
        </div>
      </Flex>
    </div>
  );
};

export default PersonalDetails;
