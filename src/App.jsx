import React, { useState } from 'react';
import mockData from './helper/mockData';
import SidePane from './components/SidePane';
import Main from './components/Main';
import Login from './components/Login';

const App = () => {
	const [state, setState] = useState({
		isLoggedIn: false,
	});

	function handleLogin(loginResults) {
		setState({ isLoggedIn: loginResults });
	}

	let displayedPage;
	if (state.isLoggedIn) {
		displayedPage = (
			<div className='pageContainer'>
				<SidePane />
				<Main />
			</div>
		);
	} else {
		displayedPage = <Login handler={handleLogin} />;
	}

	return <>{displayedPage}</>;
};

export default App;
