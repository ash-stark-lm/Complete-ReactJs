import { configureStore } from '@reduxjs/toolkit'
import slice1Reducer from './Slice1'
import slice2Reducer from './Slice2'

export default configureStore({
  reducer: {
    slice1: slice1Reducer,
    slice2: slice2Reducer,
  },
})
