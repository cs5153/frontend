import React from 'react';
import Cookies from 'js-cookie';
import Login from './Login';

const UserProvider = ({ children }) => {
	const user = Cookies.get('username');
	const hash = Cookies.get('hashword');

	if (validateCookieUser(user, hash)) {
		return <>{children}</>;
	}

	return <Login />;
};

function validateCookieUser(user, hash) {
	// TODO: backend request
	return true;
}

export default UserProvider;
