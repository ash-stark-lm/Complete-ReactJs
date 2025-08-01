import { createSlice } from '@reduxjs/toolkit'

const slice2 = createSlice({
  name: 'slice2',
  initialState: {
    count: 0,
  },
  reducers: {
    Increment: (state) => {
      state.count += 4
    },
    Decrement: (state) => {
      state.count -= 4
    },
  },
})

export const { Increment, Decrement } = slice2.actions

export default slice2.reducer
