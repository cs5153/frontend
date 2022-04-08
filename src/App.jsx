import React, { useState } from 'react';
import SidePane from './components/SidePane';
import Header from './components/Header';
import People from './components/People';
import RedirectTrip from './components/RedirectTrip';
import './App.css';
import UserProvider from './components/UserProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const NoTrip = () => (
	<div className='flex-fill d-flex justify-content-center align-items-center'>
		No trip selected.
	</div>
);

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<div className='pageContainer'>
					<SidePane />
					<div className='d-flex flex-column w-100'>
						<Header />
						<Routes>
							<Route exact path='/:trip/people' element={<People />} />
							<Route path='/:trip/*' element={<RedirectTrip />} />
							<Route path='/' element={<NoTrip />} />
						</Routes>
					</div>
				</div>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
