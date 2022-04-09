import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './components/UserProvider';
import RedirectTrip from './components/RedirectTrip';
import SidePane from './components/SidePane';
import Header from './components/Header';
import People from './components/People';
import Chat from './components/Chat';
import List from './components/List';
import Photo from './components/Photo';
import Contact from './components/Contact';
import './App.css';

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
							<Route exact path='/:trip/chat' element={<Chat />} />
							<Route exact path='/:trip/list' element={<List />} />
							<Route exact path='/:trip/photo' element={<Photo />} />
							<Route exact path='/:trip/contact' element={<Contact />} />
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
