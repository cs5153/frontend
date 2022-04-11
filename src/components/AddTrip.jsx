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
import { v4 as uuidv4 } from 'uuid';


const AddTrip = (props) => {
    const tripId = jsCookie.get('trip_id');
	const userName = jsCookie.get('username')

	const [state, setState] = useState({
		newTripName:'',
		newTripMate: '',
		hasError: false,
		errMessage: '',
	});

	const changeErrorValue = (bool, msg) => {
		setState({
			newTripName: state.newTripName,
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
				{state.hasError && <ErrorMessage css={"errorbox"} message={state.errMessage} />}
				<div className='inputArea'>
					<h6>Name of your Trip</h6>
					<input
						className='inputField'
						placeholder='Name of your Trip'
						onChange={(evt) => {
							let copy = state;
							copy.newTripName = evt.target.value;
							setState(copy);
						}}
					/>
				</div>
				<div className='inputArea'>
					<h6>User Name Of New Trip Mate</h6>
					<input
						className='inputField'
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
							if (state.newTripName === '') {
								changeErrorValue(
									true,
									'Please enter new trip name before submitting'
								);
							} else if (state.newTripName) {
								//new tripID
								let newTripId = uuidv4()
								//create new trip object
								console.log("TRIP NAME IS: ", state.newTripName)
								let newTrip = {
									name: state.newTripName,
									people: [userName],
									lists: {},
									albums:[],
									chat:[]
								}
								//add desired tripMate to list of people on trip
								if(!!mockData.users[state.newTripMate]){
									// addToTrips(state.newTripMate, trip);
									console.log("FOUND USER: ",state.newTripMate)
									newTrip.people.push(state.newTripMate)
								}else{
									changeErrorValue(
										true,
										'Cannot add user because they are not a Tripper app user'
									);
									return
								}
								//add new tripID to current user's trip list
								mockData.users[userName].trips.push(newTripId)
								//add trip to trips Map
								mockData.trips[newTripId] = newTrip
								console.log(mockData.trips)
								console.log(mockData.users[userName])
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

export default AddTrip;
