import React,{useState} from 'react';
import '../css/FeatureSpace.css'
import { mockData,getDataMap } from '../helper/mockData';
import PersonCard from './PersonCard';
import plusImg from '../images/plus.png'
import AddTripMate from './AddTripMate';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';

const People = () => {
	const { trip } = useParams();
	const [state, setState]= useState({
		showAddBox: false,
		userData: mockData.existingUsersData[jsCookie.get("username").toLocaleLowerCase()].trips[trip]
	})
	var i =0;
	console.log("existing data for user: ", mockData.existingUsersData[jsCookie.get("username").toLocaleLowerCase()].trips[trip.toString()])
	console.log("USER DATA IS", state.userData)

	const pullTripMateData  = (tripMates) => {
		let tripMatesData = []
		console.log("pullTripMateData :: tripMates is :", tripMates)
		let userMap = getDataMap(mockData.existingUsersData)
		tripMates.forEach(element => {
			console.log("LOOKING FOR USER: ", element)
			console.log("getDataMap(mockData.existingUsersData): ",getDataMap(mockData.existingUsersData))
			console.log("USER MAP HAS : ", userMap.has(element))
			if(userMap.has(element.toLocaleLowerCase())){
				let data = (({firstName, lastName, userName, password, email, phone}) => ({firstName, lastName, userName, password, email, phone}))(mockData.existingUsersData[element.toLocaleLowerCase()])
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
