import jsCookie from 'js-cookie';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import { mockData } from '../helper/mockData';
import ListCard from './ListCard';
import ListPopup from './ListPopup';
import plusImg from '../images/plus.png'
import AddList from './AddList';

const List = () => {
	const {trip} = useParams()
	const tripId = jsCookie.get("trip_id")
	console.log("trip is: ", tripId)
	const [state, setState] = useState(
		{
			listsInTrip : mockData.trips[tripId].lists,
			showFullList: false,
			showAddList: false,
			selectedListItem: {}
		}
	)

	const selectedListHandler = (bool , currList) =>{
		console.log("List item selected was: ",currList)
		setState({
			listsInTrip: state.listsInTrip,
			showFullList: bool,
			showAddList: false,
			selectedListItem: currList
		})
	}

	const addListHandler = (bool) =>{
		let copy = state
		copy.showAddList = bool
		setState({...copy})
	}

	console.log("listsInTrip: ", state.listsInTrip)
	let i = 0

	return (
	<>
		{state.showFullList && <ListPopup handler={selectedListHandler} list={state.selectedListItem}/>}
		{state.showAddList && <AddList handler={addListHandler}/>}

		<div className='featureContainer'>
			<div className='listBox'>
				<ul>
					{state.listsInTrip.map((currList) => 
					(<ListCard key={i++} handler={selectedListHandler} listItem={currList}/>))}
				</ul>
			</div>
			<button className='addButton' onClick={() => {
				let copy = state
				copy.showAddList = true;
				copy.showFullList = false;
				console.log("STATE BEFORE CLICKING ADD LIST: ", state)
				setState({...copy})
				console.log("STATE AFTER CLICKING ADD LIST: ", state)
			}}>
				<img className='iconImg' src={plusImg} />
			</button>
		</div>
	</>
	);
};

export default List;
