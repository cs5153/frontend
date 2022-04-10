import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Local imports
import TripsPage from "./components/trips/TripsPage"
import AddTripPage from "./components/trips/AddTripPage"
import TripPage from "./components/trip_view/TripPage"
import Navbar from "./components/Navbar"
import UserProvider from "./components/login/UserProvider"
import "./App.css"



const App = () => {

  return (
    <>
     <Router>
       <UserProvider>
        <div classname="home">
          <Navbar/> 
          <Routes>
            <Route path="/" element={<TripsPage/>}/>
            <Route path="/trip" element={<TripPage/>}/>
            <Route path="/create_trip" element={<AddTripPage/>}/>
          </Routes>
        </div>
       </UserProvider>
      </Router>
    </>
)
};

export default App;
