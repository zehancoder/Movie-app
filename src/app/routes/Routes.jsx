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
import LikeVideos from "../common/LikeVideos";
import CartoonAnimal from "../pages/MoviesShows/cartoon/categories/CartoonAnimal";
import CartoonBear from "../pages/MoviesShows/cartoon/categories/CartoonBear";
import CartoonFly from "../pages/MoviesShows/cartoon/categories/CartoonFly";
import CartoonOwl from "../pages/MoviesShows/cartoon/categories/CartoonOwl";
import ChildrenCartoon from "../pages/MoviesShows/cartoon/categories/ChildrenCartoon";
import CartoonHorse from "../pages/MoviesShows/cartoon/categories/CartoonHorse";
import CartoonPig from "../pages/MoviesShows/cartoon/categories/CartoonPig";
import CartoonWolf from "../pages/MoviesShows/cartoon/categories/CartoonWolf";
import CartoonDog from "../pages/MoviesShows/cartoon/categories/CarttonDog";
import Horror from "../pages/MoviesShows/movieCategories/Horror";
import Thriller from "../pages/MoviesShows/movieCategories/Thriller";
import Sci_fi from "../pages/MoviesShows/movieCategories/Sci_fi";
import Romance from "../pages/MoviesShows/movieCategories/Romance";
import Fantasy from "../pages/MoviesShows/movieCategories/Fantasy";
import Superhero from "../pages/MoviesShows/movieCategories/SuperHero";
import KidsCartoon from "../pages/MoviesShows/cartoon/categories/KidsCartoon";

function RoutesApp({ children }) {
  return (
    <>
      <Routes>
        {/* nav links route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/MoviesShows" element={<MoviesShows />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Subscriptions" element={<Subscription />} />
        <Route path="/Animations" element={<CartoonMain />} />
        {/* movie & animations play route */}
        <Route path={"/MoviesShows/video/:id"} element={<Play />} />
        <Route path={"/Animations/video/:id"} element={<AnimationPlay />} />
        {/* movies categories routes */}
        <Route path={"/MoviesShows/Action & Adventure"} element={<ActionsAdve />} />
        <Route path={"/MoviesShows/Comedy"} element={<Comedy />} />
        <Route path={"/MoviesShows/Crime"} element={<Crime />} />
        <Route path={"/MoviesShows/Drama"} element={<Drama />} />
        <Route path={"/MoviesShows/Documentary"} element={<Documentary />} />
        <Route path={"/MoviesShows/Family"} element={<Family />} />
        <Route path={"/MoviesShows/Kids"} element={<Kids />} />
        <Route path={"/MoviesShows/Mystry"} element={<Mystrey />} />
        <Route path={"/MoviesShows/News"} element={<News />} />
        <Route path={"/MoviesShows/Horror"} element={<Horror />} />
        <Route path={"/MoviesShows/Thriller"} element={<Thriller />} />
        <Route path={"/MoviesShows/Sci-Fi"} element={<Sci_fi />} />
        <Route path={"/MoviesShows/Romance"} element={<Romance />} />
        <Route path={"/MoviesShows/Fantasy"} element={<Fantasy />} />
        <Route path={"/MoviesShows/Superhero"} element={<Superhero />} />
        {/* video likes routes */}
        <Route path={"/likeVideos"} element={<LikeVideos />} />
        {/* add animations routes */}
        <Route path={"/Animations/cartoon/Cartoon Animal"} element = {<CartoonAnimal></CartoonAnimal>}/>
        <Route path={"/Animations/cartoon/Cartoon Bear"} element = {<CartoonBear></CartoonBear>}/>
        <Route path={"/Animations/cartoon/Cartoon Fly"} element = {<CartoonFly></CartoonFly>}/>
        <Route path={"/Animations/cartoon/Cartoon Owl"} element = {<CartoonOwl></CartoonOwl>}/>
        <Route path={"/Animations/cartoon/Children Cartoon"} element = {<ChildrenCartoon></ChildrenCartoon>}/>
        <Route path={"/Animations/cartoon/Cartoon Horse"} element = {<CartoonHorse></CartoonHorse>}/>
        <Route path={"/Animations/cartoon/Cartoon Pig"} element = {<CartoonPig></CartoonPig>}/>
        <Route path={"/Animations/cartoon/Cartoon Wolf"} element = {<CartoonWolf></CartoonWolf>}/>
        <Route path={"/Animations/cartoon/Cartoon Dog"} element = {<CartoonDog></CartoonDog>}/>
        <Route path={"/Animations/cartoon/Kids Cartoon"} element = {<KidsCartoon></KidsCartoon>}/>
      </Routes>
    </>
  );
}

export default RoutesApp;
