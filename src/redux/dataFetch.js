import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  movies: [],
  page2: [], 
  page3: [],
  nowPlayPage1: []
}

export const movieSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    nowPlaying: (state, actions) => {
      state.movies.push(actions.payload)
    },
    page2: (state, actions) => {
      state.page2.push(actions.payload)
    },
    page3: (state, actions) => {
      state.page3.push(actions.payload)
    },
    nowPlayPage1: (state, actions) => {
      state.nowPlayPage1.push(actions.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { nowPlaying, page2, page3 } = movieSlice.actions

export default movieSlice.reducer


