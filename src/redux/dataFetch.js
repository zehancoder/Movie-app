import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  page2: [],
  page3: [],
  trandingNow1: [],
  trandingNow2: [],
  upComeing: [], 
  topRated: [], 
  toggleNav: false,
};

export const movieSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    nowPlaying: (state, actions) => {
      state.movies.push(actions.payload);
    },
    page2: (state, actions) => {
      state.page2.push(actions.payload);
    },
    page3: (state, actions) => {
      state.page3.push(actions.payload);
    },
    trandingNow1: (state, actions) => {
      state.trandingNow1.push(actions.payload);
    },
    trandingNow2: (state, actions) => {
      state.trandingNow1.push(actions.payload);
    },
    upComeing: (state, actions) => {
      state.upComeing.push(actions.payload);
    },
    topRated: (state, actions) => {
      state.topRated.push(actions.payload);
    },
    openNav: (state, actions) => {
      state.toggleNav = true;
    },
    closeNav: (state, actions) => {
      state.toggleNav = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { nowPlaying, page2, page3, trandingNow1, trandingNow2, upComeing, topRated, openNav,closeNav } = movieSlice.actions;

export default movieSlice.reducer;
