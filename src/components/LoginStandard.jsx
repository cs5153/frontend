import React, { useState } from 'react';
import mockData from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'



const Login = (props) => {

    const [state, setState] = useState({
        userName :"",
        password : ""
    })

    function handleClick(userName, password){
        console.log("USER IS : ",userName)
        console.log("Password IS : ",password)
        let isUserValid
        let isPassValid 
        if(mockData.existingUsers.has){
            
        }
    }

	return(
    <>
        <div className='loginPageContainer'>
            <div className='loginModal'>
                <div>
                    <img className='tripperLogo' src={stickmanLogo} alt="clipart of man with baggage standing next to Tripper logo" />
                </div>
                <div className='inputArea'>
                    <h6>UserName</h6>
                    <input className='inputField' type="text" placeholder='UserName' onChange={(evt) => setState({userName: evt.target.value, password: state.password})}/>
                </div>
                <div className='inputArea'>
                    <h6>Password</h6>
                    <input className='inputField' type="password" placeholder='Password' onChange={(evt) => setState({userName: state.userName, password: evt.target.value})}/>
                </div>
                <div className='inputArea'>
                    <button className='inputField' onClick={() => handleClick(state.userName, state.password)}>Login</button>
                </div>

            </div>

        </div>
    </>
    );
};

export default Login;
