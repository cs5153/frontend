import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Local imports
import TripsPage from "./components/trips/TripsPage"
import AddTripPage from "./components/trips/AddTripPage"
import TripPage from "./components/trip_view/TripPage"
import Navbar from "./components/Navbar"
import SettingsPage from "./components/SettingsPage"
import FAQPage from "./components/FAQPage"
import UserProvider from "./components/login/UserProvider"
import "./App.css"
import {initMockData} from "./helper/helper";


const App = () => {
  initMockData();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

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
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/help" element={<FAQPage/>}/>
          </Routes>
        </div>
       </UserProvider>
      </Router>
    </>
)
};

export default App;
