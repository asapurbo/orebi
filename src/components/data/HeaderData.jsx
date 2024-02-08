import { useDispatch } from "react-redux";
import { prevPage } from "../Slice/breadcrumbSlice";

const HeaderData = () => {
    const dispatch = useDispatch();
    const haendleDispatch = (name) => {
        dispatch(prevPage(name));
    };
    const HeadDataList = [
        {
          text: "Home",
          href: "/",
          handelClick: function () {
            haendleDispatch("Home");
          },
        },
        {
          text: "Shop",
          href: "/shop",
          handelClick: function () {
            haendleDispatch("Shop");
          },
        },
        {
          text: "About",
          href: "/about",
          handelClick: function () {
            haendleDispatch("About");
          },
        },
        {
          text: "Contacts",
          href: "/contacts",
          handelClick: function () {
            haendleDispatch("Contacts");
          },
        },
        {
          text: "Journal",
          href: "/journal",
          handelClick: function () {
            haendleDispatch("Journal");
          },
        },
      ];
  return {
    HeadDataList,
    haendleDispatch
  }
}

export default HeaderData