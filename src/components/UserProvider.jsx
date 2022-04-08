import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Cookies from 'js-cookie';
import Login from './login/Login';

const UserProvider = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const user = Cookies.get('username');
	const hash = Cookies.get('hashword');
	const isValidUser = validateCookieUser(user, hash);
	
	useEffect(() => {
		if(!isValidUser) {
			navigate('/login');
		}
	}, [isValidUser])


	if (isValidUser || location.pathname === '/login') {
		return <>{children}</>;
	}

	return <></>;
};

function validateCookieUser(user, hash) {
	// TODO: backend request
	return !!user;
}

export default UserProvider;
