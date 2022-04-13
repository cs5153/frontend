import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import {addNewTrip, readData, writeData} from '../../helper/helper';
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

function isInvalid(obj){
	let invalid = false;
	if (obj.tripName.length > 15 || obj.tripLocation > 15){
		invalid = true;
	}
	return invalid;
}

const AddTripPage = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		tripObj: {
			tripName: '',
			tripLocation: '',
		},
		isEmpty: false,
		invalidString: false,
	});

	var mockData = readData();

	return (
		<>
			<div className='addTripPageContainer'>
				<div className='addTripModal'>
					<h1 tabIndex="0" >Add Trip</h1>
					<div className='addTripExit'>
					<ExitButton/>
					</div>
			    {state.isEmpty && (
						<ErrorMessage message='Please fill out all fields.' />
					)}
			    {state.invalidName && (
						<ErrorMessage message='Names or Locations must be under 16 characters.' />
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
											isEmpty: true,
										});
								} else if (isInvalid(state.tripObj)) {
										setState({
											tripObj: state.tripObj,
											invalidName: true,
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
									addNewTrip(mockData, trip, Cookies.get('username').toLocaleLowerCase());
									//Write out
									writeData(mockData);
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
