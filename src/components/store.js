import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
import breadcrumbSlice from "./Slice/breadcrumbSlice";
import CardSlice from "./Slice/CardSlice";

export default configureStore({
  reducer: {
    count: counterSlice,
    bread: breadcrumbSlice,
    addToCadeData: CardSlice,
  },
});
