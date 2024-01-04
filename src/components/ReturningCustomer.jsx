import Flex from "./Flex";
import Label from "./Label";
import SignUpHeading from "./SignUpHeading";
const ReturningCustomer = () => {
  return (
    <div className="pt-t57">
      <SignUpHeading text="Returning Customer" className="pb-b42" />
      <Flex className="gap-10 mb-6">
        <div className="w-w437">
          <Label text="Email address" className="pb-3" />
          <input
            type="email"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="company@domain.com"
          />
        </div>

        <div className="w-w437">
          <Label text="Password" className="pb-3" />
          <input
            type="password"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="**********"
          />
        </div>
      </Flex>
    </div>
  );
};

export default ReturningCustomer;
