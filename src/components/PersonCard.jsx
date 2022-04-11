import React from 'react';
import profileImage from "../images/user.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'


const PersonCard = ({user}) => {
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
			</div>
		</>
	);
};

export default PersonCard;
