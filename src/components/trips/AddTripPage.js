import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import {addNewTrip, mockData } from '../../helper/mockData';
import '../../css/AddTrip.css';
import ErrorMessage from '../ErrorMessage';
import ExitButton from '../ExitButton';
import { Link } from 'react-router-dom';


//Check if a field in particular is blank
function isFieldBlank(obj){
	let hasBlank = false;
	for (const [key, value] of Object.entries(obj)) {
		hasBlank = value == '' || value.trim() === '';
	}
	return hasBlank;
}


const AddTripPage = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		tripObj: {
			tripName: '',
			tripLocation: '',
		},
		hasError: false,
	});

	return (
		<>
			<div className='addTripPageContainer'>
				<div className='addTripModal'>
					<div className='addTripExit'>
					<ExitButton/>
					</div>
					<div className='title'>Add Trip</div>
			    {state.hasError && (
						<ErrorMessage message='Please fill out all fields' />
					)}
					<div className='inputArea'>
						<input
							autoFocus={true}
							className='inputField'
							type='text'
							placeholder='Trip Name'
							onChange={(evt) => {
								let copy = state;
								copy.tripObj.tripName = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='Trip Location'
							onChange={(evt) => {
								let copy = state;
								copy.tripObj.tripLocation = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<button
							className='inputField'
							onClick={() => {
								if (isFieldBlank(state.tripObj)) {
									setState({
										tripObj: state.tripObj,
										hasError: true,
									});
								} else {
									//Create trip with this id
									var trip =  {
										name: state.tripObj.tripName,
										location: state.tripObj.tripLocation,
										people: [Cookies.get('username')],
										lists: {},
										albums: {},
										chat: [],
									};
									addNewTrip(trip, Cookies.get('username').toLocaleLowerCase());
									//Navigate back to the main trips page
									navigate('/', { replace: true });
								}
							}}
						>
							Create Trip
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddTripPage;
