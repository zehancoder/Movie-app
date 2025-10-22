import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../landing/LandingPage";
import MoviesShows from "../pages/MoviesShows/MoviesShows";
import Support from "../pages/Support/Support";
import Subscription from "../pages/Subscription/Subscription";
import Play from "../pages/videoPlay/Play";
import AnimationPlay from "../pages/videoPlay/AnimationPlay";
import CartoonMain from "../pages/MoviesShows/cartoon/CartoonMain";
import ActionsAdve from "../pages/MoviesShows/movieCategories/ActionsAdve";
import Comedy from "../pages/MoviesShows/movieCategories/Comedy";
import Crime from "../pages/MoviesShows/movieCategories/Crime";
import Drama from "../pages/MoviesShows/movieCategories/Darama";
import Documentary from "../pages/MoviesShows/movieCategories/Documentary";
import Family from "../pages/MoviesShows/movieCategories/Family";
import Kids from "../pages/MoviesShows/movieCategories/Kids";
import Mystrey from "../pages/MoviesShows/movieCategories/Mystery";
import News from "../pages/MoviesShows/movieCategories/News";

function RoutesApp({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MoviesShows" element={<MoviesShows />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Subscriptions" element={<Subscription />} />
        <Route path="/Animations" element={<CartoonMain />} />

        <Route path={"/MoviesShows/video/:id"} element={<Play />} />
        <Route path={"/Animations/video/:id"} element={<AnimationPlay />} />
        <Route path={"/MoviesShows/Action & Adventure"} element={<ActionsAdve />} />
        <Route path={"/MoviesShows/Comedy"} element={<Comedy />} />
        <Route path={"/MoviesShows/Crime"} element={<Crime />} />
        <Route path={"/MoviesShows/Drama"} element={<Drama />} />
        <Route path={"/MoviesShows/Documentary"} element={<Documentary />} />
        <Route path={"/MoviesShows/Family"} element={<Family />} />
        <Route path={"/MoviesShows/Kids"} element={<Kids />} />
        <Route path={"/MoviesShows/Mystry"} element={<Mystrey />} />
        <Route path={"/MoviesShows/News"} element={<News />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
