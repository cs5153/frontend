import React, { useState } from 'react';
import exitIcon from "../images/x-mark.png";
import '../css/FeatureSpace.css'
import '../css/PersonCard.css'
import '../css/Login.css'
import { mockData, addNewUser } from '../helper/mockData';
import ErrorMessage from './ErrorMessage';

const AddTripMate = (props) => {

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

	let user = props.user
	console.log("PERSON CARD USER IS: ",props.user)
	return (
	<>
		<div className='addModal'>
                {state.hasError && <ErrorMessage message={state.errMessage}/>}
                <div className='inputArea'>
                    <h6>Password</h6>
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
                    let newUser = {
                        "firstName":"foo",
                        "lastName": "bar",
                        "userName":"ufoo",
                        "password": "pbar",
                        "email":"foo@bar.com",
                        "phone":"444-444-4444"
                      }
                    addNewUser(newUser)
                    props.handler(false)
                }}>
                Add Trip Mate</button>
                </div>
		</div>
       
	</>);
};

export default AddTripMate;
