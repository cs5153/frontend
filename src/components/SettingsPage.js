import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import {addNewTrip, readData, writeData, mockData} from '../helper/helper';
import ErrorMessage from './ErrorMessage';
import ExitButton from './ExitButton';
import '../css/AccSettings.css';


const SettingsPage = () => {
	const navigate = useNavigate();
	const [logoutCounter, setLogoutCounter] = useState(0);
	const [invalidString, setInvalidString] = useState(false);
	const [emptyUsername, setEmptyUsername] = useState(false);
	const [emptyPassword, setEmptyPassword] = useState(false);
	const [state, setState] = useState({
		userObj: {
			username: '',
			password: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		},
	});

	//Converts password to **********
	function convPassword(password) {
		return password.replace(/./g,'*');
	}

	//Updates the username
	let updateUsername = (e) => {
		//Check that username is valid (under 16 characters)
		if (state.userObj.username.length > 15){
			setInvalidString(true);
			setEmptyUsername(false);
		} else if (state.userObj.username.length === 0) {
			setInvalidString(false);
			setEmptyUsername(true);
		} else {
			setInvalidString(false);
			setEmptyUsername(false);
			mockData.users[Cookies.get("username")].username = state.userObj.username;
			console.log(mockData);
			navigate('/settings', {replace: true})
		}
	}

	let updatePassword = (e) => {
		if (state.userObj.password.length === 0 ){
			setEmptyPassword(true);
			setEmptyUsername(false);
			setInvalidString(false);
		} else {
			setEmptyPassword(false);
			mockData.users[Cookies.get("username")].password = state.userObj.password;
			console.log(mockData);
			navigate('/settings', {replace: true})
		}

	}

  let onLogoutClick = (e) => {
    //Check what the counter state is at
    setLogoutCounter(logoutCounter + 1);
    console.log(logoutCounter);
    if (logoutCounter < 1){
			return;
		}
		//Remove user from cookies
		Cookies.remove('username');
		Cookies.remove('token');
		Cookies.remove('renewToken');
    navigate('/', {replace: true})
  }
	
	var cur_user = Cookies.get("username");
	return (
		<>
			<div className='settingsContainer'>
				<div className='settingsModal'>
					<div className='settingsExit'>
					<ExitButton/>
					</div>
					<h2>Account Settings</h2>
					<div className='user-info-container'>
						<div className='user-field'> Name: </div>
						<div className='user-info'> {mockData.users[cur_user].firstname+" "}{mockData.users[cur_user].lastname} </div>
					</div>
					<div className='user-info-container'>
						<div className='user-field'> Email: </div>
						<div className='user-info'> {mockData.users[cur_user].email} </div>
					</div>
					<div className='user-info-container'>
						<div className='user-field'> Phone Number: </div>
						<div className='user-info'> {mockData.users[cur_user].phone} </div>
					</div>
					<div className='user-info-container'>
						<div className='user-field'> Username: </div>
						<div className='user-info'> {mockData.users[cur_user].username} </div>
					</div>
					<div className='user-info-container'>
						<div className='user-field'> Password: </div>
						<div className='user-info'> {convPassword(mockData.users[cur_user].password)} </div>
					</div>
					{emptyUsername && (
						<ErrorMessage message='Please fill user field.' />
					)}
					{emptyPassword && (
						<ErrorMessage message='Please fill password field.' />
					)}
					{invalidString && (
						<ErrorMessage message='Please ensure username/password is under 16 characters.' />
					)}
					<div className='inputArea'>
						<input
							autoFocus={true}
							className='inputField'
							type='text'
							placeholder='Username'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.username = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputButton'>
						<button
							className='inputField'
							onClick={updateUsername}
						>
							Update Username
						</button>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='Password'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.password = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputButton'>
						<button
							className='inputField'
							onClick={updatePassword}
						>
							Update Password
						</button>
					</div>
          {logoutCounter === 1 && <ErrorMessage message='Click again to log out.'/>} 
          <div className='logout'>
						<button className="logoutButton" onClick={onLogoutClick}>
              Log Out
            </button>
          </div>
				</div>
			</div>
		</>
	);
};

export default SettingsPage;
