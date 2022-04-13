import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { isUserFieldBlank, addNewUser, mockData } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';
import jsCookie from 'js-cookie';

const Profile = () => {
	const navigate = useNavigate();
	const user = jsCookie.get('username');

	useEffect(() => {
		if (!user) {
			navigate('/', { replace: true });
		}
	}, [user]);

	const userData = mockData.users[user];
	const [username, setUsername] = useState(userData.username);
	const [password, setPassword] = useState(userData.password);
	const [firstname, setFirstname] = useState(userData.firstname);
	const [lastname, setLastname] = useState(userData.lastname);
	const [email, setEmail] = useState(userData.email);
	const [phone, setPhone] = useState(userData.phone);

	return (
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
				{/* {state.hasError && (
					<ErrorMessage message='Please fill out all fields' />
				)} */}
				<div className='inputArea'>
					<h6>UserName</h6>
					<input
						autoFocus={true}
						className='inputField'
						type='text'
						placeholder='UserName'
						onChange={(evt) => setUsername(evt.target.value)}
						value={username}
					/>
				</div>
				<div className='inputArea'>
					<h6>Password</h6>
					<input
						className='inputField'
						type='password'
						placeholder='Password'
						onChange={(evt) => setPassword(evt.taget.value)}
						value={password}
					/>
				</div>
				<div className='inputArea'>
					<h6>First Name</h6>
					<input
						className='inputField'
						type='text'
						placeholder='First Name'
						onChange={(evt) => setFirstname(evt.taget.value)}
						value={firstname}
					/>
				</div>
				<div className='inputArea'>
					<h6>Last Name</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Last Name'
						onChange={(evt) => setLastname(evt.taget.value)}
						value={lastname}
					/>
				</div>
				<div className='inputArea'>
					<h6>Email</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Email'
						onChange={(evt) => setEmail(evt.taget.value)}
						value={email}
					/>
				</div>
				<div className='inputArea'>
					<h6>Phone Number</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Phone Number'
						onChange={(evt) => setPhone(evt.target.value)}
						value={phone}
					/>
				</div>
				<div className='inputArea'>
					<button
						className='inputField'
						onClick={() => {
							mockData.users[user] = {
								username: state.userObj.userName,
								password: state.userObj.password,
								firstname: state.userObj.firstName,
								lastname: state.userObj.lastName,
								email: state.userObj.email,
								phone: state.userObj.phone,
								trips: [],
							};
						}}
					>
						Update Profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
