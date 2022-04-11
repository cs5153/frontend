import React from 'react';
import profileImage from "../images/user.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'
import '../css/Chat.css'

const ChatMessage = (props) => {

	let msg = props.message
	return (
	<>
		<div className='chatCard'>
			<p tabIndex={0}><b>{msg.sender}:</b> {msg.content}</p>
			<p className='timestamp' tabIndex={0}>{msg.timestamp}</p>
		</div>
	</>);
};

export default ChatMessage;
