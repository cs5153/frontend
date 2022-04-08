import React from 'react';
import profileImage from "../images/user.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'


const PersonCard = (props) => {

	let user = props.user
	console.log("PERSON CARD USER IS: ",props.user)
	return (
	<>
		<div className='personCard'>
			<div className='cardPropicContainer'>
				<img className='cardPropic'
				src={profileImage}
				alt={"profile picture"}/>
			</div>
			<div className='personInfo'>
				<h3>{user.firstName} {user.lastName}</h3>
				<h6>{user.email}</h6>
				<h6>{user.phone}</h6>
			</div>
		</div>
	</>);
};

export default PersonCard;
