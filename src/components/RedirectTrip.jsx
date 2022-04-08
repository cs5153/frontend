import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { mockData } from '../helper/mockData';

const DefaultTrip = () => {
    const {trip} = useParams();
	const navigate = useNavigate();
	const knownTrips = retrieveAllTrips();

	useEffect(() => {
		if (knownTrips.includes(trip)) {
			navigate(`/${trip}/people`);
		}
	}, [trip, knownTrips]);

	return (
		<div className='flex-fill d-flex justify-content-center align-items-center'>
            Trip {trip} not found.
		</div>
	);
};

function retrieveAllTrips() {
	const user = Cookies.get('username');
	const hash = Cookies.get('hashword');
    // TODO: backend get all trips for user

	return mockData.tripsList.map((trip) => trip.toLocaleLowerCase());
}

export default DefaultTrip;
