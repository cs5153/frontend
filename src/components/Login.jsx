import React, { useState } from 'react';
import mockData, { existingUsers } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'


function getExistingUserMap(){
    console.log(" USERS OBJECT IS: ", mockData.existingUsers)
    var userMap = new Map()
    for (const [key, value] of Object.entries(mockData.existingUsers)) {
    //   console.log(`${key}: ${value}`);
      userMap.set(key,value);
    }
    // let userMap = new Map(JSON.parse(mockData.existingUsers))
    console.log("USER MAP IS: ", userMap)
    return userMap;
}

const Login = (props) => {

    const [state, setState] = useState({
        userName :"",
        password : ""
    })

    function handleClick(userName, password){
        
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
                <div className='inputArea'>
                    <h6>UserName</h6>
                    <input className='inputField' type="text" placeholder='UserName' onChange={(evt) => setState({userName: evt.target.value, password: state.password})}/>
                </div>
                <div className='inputArea'>
                    <h6>Password</h6>
                    <input className='inputField' type="password" placeholder='Password' onChange={(evt) => setState({userName: state.userName, password: evt.target.value})}/>
                </div>
                <div className='inputArea'>
                    <button className='inputField' onClick={() => props.handler(handleClick(state.userName, state.password))}>Login</button>
                </div>

            </div>

        </div>
    </>
    );
};

export default Login;
