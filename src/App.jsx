import React, { useState } from 'react';
import mockData from './helper/mockData';
import SidePane from './components/SidePane';
import Login from './components/Login';
import Header from './components/Header';
import People from './components/People';
import './App.css';
import UserProvider from './components/UserProvider';

const App = () => {
	return (
		<UserProvider>
			<div className='pageContainer'>
				<SidePane />
				<div className='d-flex flex-column w-100'>
					<Header />
					<People />
				</div>
			</div>
		</UserProvider>
	);
};

export default App;
