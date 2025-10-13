import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  movies: [],
  page2: []
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { nowPlaying, page2 } = movieSlice.actions

export default movieSlice.reducer


