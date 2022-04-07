import React, { useState } from 'react';
import mockData, { isUserFieldBlank, addNewUser, existingUsers } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'
import ErrorMessage from './ErrorMessage'


const LoginStandard = (props) => {

    const [state, setState] = useState({
        userObj :{
            userName :"",
            password : "",
            firstName: "",
            lastName: "",
            email:""
        },
        hasError: false
       
    });

    function getStateCopy(){
        let stateCopy = state
        return stateCopy
    }

    let showError = (<div></div>)
    console.log("State err value is: ", state.hasError)
    if(state.hasError === true){
        console.log("UPDATING SHOW ERR")
        showError = <ErrorMessage message="Please fill out all fields"/>
    }

	return(
    <>
        <div className='loginPageContainer'>
            <div className='loginModal'>
                <div>
                    <img className='tripperLogo' src={stickmanLogo} alt="clipart of man with baggage standing next to Tripper logo" />
                </div>
                {showError}
                <div className='inputArea'>
                    <h6>UserName</h6>
                    <input className='inputField' type="text" placeholder='UserName' onChange={(evt) => {
                        let copy = getStateCopy();
                        copy.userObj.userName = evt.target.value;
                        setState(copy);
                    }}/>
                </div>
                <div className='inputArea'>
                    <h6>Password</h6>
                    <input className='inputField' type="password" placeholder='Password' onChange={(evt) => {
                        let copy = getStateCopy();
                        copy.userObj.password = evt.target.value;
                        setState(copy);
                    }}/>
                </div>
                <div className='inputArea'>
                    <h6>First Name</h6>
                    <input className='inputField' type="text" placeholder='First Name' onChange={(evt) =>{
                        let copy = getStateCopy();
                        copy.userObj.firstName = evt.target.value;
                        setState(copy);
                    } }/>
                </div>
                <div className='inputArea'>
                    <h6>Last Name</h6>
                    <input className='inputField' type="text" placeholder='Last Name' onChange={(evt) => {
                        let copy = getStateCopy();
                        copy.userObj.lastName = evt.target.value;
                        setState(copy);
                    }}/>
                </div>
                <div className='inputArea'>
                    <h6>Email</h6>
                    <input className='inputField' type="text" placeholder='Email' onChange={(evt) => {
                        let copy = getStateCopy();
                        copy.userObj.email = evt.target.value;
                        setState(copy);
                        console.log("UPDATED STATE IS: ", state)
                    }}/>
                </div>
                <div className='inputArea'>
                    <button className='inputField' onClick={() => {
                        if(isUserFieldBlank(state.userObj)){
                            console.log("updating err bool")
                            let copy = getStateCopy();
                            copy.hasError = true;
                            setState(copy);
                            console.log("STATE WITH ERR IS : ", state)
                        }else{
                            addNewUser(state.userObj)
                            props.viewUpdate(0)
                        }
                        }}>
                    
                    Sign Up
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};

export default LoginStandard;
