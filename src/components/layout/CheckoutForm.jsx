import CheckoutInputBox from "../CheckoutInputBox";
import Flex from "../Flex";
import Label from "../Label";
import { FaCaretDown } from "react-icons/fa";
import SignUpHeading from "../SignUpHeading";
import Heading from "../Heading";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const data = useSelector((state) => {
    return state.addToCadeData.data;
  });
  let total = data.reduce((sum, item) => {
    const num = parseFloat(item.price.replace("$", ""));
    return (sum += num * item.count);
  }, 0);
  console.log(data);
  return (
    <form action="" className="w-s1057">
      <Flex className="justify-between">
        <div className="w-s506 ">
          <CheckoutInputBox
            label="First Name *"
            type="text"
            placeholderTxt="First Name"
          />
        </div>
        <div className="w-s506 ">
          <CheckoutInputBox
            label="Last Name *"
            type="text"
            placeholderTxt="Last Name"
          />
        </div>
      </Flex>
      <div className="w-full mt-5">
        <Label text="Country" className="pb-3" />
        <div className="relative">
          <select className="focus:outline-transparent w-full pb-4 border-b border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
            <option>Please select</option>
          </select>
          <div className="absolute right-0 bottom-0 h-full flex justify-center items-center">
            <FaCaretDown className="text-secondaryColor text-11" />
          </div>
        </div>
      </div>

      <div>
        <CheckoutInputBox
          label="Street Address *"
          type="text"
          placeholderTxt="House number and street name"
        />
      </div>

      <div>
        <CheckoutInputBox
          type="text"
          placeholderTxt="Apartment, suite, unit etc. (optional)"
        />
      </div>
      <div>
        <CheckoutInputBox
          label="Town/City *"
          type="text"
          placeholderTxt="Town/City"
        />
      </div>
      <div>
        <CheckoutInputBox
          label="County (optional)"
          type="text"
          placeholderTxt="County"
        />
      </div>
      <div>
        <CheckoutInputBox
          label="Post Code *"
          type="text"
          placeholderTxt="Post Code"
        />
      </div>
      <div>
        <CheckoutInputBox label="Phone *" type="text" placeholderTxt="Phone" />
      </div>
      <div>
        <CheckoutInputBox
          label="Email Address *"
          type="email"
          placeholderTxt="Email"
        />
      </div>

      <div className="mt-32">
        <SignUpHeading text="Additional Information" className="pb-b42" />
      </div>
      <div>
        <CheckoutInputBox
          label="Other Notes (optional)"
          type="text"
          placeholderTxt="Notes about your order, e.g. special notes for delivery."
        />
      </div>

      <div className="mt-32">
        <SignUpHeading text="Your Order" className="pb-b42" />
      </div>

      {/* -------------------------------- */}

      <div>
        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text="Product"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text={`Total`}
              as="h3"
              className="text-secondaryColor font-normal font-DM text-base"
            />
          </div>
        </Flex>

        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            {data.map((item, index) => (
              <h3
                key={index}
                className="text-primaryColor font-Bold font-DM text-base"
              >
                {item.bmtxt} * {item.count}
              </h3>
            ))}
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            {data.map((item, index) => (
              <h3
                key={index}
                className="text-secondaryColor font-normal font-DM text-base"
              >
                {`${parseFloat(item.price.replace("$", "") * item.count)}.00 $`}
              </h3>
            ))}
          </div>
        </Flex>

        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text="Subtotal"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text={`${total}.00 $`}
              as="h3"
              className="text-primaryColor font-DM text-base font-bold"
            />
          </div>
        </Flex>

        <Flex>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text="Total"
              as="h3"
              className="text-primaryColor font-Bold font-DM text-base"
            />
          </div>
          <div className="w-[320px] p-5 border border-solid border-cartBgColor">
            <Heading
              text={`${total}.00 $`}
              as="h3"
              className="text-primaryColor font-bold font-DM text-base"
            />
          </div>
        </Flex>

        <div className="w-full p-5 border border-solid border-cartBgColor mt-16">
          <Flex className="items-center gap-x-2">
            <input type="radio" id="bank" className="text-black" name="bank" />
            <label
              htmlFor="bank"
              className="text-primaryColor font-DM text-base font-bold leading-l23 "
            >
              Bank
            </label>
          </Flex>
          <div className="bg-categoryBgColor p-5 mt-7 relative">
            <Heading
              text="Pay via Bank; you can pay with your credit card if you don’t have a Bank account."
              as="h3"
              className="text-secondaryColor text-sm font-DM font-normal"
            />
            <div className="absolute bg-categoryBgColor w-4 h-4 rotate-45 -top-2 left-9"></div>
          </div>
          <Flex className="items-center gap-x-2 mt-7">
            <input type="radio" id="bank2" className="text-black" name="bank" />
            <label
              htmlFor="bank2"
              className="text-primaryColor font-DM text-base font-bold leading-l23 "
            >
              Bank 2
            </label>
          </Flex>
          <div className="my-7">
            <h3 className="text-secondaryColor text-sm font-DM font-normal pr-36">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-primaryColor">privacy policy.</span>{" "}
            </h3>
          </div>
          <div>
            <button className="py-5 px-11 bg-primaryColor text-white text-sm font-DM font-bold">
              Proceed to Bank
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
