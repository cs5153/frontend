import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { readData, writeData, isUserFieldBlank } from '../../helper/helper';
import stickmanLogo from '../../images/stickmanLogo.png';
import '../../css/Login.css';
import ErrorMessage from '../ErrorMessage';
import { Link } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		userObj: {
			userName: '',
			password: '',
		},
		hasError: false,
		errMsg: '',
	});

	var mockData = readData();

	function isValidUser(userName, password) {
		//Check if any of the users have this username
		for (const [key, val] of Object.entries(mockData.users)){
			console.log(val)
			console.log(userName);
			console.log(password);
			console.log(val.username);
			console.log(!val.username.localeCompare(userName))
			console.log(!val.password.localeCompare(password))
			if(!val.username.localeCompare(userName) && !val.password.localeCompare(password)){
				return key;
			}
		}
		//if (mockData.users[userName] && mockData.users[userName].password === password) {
		//	return true;
		//}
		return;
	}

	return (
		<>
			<div className='loginPageContainer'>
				<div className='loginModal'>
					<div>
						<Link to='/' style={{textDecoration: 'none'}}>
							<div tabIndex="0" className='title'> TRIPPER </div>
						</Link>
					</div>
					{state.hasError && <ErrorMessage message={state.errMsg} />}
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
					<div className='buttonRow'>
					<div className='buttonAreaLeft'>
					<button
						className='buttonField'
						onClick={() => navigate('/signup', { replace: true })}
					>
						Sign Up
					</button>
					</div>
					<div className='buttonArea'>
						<button
							className='buttonField'
							onClick={() => {
								if (isUserFieldBlank(state.userObj)) {
									setState({
										userObj: state.userObj,
										hasError: true,
										errMsg: 'Please fill out all fields',
									});
								} else {
									
										var key = isValidUser(state.userObj.userName, state.userObj.password)
									if (key) {
										Cookies.set('username', key);
										navigate('/', { replace: true });
									} else {
										setState({
											userObj: state.userObj,
											hasError: true,
											errMsg:
												'Invalid credentials. Your Username or password is incorrect',
										});
									}
								}
							}}
						>
							Login
						</button>
					</div>
					</div>
					<div className='buttonArea'>
					<button
						className='buttonField'
						onClick={() => navigate('/forgot', { replace: true })}
					>
						Forgot Password
					</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
