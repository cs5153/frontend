import React, { useState } from 'react';
import '../css/FeatureSpace.css';
import PersonCard from './PersonCard';
import plusImg from '../images/plus.png';
import AddTripMate from './AddTripMate';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';

import { mockData } from '../helper/mockData';

const People = () => {
	const { trip } = useParams();
	const tripId = jsCookie.get('trip_id');

	const [state, setState] = useState({
		showAddBox: false,
		userData: mockData.trips[tripId],
	});
	var i = 0;

	const pullTripMateData = (people) => {
		return people.map((person) => ({
			firstName: mockData.users[person].firstname,
			lastName: mockData.users[person].lastname,
			userName: mockData.users[person].username,
			email: mockData.users[person].email,
			phone: mockData.users[person].phone,
		}));
	};

	const showBox = (bool) => {
		setState({
			showAddBox: bool,
			userData: state.userData,
		});
	};

	let tripMembers = pullTripMateData(state.userData.people);
	return (
		<div className='featureContainer' id='mainContent' tabIndex={-1}>
			{state.showAddBox && <AddTripMate handler={showBox} />}
			<div className='listContainer'>
				<ul>
					{tripMembers.map((listItem) => (
						<PersonCard key={i++} user={listItem}></PersonCard>
					))}
				</ul>
			</div>
			<button className='addButton' onClick={() => showBox(true)}>
				<img className='iconImg' src={plusImg} />
			</button>
		</div>
	);
};

export default People;
