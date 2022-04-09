import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './components/UserProvider';
import Main from './components/Main';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/:trip/*' element={<Main />} />
					<Route path='/' element={<Main />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
