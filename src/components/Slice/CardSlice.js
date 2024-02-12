import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Add To Card",
  initialState: {
    data: [],
  },
  reducers: {
    addToCard: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCard } = counterSlice.actions;

export default counterSlice.reducer;
