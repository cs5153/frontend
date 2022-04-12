import React from 'react'
import {Link} from 'react-router-dom'
import Add from '@mui/icons-material/Add'
import {green} from '@mui/material/colors'

//Local Imports
import TripCard from "./TripCard"
import "../../css/TripsPage.css"

class AddTripButton extends React.Component {
  //User can pass link to image as well as Trip name
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="trip-fab-container">
        <Link aria-label="Add Trip" style={{textDecoration:'none', color:'inherit'}} to="/create_trip">
          <Add sx={{color: green[0], fontSize: 40}}/>
        </Link>
      </div>
    )
  }
}

export default AddTripButton
