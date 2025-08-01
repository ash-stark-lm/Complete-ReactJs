import { createSlice } from '@reduxjs/toolkit'

const slice1 = createSlice({
  name: 'slice1',
  initialState: {
    count: 0,
  },
  reducers: {
    /*
    Object stored as refernce  so how does update works basically behind the scene => (state)=> return{...state, count:state.count+1}
     Immer take care of this and update the state basically a new objects gets created only then the upat will be shown we read it in useState 
     Immer takes care of it so we just write (state)=>{state.count+1}
     Immer creates a new draft that is a duplicate one of original state and then compares with original and updates it by creating a new object
     Either return a new object or modify the draft 
    */
    Increment: (state) => {
      state.count += 1
    },

    Decrement: (state) => {
      state.count -= 1
    },

    CustomIncreaser: (state, action) => {
      state.count += action.payload
    },
  },
})
export const { Increment, Decrement, CustomIncreaser } = slice1.actions

console.log(slice1)
console.log(slice1.actions)

{
  /**type:{slice1/Increment}, payload:{arguments} */
}

export default slice1.reducer
