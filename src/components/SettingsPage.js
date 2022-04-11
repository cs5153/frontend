import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import {addNewTrip, readData, writeData} from '../helper/helper';
import ErrorMessage from './ErrorMessage';
import ExitButton from './ExitButton';
import '../css/AccSettings.css';


const SettingsPage = () => {
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
			<div className='settingsContainer'>
				<div className='settingsModal'>
					<div className='settingsExit'>
					<ExitButton/>
					</div>
					<div className='title'>Account Settings</div>
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

export default SettingsPage;
