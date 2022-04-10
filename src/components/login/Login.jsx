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
		if (mockData.users[userName] && mockData.users[userName].password === password) {
			return true;
		}
		return false;
	}

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
					{state.hasError && <ErrorMessage message={state.errMsg} />}
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
						<button
							className='inputField'
							onClick={() => {
								if (isUserFieldBlank(state.userObj)) {
									setState({
										userObj: state.userObj,
										hasError: true,
										errMsg: 'Please fill out all fields',
									});
								} else {
									if (
										isValidUser(state.userObj.userName, state.userObj.password)
									) {
										Cookies.set('username', state.userObj.userName);

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
					<button
						className='link'
						onClick={() => navigate('/signup', { replace: true })}
					>
						Sign Up
					</button>
					<button
						className='link'
						onClick={() => navigate('/forgot', { replace: true })}
					>
						Forgot Password
					</button>
				</div>
			</div>
		</>
	);
};

export default Login;
