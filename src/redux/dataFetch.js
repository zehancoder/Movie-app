import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // adding movies
  movies: [],
  page2: [],
  page3: [],
  trandingNow1: [],
  trandingNow2: [],
  upComeing: [],
  topRated: [],
  relatedMovies: [],
  // nav toggler
  toggleNav: false,
  // adding animations
  cartoon: [],
  cartoon1: [],
  cartoon2: [],
  cartoon3: [],
  cartoon4: [],
  cartoon5: [],
  cartoon6: [],
  // adding movie categories
  category: [],
};

export const movieSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    // store movies
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
    // handle toggle navber
    openNav: (state, actions) => {
      state.toggleNav = true;
    },
    closeNav: (state, actions) => {
      state.toggleNav = false;
    },
    // handleing complete
    relatedMovies: (state, actions) => {
      state.relatedMovies.push(actions.payload);
    },
    // store animation for showing
    cartoon: (state, actions) => {
      state.cartoon.push(actions.payload);
    },
    cartoon1: (state, actions) => {
      state.cartoon1.push(actions.payload);
    },
    cartoon2: (state, actions) => {
      state.cartoon2.push(actions.payload);
    },
    cartoon3: (state, actions) => {
      state.cartoon3.push(actions.payload);
    },
    cartoon4: (state, actions) => {
      state.cartoon4.push(actions.payload);
    },
    cartoon5: (state, actions) => {
      state.cartoon5.push(actions.payload);
    },
    cartoon6: (state, actions) => {
      state.cartoon6.push(actions.payload);
    },
    //add movies category data
    category: (state, actions) => {
      state.category.push(actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  nowPlaying,
  page2,
  page3,
  trandingNow1,
  trandingNow2,
  upComeing,
  topRated,
  openNav,
  closeNav,
  relatedMovies,
  cartoon,
  cartoon1,
  cartoon2,
  cartoon3,
  cartoon4,
  cartoon5,
  cartoon6,
  category,
} = movieSlice.actions;

export default movieSlice.reducer;
