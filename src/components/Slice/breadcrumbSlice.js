import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    currentName: "",
    prevName: 'Home',
  },
  reducers: {
    prevPage: function(state, action) {
        state.currentName = state.prevName;
        state.prevName = action.payload;
    }
  },
})

export const { prevPage } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer