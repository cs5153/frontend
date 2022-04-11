import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import Login from './Login';
import Forgot from './Forgot';
import Signup from './Signup';

import { mockData } from '../helper/mockData';

const alwaysAllowedPaths = ['/login', '/signup', '/forgot'];

const UserProvider = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isValidCookieUser = validateCookieUser();

	useEffect(() => {
		// Set location to login if unknown user or url is restricted.
		if (alwaysAllowedPaths.includes(pathname) === false && !isValidCookieUser) {
			navigate('/login');
		}
	}, [pathname, isValidCookieUser]);

	if (isValidCookieUser) {
		return <>{children}</>;
	}

	Cookies.remove('username');
	Cookies.remove('token');
	Cookies.remove('renewToken');

	if (pathname === '/signup') {
		return <Signup />;
	} else if (pathname === '/forgot') {
		return <Forgot />;
	}
	return <Login />;
};

function validateCookieUser() {
	const user = Cookies.get('username');
	const token = Cookies.get('token');
	const renewToken = Cookies.get('renewToken');

	// TODO: backend request
	return !!mockData.users[user];
}

export default UserProvider;
