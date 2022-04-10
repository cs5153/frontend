import React, { useState } from 'react'
import Cookies from 'js-cookie'
//Local imports
import {readData, writeData} from "../../helper/helper"
import Grid from "./Grid"
import AddTripButton from "./AddTripButton"
import "../../css/TripsPage.css"

  //Function to enable getting trip information from mockData
function retrieveTripNames(){
  const user = Cookies.get('username');
  const hash = Cookies.get('hashword');
  var mockData = readData();
  return mockData.users[user].trips.map((trip) => mockData.trips[trip].name)
}

function retrieveTrips(){
  const user = Cookies.get('username');
  const hash = Cookies.get('hashword');
  var mockData = readData();
  return mockData.users[user].trips
}

class TripsPage extends React.Component {


  render() {
    //Check the state of the usgter's trips to figure out how many tiles to populate
    var trips = retrieveTrips()
    return (
      <>
      <AddTripButton/>
      <div classname="container">
        <h1> My Trips </h1>
        <Grid elements={trips}/>
      </div>
      </>
    )
  }
}

export default TripsPage;
