import React, { useState, useRef, useEffect } from 'react'; 
import profileImage from "../images/user.png"; 
import '../css/FeatureSpace.css' 
import { mockData,getFakeResponse } from '../helper/mockData'; 
import jsCookie from 'js-cookie'; 
import { useParams } from 'react-router-dom'; 
import ChatMessage from './ChatMessage'; 
import '../css/Chat.css'; 

const Chat = (props) => {  

    const [state, setState] = useState({ 

        currMessage: "", 
        randMessage: 0
    }) 

    const endOfThread = useRef(null)
    const scrollToEnd = () => {
        endOfThread.current?.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(() => {
        scrollToEnd()
    }, [state.currMessage,state.randMessage]);  

    let msg = state.currMessage;
    const user = jsCookie.get("username")
    const {trip} = useParams() 
    const tripId = jsCookie.get("trip_id")
    let currTrip =  mockData.trips[tripId]
    let chatHistory = currTrip.chat
    let i = 0 
  

    return (
			<>
				<div className='featureContainer' id='mainContent' tabIndex={-1}>
					<div className='chatArea'>
						<div className='listContainer'>
							<ul>
								{chatHistory.map((msg) => (
									<ChatMessage key={i++} message={msg} />
								))}
								<div ref={endOfThread} />
							</ul>
						</div>
					</div>
					<div className='inputSection'>
						<div className='messageInput'>
							<input
								className='inputField'
								value={state.currMessage}
								type='text'
								placeholder='Send a message'
								onChange={(evt) => {
									setState({
										currMessage: evt.target.value,
										randMessage: state.randMessage,
									});
								}}
							/>
						</div>
						<div className='sendButton'>
							<button
								className='inputField'
								onClick={() => {
									if (
										state.currMessage !== '' &&
										state.currMessage.trim() !== ''
									) {
										let newMessage = {
											sender: user,
											content: state.currMessage,
											timestamp: Date(Date.now()),
										};
										mockData.trips[tripId].chat.push(newMessage);
										setTimeout(function () {
											mockData.trips[tripId].chat.push(
												getFakeResponse(jsCookie.get('username'), tripId)
											);
											setState({
												currMessage: '',
												randMessage: ++state.randMessage,
											});
										}, 2000);
										//reset current message to empty since, last one was sent
										setState({
											currMessage: '',
											randMessage: state.randMessage,
										});
									}
								}}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</>
		); 

}; 

 
 

export default Chat; 