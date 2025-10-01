import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../landing/LandingPage'
import MoviewsShows from '../pages/MoviewsShows'
import Support from '../pages/Support'
import Subscription from '../pages/Subscription'

function RoutesApp({children}) {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/MoviesShows' element={<MoviewsShows/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='/Subscriptions' element={<Subscription/>}/>
      </Routes>
    </>
  )
}

export default RoutesApp