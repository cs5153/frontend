import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import exitIcon from '../images/x-mark.png';
import ListItem from './ListItem';
import '../css/Chat.css'
import plusIcon from '../images/plus.png'
import jsCookie from 'js-cookie';


const AddList = (props) => {
	const {trip} = useParams();
	const navigate = useNavigate();

    const tripId = jsCookie.get("trip_id")
    const [state, setState] = useState({
        errMessage : "",
        newListName: "",
        hasError: false
    })
	
	return (
		<>
			<div className='addModal'>
				{state.hasError && (
					<ErrorMessage css={'errorbox'} message={state.errMessage} />
				)}
				<div className='inputArea'>
					<h6>Name of New List</h6>
					<input
						className='inputField'
						type='text'
						placeholder='Name of New List'
						onChange={(evt) => {
							let copy = state;
							copy.newListName = evt.target.value;
							setState({ ...copy });
						}}
					/>
				</div>
				<div className='inputArea'>
					<button
						className='inputField'
						onClick={() => {
							//add new list to mockData if user entered name
							console.log('New naem is: ', state.newListName);
							if (state.newListName) {
								let listObj = {
									name: state.newListName,
									items: [],
								};

								mockData.trips[tripId].lists.push(listObj);
								navigate(`/${trip}/list`);
								console.log('trips is now: ', mockData.trips[tripId]);
							} else {
								let copy = state;
								copy.hasError = true;
								copy.errMessage = 'Please enter a name for your new list';
								setState({ ...copy });
								return;
							}
							//close window
							props.handler(false);
						}}
					>
						Add List
					</button>
					<button
						aria-label='exit popup'
						className='exitButton'
						onClick={() => props.handler(false)}
					>
						<img aria-disabled className='iconImg' src={exitIcon} />
					</button>
				</div>
			</div>
		</>
	);
};

export default AddList;
