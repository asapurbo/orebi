import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slice/counterSlice'
import breadcrumbSlice from './Slice/breadcrumbSlice'

export default configureStore({
  reducer: {
    count: counterSlice,
    bread: breadcrumbSlice,
  },
})