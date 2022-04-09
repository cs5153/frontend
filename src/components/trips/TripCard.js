import React from 'react'
import {Link} from 'react-router-dom'


class TripCard extends React.Component {
  //User can pass link to image as well as Trip name
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Link style={{textDecoration: 'none'}} to="/trip">
      <div className="trip-card">
        <div>
        <p>{this.props.name}</p>
        </div>
      </div>
      </Link>
    )
  }
}

export default TripCard
