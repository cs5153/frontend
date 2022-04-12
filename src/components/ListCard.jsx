import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/FeatureSpace.css' 
import '../css/List.css' 
import { mockData } from '../helper/mockData';

const ListCard = (props) => {
	const {trip} = useParams()
	const [state, setState] = useState(
		{
			currentList : props.listItem,
			currIndex: props.listIndex
		}
	)
	
		console.log("CREATING CARD WITH NAME VALUE: ",props.listItem)
		console.log("CREATING CARD WITH NAME VALUE: ",props.listIndex)

	return (
	<>
			<div className='listCard' >
				{/* <h6>{state.currentList.name}</h6> * */}
				<button
					className='link'
					onClick={() => {
						// let copy = state
						// copy.currIndex = props.listIndex
						// copy.currentList = props.listItem
						// setState({...copy})
						props.handler(true,props.listItem, props.listIndex)}}
				>
					{props.listItem.name}
				</button>
				{/* <Link to={`/${trip}/list/${state.currentList.name}`}>
					{state.currentList.name}
				</Link> */}
			</div>
	</>
	);
};

export default ListCard;
