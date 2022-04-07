import React, { useState } from 'react';
import mockData, { isUserFieldBlank,getExistingUserMap } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'
import ErrorMessage from './ErrorMessage';


const LoginStandard = (props) => {

    const [state, setState] = useState({
        userObj:{
            userName :"",
            password : ""
        },
        hasError: false,
        errMsg: ""
    });

    function isValidUser(userName, password){
        
        let isUserValid = false
        let isPassValid = false
        let existingUsers = getExistingUserMap()

        if(existingUsers.has(userName)){
            isUserValid = true
           
            if(password === existingUsers.get(userName)){
                isPassValid = true
            }
        }
       
        return isUserValid && isPassValid
    }

	return(
    <>
        <div className='loginPageContainer'>
            <div className='loginModal'>
                <div>
                    <img className='tripperLogo' src={stickmanLogo} alt="clipart of man with baggage standing next to Tripper logo" />
                </div>
                {state.hasError && (<ErrorMessage message={state.errMsg}/>)}
                <div className='inputArea'>
                    <h6>UserName</h6>
                    <input className='inputField' type="text" placeholder='UserName' onChange={(evt) => {
                        let copy = state
                        copy.userObj.userName = evt.target.value
                        setState(copy)
                    }}/>
                </div>
                <div className='inputArea'>
                    <h6>Password</h6>
                    <input className='inputField' type="password" placeholder='Password' onChange={(evt) => {
                        let copy = state
                        copy.userObj.password = evt.target.value
                        setState(copy)
                    }}/>
                </div>
                <div className='inputArea'>
                    <button className='inputField' onClick={() => {
                           if(isUserFieldBlank(state.userObj)){
                            setState({
                                userObj: state.userObj,
                                hasError:true,
                                errMsg: "Please fill out all fields"
                            })
                            }else{
                                if(isValidUser(state.userObj.userName, state.userObj.password)){
                                    props.handler(true)
                                }else{
                                    setState({
                                        userObj: state.userObj,
                                        hasError: true,
                                        errMsg: "Invalid credentials. Your Username or password is incorrect"
                                    })
                                }
                               
                            }
                       
                    }}>
                Login</button>
                </div>
                <button className="link" onClick={() => props.viewUpdate(1)}>Sign Up</button>
                <button className="link" onClick={() => props.viewUpdate(2)}>Forgot Password</button>

            </div>

        </div>
    </>
    );
};

export default LoginStandard;
