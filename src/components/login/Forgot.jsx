import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { isUserFieldBlank, readData } from '../../helper/helper';
import stickmanLogo from '../../images/stickmanLogo.png';
import '../../css/Login.css';
import ErrorMessage from '../ErrorMessage';
import { Link } from 'react-router-dom';

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
							placeholder='Email'
							onChange={(evt) => {
								let copy = getStateCopy();
								copy.userObj.email = evt.target.value;
								setState(copy);
							}}
						/>
					</div>
					<div>
						<div className='buttonArea'>
							<button
								className='buttonField'
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
						<Link to='/' style={{textDecoration: 'none'}}>
							<div className='title'> TRIPPER </div>
						</Link>
					</div>
					<div className='response'>
						<p>
							If an account is found, we'll send a link to the email adress
							provided to reset your password.
						</p>
						<button
							className='buttonField'
							onClick={() => navigate('/login', { replace: true })}
						>
							Back to Login
						</button>
						</div>
				</div>
			</div>
		);
	}

	return <>{displayedPage}</>;
};

export default Forgot;
