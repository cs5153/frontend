import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import exitIcon from '../images/x-mark.png';
import ListItem from './ListItem';


const ListPopup = (props) => {
	const {trip} = useParams()
	const [state, setState] = useState(
		{
			currentList : props.list,
		}
	)
	console.log("CURR LIST IS: ", state.currentList)
	let i = 0
	return (
	<>
		<div className='addModal'>
				<button className='exitButton' onClick={() => props.handler(false,{})}>
						<img className='iconImg' src={exitIcon} />
				</button>
				{state.hasError && <ErrorMessage message={state.errMessage} />}
				<div className='listArea'> 
					<div className='listContainer'> 
						<ul> 
						{state.currentList.items.map((currItem) => (     
							<ListItem key={i++} item={currItem}/>
						))} 
						</ul> 
					</div> 
        		</div> 
        <div className='inputSection'> 
            <div className='messageInput'> 
                <input className='inputField' value={state.currMessage} type="text" placeholder='Send a message' onChange={(evt) => { 
                    // setState({
                    //     currMessage: evt.target.value,
                    //     randMessage: state.randMessage
                    // }) 
                }}/> 
            </div> 
            <div className='sendButton'>      
                <button className='inputField' onClick={() => {
                    
                    
                }}> 
                Send</button> 
            </div> 
        </div>

			</div>
	</>
	);
};

export default ListPopup;
