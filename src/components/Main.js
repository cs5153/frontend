import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Local imports
import mockData from "../helper/mockData"
import TripsPage from "./trips/TripsPage"
import TripPage from "./trip_view/TripPage"
import "../App.css"
import Navbar from "./Navbar"



function Main() {

return (
  <>
    <Router>
    <div classname="home">
    <Navbar/> 
    <Routes>
      <Route path="/" element={<TripsPage/>}/>
      <Route path="/trip" element={<TripPage/>}/>
    </Routes>
    </div>
    </Router>
  </>
)
}

export default Main;
