export var mockData = {
	users: {
		tony: {
			username: 'tony',
			password: 'Stark',
			firstname: 'Tony',
			lastname: 'Stark',
			email: 'foo@Ironman.com',
			phone: '210-444-4444',
			trips: ['001'],
		},
		steve: {
			username: 'steve',
			password: 'Rogers',
			firstname: 'Steve',
			lastname: 'Rogers',
			email: 'foo@CapnAmerica.com',
			phone: '210-555-5555',
			trips: ['001'],
		},
		bruce: {
			username: 'bruce',
			password: 'Banner',
			firstname: 'Bruce',
			lastname: 'Banner',
			email: 'foo@Hulk.com',
			phone: '210-666-6666',
			trips: ['001'],
		},
		natasha: {
			username: 'natasha',
			password: 'Romanov',
			firstname: 'Natasha',
			lastname: 'Romanov',
			email: 'foo@BlackWidow.com',
			phone: '210-777-7777',
			trips: [],
		},
	},
	trips: {
		'001': {
			name: 'Cancun',
			people: ['tony', 'steve', 'bruce'],
			lists: {
				'001': {
					name: "tony's packing list",
					items: ['socks', 'shoes', 'shirt'],
				},
				'002': {
					name: 'general packing list',
					items: ['speaker'],
				},
			},
			albums: {
				'001': {
					name: "Tony's Photos",
					photos: [
						'https://a.cdn-hotels.com/gdcs/production81/d305/dd228943-8b28-443d-bfbb-99599e38b471.jpg',
						'https://a.cdn-hotels.com/gdcs/production81/d305/dd228943-8b28-443d-bfbb-99599e38b471.jpg',
					],
				},
				'002': {
					name: 'Random Photos',
					photos: [
						'https://a.cdn-hotels.com/gdcs/production81/d305/dd228943-8b28-443d-bfbb-99599e38b471.jpg',
						'https://a.cdn-hotels.com/gdcs/production81/d305/dd228943-8b28-443d-bfbb-99599e38b471.jpg',
					],
				},
			},
			chat: [
				{
					sender: 'tony',
					content: 'This trip is going to be a blast!',
					timestamp: 'Fri, 08 Apr 2022 22:27:56 GMT',
				},
				{
					sender: 'steve',
					content: "Can't wait to get on the plane!",
					timestamp: 'Fri, 08 Apr 2022 22:31:00 GMT',
				},
			],
		},
	},
};

export function getDataMap(map) {
	var userMap = new Map();
	for (const [key, value] of Object.entries(map)) {
		userMap.set(key, value);
	}
	return userMap;
}

export function addNewUser(userObj) {
	//existingUsers
	let userName = userObj.userName;
	mockData.existingUsers[userName] = userObj.password;
	//add user info object
	mockData.existingUsersData[userName] = userObj;
}

export function isUserFieldBlank(obj) {
	let hasBlank = false;
	for (const [key, value] of Object.entries(obj)) {
		hasBlank = value === '' || value.trim() === '';
	}
	return hasBlank;
}
