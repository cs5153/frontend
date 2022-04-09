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

export var mockedData = {
 
  existingUsers: {
    "Tony": "stark",
    "Steve":"rogers",
    "Bruce": "banner",
    "Natasha":"romanov",
    "Clint": "barton"
  } ,

  existingUsersData: {
    "tony": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Tony",
      "lastName": "Stark",
      "userName":"Tony",
      "password": "stark",
      "email":"foo@Ironman.com",
      "phone":"210-444-4444"
    },//end of user Tony
    "steve": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Steve",
      "lastName": "Rogers",
      "userName":"Steve",
      "password": "Rogers",
      "email":"foo@CapnAmerica.com",
      "phone":"210-555-5555"
    },//end of user Steve
    "bruce": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Bruce",
      "lastName": "banner",
      "userName":"Bruce",
      "password": "banner",
      "email":"foo@Hulk.com",
      "phone":"210-666-6666"
    },//end of user Bruce
    "natasha": {
      "trips":{
        
      },
      "firstName":"Natasha",
      "lastName": "Romanov",
      "userName":"Natasha",
      "password": "romanov",
      "email":"foo@BlackWidow.com",
      "phone":"210-777-7777"
    }//end of user Natasha
  }//end of existing user data array  
};


export function getDataMap(map){
  console.log(" MOCKDATA:: USERS OBJECT IS: ",map)
  var userMap = new Map()
  for (const [key, value] of Object.entries(map)) {
  //   console.log(`${key}: ${value}`);
    userMap.set(key,value);
  }
  // let userMap = new Map(JSON.parse(mockData.existingUsers))
  console.log(" MOCKDATA:: USER MAP IS: ", userMap)
  return userMap;
}

export function addNewUser(userObj){
  //existingUsers
  let userName = userObj.userName
  mockedData.existingUsers[userName] = userObj.password
  console.log("Mock data is:", mockedData)
  //add user info object
  mockedData.existingUsersData[userName] = userObj

  console.log("MOCK USER OBJ IS: ", mockedData.existingUsersData)
}

export function isUserFieldBlank(obj){
  let hasBlank = false;
  for (const [key, value] of Object.entries(obj)) {
      //   console.log(`${key}: ${value}`);
        console.log("value is :", value)
        hasBlank = (value === '') || (value.trim() === '');
      }
  console.log("Has blank is : ", hasBlank)
  return hasBlank
}

// export function updateTripMemberList(tripObj){
//   let {trip} = useParams();
//   let x = mockData.existingUsersData[jsCookie.get("username")].trips[trip] = tripObj

//   console.log("NEW TRIP OBJ IS: ",x)
// }