import React from 'react'

class TripCard extends React.Component {
  //User can pass link to image as well as Trip name
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="trip-card">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default TripCard
