import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { isUserFieldBlank, addNewUser, readData, writeData } from '../../helper/helper';
import stickmanLogo from '../../images/stickmanLogo.png';
import '../../css/Login.css';
import ErrorMessage from '../ErrorMessage';
import { Link } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		userObj: {
			userName: '',
			password: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		},
		hasError: false,
	});

	//Read the fake database
	var mockData = readData();

	return (
		<>
			<div className='loginPageContainer'>
				<div className='loginModal'>
					<div>
						<Link to='/' style={{textDecoration: 'none'}}>
							<div className='title'> TRIPPER </div>
						</Link>
					</div>
					{state.hasError && (
						<ErrorMessage message='Please fill out all fields' />
					)}
					<div className='inputArea'>
						<input
							autoFocus={true}
							className='inputField'
							type='text'
							placeholder='UserName'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.userName = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='password'
							placeholder='Password'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.password = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='First Name'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.firstName = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='Last Name'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.lastName = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='Email'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.email = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<input
							className='inputField'
							type='text'
							placeholder='Phone Number'
							onChange={(evt) => {
								let copy = state;
								copy.userObj.phone = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div className='inputArea'>
						<button
							className='inputField'
							onClick={() => {
								if (isUserFieldBlank(state.userObj)) {
									setState({
										userObj: state.userObj,
										hasError: true,
									});
								} else {
									mockData.users[state.userObj.userName.toLocaleLowerCase()] = {
										username: state.userObj.userName,
										password: state.userObj.password,
										firstname: state.userObj.firstName,
										lastname: state.userObj.lastName,
										email: state.userObj.email,
										phone: state.userObj.phone,
										trips: [],
									};
									Cookies.set(
										'username',
										state.userObj.userName.toLocaleLowerCase()
									);
									//Write out to file to save the user
									writeData(mockData);

									navigate('/', { replace: true });
								}
							}}
						>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
