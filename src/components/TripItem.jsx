import React from 'react';
import { useParams } from 'react-router-dom';
import jsCookie from 'js-cookie';

import '../css/TripItem.css';

const TripItem = ({ tripName, tripId }) => {
	const { trip } = useParams();
	const tripUrl = encodeURI(`${tripName.toLocaleLowerCase()}`);
	const isSelected = trip === tripUrl;

	if (isSelected) {
		return (
			<li className='tripItem' tabIndex={0}>
				<p aria-label={`${tripName} (selected)`} className='verticalCenter'>
					{tripName}
				</p>
			</li>
		);
	}

	return (
		<li className='tripItem'>
			<a
				href={`/${tripUrl}/people`}
				className='verticalCenter d-block w-100 h-100'
				onClick={() => jsCookie.set('trip_id', tripId)}
			>
				{tripName}
			</a>
		</li>
	);
};

export default TripItem;