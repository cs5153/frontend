import React from 'react'
import {Link} from 'react-router-dom'
import {readData, writeData, mockData} from "../../helper/helper"
import Cookies from 'js-cookie'

class TripCard extends React.Component {
  //User can pass link to image as well as Trip name
  constructor(props) {
    super(props);
  }

  render(){
    //Get trip id

    return (
      <Link style={{textDecoration: 'none'}} 
            to="/trip" 
            onClick={()=>Cookies.set("current_trip", this.props.id) }>
      <div className="trip-card">
        <p>{this.props.name}</p>
      </div>
      </Link>
    )
  }
}

export default TripCard
