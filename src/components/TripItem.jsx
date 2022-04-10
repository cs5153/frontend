import React from "react";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";

import "../css/TripItem.css";

const TripItem = ({tripName, tripId}) => {
  return (
		<>
			{console.log('props tripname is :', tripName)}
			<div className='tripItem'>
				<Link to={`/${tripName.toLocaleLowerCase()}`} onClick={
					jsCookie.set('trip_id', tripId)
				}>
					<p className='verticalCenter'>
						{tripName !== undefined ? tripName : 'hello'}
					</p>
				</Link>
			</div>
		</>
	);
};

export default TripItem;
