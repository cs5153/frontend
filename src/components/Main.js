import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Local imports
import mockData from "../helper/mockData"
import TripsPage from "./trips/TripsPage"
import "../App.css"
import Navbar from "./Navbar"



function Main() {

return (
  <>
    <Router>
    <div classname="home">
    <Navbar/> 
    <Routes>
      <Route path="/" element={<TripsPage/>} />
    </Routes>
    </div>
    </Router>
  </>
)
}

export default Main;
