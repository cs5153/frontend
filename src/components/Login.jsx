import React, { useState } from 'react';
import mockData, { existingUsers } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'
import LoginStandard from './LoginStandard';
import LoginSignup from './LoginSignup';
import LoginForgot from './LoginForgot';


const Login = (props) => {

    const [state, setState] = useState({
        index : 0
    })

    const updateView = (i) => {
            console.log("UPDATE VIEW INDEX TO : ",i)
            setState(
                {
                    index: i      
                })
    }
   
    let displayedPage 
    if(state.index === 0){
        console.log("STATE IN PARENT IS : ",state.index)
        displayedPage = (<LoginStandard handler={props.handler} viewUpdate={updateView}/>);
    }
    else if (state.index === 1){
        console.log("STATE IN PARENT IS : ",state.index)
        displayedPage = (<LoginSignup viewUpdate={updateView}/>);
    }else if (state.index === 2){
        console.log("STATE IN PARENT IS : ",state.index)
        displayedPage = (<LoginForgot viewUpdate={updateView}/>);
    }

	return(
    <>
       {displayedPage}
    </>
    );
};

export default Login;
