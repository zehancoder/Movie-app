import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../landing/LandingPage'
import MoviesShows from '../pages/MoviesShows/MoviesShows'
import Support from '../pages/Support/Support'
import Subscription from '../pages/Subscription/Subscription'

function RoutesApp({children}) {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/MoviesShows' element={<MoviesShows/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='/Subscriptions' element={<Subscription/>}/>
      </Routes>
    </>
  )
}

export default RoutesApp