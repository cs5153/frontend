import React, { useState } from 'react';
import { mockData, getDataMap } from '../helper/mockData';
import TripItem from './TripItem';
import profileImage from '../images/user.png';
import jsCookie from 'js-cookie';
import plusImg from '../images/plus.png';
import '../css/FeatureSpace.css';
import '../css/SidePane.css';
import AddTrip from './AddTrip';
import '../css/Help.css';
import HelpPage from './HelpPage';

const SidePane = () => {
	const [state, setState] = useState({
		showAddBox: false,
		showFAQ: false,
	});

	const showBox = (bool) => {
		setState({
			showAddBox: bool,
			showFAQ: state.showFAQ,
		});
	};

	const showFAQBox = (bool) => {
		setState({
			showAddBox: state.showAddBox,
			showFAQ: bool,
		});
	};

	const user = jsCookie.get('username');
	let tripList = mockData.users[user].trips.map((tripId) => ({
		id: tripId,
		...mockData.trips[tripId],
	}));
	return (
		<>
			{state.showAddBox && <AddTrip handler={showBox} />}

			<div className='sidePaneContainer'>
				<div className='profileSection'>
					<div className='proPicContainer'>
						<img
							className='proPic'
							src={profileImage}
							alt={'my profile picture'}
						/>
					</div>
					<a role='link' href='/profile' className='profileLink'>
						My profile
					</a>
					<a
						role='link'
						href=''
						className='profileLink'
						onClick={() => jsCookie.remove('username')}
					>
						Logout
					</a>
					<button
						className='clicklink'
						role='link'
						onClick={() => showFAQBox(true)}
					>
						<p>Need Help?</p>
					</button>
				</div>
				<ul
					className='tripList'
					aria-labelledby='myTrips'
					aria-label='My Trips'
				>
					<div className='text-center h4'>
						<label id='myTrips' tabIndex={-1}>
							My Trips
						</label>
					</div>
					{tripList.map((trip) => (
						<TripItem key={trip.name} tripName={trip.name} tripId={trip.id} />
					))}
				</ul>
				<button className='addTripButton' onClick={() => showBox(true)}>
					<img className='iconImg' src={plusImg} />
				</button>
			</div>
			{state.showFAQ && <HelpPage handler={showFAQBox} />}
		</>
	);
};

export default SidePane;
