import React,{useState} from 'react';
import '../css/FeatureSpace.css'
import { mockData,getDataMap } from '../helper/mockData';
import PersonCard from './PersonCard';
import plusImg from '../images/plus.png'
import AddTripMate from './AddTripMate';


const People = () => {

	const [state, setState]= useState({
		showAddBox: false,
		userData: mockData.existingUsersData["Tony"].trips["001"]
	})
	var i =0;
	console.log("USER DATA IS", state.userData)

	const pullTripMateData  = (tripMates) => {
		let tripMatesData = []
		console.log("pullTripMateData :: tripMates is :", tripMates)
		let userMap = getDataMap(mockData.existingUsersData)
		tripMates.forEach(element => {
			console.log("LOOKING FOR USER: ", element)
			console.log("getDataMap(mockData.existingUsersData): ",getDataMap(mockData.existingUsersData))
			console.log("USER MAP HAS : ", userMap.has(element))
			if(userMap.has(element)){
				let data = (({firstName, lastName, userName, password, email, phone}) => ({firstName, lastName, userName, password, email, phone}))(mockData.existingUsersData[element])
				console.log("DATA IS: ",data)
				tripMatesData.push(data)
			}
		});
		console.log("FINAL TRIPMATES DATA IS: ", tripMatesData)
		return tripMatesData
	}

	const showBox = (bool) =>{
		setState({
			showAddBox: bool,
			userData: state.userData
		})
	}

	let blah = pullTripMateData(state.userData.tripMates)
	console.log("Type of tripmate data is :", typeof(blah[0]))
	return (
	<div className='featureContainer'>
		{state.showAddBox && <AddTripMate handler={showBox}/>}
		<div className='listContainer'>
			<ul>
			{blah.map((listItem) => (
				
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
