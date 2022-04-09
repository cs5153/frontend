import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Local imports
import mockData from "../helper/mockData"
import TripsPage from "./trips/TripsPage"

import Navbar from "./Navbar"



function Main() {

return (
  <>
    <Router>
    <Navbar> 
      <Routes>
        <Route exact path="/" element={<TripsPage/>} />
      </Routes>
    </Navbar>
    </Router>
  </>
)
}

export default Main;
