import React, { useState } from 'react';
import mockData, { addNewUser, existingUsers } from '../helper/mockData';
import stickmanLogo from '../images/stickmanLogo.png';
import '../css/Login.css'


const LoginStandard = (props) => {

    const [state, setState] = useState({
        didUserSubmit : false
    })

    function getStateCopy(){
        let stateCopy = state
        return stateCopy
    }

    let displayedPage
    if(state.didUserSubmit === false){
        displayedPage = (
            <div className='loginPageContainer'>
            <div className='loginModal'>
                <div>
                    <img className='tripperLogo' src={stickmanLogo} alt="clipart of man with baggage standing next to Tripper logo" />
                </div>
                <div className='inputArea'>
                    <h6>UserName</h6>
                    <input className='inputField' type="text" placeholder='Email' onChange={(evt) => {
                        let copy = getStateCopy();
                        copy.userName = evt.target.value;
                        setState(copy);
                    }}/>
                     <div className='inputArea'>
                    <button className='inputField' onClick={() => {
                        setState({didUserSubmit:true})}}>Send Email</button>
                </div>
                </div>
            </div>
        </div>
        );
    }else if(state.didUserSubmit === true){
        displayedPage = (
            <div className='loginPageContainer'>
                <div className='loginModal'>
                    <div>
                        <img className='tripperLogo' src={stickmanLogo} alt="clipart of man with baggage standing next to Tripper logo" />
                    </div>
                    <h1>Email Sent</h1>
                    <p>If an account is found, we'll send a link to the 
                        email adress provided to reset your password
                    </p>
                    <button className="link" onClick={() => props.viewUpdate(0)}>Back to Login</button>
                </div>
            </div>

        );
    }

	return(
    <>
       {displayedPage}
    </>
    );
};

export default LoginStandard;
