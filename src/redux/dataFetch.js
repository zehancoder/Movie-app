import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  movies: []
}

export const movieSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    nowPlaying: (state, actions) => {
      state.movies.push(actions.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { nowPlaying } = movieSlice.actions

export default movieSlice.reducer


