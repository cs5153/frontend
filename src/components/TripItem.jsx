import React from 'react';
import { Link, useParams } from 'react-router-dom';
import jsCookie from 'js-cookie';

import '../css/TripItem.css';

const TripItem = ({ tripName, tripId }) => {
	const { trip } = useParams();
	const tripUrl = encodeURI(`${tripName.toLocaleLowerCase()}`);
	const isSelected = trip === tripUrl;

	if (isSelected) {
		return (
			<li className='tripItem' tabIndex={0}>
				<p aria-label={`${tripName} (active)`} className='verticalCenter'>
					{tripName}
				</p>
			</li>
		);
	}

	return (
		<li className='tripItem' aria-label={tripName} tabIndex={0}>
			<Link to={`/${tripUrl}`} onClick={jsCookie.set('trip_id', tripId)}>
				<p className='verticalCenter'>{tripName}</p>
			</Link>
		</li>
	);
};

export default TripItem;
