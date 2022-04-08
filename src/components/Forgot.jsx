import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import mockData, { isUserFieldBlank } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css';
import ErrorMessage from './ErrorMessage';

const Forgot = (props) => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		userObj: {
			email: '',
		},
		didUserSubmit: false,
		hasError: false,
	});

	function getStateCopy() {
		let stateCopy = state;
		return stateCopy;
	}

	let displayedPage;
	if (state.didUserSubmit === false) {
		displayedPage = (
			<div className='loginPageContainer'>
				<div className='loginModal'>
					<div>
						<img
							className='tripperLogo'
							src={stickmanLogo}
							alt='clipart of man with baggage standing next to Tripper logo'
						/>
					</div>
					{state.hasError && (
						<ErrorMessage message='Please fill out all fields' />
					)}
					<div className='inputArea'>
						<h6>UserName</h6>
						<input
							className='inputField'
							type='text'
							placeholder='Email'
							onChange={(evt) => {
								let copy = getStateCopy();
								copy.userObj.email = evt.target.value;
								setState(copy);
							}}
						/>
						<div className='inputArea'>
							<button
								className='inputField'
								onClick={() => {
									if (isUserFieldBlank(state.userObj)) {
										setState({
											userObj: state.userObj,
											didUserSubmit: false,
											hasError: true,
										});
									} else {
										setState({
											userObj: state.userObj,
											didUserSubmit: true,
											hasError: false,
										});
									}
								}}
							>
								Send Email
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (state.didUserSubmit === true) {
		displayedPage = (
			<div className='loginPageContainer'>
				<div className='loginModal'>
					<div>
						<img
							className='tripperLogo'
							src={stickmanLogo}
							alt='clipart of man with baggage standing next to Tripper logo'
						/>
					</div>
					<h1>Email Sent</h1>
					<p>
						If an account is found, we'll send a link to the email adress
						provided to reset your password
					</p>
					<button
						className='link'
						onClick={() => navigate('/login', { replace: true })}
					>
						Back to Login
					</button>
				</div>
			</div>
		);
	}

	return <>{displayedPage}</>;
};

export default Forgot;
