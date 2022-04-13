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
			selectedListItem: {},
			currIndex: 0
		}
	)

	const selectedListHandler = (bool , currList, index) =>{
		console.log("List item selected was: ",currList)
		let copy = state
		copy.showFullList = bool
		copy.currIndex = index 
		copy.selectedListItem = currList
		copy.showAddList = false
		setState({
			...copy
		})
		console.log("SELECT HANDLER FINAL: ", state)
	}

	const addListHandler = (bool) =>{
		let copy = state
		copy.showAddList = bool
		setState({...copy})
	}

	const handleListDelete = (index) => {
		let copy = state
		console.log("TYPE OF MAIN LIST IS: ",copy.listsInTrip)
		copy.listsInTrip.splice(index, 1)
		console.log("AFTER SPLICE LIST IN TRIP IS: ", copy.listsInTrip )
		copy.currIndex = 0
		copy.selectedListItem = {}
		console.log("wanting to MAIN update index: ", index)
		console.log("MAIN NEW LIST IS: ", copy)
		setState({
			...copy
		})
		// mockData.trips[tripId].lists.splice(index,1)
		console.log("MAIN state list after update: ", state)
		console.log("PULLING FROM MOCK DATA:",mockData.trips[tripId].lists)
	}

	console.log("listsInTrip: ", state.listsInTrip)
	let i = 0

	return (
		<>
			{state.showFullList && (
				<ListPopup
					handler={selectedListHandler}
					list={state.selectedListItem}
					delHandler={handleListDelete}
					listIndex={state.currIndex}
				/>
			)}
			{state.showAddList && <AddList handler={addListHandler} />}

			<div className='featureContainer' id='mainContent' tabIndex={-1}>
				<div className='listBox'>
					<ul>
						{state.listsInTrip.map((currList, index) => {
							console.log('LOOP INDEX IS: ', index);
							console.log('LOOP INDEX LIST NAME IS: ', currList);
							return (
								<ListCard
									key={i++}
									handler={selectedListHandler}
									listItem={{ ...currList }}
									listIndex={index}
								/>
							);
						})}
					</ul>
				</div>
				<button
					aria-label='New List'
					className='addButton'
					onClick={() => {
						let copy = state;
						copy.showAddList = true;
						copy.showFullList = false;
						setState({ ...copy });
					}}
				>
					<img aria-disabled={true} className='iconImg' src={plusImg} />
				</button>
			</div>
		</>
	);
};

export default List;
