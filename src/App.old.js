import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/Login'
import Photos from './components/pages/Photos'
import Groups from './components/pages/Groups'
import GroupPage from './components/pages/GroupPage'
import Messages from './components/pages/Messages'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import UserProvider from './components/UserProvider'

function App() {
  return (
    <>
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/' element={<Home/>}/>  
            </Routes>
        </UserProvider>
    </BrowserRouter>

    /*
    <Router>
    <Navbar />
      <Routes>
        <Route exact  path='/' element={<Login />}/>
        <Route exact path='/login'  element={<Login />}/>
        <Route exact path='/photos'  element={<Photos />}/>
        <Route exact path='/groups'  element={<Groups />}/>
        <Route exact path='/groupPage'  element={<GroupPage />}/>
        <Route exact path='/messages'  element={<Messages />}/>
        <Route exact path='/contact'  element={<Contact />}/>
      </Routes>
    </Router>
    */
    </>
  );
}

export default App;
