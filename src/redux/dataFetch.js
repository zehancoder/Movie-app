import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer