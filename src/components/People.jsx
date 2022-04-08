import React,{useState} from 'react';
import '../css/FeatureSpace.css'
import { mockData,getDataMap } from '../helper/mockData';
import PersonCard from './PersonCard';
import plusImg from '../images/plus.png'
import AddTripMate from './AddTripMate';


const People = () => {

	const [state, setState]= useState({
		showAddBox: false,
		userData: getDataMap(mockData.existingUsersData)
	})
	var i =0;
	console.log("USER DATA IS", state.userData)

	const showBox = (bool) =>{
		setState({
			showAddBox: bool,
			userData: state.userData
		})
	}

	return (
	<div className='featureContainer'>
		{state.showAddBox && <AddTripMate handler={showBox}/>}
		<div className='listContainer'>
			<ul>
			{Array.from(state.userData.values()).map((listItem) => (
            	<PersonCard key={i++} user={listItem}></PersonCard>
         	))}
			</ul>
		</div>
		<button className='addButton' onClick={() => showBox(true)}>
			<img className='iconImg' src={plusImg}/>
		</button>
	</div>);
};

export default People;
