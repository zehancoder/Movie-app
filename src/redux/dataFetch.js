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
  // addding like videos
  likeVideos: [],
  likeAnimations: [],
  // adding saved vidoes
  savedMovies: [],
  savedAnimations: [],

  // add new saved data for send to playlist box
  newPlayListItem: "",
  newPlayListAnimeItem: "",
  /// track login and signup users
  users: {
    user: null,
    loading: true,
  },
  // search data from this data
  dataForSearch: null,
  // get search input data
  mainSearchData: [],
  searchingText: ''
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
    // storing movies you liked

    likeVideos: (state, actions) => {
      state.likeVideos.push(actions.payload);
    },
    removeLike: (state, actions) => {
      state.likeVideos = state.likeVideos.filter(
        (data) => data.data.id !== actions.payload.data.id
      );

      console.log(actions.payload);
    },
    // storing animation you liked
    likeAnimations: (state, actions) => {
      state.likeAnimations.push(actions.payload);
    },
    removeLikeAnimations: (state, actions) => {
      state.likeAnimations = state.likeAnimations.filter(
        (data) => data.data.id !== actions.payload.data.id
      );
    },

    // storing movies you saved

    savedMovies: (state, actions) => {
      state.savedMovies.push(actions.payload);

      state.savedMovies = state.savedMovies.filter(({ name, data }) => {
        return name !== actions.payload;
      });

      // console.log(actions.payload)
    },
    removeSavedMovies: (state, actions) => {
      state.savedMovies = state.savedMovies.filter(
        ({ name, data }) => data.id !== actions.payload.data.id
      );

      console.log(actions.payload);
    },
    // storing animation you saved
    savedAnimations: (state, actions) => {
      state.savedAnimations.push(actions.payload);
    },
    removeSavedAnimations: (state, actions) => {
      state.savedAnimations = state.savedAnimations.filter(
        (data) => data.data.id !== actions.payload.data.id
      );
    },
    // new data for send to playlistbox
    newSavedData: (state, actions) => {
      state.newPlayListItem = actions.payload;
    },
    newPlayListAnimeItem: (state, actions) => {
      state.newPlayListAnimeItem = actions.payload;
    },

    /// signup users
    userImport: (state, actions) => {
      state.users.user = actions.payload;
      console.log(actions.payload);
      state.users.loading = false;
    },
    cleanUser: (state, actions) => {
      (state.users.user = null), (state.users.loading = false);
    },
    // get search input data

    // get 160 data for showing when user search
    searchDataHandle: (state, actions) => {
      // const searchFindData = actions.payload.find(({original_title}) => original_title.toLowerCase() === state.searchInputData.toLowerCase())
      // console.log(actions.payload, state.searchInputData, searchFindData)
      state.dataForSearch = actions.payload;
    },
    searchInputDataHandle: (state, actions) => {
      if (actions.payload !== "") {
        const afterFilter = state.dataForSearch.filter(({ original_title }) => {
          return original_title
            .toLowerCase()
            .startsWith(actions.payload.toLowerCase());
        });
        state.mainSearchData = afterFilter;
      }else{
        state.mainSearchData = [];
      }
      state.searchingText = actions.payload;
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
  likeVideos,
  removeLike,
  likeAnimations,
  removeLikeAnimations,

  savedAnimations,
  savedMovies,
  removeSavedAnimations,
  removeSavedMovies,
  newSavedData,
  // track animation in playlistBox when you want to save
  newPlayListAnimeItem,
  userImport,
  cleanUser,
  searchDataHandle,
  searchInputDataHandle,
} = movieSlice.actions;

export default movieSlice.reducer;
