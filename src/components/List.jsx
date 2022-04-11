import jsCookie from 'js-cookie';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../css/FeatureSpace.css' 
import { mockData } from '../helper/mockData';
import ListCard from './ListCard';
import ListPopup from './ListPopup';

const List = () => {
	const {trip} = useParams()
	const tripId = jsCookie.get("trip_id")
	console.log("trip is: ", tripId)
	const [state, setState] = useState(
		{
			listsInTrip : mockData.trips[tripId].lists,
			showFullList: false,
			selectedListItem: {}
		}
	)

	const selectedListHandler = (bool , currList) =>{
		console.log("List item selected was: ",currList)
		setState({
			listsInTrip: state.listsInTrip,
			showFullList: bool,
			selectedListItem: currList
		})
	}

	console.log("listsInTrip: ", state.listsInTrip)
	let i = 0

	return (
	<>
		{state.showFullList && <ListPopup handler={selectedListHandler} list={state.selectedListItem}/>}
		<div className='featureContainer'>
			<div className='listBox'>
				<ul>
					{state.listsInTrip.map((currList) => 
					(<ListCard key={i++} handler={selectedListHandler} listItem={currList}/>))}
				</ul>
			</div>
		</div>
	</>
	);
};

export default List;
