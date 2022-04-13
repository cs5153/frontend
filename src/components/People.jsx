import React, { useState } from 'react';
import '../css/FeatureSpace.css';
import PersonCard from './PersonCard';
import plusImg from '../images/plus.png';
import delImg from '../images/x-button.png';
import leaveImg from '../images/logout.png';


import AddTripMate from './AddTripMate';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { mockData,removePersonFromTrip,removeTrip } from '../helper/mockData';

const People = () => {
	const { trip } = useParams();
	const tripId = jsCookie.get('trip_id');
	const userName = jsCookie.get('username')
	const navigate = useNavigate();

	const [state, setState] = useState({
		showAddBox: false,
		userData: mockData.trips[tripId],
	});
	var i = 0;

	const pullTripMateData = (people) => {
		return people?.map((person) => ({
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

	const delPersonHandler = (name, idForTrip) => {
		let newTripInfo = removePersonFromTrip(name,idForTrip)
					let copy = state
					copy.userData = newTripInfo
					setState({...copy})
	}

	let tripMembers = pullTripMateData(state.userData.people);
	return (
		<div className='featureContainer' id='mainContent' tabIndex={-1}>
			{state.showAddBox && <AddTripMate handler={showBox} />}
			<div className='listContainer'>
				<ul>
					{tripMembers?.map((listItem) => (
						<PersonCard key={i++} user={listItem} delHandler={delPersonHandler}></PersonCard>
					))}
				</ul>
			</div>
			<div className='buttonContainer'>
				<button className='buttonContainerButtons' onClick={() => showBox(true)}>
					<span className="tooltiptext">Add Someone To Trip</span>
					<img className='iconImg' src={plusImg} />
				</button>
				<button className='buttonContainerButtons' onClick={() => {
					let newTripInfo = removePersonFromTrip(userName,tripId)
					let copy = state
					copy.userData = newTripInfo
					setState({...copy})
					jsCookie.remove("trip_id")
					navigate('/', { replace: true })
				}}>
					<span className="tooltiptext">Remove self from trip</span>
					<img className='iconImg' src={leaveImg} />
				</button>
				<button className='buttonContainerButtons' onClick={() => {
						removeTrip(tripId)
						jsCookie.remove("trip_id")
						navigate('/', { replace: true })
				}}>
					<span className="tooltiptext">Delete Trip</span>
					<img className='iconImg' src={delImg} />
				</button>
			</div>
		</div>
	);
};

export default People;
