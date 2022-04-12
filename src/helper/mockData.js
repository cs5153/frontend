import jsCookie from "js-cookie";


export function initMockData() {
	let myData = jsCookie.get('data');
	
	if(myData) myData = JSON.parse(myData);
	else myData = mockData;
	mockData = myData;

	setInterval( () => {
		jsCookie.set('data', JSON.stringify(mockData));
	}, 100);

}


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
			albums: [
				{
					name: "Tony's Photos",
					photos: [
						'https://picsum.photos/400/400',
						'https://picsum.photos/200/300',
						'https://picsum.photos/300/300',
						'https://picsum.photos/500/500',
						'https://picsum.photos/200/100',
						'https://picsum.photos/250/250',
						
					],
				},
				{
					name: 'Random Photos',
					photos: [
						'https://a.cdn-hotels.com/gdcs/production81/d305/dd228943-8b28-443d-bfbb-99599e38b471.jpg',
					],
				},
			],
			chat: [
				{
					sender: 'tony',
					content: 'This trip is going to be a blast!',
					timestamp:
						'Sat Apr 09 2022 22:28:43 GMT-0500 (Central Daylight Time)',
				},
				{
					sender: 'steve',
					content: "Can't wait to get on the plane!",
					timestamp:
						'Sat Apr 09 2022 22:28:43 GMT-0500 (Central Daylight Time)',
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

export function getFakeResponse(username, trip) {
	const randomMessage =
		fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
	let ppl = mockData.trips[trip].people;
	let randomSender = username;

	while (randomSender === username) {
		randomSender = ppl[Math.floor(Math.random() * ppl.length)];
	}

	let newMessage = {
		sender: randomSender,
		content: randomMessage,
		timestamp: Date(Date.now()),
	};
	return newMessage;
}


export function removePersonFromTrip(userName, tripID){
	console.log("INSIDE REMOVE PERSON FROM TRIP")

	//remove person from trip
	let tripPpl = mockData.trips[tripID].people
	tripPpl.forEach((person, index) => {
		if(person === userName){
			console.log("about to splice person. found match")
			mockData.trips[tripID].people.splice(index, 1)
		}
	})
	//remove tripId from person's tripList
	let personTrips = mockData.users[userName].trips
	personTrips.forEach((trip, index) => {
		if(trip === tripID){
			console.log("about to splice TRIP. found match")
			mockData.users[userName].trips.splice(index, 1)
		}
	})

	if(mockData.trips[tripID].people.length === 0){
		mockData.trips.delete(tripID)
		return {}
	}

	return mockData.trips[tripID]
}

export function removeTrip(tripID){
	let tripPpl = mockData.trips[tripID].people
	tripPpl.forEach((person, index) => {
		removePersonFromTrip(person,tripID)
	})
}

let fakeResponses = [
	'When do we meet for Lunch?',
	'Cant wait to see you guys!',
	"You think we'll see anyone famous while we're there?",
	"Hope we're not too tourist-y",
	'Lets gooooooo!',
];
