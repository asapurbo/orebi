import axios from "axios";
import { useEffect, useState } from "react";
import Flex from "./Flex";
import Label from "./Label";
import SignUpHeading from "./SignUpHeading";
import { FaCaretDown } from "react-icons/fa";

const NewCustomer = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setAll(data.data);
    }
    all();
  }, []);

  return (
    <div className="pt-t57 pb-b69">
      <SignUpHeading text="New Customer" className="pb-b42" />
      <Flex className="gap-10 mb-6">
        <div className="w-w437">
          <Label text="Address 1" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="4279 Zboncak Port Suite 6212"
          />
        </div>

        <div className="w-w437">
          <Label text="Address 2" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="_"
          />
        </div>
      </Flex>
      <Flex className="gap-10 mb-6">
        <div className="w-w437">
          <Label text="City" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="Your city"
          />
        </div>

        <div className="w-w437">
          <Label text="Post Code" className="pb-3" />
          <input
            type="text"
            className="focus:outline-transparent placeholder:text-secondaryColor placeholder:font-DM placeholder:text-sm placeholder:font-normal w-full pb-4 border-b border-solid border-convBorderColor"
            placeholder="05228"
          />
        </div>
      </Flex>

      <Flex className="gap-10">
        <div className="w-w437">
          <Label text="Country" className="pb-3" />
          <div className="relative">
            <select className="focus:outline-transparent w-full pb-4 border-b border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
              <option>Please select</option>
              {all.map((item) => (
                <option>{item.name.common}</option>
              ))}
            </select>
            <div className="absolute right-0 bottom-0 h-full flex justify-center items-center">
              <FaCaretDown className="text-secondaryColor text-11" />
            </div>
          </div>
        </div>

        <div className="w-w437">
          <Label text="Region/State" className="pb-3" />
          <div className="relative">
            <select className="focus:outline-transparent w-full pb-4 border-b border-solid border-convBorderColor text-secondaryColor font-DM text-sm appearance-none font-normal">
              <option>Please select</option>
              {all.map((item) => (
                <option>{item.name.official}</option>
              ))}
            </select>
            <div className="absolute right-0 bottom-0 h-full  flex justify-center items-center">
              <FaCaretDown className="text-secondaryColor text-11" />
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default NewCustomer;
