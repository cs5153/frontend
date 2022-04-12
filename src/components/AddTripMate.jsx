import React, { useState } from 'react';
import exitIcon from '../images/x-mark.png';
import '../css/FeatureSpace.css';
import '../css/PersonCard.css';
import '../css/Login.css';
import {
	getDataMap,
    mockData,
} from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';

const AddTripMate = (props) => {
	const { trip } = useParams();
    const tripId = jsCookie.get('trip_id');

	const [state, setState] = useState({
		newTripMate: '',
		hasError: false,
		errMessage: '',
	});

	const changeErrorValue = (bool, msg) => {
		setState({
			newTripMate: state.newTripMate,
			hasError: bool,
			errMessage: msg,
		});
	};

	const addToTrips = (newMember, trip) => {
		//get trip info
        mockData.trips[tripId].people.push(newMember);
	};

	return (
		<>
			<div className='addModal'>
				{state.hasError && <ErrorMessage message={state.errMessage} />}
				<div className='inputArea'>
					<h6>User Name Of New Trip Mate</h6>
					<input
						className='inputField'
						type='New Trip Mate UserName'
						placeholder='New Trip Mate UserName'
						onChange={(evt) => {
							let copy = state;
							copy.newTripMate = evt.target.value;
							setState(copy);
						}}
					/>
				</div>
				<div className='inputArea'>
					<button className='exitButton' onClick={() => props.handler(false)}>
						<img className='iconImg' src={exitIcon} />
					</button>
					<button
						className='inputField'
						onClick={() => {
							if (state.newTripMate === '') {
								changeErrorValue(
									true,
									'Please enter new trip mate name before submitting'
								);
							} else if (!!mockData.users[state.newTripMate.toLocaleLowerCase()]) {
								addToTrips(state.newTripMate.toLocaleLowerCase(), trip);
								props.handler(false);
							} else {
								changeErrorValue(
									true,
									'Cannot add user because they are not a Tripper app user'
								);
							}
						}}
					>
						Add Trip Mate
					</button>
				</div>
			</div>
		</>
	);
};

export default AddTripMate;
