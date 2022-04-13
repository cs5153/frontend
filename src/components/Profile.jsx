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
	const [password, setPassword] = useState('');
	const [firstname, setFirstname] = useState();
	const [lastname, setLastname] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();

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
				<div className='inputArea'>
					<h6>Username</h6>
					<p tabIndex={0} aria-label={`username ${userData.username}`}>{userData.username}</p>
				</div>
				<div className='inputArea'>
					<h6>Password</h6>
					<input
						className='inputField'
						type='password'
						placeholder='Password'
						onChange={(evt) => setPassword(evt.target.value)}
						value={password}
					/>
				</div>
				<div className='inputArea'>
					<h6>First Name</h6>
					<input
						className='inputField'
						type='text'
						placeholder='First Name'
						defaultValue={userData.firstname}
						onChange={(evt) => setFirstname(evt.target.value)}
						value={firstname}
					/>
				</div>
				<div className='inputArea'>
					<h6>Last Name</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Last Name'
						defaultValue={userData.lastname}
						onChange={(evt) => setLastname(evt.target.value)}
						value={lastname}
					/>
				</div>
				<div className='inputArea'>
					<h6>Email</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Email'
						defaultValue={userData.email}
						onChange={(evt) => setEmail(evt.target.value)}
						value={email}
					/>
				</div>
				<div className='inputArea'>
					<h6>Phone Number</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Phone Number'
						defaultValue={userData.phone}
						onChange={(evt) => setPhone(evt.target.value)}
						value={phone}
					/>
				</div>
				<div className='inputArea'>
					<button
						className='inputField'
						onClick={() => {
							mockData.users[user] = {
								username: userData.username,
								password: !!password ? password : userData.password,
								firstname: !!firstname ? firstname : userData.firstname,
								lastname: !!lastname ? lastname : userData.lastname,
								email: !!email ? email : userData.email,
								phone: !!phone ? phone : userData.phone,
								trips: userData.trips,
							};
							navigate('/');
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
