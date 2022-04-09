import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import {
	isUserFieldBlank,
	addNewUser,
} from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css';
import ErrorMessage from './ErrorMessage';
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
		},
		hasError: false,
	});

	return (
		<>
			<div className='loginPageContainer'>
				<div className='loginModal'>
					<div>
						<Link to='/'>
							<img
								className='tripperLogo'
								src={stickmanLogo}
								alt='clipart of man with baggage standing next to Tripper logo'
							/>
						</Link>
					</div>
					{state.hasError && (
						<ErrorMessage message='Please fill out all fields' />
					)}
					<div className='inputArea'>
						<h6>UserName</h6>
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
						<h6>Password</h6>
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
						<h6>First Name</h6>
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
						<h6>Last Name</h6>
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
						<h6>Email</h6>
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
						<button
							className='inputField'
							onClick={() => {
								if (isUserFieldBlank(state.userObj)) {
									setState({
										userObj: state.userObj,
										hasError: true,
									});
								} else {
									addNewUser(state.userObj);
									Cookies.set('username', state.userObj.userName);

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
