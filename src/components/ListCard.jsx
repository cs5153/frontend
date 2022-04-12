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
		}
	)
	
	return (
	<>
		<div className='listCard' >
			{/* <h6>{state.currentList.name}</h6> * */}
			<button
				className='link'
				onClick={() => props.handler(true,state.currentList)}
			>
				{state.currentList.name}
			</button>
			{/* <Link to={`/${trip}/list/${state.currentList.name}`}>
				{state.currentList.name}
			</Link> */}
		</div>
	</>
	);
};

export default ListCard;
