import React from "react"
import '../css/TripItem.css'

const TripItem = (props) => {
    return(
        <>
              {console.log("props tripname is :", props.tripName)}
              <div className="tripItem" >
                  <p className="verticalCenter">{props.tripName !== undefined ? props.tripName : "hello" }</p>
              </div>
          
        </>
    );
}

export default TripItem;