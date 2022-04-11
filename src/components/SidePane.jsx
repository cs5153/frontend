import React from 'react';
import jsCookie from 'js-cookie';
import TripItem from './TripItem';
import profileImage from '../images/user.png';
import '../css/SidePane.css';

import { mockData } from '../helper/mockData';

const SidePane = () => {
	const user = jsCookie.get('username');

	let tripList = mockData.users[user].trips.map((tripId) => ({
		id: tripId,
		...mockData.trips[tripId],
	}));

	return (
		<>
			<div className='sidePaneContainer'>
				<div className='profileSection'>
					<div className='proPicContainer'>
						<img
							className='proPic'
							src={profileImage}
							alt={'my profile picture'}
						/>
					</div>
					<a role='link' href='' className='profileLink'>
						My profile
					</a>
				</div>
				<ul
					className='tripList'
					aria-labelledby='myTrips'
					aria-label='My Trips'
				>
					<div className='text-center h4'>
						<label id='myTrips' tabIndex={-1}>My Trips</label>
					</div>
					{tripList.map((trip) => (
						<TripItem key={trip.name} tripName={trip.name} tripId={trip.id} />
					))}
				</ul>
			</div>
		</>
	);
};

export default SidePane;
