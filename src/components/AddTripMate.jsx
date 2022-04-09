import React, { useState } from 'react';
import exitIcon from "../images/x-mark.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'
import '../css/Login.css'
import { mockData, addNewUser,getDataMap,updateTripMemberList } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';
import jsCookie from 'js-cookie';
import { useParams } from 'react-router-dom';


const AddTripMate = (props) => {
    const { trip } = useParams();

    const [state, setState] = useState({
        newTripMate : "",
        hasError: false,
        errMessage: ""
    })

    const changeErrorValue = (bool, msg) => {
        setState({
            newTripMate: state.newTripMate,
            hasError: bool,
            errMessage: msg
        })
    }

    const addToTrips = ( newMember,trip) => {
        //get trip info
        let updatedTrip = mockData.existingUsersData[jsCookie.get("username").toLocaleLowerCase()].trips[trip].tripMates.push(newMember)
        let newUserTripMap = mockData.existingUsersData[newMember.toLocaleLowerCase()].trips[trip] = updatedTrip
        // updateTripMemberList(tripInfo)
        console.log("UPDATED TRIP LIST IS :", mockData.existingUsersData)
    }

    let existingUserMap = getDataMap(mockData.existingUsers)

	let user = props.user
	console.log("PERSON CARD USER IS: ",props.user)
	return (
	<>
		<div className='addModal'>
                {state.hasError && <ErrorMessage message={state.errMessage}/>}
                <div className='inputArea'>
                    <h6>User Name Of New Trip Mate</h6>
                    <input className='inputField' type="New Trip Mate UserName" placeholder='New Trip Mate UserName' onChange={(evt) => {
                        let copy = state
                        copy.newTripMate = evt.target.value
                        setState(copy)
                    }}/>
                </div>
                <div className='inputArea'>
                <button className='exitButton' onClick={() => props.handler(false)}>
			        <img className='iconImg' src={exitIcon}/>
		        </button>
                <button className='inputField'
                onClick={() =>{
                    if(state.newTripMate === ""){
                        changeErrorValue(true, "Please enter new trip mate name before submitting")
                    }
                    else if(existingUserMap.has(state.newTripMate)){
                        addToTrips(state.newTripMate, trip)
                        props.handler(false)
                    }else{
                        changeErrorValue(true, "Cannot add user because they are not a Tripper app user")
                    }
                
                }}>
                Add Trip Mate</button>
                </div>
		</div>
       
	</>);
};

export default AddTripMate;
