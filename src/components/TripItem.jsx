import React from "react";
import { Link } from "react-router-dom";
import "../css/TripItem.css";

const TripItem = ({tripName}) => {
  return (
		<>
			{console.log('props tripname is :', tripName)}
			<div className='tripItem'>
				<Link to={`/${tripName.toLocaleLowerCase()}`}>
					<p className='verticalCenter'>
						{tripName !== undefined ? tripName : 'hello'}
					</p>
				</Link>
			</div>
		</>
	);
};

export default TripItem;
