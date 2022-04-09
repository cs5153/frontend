import React, { useState } from 'react'

//Local imports
import mockData from "../../helper/mockData"
import Grid from "./Grid"
import "../../css/TripsPage.css"


class TripsPage extends React.Component {


  render() {
    //Check the state of the user's trips to figure out how many tiles to populate
    var trip_names = ["Trip 1", "Trip 2", "Trip 3", "Trip 4", "Trip 5", "Trip 6", "Trip 7"];
    return (
      <>
      <div classname="trips_page">
        <h1> My Trips </h1>
        <Grid elements={trip_names}/>
      </div>
      </>
    )
  }
}

export default TripsPage;
