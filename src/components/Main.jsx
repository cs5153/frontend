import React, { useEffect } from 'react';
import {
	Routes,
	Route,
	Navigate,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import Cookies from 'js-cookie';
import SidePane from './SidePane';
import Header from './Header';
import People from './People';
import Chat from './Chat';
import List from './List';
import Photo from './Photo';
import Contact from './Contact';

import { mockData } from '../helper/mockData';

const Main = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { trip } = useParams();
	const knownTripNames = retrieveAllTripNames();
	const isValidTrip = knownTripNames.includes(trip);

	useEffect(() => {
		// Prevent unknown trips from showing feature links (e.g., /people).
		if (!isValidTrip && trip && pathname !== trip) {
			navigate(`/${trip}`);
		}
	}, [isValidTrip, pathname, trip]);

	if (isValidTrip) {
		return (
			<Container>
				<Routes>
					<Route path='/people' element={<People />} />
					<Route path='/chat' element={<Chat />} />
					<Route path='/list' element={<List />} />
					<Route path='/photo' element={<Photo />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Navigate to='people' />} />
				</Routes>
			</Container>
		);
	}

	const message = !!trip ? `Trip ${trip} not found.` : 'No trip selected.';
	return (
		<Container>
			<div className='flex-fill d-flex justify-content-center align-items-center'>
				{message}
			</div>
		</Container>
	);
};

const Container = ({ children }) => {
	return (
		<div className='pageContainer'>
			<SidePane />
			<div className='d-flex flex-column w-100'>
				<Header />
				{children}
			</div>
		</div>
	);
};

function retrieveAllTripNames() {
	const user = Cookies.get('username');
	const hash = Cookies.get('hashword');
	// TODO: backend get all trips for user

	return mockData.users[user].trips.map((trip) =>
		mockData.trips[trip].name.toLocaleLowerCase()
	);
}

export default Main;
