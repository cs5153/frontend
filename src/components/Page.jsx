import React, { useState } from 'react';
import mockData from "../helper/mockData";
import "../css/Page.css";
import Main from "./Main";
import Login from './login/Login';


const Page = () => {

  const [state, setState] = useState({
    isLoggedIn: false
  })

  function handleLogin(loginResults){
    setState({ isLoggedIn: loginResults}) 
  }

  let displayedPage
  if(state.isLoggedIn){
    displayedPage = (
      <div className="pageContainer">
        <Main />
      </div>
    );
  }else{
    displayedPage = (<Login handler={handleLogin}  />);
  }

  return (
    <>
      {displayedPage}
    </>
  );
};

export default Page;
