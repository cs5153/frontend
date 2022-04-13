import React from 'react';
import profileImage from "../images/user.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'
import delIcon from '../images/garbage.png'
import jsCookie from 'js-cookie';

const PersonCard = ({user, delHandler}) => {
	const tripId = jsCookie.get('trip_id');
	const loggedInUser = jsCookie.get('username')

	console.log("USER IS:", user)
	return (
		<>
			
			<div className='personCard'>
				
				<div className='cardPropicContainer'>
					<img
						className='cardPropic'
						src={profileImage}
						alt={`${user.firstName}'s profile picture`}
						tabIndex={0}
					/>
				</div>
				<div className='personInfo'>
					<h3 tabIndex={0}>
						{user.firstName} {user.lastName}
					</h3>
					<h6 tabIndex={0}>{user.email}</h6>
					<h6 tabIndex={0}>{user.phone}</h6>
				</div>
				{user.userName !== loggedInUser &&
					<button aria-label='delete person' className='delPerson' onClick={() => {
						delHandler(user.userName,tripId)
					}}>
						<img aria-disabled className='iconImg' src={delIcon} />
					</button>
				}
			</div>
		</>
	);
};

export default PersonCard;
