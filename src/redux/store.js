import { configureStore } from '@reduxjs/toolkit'
import movieSlice from "./dataFetch"
export const store = configureStore({
  reducer: movieSlice,
})