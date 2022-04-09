import React from 'react'

//Local elements
import TripCard from "./TripCard.js"
import "../../css/Grid.css"
import "../../css/TripCard.css"

class Grid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    //Create cells using information presented by main page
    const cards = this.props.elements.map(obj => <TripCard name={obj}></TripCard>)
    return (
          <div className="grid-container">{cards}</div>
    )
  }
}

export default Grid
