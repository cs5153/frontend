import React, { useState } from 'react'
import Cookies from 'js-cookie'
//Local imports
import {mockData} from "../../helper/mockData"
import Grid from "./Grid"
import AddTripButton from "./AddTripButton"
import "../../css/TripsPage.css"

  //Function to enable getting trip information from mockData
function retrieveTripNames(){
  const user = Cookies.get('username');
  const hash = Cookies.get('hashword');
  console.log(mockData);
  return mockData.users[user].trips.map((trip) => mockData.trips[trip].name)
}

class TripsPage extends React.Component {


  render() {
    //Check the state of the user's trips to figure out how many tiles to populate
    var trip_names = retrieveTripNames()
    return (
      <>
      <AddTripButton/>
      <div classname="container">
        <h1> My Trips </h1>
        <Grid elements={trip_names}/>
      </div>
      </>
    )
  }
}

export default TripsPage;
